import React from 'react';
import './app.css';
import { Footer,Header,Features,Blog,Posibillity,WhatGPT, } from './containers';
import { CTA,Brands,Navbar } from './components/index.js';

const App = () => {
  return (
    <>  
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands/>
      <WhatGPT/>
      <Features/>
      <Posibillity/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
    </>
  );
}

export default App