// import { Footer } from "../components/Footer";
import { useAppContext } from '../Context';
import { OptionConfig, HeaderConfig } from '@/config/index';
import styles from './main.module.less';

const Main = () => {
  const { name, setName } = useAppContext();

  return (
    <div className={styles['main-container']}>
      <h1 className="test">{HeaderConfig.name}</h1>
      <h1>{HeaderConfig.name}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Main;
