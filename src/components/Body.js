import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/userContext";

import Shimmer from "./Shimmer";
const Body = () =>{
    console.log("Body Rendered");
    //const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRest, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    //normal js variable
    //useEffect -> side effect -> data fetching, api call(Call after the comonent is rendered in the dom)
    useEffect( () => {
        fetchData();
    },[]);
    const fetchData = async() =>{
        const data  = await fetch("https://pastebin.com/raw/0QcdEDBL" );
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   /** if(listOfRestaurants.length === 0){
        //Shimmer UI
        return <Shimmer />;
    } */
   //Called custom hook
   const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return ( <h1>🔴 Offline, Please check your internet connection!!</h1>);
    //--set the user name for the logged in user
    //  so whatever we type in the input it will print--
    const {loggedInUser,setUserName} =useContext(userContext);
   //conditional rendering
    return listOfRestaurants.length=== 0?(<Shimmer/>) : (
        <div className="body">  
            <div className=" fliter flex">
                <div className="search m-4 p-4 flex items-center">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(event) =>{
                        setSearchText(event.target.value);
                    }} placeholder="Search" />
                    
                    <button className="px-4 py-2 bg-green-100 m-2 rounded-lg" onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //serchText
                        const data = listOfRestaurants.filter(
                            (res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                            
                        //console.log(data);
                        setFilteredRes(data);
                    }}> Search </button>
                </div>
                <div className="search m-4 p-4">
<                   button className="px-2 py-2 bg-green-200 m-2 rounded-lg" onClick={()=>{
                   const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                   console.log(filteredRestaurants);
                    setFilteredRes(filteredRestaurants);
                }}> Top Rated Restaurant </button>
                </div>
                <div className="search m-4 p-4">
                    <label>UserName:</label>
                    <input className="border border-black p-2" value={loggedInUser} 
                    onChange={(e)=> setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="restaurant-container  flex flex-wrap">
                
                {
                    filteredRest.map((restaurant) => (
                        <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
                      {  /**If the restaurant is promoted label to it  */
                      
                        restaurant.info.avgRating ==4.3 ? <RestaurantCardPromoted resData={restaurant} /> :    
                            <RestaurantCard resData={restaurant} />
                    }
                        </Link>
                    ))
                }
              
            </div>
        </div>
    );
};
export default Body;