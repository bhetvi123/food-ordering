 import React, { lazy, Suspense, useEffect, useState } from "react";
 import ReactDOM from "react-dom/client";//default import
 import Header from "./components/Header";
 import Body from "./components/Body";
 import Body2 from "./body2/Body2";
 import Body3 from "./components/Body3";
 import Error from "./components/Error";
 import Contactme from "./components/Contactme";
 import Aboutme from "./components/Aboutme";
 import ResturenttMenu from "./body2/ResturenttMenu";
 import FoodDetails from "./components/FoodDetails";
 import { createBrowserRouter,RouterProvider,Outlet } from "react-router"; 
 //import Grocery from "./components/Grocery";
 import userContext from "./utils/userContext";
 import { Provider } from "react-redux";
 import appStore from "./redux.slices-stores/appStore";
 import Cart from "./components/Cart"

//main defined
const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
    //authentication
    const[userInfo,setUserInfo]=useState("");
    useEffect(()=>{
        const data={
            name:"Hetvi Barot",
        };
        
    setUserInfo(data.name);
    },[]);
    return(
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </userContext.Provider>
        </Provider>
    );

};
const Homepage = () => {
    return(
        <div className="app">
        <Body />
        <Body2 />
        <Body3 />
 </div>
    );
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
        {
        path:"/contactme",
        element:<Contactme/>, 
        },
        {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading-screen</h1>}><Grocery/></Suspense>, 
        },
        {
        path:"/aboutme",
        element:<Aboutme/>, 
        },

        {
        path:"/",
        element:<Homepage/>, 
        },
     
         {
        path:"/resturenttMenu/:resId", //dynamic path, resId is a placeholder for the actual ID
        element:<ResturenttMenu />, //resId comes from URL parameter, accessed via useParams() in component
        },
        {
        path:"/foodDetails/:foodId", //dynamic path for food items
        element:<FoodDetails />, //foodId comes from URL parameter
        },
        {
        path:"/cart",
        element:<Cart/>, 
        },

        ],
        errorElement:<Error/>
    },
    

]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
