"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItinerary = exports.ItineraryRequest = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// {
//   log: ['query', 'info', 'warn', 'error'],
// }
const axios_1 = __importDefault(require("axios"));
const ItineraryRequest = async (req, res, next) => {
    try {
        let attractions = [];
        let restaurants = [];
        let shopping = [];
        const city = req.body.sanitizeCity.replace(/[^a-zA-Z\s\_]/g, '');
        const arrayData = req.body.arrayData; //it will content clint's desires in his itinerary like [ [ 'Restaurants-0', 'Fast Food' ]
        const startDate = new Date(req.body.date.sanitizeStartDate);
        const endDate = new Date(req.body.date.sanitizeEndDate);
        //@ts-ignore
        if (isNaN(startDate) || isNaN(endDate)) { //this will check if the date is invalid, if not it will throw an error 
            throw {
                message: "Date is invalid",
                status: 422,
            };
        }
        const days = ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        arrayData.forEach((curr) => {
            if (curr[0].includes("Attractions")) {
                attractions.push(curr[1]);
            }
            else if (curr[0].includes("Restaurants")) {
                restaurants.push(curr[1]);
            }
            else if (curr[0].includes("Shopping")) {
                shopping.push(curr[1]);
            }
        });
        const response = await axios_1.default.post(`https://fastapi-production-c2d8.up.railway.app/itinerary?city=${city}&&days=${days}`, {
            attractions,
            restaurants,
            shopping
        });
        const itineraryArray = Object.values(response.data);
        console.log(itineraryArray);
        const userID = req.session.userID || null;
        const [itineraryDays, descriptionOFcity] = itineraryArray;
        //async function getData(){
        console.log(itineraryDays);
        const itinerariesTable = await prisma.itineraries.create({
            data: {
                userID: userID,
                //@ts-ignore
                citydescription: descriptionOFcity
            }
        });
        const itineraryID = itinerariesTable.id;
        const itineraryDaysValues = Object.values(itineraryDays);
        //@ts-ignore
        // ... your existing code ...
        //do for over the days of itinerary
        try {
            for (const [key, value] of Object.entries(itineraryDays)) {
                //@ts-ignore
                //@ts-ignore
                //every day have its activites we will store each activity in row in itinerary table
                value.forEach(async (element, i) => {
                    //@ts-ignore
                    const itineraryTable = await prisma.itinerary.create({
                        //@ts-ignore
                        data: {
                            name: element.name,
                            description: element.description,
                            bannerImage: element.bannerImage[0],
                            slugCategoryPOI: element.slugCategoryPOI,
                            slugCity: element.slugCity,
                            location: element.location,
                            day: key,
                            itineraryID: itineraryID
                            //@ts-ignore
                            //  ...values
                            //@ts-ignore
                            // userID:itineraryID,
                        }
                    });
                });
            }
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
        //}
        //getData()
        return res.status(200).json({ id: itineraryID, itinerary: { "itineraryDays": itineraryDaysValues, "ItineraryDescription": descriptionOFcity, city: itineraryDaysValues[0][0].slugCity } });
    }
    catch (error) {
        console.log(error);
        if (error.status == 422) {
            return res.status(422).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: error.message });
        }
    }
    finally {
        prisma.$disconnect();
    }
};
exports.ItineraryRequest = ItineraryRequest;
const getItinerary = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Itineraries = await prisma.itineraries.findMany({
            where: {
                id: id,
            },
            include: {
                Itinerary: {
                    orderBy: {
                        day: "asc"
                    }
                },
            },
        });
        const ItinerariesDays = Itineraries[0].Itinerary;
        const citydescription = Itineraries[0].citydescription;
        //@ts-ignore
        let finalArray = {};
        ItinerariesDays.forEach((element, i) => {
            finalArray[element.day] = [];
            ItinerariesDays.forEach((curr, index) => {
                if (curr.day === element.day) {
                    finalArray[element.day].push(curr);
                    // shallowCopyItinerariesDays.splice(i+1,1)
                }
            });
        });
        const city = finalArray['Day 1'][0].slugCity;
        res.status(200).json({ massage: "success", data: { finalArray, citydescription, city } });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    finally {
        prisma.$disconnect();
    }
};
exports.getItinerary = getItinerary;
//upeer loop that go throght all elemments
//insed this loop will be two things create new poroprt call day[number] 
//and insed loop that check if active beloning the day in itiration or not if it belon add to array of day[number] the remove it
//# sourceMappingURL=itinerary.controller.js.map