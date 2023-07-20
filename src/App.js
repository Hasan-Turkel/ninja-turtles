

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Crew from './pages/Crew';
import NotFound from './pages/NotFound';
import Mutant from './pages/Mutant';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Footer/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/crew' element={<Crew/>} />
      <Route path='/crew/:id' element={<Mutant/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
