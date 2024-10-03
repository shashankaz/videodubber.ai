import Hero from '../Hero/Hero';
import ToggleOptions from '../ToggleOptions/ToggleOptions';
import Works from '../Works/Works';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <ToggleOptions/>
      <Hero />
      <Works />
    </div>
  );
};

export default Home;
