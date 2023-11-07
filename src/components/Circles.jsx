
import IPhone from "/iPhone.png";
export default function Circles() {
    return <div className="flex items-center justify-center">
       <div className=" opacity-[.15] rounded-full  w-[428px] h-[428px] md:w-[678px] md:h-[678px] bg-[#713D91] z-0 ">
       

    </div>
    <div className=" opacity-[.15] absolute  rounded-full md:w-[566px] md:h-[566px] w-[356px] h-[356px] bg-[#713D91] z-10 ">
          
          </div>
    <div className=" opacity-[.15] absolute   rounded-full md:w-[406px] md:h-[406px] w-[256px] h-[256px] bg-[#713D91]  z-30">

</div>
<img className="z-40  absolute   hidden md:block" src={IPhone} alt="IPhone"/>

 </div>


}

//     
