import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Form from "./components/Form.jsx";
// import LandingPage from "./pages/LandingPage.jsx";
// import ItineraryPage from "./pages/ItineraryPage.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {AppContext} from "./components/ContextAPI/ContextApp"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <AppContext.Provider value={{Itinerary:null}}> */}
        {/* <RouterProvider router={router} /> */}
        {/* </AppContext.Provider> */}
        <App/>
    </React.StrictMode>
);
