import RestaurantCard,{withPromotedLabel} from "../RestaurantCard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import {render,screen } from "@testing-library/react";
it("Should render RestaurantCard component with props Data",()=>{
    render(<RestaurantCard resData={Mock_Data}/>);
   const name = screen.getByText("Pizza Hut");
   expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label",()=>{
   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={Mock_Data}/>);
    const PromotedLabel = screen.getByText("Promoted");
    //console.log(PromotedLabel);
    expect(PromotedLabel).toBeInTheDocument();
});