import {useState, useEffect} from "react";

const User = (props) =>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    // To call a field that is passed from about component as an parameter, we use props.name
    useEffect (() =>{
        //API call
        console.log("useEffect");
        const timer = setInterval(() =>{
            console.log("Namste React OP");
        },1000);
        return () =>{
            // cleanup or ComponentWillUnMount from the class(Its called when the component is removed from the DOM)
            clearInterval(timer);
            console.log("useEffect return");

        }

    },[]);
    console.log("User Rendered");
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h1> Name : {props.name}</h1>
            <h2>Location : Bangalore</h2>
            <h3>Contact : 9999999999</h3>
            <h4> Email :Vks03@gmail.com</h4>
        </div>
    );
};
export default User;