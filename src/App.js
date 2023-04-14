import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import Home from "./Home.js"
import {Navigation} from "./Navigation.js"
import './App.css';



function App() {
  return (

    <div className='bg-dark'>
      <Navigation/>
      <Home/>
      {/* <div className='text-center'>
        {data ? <p>Name: {data.name}</p> : 'Loading...'}
      </div>
      <div className='text-center'>
        {data ? <pre>{JSON.stringify(data, null, 1)}</pre> : 'Loading...'}
      </div> */}
    </div>
  );
}

export default App;
