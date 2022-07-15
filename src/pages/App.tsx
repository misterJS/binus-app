import { Content } from '../components/content';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles["yfood-app"]}>
      <Header />
      <Sidebar />
      <div  className={styles["yfood-app__wrapper-title-content"]}>
        <div className={styles["yfood-app__wrapper-event"]}>
          <div className={styles["yfood-app__title-event"]}>
            <p>CREATE EVENT</p>
            <img alt="carret-down" src={'/icons/carretDown.svg'} />
          </div>
        </div>

        <div className={styles["yfood-app__wrapper-second-event"]}>
          <div className={styles["yfood-app__title-second-event"]}>
            <p>Some module are hide, check here !</p>
            <img alt="setting-fill" src={'/icons/settingFill.svg'} />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}

export default App;
