import {Router} from "express"
import { ItineraryRequest } from "../Controllers/itinerary.controller"
const Route=Router()

Route.post("/itinerary",ItineraryRequest)

export default Route