import {Router} from "express"
import { ItineraryRequest ,getItinerary} from "../Controllers/itinerary.controller"
const Route=Router()

Route.post("/itinerary",ItineraryRequest)
Route.get("/itinerary/:id",getItinerary)

export default Route