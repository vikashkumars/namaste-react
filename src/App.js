import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./Utils/userContext";
import {Provider} from "react-redux"; 
import appStore from "./Utils/appstore";
import Cart from "./components/Cart";

//Chunking
//Code of splitting
//Dynamic building of JS code
//Lazy loading of code
//Dynamic importing of code
/**
 * Lazy is called from react and () callback function is called which will import the component
 */
const Grocery = lazy(() => import("./components/Grocery"));

const RestaurantCard = (props) => {
  const { resData } = props; // destructuring
  const { name, cuisines, costForTwoString, cloudinaryImageId } = resData?.data;
  return (
    <div className="restaurant-card">
      <img
        className="rest-logo"
        alt="rest-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3> {name}</h3>
      <h4> {cuisines.join(",")}</h4>
      <h4> {costForTwoString}</h4>
      <h4> 30 mins</h4>
    </div>
  );
};
const AppLayout = () => {
  //Authentication
  const [userName, setUserName] = useState("");
  useEffect(() => {
    //Api call
    const data = {
      name: "Vikash",
    };
    setUserName(data.name);
  }, []);
  return (
   // {/**We have wrapped the whole app for the updated userName
   //  so default value will be overidden */}
   //if we want to fix the scope to only header component 
   // then updated username will visible 
   //Outside userContext has default value
   <Provider store={appStore}>
    <userContext.Provider value={{ loggedInUser: userName,setUserName }}>
      {/** userContext has Vikash value*/}
      
      <div className="app">
         {/**<userContext.Provider value={{ loggedInUser: "Arvika" }}>*/}
          {/** userContext has Arvika value*/}
            <Header />
         { /**</userContext.Provider>*/}
                  
        {/** if path = / <Body> */}
        {/**if path =/about =/About */}
        {/**if path =/contact-us =/Contact*/}
        <Outlet />
      </div>
    </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      ,
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path : "/cart",
        element : <Cart/>
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);// react component calling
root.render(<RouterProvider router={appRouter} />);
