import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Cart from './pages/cart';

function App() { 
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
          <Routes >
              <Route path={"/"} element={<Home />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/catalog"} element={<Catalog />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
