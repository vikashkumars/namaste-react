import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../Utils/mockData";
const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    //normal js variable
    
    return (
        <div className="body">  
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   const filteredRestaurants = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                    setListOfRestaurants(filteredRestaurants);
                }}> Top Rated Restaurant </button>
            </div>
            <div className="restaurant-container">
                
                {
                    listOfRestaurants.map((restaurant) => (
                         <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
              
            </div>
        </div>
    );
};
export default Body;