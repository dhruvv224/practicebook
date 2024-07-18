import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
     
  );
}

export default App;
