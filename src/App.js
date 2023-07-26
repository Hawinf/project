import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Portofolio from './pages/Portofolio';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Homepage/> } />
          <Route path='/about' element={<About/> } />
          <Route path='/portofolio' element={<Portofolio />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
