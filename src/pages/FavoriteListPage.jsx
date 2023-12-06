import { LandingPageContext } from "../components/ContextAPI/ContextApp";
import { useState,useEffect ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import isAuth from "../functions/IsAuth";
import axios from "axios";
import Banner from '../components/ItineraryPageComponets/Banner'
import LikeSvg from "../components/LikeSvg";
import Favorite from '/Favorite.png'
import H1 from "../components/Headers/H1";
export default function FavoriteListPage(){
    const [isAuthState,setIsAuthState]=useState(false)
    const [favorite,setFavorite]=useState([])
    const [load,setLoad]=useState(false)

    const navigate=useNavigate()
    const id=useRef()

    useEffect(()=>{

        const asyncFn = async () => {
    
         try {
            setLoad(true)
            const res =  await isAuth()
            console.log(res);
            if (res.data.isAuth) {
                console.log("you are already login in");
                setIsAuthState(true)
                
                const response=await axios.get(`${import.meta.env.VITE_API}/user/FavoriteList`)
                setLoad(false)
                console.log(response.data)
                setFavorite([response.data.data,response.data.itineraries])
                console.log(response.data.data,response.data.itineraries)

            } 
         } catch (error) {
            console.log(error.response)
            setLoad(false)
            if(error.response.status==401){
                navigate('/login')

            }
         }
        }
        asyncFn();
      },[])

      const handleSubmit=(e)=>{
        const sanitizedID=id.current.value.replace(/[^a-zA-Z0-9@#$%^&+=-]/g, '')
        //console.log(sanitizedID)
        e.preventDefault
        navigate(`/itinerary/${sanitizedID}`)
      }
    return(
      <>
        <header>
        <Banner classCustomName={"w-[100%] h-[350px]"}/>
        </header>
        <section className="text-[#230751]   max-[600px]:flex-col gap-7 2xl:mx-[13%] mx-[10%] mt-[60px]">
        {load ? (
            // <div className="  z-40 left-[45%] top-[20%] ">
             <div className="flex justify-center">
                 <span class="loading"></span>
         </div>
          ) : (
            ""
          )}
            <H1>Your Favorite Itinerary</H1>
            <div className="flex gap-10 max-[600px]:flex-wrap">
                {favorite[0]?.map((curr,i)=>{
                    return (
                        <form onSubmit={handleSubmit}>
    
                            <input ref={id} type="hidden" value={curr.ItineraryID} />
                        <div className="   relative top-9   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100  max-[600px]:w-[95%] mb-6">
                        {/* <div className="w-[300px] h-fit "> */}
                        <div className="h-[240px]">
                        <img
                        // onLoad={handlerLoader}
                        
                           className=" m-2    w-full rounded-t-lg  md:w-[300px] md:h-[230px] md:rounded-none md:rounded-l-lg "
                         src={favorite[1][i].bannerImage}
                           alt={"bannerImage"}
                         />
                         <img className="absolute top-4 right-3" src={Favorite}/>
                        </div>

                       
                         <div className="flex flex-col  justify-between p-4 leading-normal relative">
                           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                             {favorite[1][i].slugCity}
                           </h5>
                           {/* <p className=" font-normal text-gray-700">
                             {description}
                           </p> */}
                           <div className="flex gap-2">
                           <button  className="bg-[#230751] hover:bg-[#230751b6] font-IBMPlexSans  mr-3 rounded-md text-[#fff] flex justify-center items-center gap-2 w-[148px] h-[40px]" target="_blank">Show Itinerary</button>
                           </div>
                           
                         </div>
                       </div>
                       </form>
                    )
                    // return <div>{curr.id}
                    //   <img src={favorite[1][i].bannerImage}/>
                    // </div>
                })}
            </div>
        </section>
      </>
    )
}