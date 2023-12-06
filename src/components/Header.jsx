import Form from "./Form";
import qasr from "/qasr-alfarid-alula 1.png";
import logo from "/Prototype_Logo 1.png";
import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2.jsx";
import Conatiner from "./container";
import UserDropDown from "./UserDropDown.jsx";
export default function Header() {
  return (

    <header className=" relative z-1 md:h-[690px] h-[890px] ">
      <Conatiner>
      <div className="flex w-[100%]   justify-between ">
        <div className=" md:w-[50%]  w-[100%]  block">
          <div className="flex justify-between">
          <img className="md:my-[20px]   mb-[50px] top-2 left-2 relative z-40" src={logo} alt="logo" /><UserDropDown />
          </div>
          {/*content  */}
          <H1 class="pb-[10px] text-[#230751]  md:block flex justify-center " >Experience AI-Powered<br/>Trip Planning with Darb</H1>
          <H2 class="pb-[20px] text-[#012C41]  md:block mb-[50px] flex justify-center max-[440px]:text-[20px] ">Tailor Your Journey in Minutes with Our<br/>Advanced Machine Learning Itinerary<br/>Builder</H2>

        </div>

        <img className=" hidden md:block  rounded-tl-[12rem] " src={qasr} alt="qasr" />
      </div>
      <Form />
      </Conatiner>

    </header>
  );
}
