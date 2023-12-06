import { favoritest, prisma } from "./user.controller";


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
      include: {
        Itineraries: {
          include: {
            Itinerary: true,
          }
        }
      }
    });
    const ItineraryID = favoritestResponse[0].ItineraryID;
    const itineraries = await prisma.itinerary.findMany({
      where: {
        ItineraryID: ItineraryID,
        take: 1
      }
    });
    console.log(favoritestResponse[0].ItineraryID);
    res.status(200).json({ status: 200, data: favoritestResponse });
  } catch (e) {
    console.log(e.name);
    if (e.status === 401)
      res.status(401).json({ status: 401, massage: e.message });
    else res.status(400).json({ status: 400, massage: "filed" });
  }
};
