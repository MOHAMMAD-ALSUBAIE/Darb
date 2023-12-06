import { useState } from "react";
import "./App.css";

import Form from "./components/Form.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ItineraryPage from "./pages/ItineraryPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FavoriteListPage from "./pages/FavoriteListPage.jsx"
import { createBrowserRouter, RouterProvider,useNavigate } from "react-router-dom";
import {AppContext} from "./components/ContextAPI/ContextApp"
import "./index.css";
import isAuth from "./functions/IsAuth.jsx";
import axios from "axios";
//import "primereact/resources/themes/lara-light-cyan/theme.css";


 
function App() {
    const [Itinerary,setItinerary]=useState(null)
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
  
       
    },
    {
        path: "/Itinerary/:id",
        element: <ItineraryPage />,
    },
    {
        path: "/Login",
        element: <Login />,
     
    },
    {
        path: "/Register",
        element: <Register />,
       
    },
    {
        path: "/favoriteList",
        element: <FavoriteListPage />,
      
    },
   


]);
    return <>
  {/* <PrimeReactProvider value={{ unstyled: true, pt: {} }}> */}

    <AppContext.Provider value={{Itinerary,setItinerary}}>
    <RouterProvider router={router}/>
    </AppContext.Provider>
    {/* </PrimeReactProvider> */}

    </>
}

export default App;
