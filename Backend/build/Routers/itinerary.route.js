"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itinerary_controller_1 = require("../Controllers/itinerary.controller");
const Route = (0, express_1.Router)();
Route.post("/itinerary", itinerary_controller_1.ItineraryRequest);
Route.get("/itinerary/:id", itinerary_controller_1.getItinerary);
exports.default = Route;
//# sourceMappingURL=itinerary.route.js.map