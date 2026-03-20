import logo from "../assets/images/logo.png";
import { useEffect , useState } from "react";
import { Link , useLocation, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate(); 
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const handleLogout = () => {
        localStorage.setItem("isLoggedIn" , "false");
        navigate("/login");
        window.location.reload();
    }

    return(
        <>
            <header className="bg-[#fff7fdad] fixed left-0 right-0 top-0 z-[50]">
                <div className="max-w-5xl lg:max-w-7xl px-6 flex items-center space-between mx-auto py-3">
                    <div className="">
                        <img src={logo} className="max-w-[120px]"/>
                    </div>
                    <nav className="ms-auto lg:flex items-center gap-3">
                       
                        {!isLoggedIn && (
                            <>
                            <Link to="/signup">Sign Up</Link>
                            
                            {
                                location.pathname !== "/login" && (
                                    <Link to="/login">Login</Link>
                                )
                            }
                            
                            </>
                        )}

                        
                        {isLoggedIn && (
                            <button onClick={handleLogout}>Logout</button>
                        )}
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