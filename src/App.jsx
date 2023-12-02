import { useState } from "react";
import "./App.css";

import Form from "./components/Form.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ItineraryPage from "./pages/ItineraryPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AppContext} from "./components/ContextAPI/ContextApp"
import "./index.css";


 
function App() {
    const [Itinerary,setItinerary]=useState(null)
    
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
       
    },
    {
        path: "/Itinerary",
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
   
]);
    return <>
    <AppContext.Provider value={{Itinerary,setItinerary}}>
    <RouterProvider router={router}/>
    </AppContext.Provider>
    </>
}

export default App;
