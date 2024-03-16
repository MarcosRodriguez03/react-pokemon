import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from './Components/Pages/HomePageComponent';




function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
        </Routes>
      </BrowserRouter>

    </>




  );
}

export default App;
