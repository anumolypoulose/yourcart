import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Header from "./components/header";
import { useState } from "react";
import './App.css';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
    </>
  )
}

export default App
