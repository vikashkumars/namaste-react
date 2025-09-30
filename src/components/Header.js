import { LOGO_URL } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/userContext";
import {useSelector} from "react-redux";

const Header = () => {
  //const btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);
  //Subcribing to the store using a Selection(its a hook)
  // it will subscribes the store cart items and whenever my cart items will modify it will modify here
  const cartItems =useSelector((store)=> store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg px-4 sm:bg-yellow-50 lg:bg-green-600 ">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
            online status: {onlineStatus? "✅ Online" : "🔴 Offline"}    
        </li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
             <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4 font-bold"> 
            <Link to="/cart">Cart- ({cartItems.length} items )</Link> 
          </li>
          <li className="px-4 font-bold">
           {loggedInUser} 
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
