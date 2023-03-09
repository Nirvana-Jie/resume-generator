/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right };
};
/**
 * header
 * 默认将内容转为h4
 */
const h = (left = '', right = '') => {
  return { left: `#### ${left}`, right: `#### ${right}` };
};

/**
 * 正文部分
 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏
 * 请自己判断并适应页面尺寸
 */
export default [
  /**
   * 每一个小模块，都有以下几个配置项：
   * title： 顶部名称栏
   * content: 里面的内容，需要注意的是每一条内容都会换行
   */
  {
    title: '实践经历',
    content: [
      /**
       * 文章正文部分
       * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
       */
      p(
        `**重庆邮电大学 · 红岩网校工作站** [Link](https://redrock.team/)`,
        `2020.9 - 至今`,
      ),
      p(
        `隶属校团委的学生互联网组织，成立于2000年，共有成员100余人，拥有 PRD-UI-前后端开发-运营-迭代的完整开发流程。`,
      ),
      p(`*红岩网校工作站 · Web研发部干事<small>（2020.9 - 2021.6）</small>* `),
      p(`*红岩网校工作站 · 前端研发部部长<small>（2022.6 - 至今）</small>* `),
      p(
        `- 主持开发网校若干前端项目，包括短期活动及重邮帮的整体重构，参与*线上维护*，*代码重构*，*项目迁移/部署*。*组织项⽬技术评审*，并编写*项目设计文档*。任职期间，未发生线上重大事故。`,
      ),
      p(
        `- 着力推动部门内开发流程优化与协作规范，在前端研发部独立之后，制定*部门新人须知*，*开发流程*，*CI使用文档*等规范；促成了内部 *CI/CD* 等平台的规范使用以及飞书、Figma等团队协作平台的接入。`,
      ),
      p(
        `- 与此同时，在CI文件重复编写的情景下，结合对Vite的使用与理解，基于Vite创造了[Redrock-cli](https://github.com/Redrock-Fe/redrock-cli)，用于快速生成网校项目模板。 `,
      ),
      p(`**重庆邮电大学 · 极客&勤奋蜂工作室**`, `2020.9 - 至今`),
      p(`在学院实验中心的指导下进行系统设计，网页开发及运营的团队。`),
      p(
        `*极客&勤奋蜂工作室 · 前端方向成员<small>（2020.9 - 2021.6）</small>* `,
      ),
      p(`*极客&勤奋蜂工作室 · 室长<small>（2022.6 - 至今）</small>* `),
      p(
        `- 主要负责整个工作室的开发流程规范以及团队协作，与此同时也着手开发维护学院的实验中心系统。`,
      ),
    ],
  },
  {
    title: '专业能力',
    content: [
      p(
        `- *熟练掌握基本技能。* 熟悉 HTML5、CSS3、ES6+等，会基本的数据结构与算法，使用 Git 进行版本控制和代码托管，Markdown进行文档编写`,
      ),
      p(
        '- *简单了解并实践过前端工程化。* 使用 *Vite* 搭建前端开发环境、使用 *ESLint*、*Prettier* 进行代码格式化。使用 CSS 预处理语言。',
      ),
      p(
        '- *了解基本的代码调试、优化、前端安全。* 了解使用 Chrome devTools 的基本功能、基于 vscode debugger 进行源码调试。了解常见的前端安全隐患及防备措施。',
      ),
      p(
        '- *简单了解后端的基础知识。* 知道 HTTP(S) 协议、DNS 解析相关基础知识，使用过 CDN 服务。写过简单的 NodeJS Server，、配置过简单的 Nginx 服务器（个人博客）。',
      ),
      p(
        '- *了解当下热门的框架。* 简单了解 MVVM 框架，简单了解 React 的基础知识和部分原理。',
      ),
    ],
  },
  {
    title: '项目经历',
    content: [
      p(`**重邮帮**（2022.8-至今）`),
      p(
        `*项目介绍：* ⼀款校园⽣活服务⼩程序，其主要功能有校园活动展示、组织报名、身份有证、抢票等，配有对应后台管理系统。`,
      ),
      p(`*技术栈：* React + Taro + Less + Recoil + React-Router`),
      p(
        `- 主要负责小程序的*账号体系设计*（不接入微信登陆时的逻辑处理），基于refresh-Token实现*无感登陆*`,
      ),
      p(
        `- *抽离公用组件*，增加公共模块复用性，减少后期迭代成本（如Button，toolBox组件）`,
      ),
      p(`*重构使用以来，小程序累计用户量2.55万人*`),

      p(
        `**重邮帮后台管理系统**`,
        `[Preview](https://fe-prod.redrock.cqupt.edu.cn/cqupt-helper-backstage/)`,
      ),
      p(
        `*项目介绍：* 服务于重邮帮小程序的后台统一式管理系统，旨在为重邮帮业务提供稳定的数据支持和调控能力。`,
      ),
      p(`*技术栈：* React + Arco Design + Less + Recoil + React-Router`),
      p(
        `- 设计权限管理方案，*基于 Recoil + React-router 来实现不同账号等级展示不同界面*，同时*基于axios拦截器对接口请求进行保护，减少误操作对于服务器产生的压力*`,
      ),
      p(`- 使用*懒加载技术*配合*权限管理*真正实现*按需加载*`),
      p(
        `- 工程化层面，使用eslint规范代码，在团队合作中使用*husky + lint-staged*规范git Commit `,
      ),
      p(`*上线以来，服务于各学院组织200余人，为前台提供服务2W+次*`),

      p(
        `**美育学分管理后台**`,
        `[Preview](https://fe-prod.redrock.cqupt.edu.cn/aesthetic-credits-backstage/#/login)`,
      ),
      p(`*项目介绍：* 服务于校内师生的美育学分后台管理系统`),
      p(`*技术栈：* React + Arco Design + Less + Recoil + React-Router`),
      p(
        `- 设计权限管理方案，根据等级划分，设计*Grade/Ungrade*字段+*useRoutes*+*Suspense/React.lazy*实现，按照*学院/校组织*进行按钮级别的权限管控（公用组件的多情景复用）`,
      ),
    ],
  },
  {
    title: '个人作品',
    content: [
      h(`[light-vite](https://github.com/Nirvana-Jie/light-vite)`),
      p(
        `结合对于vite的使用及兴趣，使用*monorepo*搭建仓库，简易实现了vite的*插件机制*，*CLI搭建*，*HMR*以及*预构建*等功能`,
      ),
      h(`[Redrock-FE](https://github.com/Redrock-Fe)（Github组织）`),
      p(
        `在任职期间，为网校制作了[Redrock-cli](https://github.com/Redrock-Fe/redrock-cli)（基于create-vite的功能增加）,[qq-bot](https://github.com/Redrock-Fe/qq-bot)（基于oicq的二次封装）等项目`,
      ),
      h(`个人主页·技术博客`),
      p(
        `以[nirvana.cool](www.nirvana.cool)作为个⼈域名，选择 Hexo 作为Framework,为⾃⼰的博客配置了https证书`,
      ),
    ],
  },
];
