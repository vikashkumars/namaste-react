import {CDN_URL} from "../Utils/constants";
const RestaurantCard = (props) => {
   const {resData} = props; // destructuring
   const{name,cuisines,costForTwoString,cloudinaryImageId,avgRating} = resData?.info;
    return (
        <div className="restaurant-card">
            
            <img className="rest-logo" alt="rest-logo" src={CDN_URL+cloudinaryImageId }/>
            <h3> {name}</h3>
            <h4> {cuisines.join(",")}</h4>
            <h4> {costForTwoString}</h4>
            <h4> {avgRating}</h4>
         </div> 
    );
};
export default RestaurantCard; 