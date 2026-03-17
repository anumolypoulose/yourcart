import logo from "../assets/images/logo.png";
import { Link , useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Header(){
    const location = useLocation();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const isLoginPage = location.pathname === "/login";
    return(
        <>
            <header className="bg-[#fff7fdad] fixed left-0 right-0 top-0 z-[50]">
                <div className="max-w-5xl lg:max-w-7xl px-6 flex items-center space-between mx-auto py-3">
                    <div className="">
                        <img src={logo} className="max-w-[120px]"/>
                    </div>
                    <nav className="ms-auto lg:flex items-center gap-3">
                        { isLoggedIn && <Link className="nav-link block py-3 font-medium">Sign Up</Link>}
                        { !isLoggedIn || !isLoginPage && <Link to="/login" className="nav-link block py-3 font-medium">Login</Link>}
                        { isLoggedIn || !isLoginPage && <Link to="/" className="nav-link block py-3 font-medium">Log Out</Link>}
                    </nav>
                </div>
                <div className="bg-[#ffb38c]">
                    <div className="max-w-5xl lg:max-w-8xl px-6 mx-auto">
                        <nav className="lg:flex items-center justify-between">
                            <Link to="/" className="nav-link block py-3 font-medium">Home</Link>
                            <a href="#" className="nav-link block py-3 font-medium">New Arrivals</a>
                            <a href="#" className="nav-link block py-3 font-medium">Men</a>
                            <a href="#" className="nav-link block py-3 font-medium">Women</a>
                            <a href="#" className="nav-link block py-3 font-medium">Electronics</a>
                            <a href="#" className="nav-link block py-3 font-medium">Accessories</a>
                            <a href="#" className="nav-link block py-3 font-medium">Super Sale</a>
                            <a href="#" className="nav-link block py-3 font-medium">Half Price</a>
                            <a href="#" className="nav-link block py-3 font-medium">Blog</a>
                        </nav>
                        <button className="hidden"></button>
                    </div>
                </div>
            </header>
        </>
)}
export default Header;