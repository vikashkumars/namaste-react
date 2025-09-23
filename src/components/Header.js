import {LOGO_URL} from "../Utils/constants";  
import { useState } from "react";   
import {Link} from "react-router-dom";

const Header = () => {
    //const btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                      <Link to="/about"> About Us</Link>   
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link> 
                        </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    <button className="login-btn" onClick={() =>{
                       btnNameReact =="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;