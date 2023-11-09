import Share from "/Share.png";
import favorite from "/Vector.png";
import H1 from "../Headers/H1";
import almasmak from "/almasmak-fortress.png";
import ItineraryButton from "./ItineraryButton";
export default function ItineraryBody(props) {
  return (
    <section className=" flex gap-7 mx-[10%] mt-4">
      <div>
        <H1 class="text-black">A Cultural Journey Through Riyadh</H1>
        <p class="text-black">
          Embark on a cultural journey through the heart of Riyadh and discover
          the city's rich history and traditions. This trip plan is tailored to
          your preferences and desires, ensuring that you have an unforgettable
          experience. Explore the ancient ruins of Diriyah, visit the iconic
          Masmak Fortress, and marvel at the stunning architecture of the King
          Abdullah Financial District
        </p>
        {/* Itinerary Schedule cards */}
       
        <section className=" mt-[150px] flex ">
           <div className="relative bottom-[50px]">
           <H1 >Day1</H1>
  <div className=" relative left-[30%] h-[100%]">
  <div className="bg-[#000000] h-[15px] w-[15px] rounded-full relative right-[5%]"></div>   
        <div className="border-l-4 border-black h-[100%]">

        </div>
        <div className="bg-[#000000] h-[15px] w-[15px] rounded-full relative right-[5%]"></div>   

           </div>
  </div>
          <div className="flex flex-col items-center relative top-9 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 w-[535px]">
            <img
              className="object-cover m-5 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={almasmak}
              alt={almasmak}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Al Masmak Palace
                            </h5>
              <p className="mb-3 font-normal text-gray-700">
              Discover the glories of Saudi history in the corridors of the ancient Al Masmak Palace.
              </p>
            </div>
          </div>
          
        </section>
      </div>
      <div className=" flex justify-center ">
        <ItineraryButton classMargin="mr-3">
          <p>Save Itinerary</p>{" "}
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
