import Form from "./Form";
import qasr from "/qasr-alfarid-alula 1.png";
import logo from "/Prototype_Logo 1.png";
import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2.jsx";
import Conatiner from "./container";

export default function Header() {
  return (

    <header className=" z-0 h-[690px]">
      <Conatiner>
      <div className="flex w-[100%]   justify-between ">
        <div className=" w-[50%]">
          <img className="my-[20px]" src={logo} alt="logo" />
          {/*content  */}
          <H1 class="mb-[20px]" >Plan Your Perfect<br/> Trip with Darb</H1>
          <H2 class="mb-[20px]">Enter Your Preferences and Get a <br/> Customized Itinerary in a minute</H2>

        </div>

        <img className="width-[100%] rounded-tl-[12rem] " src={qasr} alt="qasr" />
      </div>
      <Form />
      </Conatiner>

    </header>
  );
}
