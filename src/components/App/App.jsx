import styles from './App.module.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { TabContextProvider } from '../../contexts/TabContext';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <TabContextProvider>
        <Main />
      </TabContextProvider>
      <Footer />
    </div>
  );
};

export { App };
