import { SliderContextProvider } from '../../../contexts/SliderContext';
import Slider from '../Slider/Slider';
import TabBar from '../TabBar/TabBar';

import styles from './ProgressBar.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element for the ProgressBar
 */
const ProgressBar = () => {
  return (
    <section className={`${styles.sliderContainer} container`}>
      <TabBar />
      <SliderContextProvider>
        <Slider />
      </SliderContextProvider>
    </section>
  );
};

export default ProgressBar;
