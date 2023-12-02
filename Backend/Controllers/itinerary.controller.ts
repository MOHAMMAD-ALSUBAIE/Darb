import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import axios from "axios"


export const ItineraryRequest= async (req: any,res: any,next:any)=> {
       console.log(req.body)
       let attractions=[]
       let restaurants=[]
       let shopping=[]
       req.body.arrayData.forEach((curr:Array<any>)=>{
        if(curr[0].include("Attractions")){
            attractions.push(curr[1])
        }
        else if(curr[0].include("Restaurants")){
            restaurants.push(curr[1])
        }else if(curr[0].include("Shopping")){
            shopping.push(curr[1])
        }
       })
//     const {Attractions,Restaurants,Shopping}=req.body
//     const {days,city}=req.body.parm

//   const response= await  axios.post(`https://fastapi-production-c2d8.up.railway.app/itinerary?city=${city}&&days=${days}`,{
//     Attractions,
//     Restaurants,
//     Shopping
//   })
//   const itineraryArray=Object.values(response.data)
//   console.log(itineraryArray)
//   const [itineraryDays,descriptionOFcity]=itineraryArray

//   const itinerariesTable= await prisma.itineraries.create({
//     data:{
//         userID:null,
//           //@ts-ignore

//           citydescription:descriptionOFcity
//     }

//   })
//  const itineraryID=itinerariesTable.id
  
//   //@ts-ignore
//  for( const [key,value] of Object.entries(itineraryDays)){
//       //@ts-ignore
// // const values =value.map((element)=>{
// //     return element.itineraryID=itineraryID
// // })
//       //@ts-ignore

//   value.forEach(async (element) => {
//     console.log(element)

//           //@ts-ignore
//     const itineraryTable= await prisma.Itinerary.create({
//               //@ts-ignore
        
//         data:{
//            name:element.name,
//            description:element.description,
//            bannerImage:element.bannerImage[0],
//            slugCategoryPOI:element.slugCategoryPOI,
//            slugCity:element.slugCity,
//            location:element.location, 
//            day:key,
//            itineraryID:itineraryID
//                //@ts-ignore


//       //  ...values
//        //@ts-ignore

//         // userID:itineraryID,
//         }
        
//     //   include:{
//     //     where:{
//     //         Itineraries:{
//     //             id:itineraryID
//     //         }
//     //     }
//     //   }
        
    
//       })
//   });

//     }

    return res.status(200).json({"id":'itineraryID'})
}