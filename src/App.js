import React, { useEffect, useState } from 'react';
import './App.css';
import AccessCard from './components/accessCard';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Navbar from './components/navbar';
import mainBg from './images/bg-curve-mobile.svg';
import mainBgDesk from './images/bg-curve-desktop.svg';

const App=()=> {
  const [isDeskSizeScreen,setSize]=useState(false);

  const setDisplayType=()=>{
    if(window.innerWidth>=900) return setSize(true);
    return setSize(false);
  }
  
  useEffect(()=>setDisplayType(),[]);
  window.addEventListener('resize',setDisplayType);


  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <img className="mainBg" src={isDeskSizeScreen?mainBgDesk:mainBg} alt=""/>
      <Main/>
      <AccessCard/>
      <Footer/>
    </div>
  );
}

export default App;
