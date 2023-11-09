import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2";
import Conatiner from "./container.jsx";
import Circles from "./Circles.jsx";
import IPhone from "/iPhone.png";
import CloudArrow from "/CloudArrowUp.png";
import Button from "./Button.jsx";
import iconArrow from "/icon _chevron-right_.png";
import { useEffect, useState } from 'react';
import { client } from "@gradio/client";
export default function Body(props) {
const handelClick=()=>{
  document.getElementById("image").click();
}

  const [imageFile, setImageFile] = useState(null);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setImageFile(file);
  };

  const handlePredict = async (e) => {
    e.preventDefault()
    if (!imageFile) {
      console.error("Please select an image first.");
      return;
    }
  
  };

  return (
    <div className="md:bg-[#0F0839] bg-[#904dba69]   text-[#fff]">
      {/* <Conatiner> */}
      <section className="flex justify-between md:mx-[10%] md:flex-nowrap flex-wrap">
        <div className="pt-[80px] pb-[80px] md:w-[70%] w-[100%] flex flex-col md:items-start items-center">
          {/* content */}
      <div className="">
      <H1 class="py-[50px]  md:text-[#fff] text-[#904DBA]">Darb's Landmark Explorer</H1>
          <H2 class=" md:text-[#fff] text-[#000]">
            Snap a Photo of a Landmark 📸
            <br className="mb-4 " />
            and Get Comprehensive
            <br className="mb-4" />
            Information Instantly
          </H2>
      </div>
          <div className=" rounded-md flex flex-col justify-center   items-center mt-9 md:bg-[#FFFF] bg-[#F3F0FF] md:w-[433px]  w-[90%] h-[189px]">
            <div className=""> 
              <img
                className=" relative "
                src={CloudArrow}
                alt="CloudArrow"
                onClick={handelClick}
              />
            </div>
            <p className="text-[#230751] font-bold">
              Capture or upload image here
            </p>
            <input onChange={handleFileUpload}  id="image" style={{ display: "none" }} name="image" type="file" required/>

            <form onSubmit={handlePredict}>
              <Button
                 
                class="flex mt-4 rounded-lg bg-[#9A9A9A] w-[196px] items-center justify-center h-[40px]"
                type="submit"
              >
                Recognize Landmark
                <img
                  className="ml-2 w-[15px] h-[15px]"
                  src={iconArrow}
                  alt="iconArrow"
                />
              </Button>
            </form>
          </div>
        </div>
        <div className="py-9 relative md:bottom-0 bottom-[100px] z-0 flex justify-center">
          <Circles />
        </div>
      </section>
      {/* </Conatiner> */}
    </div>
  );
}
