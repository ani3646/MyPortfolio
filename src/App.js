import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
};

export default App;
