import Form from "./Form";
import qasr from "/qasr-alfarid-alula 1.png";
import logo from "/Prototype_Logo 1.png";
import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2.jsx";
import Conatiner from "./container";

export default function Header() {
  return (

    <header className=" z-0 md:h-[690px] h-[890px]">
      <Conatiner>
      <div className="flex w-[100%]   justify-between ">
        <div className=" md:w-[50%] w-[100%]  block">
          <img className="md:my-[20px]  mb-[50px] top-2 left-2 relative z-40" src={logo} alt="logo" />
          {/*content  */}
          <H1 class="pb-[10px]  md:block flex justify-center " >Plan Your Perfect<br/> Trip with Darb</H1>
          <H2 class="pb-[20px]  md:block mb-[50px] flex justify-center">Enter Your Preferences and Get a <br/> Customized Itinerary in a minute</H2>

        </div>

        <img className=" hidden md:block  rounded-tl-[12rem] " src={qasr} alt="qasr" />
      </div>
      <Form />
      </Conatiner>

    </header>
  );
}
