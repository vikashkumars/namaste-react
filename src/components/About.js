import User from "./User";
import UserClass from "./UserClass"
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent - About Constructor");
    }
    componentDidMount(){
        // best place to make an API call
        //console.log("Parent - About Component Did Mount");       
    }
    render(){
        //console.log("Parent - About Render");
        return(
            <div>
                
            <h1>About Us Page</h1>
            {
            // Funcational component <User  name={"Vikash Kumar (funcation)"}/>
            }
            <User />
            <UserClass name={"Vikash here (Class)"} location ={"Bokaro (Class)"}/>
        </div>
        );
    }
}
{/**
    const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            {
            // Funcational component <User  name={"Vikash Kumar (funcation)"}/>
            }
            <UserClass name={"Vikash here (Class)"} location ={"Bokaro (Class)"}/>
        </div>
    );
}
    
    */}

export default About;