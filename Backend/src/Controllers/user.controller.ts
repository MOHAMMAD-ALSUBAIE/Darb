import { PrismaClient,Prisma } from "@prisma/client";
const userPrisma = new PrismaClient().user;
const prisma = new PrismaClient();

const session = new PrismaClient().session;
const favoritest = new PrismaClient().favoritest;

// Create a custom type that extends the generated type


import bcrypt from "bcrypt";

export const createUser = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const { FullName, email, birthDate, password } = req.body;
    const FullNameSanitized = FullName.replace(/[^a-zA-Z\s\-]/g, "");
    const passwordInputSanitized = password.replace(
      /[^a-zA-Z0-9@#$%^&+=]/g,
      ""
    );
    const brithDateSanitized = birthDate.replace(/[^0-9\/\-]/g, "");
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!FullName || !birthDate || !email || !password) {
      return res.status(400).json({ error: "Name and email are required" });
    }
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: " email are required" });
    }
    const checkUseEmail = await userPrisma.findFirst({
      where: {
        email: email,
      },
    });
    console.log(checkUseEmail)
    if (checkUseEmail) {
      return res.status(422).json({ massage: "email already exist" });
    }
    // if(password!=passwordAgin){
    //     return res
    //     .status(400)
    //     .json({ error: "password not match" });
    // }
    const hashedPassword = await bcrypt.hash(passwordInputSanitized, 10);
    const response = await userPrisma.create({
      data: {
        name: FullNameSanitized,
        email: email,
        //@ts-ignore

        birthDate: brithDateSanitized,
        //@ts-ignore

        Password: hashedPassword,
      },
    });
console.log(response)
    res.status(201).json({
      message: "User has be created, move him to login page.",
      response:response,
      status: 201,
    });
  } catch (e) {
    res.status(422).json({
      message: "Error",
      status: 422,
    });
  }
};

export const addFavorite = async (req: any, res: any) => {
  //book id
  try {
    const itineraryID = req.body.id;

    if (!itineraryID) {
      return res.status(400).json({ error: "Itinerary ID are required" });
    }
    const response=await favoritest.create({
        data: {
            userID :req.session.userID,
            ItineraryID: itineraryID,
        },
    })
    console.log(response)
    res.status(201).json({
      message: "Itinerary had be added to favorite list.",
      status: 201,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "It is in favorite list already",
    });
  }
};

export const getFavoriteList = async (req: any, res: any) => {
  try {
    if (!req.session.userID) {
      throw {
        message: "userId is required, you are Unauthorized",
        status: 401,
      };
    }
  const favoritestResponse = await favoritest.findMany({
    where: {
      userID: req.session.userID,
      
    },
    include:{
      Itineraries:{
        include:{
          Itinerary:{
             distinct: ['itineraryID'],
             
            
          },
          
        }
        
      }
    }
 
  })
 
  const ItineraryID= favoritestResponse[0].ItineraryID
  console.log(favoritestResponse)
  const itinerariesArray = await Promise.all(
    favoritestResponse.map(async (curr) => {
      const itineraries = await prisma.itinerary.findFirst({
        where: {
          itineraryID: curr.ItineraryID,
        },
        distinct: ['itineraryID'],
      });
      return itineraries;
    })
  );
  
  console.log(itinerariesArray);
    res.status(200).json({ status: 200, data:favoritestResponse, itineraries: itinerariesArray});
  } catch (e) {
    console.log(e.name);
    if (e.status === 401)
      res.status(401).json({ status: 401, massage: e.message });
    else res.status(400).json({ status: 400, massage: "filed" });
  }
};


export const logout = async (req: any, res: any) => {
  try {
    await session.delete({
      where: {
        id: req.sessionID,
      },
    });
    res.status(200).json({ massage: "logout Accepted " });
  } catch (e) {
    res.status(400).json({ massage: "filed" });
  }
};
