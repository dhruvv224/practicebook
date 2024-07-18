import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { MyProvider } from './Context/Context';
function App() {

  return (
    <>
 <MyProvider>

    <Navbar />
    <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </MyProvider>
        
    </>
        
  );
}

export default App;
