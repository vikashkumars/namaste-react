import {CDN_URL} from "../Utils/constants";
const RestaurantCard = (props) => {
   const {resData} = props; // destructuring
   const{name,cuisines,costForTwoString,cloudinaryImageId,avgRating} = resData?.info;
    return (
        <div className="m-4 p-4 w-[200px] flex flex-col  shadow-lg rounded-lg hover:bg-gray-500">
            
            <img className="rounded-lg" alt="rest-logo" src={CDN_URL+cloudinaryImageId }/>
            <h3 className="font-bold py-4"> {name}</h3>
            <h4> {cuisines.join(",")}</h4>
            <h4> {costForTwoString}</h4>
            <h4> {avgRating}</h4>
         </div> 
    );
};
export default RestaurantCard; 