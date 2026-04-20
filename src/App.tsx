import CompanyHeader from './components/CompanyHeader';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';

import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <CompanyHeader />
      <Navigation />
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/menu" element=<Menu/> />
        <Route path="/about" element=<About/> />
      </Routes>
    </>
  )
}

export default App
