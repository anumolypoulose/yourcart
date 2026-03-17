import {useState} from "react";
import shop2 from "../assets/images/shop2.jpg";
import logo from "../assets/images/logo.png";
import {useNavigate} from "react-router-dom";

function Login(){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if(username === "admin" && password ==="admin"){
            localStorage.setItem("isLoggedIn","true")
            navigate("/");
        }else{
            alert("Enter username and password");
        }
    };
    return(
        <>
           <div className="relative flex items-center justify-center h-[100vh]">
                <img src={shop2} className="w-full h-full object-cover object-top absolute inset-0 top-0"/>
                <div className="py-7 px-7 relative z-[50] max-w-[400px] w-full rounded-lg bg-[#fff]/80">
                    <div className="mb-5 align-center flex justify-center">
                        <img src={logo} className="w-full max-w-[180px]"/>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block mb-2">Enter Username</label>
                            <input type="text" className="p-2 w-full border border-[#ccc] rounded-md" id="userName"
                            placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Enter Username</label>
                            <input type="password" className="p-2 w-full border border-[#ccc] rounded-md" id="passWord"
                            placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="">
                            <button className="py-2 px-6 bg-[#000] text-white rounded-md" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;