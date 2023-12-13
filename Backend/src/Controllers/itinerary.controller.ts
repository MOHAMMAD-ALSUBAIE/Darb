import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import axios from "axios";

export const ItineraryRequest = async (req: any, res: any, next: any) => {
 try {
  let attractions = [];
  let restaurants = [];
  let shopping = [];
  const datePattern=/[^0-9\/\-]/g
  const city=req.body.sanitizeCity.replace(/[^a-zA-Z\s\_]/g, '')
  const arrayData=req.body.arrayData
  const startDate =new Date(req.body.date.sanitizeStartDate.replace(datePattern, '')).getTime();
  const endDate=new Date(req.body.date.sanitizeEndDate.replace(datePattern, '')).getTime()

  const days= ((endDate-startDate)/(1000*60*60*24))+1
 
  arrayData.forEach((curr) => {
    if (curr[0].includes("Attractions")) {
      attractions.push(curr[1]);
     } else if (curr[0].includes("Restaurants")) {
      restaurants.push(curr[1]);
    }  else if (curr[0].includes("Shopping")) {
      shopping.push(curr[1]);
    }
  });
 
    const response= await  axios.post(`https://fastapi-production-c2d8.up.railway.app/itinerary?city=${city}&&days=${days}`,{
      attractions,
      restaurants,
      shopping
    })
    const itineraryArray=Object.values(response.data)
    const userID=req.session.userID||null
    const [itineraryDays,descriptionOFcity]=itineraryArray
    //async function getData(){
     
     
    const itinerariesTable= await prisma.itineraries.create({
      data:{
          userID:userID,
            //@ts-ignore

            citydescription:descriptionOFcity
      }

    })
   const itineraryID=itinerariesTable.id
   const itineraryDaysValues= Object.values(itineraryDays)
    //@ts-ignore

  
for( const [key,value] of Object.entries(itineraryDays)){
  //@ts-ignore

  //@ts-ignore

value.forEach(async (element,i) => {

      //@ts-ignore
const itineraryTable= await prisma.itinerary.create({
          //@ts-ignore

    data:{
       name:element.name,
       description:element.description,
       bannerImage:element.bannerImage[0],
       slugCategoryPOI:element.slugCategoryPOI,
       slugCity:element.slugCity,
       location:element.location,
       day:key,
       itineraryID:itineraryID
           //@ts-ignore

  //  ...values
   //@ts-ignore

    // userID:itineraryID,
    }



  })
});

}
//}
//getData()


  return res.status(200).json({ id: itineraryID,itinerary:{"itineraryDays":itineraryDaysValues,"ItineraryDescription":descriptionOFcity,city:itineraryDaysValues[0][0].slugCity} });
 } catch (error) {
  res.status(500).json({ message: error.message });
 }finally{
  prisma.$disconnect()

}
};

export const getItinerary = async (req: any, res: any, next: any) => {
  try {
    const id=req.params.id
    const Itineraries = await prisma.itineraries.findMany({
       where:{
        id:id,
        
       },
       include:{
        Itinerary:{
          orderBy: {
            day: "asc"
          }
        },
       
       },
      
    })

    const ItinerariesDays=Itineraries[0].Itinerary
    const citydescription=Itineraries[0].citydescription
                 //@ts-ignore
let finalArray={}
    ItinerariesDays.forEach((element,i) => {
      finalArray[element.day]=[]
      ItinerariesDays.forEach((curr,index) => {
        if(curr.day===element.day){
          finalArray[element.day].push(curr)
        // shallowCopyItinerariesDays.splice(i+1,1)
        }
      })
      
    });
    const city=finalArray['Day 1'][0].slugCity
    res.status(200).json({massage:"success",data:{finalArray,citydescription,city}});
  } catch (error) {

    res.status(500).json({ message: error.message });
  }finally{
    prisma.$disconnect()

  }
}


//upeer loop that go throght all elemments
//insed this loop will be two things create new poroprt call day[number] 
//and insed loop that check if active beloning the day in itiration or not if it belon add to array of day[number] the remove it