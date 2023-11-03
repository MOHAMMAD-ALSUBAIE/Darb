import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Form from "./components/Form.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ItineraryPage from "./pages/ItineraryPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/Itinerary",
        element: <ItineraryPage />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
