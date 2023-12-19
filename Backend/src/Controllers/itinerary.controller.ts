import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// {
//   log: ['query', 'info', 'warn', 'error'],

// }
import axios from "axios";

export const ItineraryRequest = async (req: any, res: any, next: any) => {
 try {
  let attractions = [];
  let restaurants = [];
  let shopping = [];
  const AllowedAttractions = [
    "Family & Kids",
    "Amusement Parks",
    "Cultural & Historical",
    "Iconic Landmarks",
    "Parks",
    "Nature & wildlife",
  ];

  const AllowedRestaurants = [
    "Fast Food",
    "Bakery & Cafe",
    "Specialty Coffee",
    "Saudi Traditional dishes",
    "Fine Dining",
    "Seafood",
  ];
  const AllowedShopping = ["Traditional Markets", "Malls"];
  const city=req.body.sanitizeCity.replace(/[^a-zA-Z\s\_]/g, '')
  const arrayData=req.body.arrayData //it will content clint's desires in his itinerary like [ [ 'Restaurants-0', 'Fast Food' ]
  const startDate =new Date(req.body.date.sanitizeStartDate);
  const endDate=new Date(req.body.date.sanitizeEndDate)
//@ts-ignore
  if(isNaN(startDate) || isNaN(endDate) ){//this will check if the date is invalid, if not it will throw an error 
    throw {
      message: "Date is invalid",
      status: 422,
    };    
  }
  const days= ((endDate.getTime()-startDate.getTime())/(1000*60*60*24))+1
 
  arrayData.forEach((curr) => {
    if (curr[0].includes("Attractions") && AllowedAttractions.includes(curr[1])) {
      attractions.push(curr[1]);
     } else if (curr[0].includes("Restaurants") &&AllowedRestaurants.includes(curr[1])) {
      restaurants.push(curr[1]);
    }  else if (curr[0].includes("Shopping")&& AllowedShopping.includes(curr[1])) {
      shopping.push(curr[1]);
    }
  });

   const data= await postToItineraryModel({attractions:attractions,restaurants:restaurants,shopping:shopping},days,city)
    const itineraryArray=Object.values(data)
    const userID=req.session.userID||null
    const [itineraryDays,descriptionOFcity]=itineraryArray

     
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


    // ... your existing code ...
    
    //do for over the days of itinerary
try {
  for( const [key,value] of Object.entries(itineraryDays)){
    //@ts-ignore
  
    //@ts-ignore
  //every day have its activites we will store each activity in row in itinerary table
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
} catch (error) {
  console.log(error)
  return res.status(500).json({ message: error.message });
}
//}
//getData()


  return res.status(200).json({ id: itineraryID,itinerary:{"itineraryDays":itineraryDaysValues,"ItineraryDescription":descriptionOFcity,city:itineraryDaysValues[0][0].slugCity} });
 } catch (error) {
  console.log(error)
  if(error.status==422){
    return res.status(422).json({ message: error.message });
  }else{
    res.status(500).json({ message: error.message });

  }
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


async function postToItineraryModel(object:{},days:number,city:string){
  const response= await  fetch(`https://fastapi-production-c2d8.up.railway.app/itinerary?city=${city}&&days=${days}`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(object),
   
  })
return response.json()
}

//upeer loop that go throght all elemments
//insed this loop will be two things create new poroprt call day[number] 
//and insed loop that check if active beloning the day in itiration or not if it belon add to array of day[number] the remove it