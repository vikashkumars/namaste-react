import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


//Chunking
//Code of splitting
//Dynamic building of JS code
//Lazy loading of code
//Dynamic importing of code
/**
 * Lazy is called from react and () callback function is called which will import the component
 */
const Grocery = lazy(()=> import("./components/Grocery"));

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
  return (
    <div className="app">
      <Header />
      {/** if path = / <Body> */}
      {/**if path =/about =/About */}
      {/**if path =/contact-us =/Contact*/}
      <Outlet />
    </div>
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
        element: <Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);// react component calling
root.render(<RouterProvider router={appRouter} />);
