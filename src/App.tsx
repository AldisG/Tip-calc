import './App.scss';
import { motion } from 'framer-motion';
import Calculator from './components/Calculator';
import Logo from './components/Logo';

const fadeInOnLoad = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  return (
    <motion.div
      variants={fadeInOnLoad}
      initial={fadeInOnLoad.start}
      animate={fadeInOnLoad.end}
      className="App"
    >
      <Logo />
      <Calculator />
    </motion.div>
  );
};

export default App;
