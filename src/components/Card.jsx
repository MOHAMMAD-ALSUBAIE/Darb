import { useState } from "react"
export default function Card(props){
    const [loadingImage,setLoadingImage]=useState(true)
   // const [loader,setLoader]=useState(false)
    console.log(props.dataOfClassifierImage.description?.image_url)
   function handelClick(){
   
   props.close()
   }
   function handelLoad(){
    setLoader(true)
   }
return(
    <div  className={`${!props.loading?"blur-none":"blur-md"} flex justify-center   max-[600px]:w-[95%] transition-all md:rounded-2xl  border-0  duration-1000  max-[600px]:ml-3  md:left-[25rem] 3xl:left-[28rem]  blur-none absolute z-40  flex-col items-center  self-center  bg-white  border-gray-200 rounded-xl  md:flex-row  hover:bg-gray-100 md:w-[870px] md:h-[600px] w-[400px] sm:h-[500px] `+""+props.class}>
     
    <img
      className={`transition-{blur} object-cover md:rounded-l-2xl   md:h-[600px]   md:order-1 order-1 md:w-[440px]    `}
    src={props.dataOfClassifierImage.description?.image_url}
      alt={props.dataOfClassifierImage.prediction} 
       onLoad={handelLoad}
    />
     
    <div className="flex  md:order-2 order-2  flex-col items-center h-[100%] gap-3  leading-normal  md:ml-[65px] md:mr-[50px]  " >
    
      <h5 className="mt-[60px]  font-IBMPlexSans text-2xl font-bold tracking-tight  self-center  text-gray-900">
      {props.dataOfClassifierImage.prediction}
                    </h5>
                    <hr className="bg-black border border-black md:my-2  w-[100%]"/>
      <p className="mb-[10rem] font-IBMPlexSans  text-[24px]  text-[#012c4165] self-center text-center  md:w-[120%] w-[90%]" >
      {props.dataOfClassifierImage.description?.description}
    
    
      </p>
    </div>
    <img id="close" src={props.closeIcon} onClick={handelClick} className="w-[20px] font-IBMPlexSans cursor-pointer  self-start mt-1 ml-1 h-[20px] transition-all hover:w-[25px] hover:h-[25px]   md:order-3 order-1 md:relative md:right-3 md:top-3   right-[10px] top-[10px] absolute"/>

    </div>
)
}