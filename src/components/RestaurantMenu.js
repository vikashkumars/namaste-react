import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
   const[showIndex, setShowIndex] = useState(0);
  // how to read a dynamic URL params
  const { resId } = useParams();
  //Custom hook to fetch restaurant menu
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info ?? {};
    
  //const { itemCards } =
   // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //filer the categored for the item 
  const categories = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
 //console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg"> Cusines: {cuisines.join(",")}</h2>
      <h3> Cost for two: {costForTwoMessage}</h3>
      {/** category accordions */}
      {
      categories.map((category,index)=>(
        //controlled component showItems={index ===0?true:false}/> one item show and not others
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
        showItems={index ===showIndex?true:false}
        setShowIndex ={()=>setShowIndex(index)} /** ex: passing a state deom parent to child using function is a indirect way and there is no direct way*/ 
        />
      ))} 
    </div>
  );
};
export default RestaurantMenu;
