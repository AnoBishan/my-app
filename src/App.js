import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/signup';
import './App.css';
function App() {
  return (
    <div className="app">
 <Routes>
  <Route path="/">
   <Route index element={<Home />} /> 
   <Route path="signup" element={<Signup /> } />
   <Route path="login" element={<Login /> } />
  </Route>
 </Routes>
    </div>
  )
}

export default App;
