import Share from "/Share.png";
import favorite from "/Vector.png";
import H1 from "../Headers/H1";
import ItineraryButton from "./ItineraryButton";
import ActivityCard from "./ActivityCard";

import { useContext,useEffect, useState ,useRef} from "react";
// import { AppContext } from "../ContextAPI/ContextApp";
import {  useParams ,useNavigate} from 'react-router-dom';
import axios from "axios";
import isAuth from "../../functions/IsAuth";

export default function ItineraryBody() {
  const [ItineraryDays ,setItineraryDays] = useState([]);
  const [ItineraryDescription ,setItineraryDescription] = useState("");
  const [city ,setCity] = useState();
  const [visibleCopyCompont,setVisibleCopyCompont]=useState(false)
  const [copied,setCopied]=useState(false)
  const [loader,setLoader]=useState(false)
  const [addedToFavorite,setAddedToFavorite]=useState(false)
  const navigate=useNavigate()
const url=useRef()
    let {id}= useParams();
    let res
      useEffect(()=>{
        if(localStorage.getItem("Itinerary")){
          const Itinerary=JSON.parse(localStorage.getItem("Itinerary"))
          setItineraryDays(Itinerary.ItineraryDays)
          setItineraryDescription(Itinerary.ItineraryDescription)
          setCity(Itinerary.city)
          localStorage.clear()
          return
        }
        const getItinerary= async()=>{
          setLoader(false)
         const response=  await axios.get(`${import.meta.env.VITE_API}/API/itinerary/${id}`)
         setItineraryDays(Object.values(response.data.data.finalArray))
         setItineraryDescription(response.data.data.citydescription)
         setCity(response.data.data.city)
         setLoader(true)



        }
         getItinerary()

      },[])
  
const handelFavorite= async (e)=>{
  e.preventDefault()


  try {
    setAddedToFavorite(true)

    const response=await isAuth()
    if(response.data.isAuth){

    const  response= await axios.post(`${import.meta.env.VITE_API}/user/addFavorite`,{
        id
      })

      console.log(response)
    }
  } catch (error) {
    const status=error.response.data.status
    console.log(error.response.data)
    if(status===401){
      navigate("/login")
    }
  }
 
}
   
   
  
  const handelShareButton=()=>{
    setVisibleCopyCompont((prev)=>{
      return !prev
     })
  }
  const handelCopy=async ()=>{
  await navigator.clipboard.writeText(url.current.value)
  setCopied(true)
  }
  const handlerLoad=()=>{
    setLoader(true)
  }
  return (
    <section  className={`${loader?"":"blur-lg"} justify-around flex max-[600px]:flex-col gap-7 2xl:mx-[13%] mx-[10%] mt-4`}>
      <div>
        <H1 class="text-[#230751] max-[600px]:w-[100%] mb-3 ">
        Enjoy Your <span>{city}</span> Journey
        </H1>
        <p class="text-[#012C41] tracking-wider font-IBMPlexSans md:w-[95%] max-[600px]:w-[100%] max-[600px]:text-[20px]">
          {ItineraryDescription}
        </p>
        {/* Itinerary Schedule cards */}

        <section className=" mt-[150px] flex flex-col ">
          <div className="flex flex-col">
            {ItineraryDays.map((curr,index) => {
              return (
                <div className="flex mb-[100px] ">
                  <div className="relative bottom-[50px]">
                    <H1>Day { index +1}</H1>
                    <div className=" relative left-[30%] h-[100%]">
                      <div className="border-l-4 border-black h-[100%] absolute"></div>
                      <div className=" flex flex-col justify-between h-[100%] ">
                        {curr.map((curr) => {
                          return (
                            <div className="bg-[#000000] h-[15px] w-[15px] rounded-full relative right-[5%]"></div>
                          );
                        })}
                        <div className="bg-[#000000] h-[15px] w-[15px] rounded-full relative right-[5%]"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {curr.map((curr) => {
                      return <ActivityCard onLoad={handlerLoad} name={curr.name} description={curr.description} location={curr.location} slugCategoryPOI={curr.slugCategoryPOI} slugCity={curr.slugCity} bannerImage={ curr.bannerImage} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className=" flex justify-center max-[600px]:items-center   max-[600px]:left-[60px] ">
        <form onSubmit={handelFavorite}>
        <button className={`${addedToFavorite?"bg-green-500":'bg-[#230751] hover:bg-[#230751b6]'} font-IBMPlexSans  mr-3 rounded-md text-[#fff] flex justify-center items-center gap-2 w-[148px] h-[40px]`} classMargin="mr-3">
          <p>Save Itinerary</p>
          <img
            src={favorite}
            className="w-[14px] h-[14px] self-center"
            alt="share"
          />
        </button>
        <input type="hidden" value={id}/>
        </form>
        <div>
        <ItineraryButton onClick={handelShareButton}>
          <p>Share Itinerary</p>
          <img src={Share} alt="share" className="w-[13.33px] h-[16.36px]" />
          {/* <div className=" relative top-7 bg-slate-300 w-fit h-[40px]">Itinerary/951f942d-a0ed-4154-bc97-91d2cf28b179</div> */}
        </ItineraryButton>
          <div className={`bg-[#ffffff] ${visibleCopyCompont?"visible mt-4":"invisible"} shadow-xl transition-all duration-300 h-[100px] p-2 mt-1 rounded-md flex items-center gap-4 absolute right-7`}>
            <input ref={url} className="h-[50px] rounded-md" type="text" value={window.location.href}></input>
            <button className={`${copied?"bg-slate-500":"bg-[#230751] hover:bg-[#230751b6]"}  font-IBMPlexSans  rounded-md text-[#fff] flex justify-center items-center gap-2 w-[148px] h-[40px]`} onClick={handelCopy}>{copied?"copied":"copy"}</button>
          </div>
        </div>

      </div>
    </section>
  );
}
