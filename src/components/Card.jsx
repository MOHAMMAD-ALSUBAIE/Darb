import { useState } from "react"
export default function Card(props){
    const [loadingImage,setLoadingImage]=useState(true)
   function handelClick(event){
   
   props.close()
   }
   function handelLoad(){
    setLoadingImage(false)
   }
return(
    <div  className={`flex max-[600px]:w-[95%] transition-{blur-md} md:rounded-2xl md:ml-0 ml-[3%] border-0  duration-1000 ${loadingImage?"blur-md":"blur-none"}  md:left-[23rem] 2xl:left-[35rem] blur-none absolute z-40  flex-col items-center  self-center  bg-white border border-gray-200 rounded-xl  md:flex-row  hover:bg-gray-100 md:w-[870px] md:h-[600px] w-[400px] sm:h-[500px] `+""+props.class}>
     
    <img
      className=" object-cover md:rounded-l-2xl   md:h-[600px]   md:order-1 order-1 md:w-[440px]    "
    src={props.dataOfClassifierImage.description?.image_url}
      alt={props.dataOfClassifierImage.prediction} 
      onLoad={handelLoad}
    />
     
    <div className="flex  md:order-2 order-2  flex-col items-center h-[100%] gap-3  leading-normal  md:ml-[65px] md:mr-[50px]  " >
    
      <h5 className="mt-[60px]  text-2xl font-bold tracking-tight  self-center  text-gray-900">
      {props.dataOfClassifierImage.prediction}
                    </h5>
                    <hr className="bg-black border border-black md:my-2  w-[100%]"/>
      <p className="mb-[10rem]  text-[24px]  text-[#012c4165] self-center text-center  md:w-[120%] w-[90%]" >
      {props.dataOfClassifierImage.description?.description}
    
    
      </p>
    </div>
    <img id="close" src={props.closeIcon} onClick={handelClick} className="w-[20px] cursor-pointer  self-start mt-1 ml-1 h-[20px]  md:order-3 order-1 md:relative md:right-3 md:top-3   right-[10px] top-[10px] absolute"/>

    </div>
)
}