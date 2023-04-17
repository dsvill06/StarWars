import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactDOM } from 'react';
import Home from './Home.js'
import {Navigation} from "./Navigation.js"
import Information from "./Information.js"

export default function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route path='/about' state={{ from: "home" }} element={<Information/>} />
        </Routes>
      </Router>
      
    </div>
  );
}
