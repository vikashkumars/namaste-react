import { useContext } from "react";
import {CDN_URL} from "../Utils/constants";
import userContext from "../Utils/userContext";
const RestaurantCard = (props) => {
   const {resData} = props; // destructuring
   //clearconsole.log(resData);
   const{name,cuisines,costForTwoString,cloudinaryImageId,avgRating} = resData?.info;
   const {loggedInUser} = useContext(userContext);
   return (
        <div data-testid="resCard" className="m-4 p-4 w-[200px] flex flex-col  shadow-lg rounded-lg hover:bg-gray-500">
            
            <img className="rounded-lg" alt="rest-logo" src={CDN_URL+cloudinaryImageId }/>
            <h3 className="font-bold py-4"> {name}</h3>
            <h4> {cuisines.join(",")}</h4>
            <h4> {costForTwoString}</h4>
            <h4> {avgRating}</h4>
            <h4 className="font-bold">User: {loggedInUser}</h4>
         </div> 
    );
};

//Higher order component
//Input -RestaurantCard => Output - RestaurantCard with promoted label
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div> 
                <label className="absolute bg-black text-white rounded-lg  m-2 p-2">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;