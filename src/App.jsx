// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css'; 
import Home from './components/Home/home';
import Intro_page from './components/Intro Page/intro_page';
import { ToastContainer } from 'react-toastify';

export default function App() {

  const[home,setHome]=useState(0)

  console.log(home)

  return (
    <>
    <div className="app-overall">
    <ToastContainer theme='dark' position="top-center"autoClose={2000} />
    {home == 0 ? <Intro_page setHome={setHome} />:<Home />}
    </div>
    </>
  )
}


