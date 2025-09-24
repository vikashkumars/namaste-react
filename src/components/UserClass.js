import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        //console.log("Child - UserClass Constructor");
        /// To call a field that is passed from about component, we use super(props)
        // create state here
        // this.state = {
        //     userInfo : {
        //         name : "Dummy Name",   
        //         location : "Dummy Location"
        //     }
        // };
        this.state={
            count:0,
            userInfo : {
                login : "Dummy Name",
                location : "Dummy Location",
                avatar_url : "Https://dummyimage.com/600x400/000/fff",
            }
            
        } ;

    }
    async componentDidMount(){
        // best place to make an API call
       // console.log("Child - UserClass Component Did Mount"); 
        const data = await fetch("https://api.github.com/users/vikashkumars");
        const json = await data .json();
        console.log(json);
        this.setState({
            userInfo : json
        });
    }
    componentDidUpdate(){
        //console.log("Child - UserClass Component Did Update");
    }
    componentWillUnmount(){
        // best place to do cleanup
       // console.log("Child - UserClass Component Will Unmount");
    }
    render(){
        //console.log("Child - UserClass Render");
        //const {name, location} = this.props;
        // {this.props.name}
        const{count,count2} = this.state;
        //{this.state.count}
        return (
             <div className="user-card">
                <h1> Name : {this.state.userInfo.login}</h1>
                <img src={this.state.userInfo.avatar_url} alt="avatar"/>
                <h1>Count = {count}</h1>
                <button onClick={()=>{
                    // never update directly don't this -> this.state.count = this.state.count+1;
                    this.setState({
                        count: this.state.count+1
                    });
                }}> Count increase  </button>
               
            </div>
        );
    }
}
export default UserClass;