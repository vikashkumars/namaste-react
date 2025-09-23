import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    // how to read a dynamic URL params
    const { resId } = useParams();
    useEffect(() =>{
        fetchMenu();
    },[]);
    const [resInfo,setResInfo] = useState(null);
    const fetchMenu = async()=>{
        
        const data  = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=38.34670&lng=-121.95190&restaurantId="+resId);
        const json = await data.json();
        //console.log(json.data);
        setResInfo(json.data);
    };
if( resInfo ===null) return <Shimmer/>;
   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info??{};
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);
    return(
        <div className="menu">  
            
            <h1> Restaurant Name: {name}</h1>
            <h2> Cusines: {cuisines.join(",")}</h2>
            <h3> Cost for two: {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name}={item.card.info.category} </li> )}
                
                <li>Burger</li>
                <li>French Fries</li>
                <li>Coke</li>
            </ul>
         </div>
    );
};
export default RestaurantMenu;