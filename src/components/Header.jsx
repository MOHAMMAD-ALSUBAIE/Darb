import Form from "./Form";
import qasr from "/qasr-alfarid-alula 1.png";
import logo from "/Logo.svg";
import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2.jsx";
import Conatiner from "./container";
export default function Header() {
  return (

    <header className=" relative z-1  md:h-[697px]  ">
      <Conatiner>
      <div className=" w-[100%]   grid md:grid-cols-2  grid-cols-1">
        <div className="    block">
          <div className="flex">
          </div>
          {/*content  */}
          <H1 className="pb-[10px] text-[#230751]  md:block flex justify-center " >Experience AI-Powered<br/>Trip Planning with Darb</H1>
          <H2 className="pb-[20px] text-[#012C41]  md:block mb-[50px] flex justify-center max-[440px]:text-[20px] ">Tailor Your Journey in Minutes with Our<br/>Advanced Machine Learning Itinerary<br/>Builder</H2>

        </div>

        <img className=" hidden md:block  gr   rounded-tl-[12rem] w-[70vw]  h-[697px]   " src={qasr} alt="qasr" />
        <Form />

      </div>

      </Conatiner>

    </header>
  );
}
