import Share from "/Share.png";
import favorite from "/Vector.png";
import H1 from "../Headers/H1";
import almasmak from "/almasmak-fortress.png";
import ItineraryButton from "./ItineraryButton";
import ActivityCard from "./ActivityCard";
import { useContext } from "react";
import { AppContext } from "../ContextAPI/ContextApp";

export default function ItineraryBody(props) {
  const { Itinerary } = useContext(AppContext);
  if(!Itinerary) {

  }
    console.log(Itinerary)

    const ItineraryArray = Object.entries(Itinerary?.itineraryDays);
    const City=ItineraryArray[0][1][1].slugCity
  

 // console.log(City)

  return (
    <section className=" flex max-[600px]:flex-col gap-7 2xl:mx-[13%] mx-[10%] mt-4">
      <div>
        <H1 class="text-[#230751] max-[600px]:w-[100%] ">
        Enjoy Your {City} Journey
        </H1>
        <p class="text-[#012C41] tracking-wider font-IBMPlexSans md:w-[80%] max-[600px]:w-[100%] max-[600px]:text-[20px]">
          {Itinerary?.des}
        </p>
        {/* Itinerary Schedule cards */}

        <section className=" mt-[150px] flex flex-col ">
          <div className="flex flex-col">
            {ItineraryArray.map((curr) => {
              return (
                <div className="flex mb-[100px] ">
                  <div className="relative bottom-[50px]">
                    <H1>{curr[0]}</H1>
                    <div className=" relative left-[30%] h-[100%]">
                      <div className="border-l-4 border-black h-[100%] absolute"></div>
                      <div className=" flex flex-col justify-between h-[100%] ">
                        {curr[1].map((curr) => {
                          return (
                            <div className="bg-[#000000] h-[15px] w-[15px] rounded-full relative right-[5%]"></div>
                          );
                        })}
                        <div className="bg-[#000000] h-[15px] w-[15px] rounded-full relative right-[5%]"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {curr[1].map((curr) => {
                      return <ActivityCard name={curr.name} description={curr.description} location={curr.location} slugCategoryPOI={curr.slugCategoryPOI} slugCity={curr.slugCity} bannerImage={curr.bannerImage[0]|| curr.bannerImage} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className=" flex justify-center max-[600px]:absolute max-[600px]:top-[800px] max-[600px]:left-[60px] ">
        <ItineraryButton classMargin="mr-3">
          <p>Save Itinerary</p>
          <img
            src={favorite}
            className="w-[14px] h-[14px] self-center"
            alt="share"
          />
        </ItineraryButton>
        <ItineraryButton>
          <p>Share Itinerary</p>
          <img src={Share} alt="share" className="w-[13.33px] h-[16.36px]" />
        </ItineraryButton>
      </div>
    </section>
  );
}
