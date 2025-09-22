import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../Utils/mockData";
import Shimmer from "./Shimmer";
const Body = () =>{
    console.log("Body Rendered");
    //const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRest, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    //normal js variable
    //useEffect -> side effect -> data fetching, api call(Call after the comonent is rendered in the dom)
    useEffect( () => {
        fetchData();
    },[]);
    const fetchData = async() =>{
        const data  = await fetch("https://pastebin.com/raw/0QcdEDBL" );
        const json = await data.json();
       
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   /** if(listOfRestaurants.length === 0){
        //Shimmer UI
        return <Shimmer />;
    } */
   //conditional rendering
    return listOfRestaurants.length=== 0?(<Shimmer/>) : (
        <div className="body">  
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="search-box" value={searchText} onChange={(event) =>{
                        setSearchText(event.target.value);
                    }} placeholder="Search" />
                    <button className="search-btn" onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //serchText
                        const data = listOfRestaurants.filter(
                            (res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                            
                        console.log(data);
                        setFilteredRes(data);
                    }}> Search </button>
                </div>
                <button className="filter-btn" onClick={()=>{
                   const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                   console.log(filteredRestaurants);
                    setFilteredRes(filteredRestaurants);
                }}> Top Rated Restaurant </button>
            </div>
            <div className="restaurant-container">
                
                {
                    filteredRest.map((restaurant) => (
                         <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
              
            </div>
        </div>
    );
};
export default Body;