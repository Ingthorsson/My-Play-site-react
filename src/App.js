import './App.css';
// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import axios from 'axios';
import Header from "./components/Header";
import Home from './views/Home';
import Giphy from './views/Giphy';
import Messages from './views/Messages';

function App() {

  return (
    <Router>
    <div className='App'>
    <Header />
      <div className='container'>
        <div className='wrapper'>
          <div className='home'>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/giphy' element={<Giphy/>} />
              <Route exact path='/messages' element={<Messages/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
