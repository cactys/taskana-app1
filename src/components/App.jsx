import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const App = () => {
  return (
    <div className="container">
      <div className="weatherApp-content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
