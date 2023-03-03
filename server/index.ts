import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

//获取当前目录名
const _dirname = path.dirname(fileURLToPath(import.meta.url));

//判断是否是测试文件
const isTest: string | undefined = process.env.VITEST;

process.env.OWN_CUSTOM_SECRET = "API_KEY_Nirvana";

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production",
  hmrPort?: number
) {
  const resolve = (p: string) => {
    return path.resolve(__dirname, p);
  };
  const indexProd = isProd
    ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
    : "";
  //创建服务器
  const app = express();
  let vite:any;
  if (!isProd) {
    vite = (await import("vite")).createServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
            port: hmrPort,
        }
      },
      appType: 'custom'
    });
    app.use((await vite).middlewares);
  }else {
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      }),
    )
  }

  app.use('*', async (req,res)=> {
    try{
        const url = req.originalUrl;
        let template, render;
        if (!isProd) {
          // always read fresh template in dev
          template = fs.readFileSync(resolve('index.html'), 'utf-8');
          template = await vite.transformIndexHtml(url, template);
          render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
        } else {
          template = indexProd;
          // @ts-ignore
          render = (await import('./dist/server/entry-server.js')).render;
        }
    
        const context:Record<string, any> = {};
        const appHtml = render(url, context);
    
        if (context.url) {
          // Somewhere a `<Redirect>` was rendered
          return res.redirect(301, context.url);
        }
        const html:string = template.replace(`<!--app-html-->`, appHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    }catch(e:any) {
        !isProd && vite.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
    }
  })
  return { app, vite }
}

if(!isTest) {
    createServer().then(({app}) => {
         app.listen(5175, () => {
            console.log('http://localhost:5175')
         })
    })
}
