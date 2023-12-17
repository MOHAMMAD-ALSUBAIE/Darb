import Body from "../components/Body";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import isAuth from "../functions/IsAuth";
import NewHeader from "../components/NewHeader";

import Form from "../components/Form.jsx";
import qasr from "../../public/qasr-alfarid-alula 1.png";
import H1 from "../components/Headers/H1.jsx";
import H2 from "../components/Headers/H2.jsx";
import Conatiner from "../components/container.jsx";
export default function LandingPage() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Perform actions after the component has fully loaded
      setLoader(true);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <NewHeader />
      <Conatiner>
        <div className=" w-[100%]   grid md:grid-cols-2  grid-cols-1">
          <div className="flex flex-col gap-5 my-5">
            <H1 className="pb-[10px] text-[#230751]  md:block flex justify-center ">
              Experience AI-Powered
              <br />
              Trip Planning with Darb
            </H1>
            <H2 className="pb-[10px] text-[#012C41]  md:block mb-[50px] flex justify-center max-[440px]:text-[20px] ">
              Tailor Your Journey in Minutes with Our
              <br />
              Advanced Machine Learning Itinerary
              <br />
              Builder
            </H2>
          </div>
          <Form />
          <img
            className=" hidden md:block    rounded-tl-[12rem] w-[70vw]  h-[697px]   "
            src={qasr}
            alt="qasr"
          />
        </div>
      </Conatiner>
      {/* <Header /> */}
      <Body />
      <Footer />
    </div>
  );
}
