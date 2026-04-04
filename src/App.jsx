import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ProductDetails from "./pages/productdetails";
import Header from "./components/header";
import { useState } from "react";
import './App.css';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
          </Routes>
      </BrowserRouter>
   
  )
}

export default App
