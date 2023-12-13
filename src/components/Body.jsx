import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2";
import Circles from "./Circles.jsx";
import CloudArrowUP from "/CloudArrowUp.svg";
import CloudCheck from "/CloudCheck.svg"
import Button from "./Button.jsx";
import iconArrow from "/icon _chevron-right_.png";
import { useEffect, useState } from "react";
import closeIcon from "/closeIcon.svg";
import Card from "./Card.jsx";
export default function Body(props) {
  const handelClick = () => {
    setError("")
    document.getElementById("image").click();
  };

  const [imageFile, setImageFile] = useState(null);
  const [dataOfClassifierImage, setDataOfClassifierImage] = useState({});
  const [overflow, setOverflow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState('')

  const handleFileUpload = (event) => {
const imageTypes = [
      "JPEG",
      "PNG",
      "GIF",
      "BMP",
      "TIFF",
      "RAW",
      "SVG",
      "WebP",
      "ICO",
      "HDR",
  ]
    const file = event.target.files[0];
    const type=file.type.split('/').pop().toUpperCase()
    if(!imageTypes.includes(type)){
      setError('Please select an image')
      return
    }
    setError('')
    console.log(type)
    setImageFile(file);
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      setError("Please select an image first.");
      return;
    }
    try {
      setLoading(true)
  
  const formData=new FormData();
  formData.append("image",imageFile)
    const response = await fetch("https://fastapi-production-c2d8.up.railway.app/predict",
      {
        method: 'POST',
    
       body: formData
      },
      

    )
    const data = await response.json();


    setDataOfClassifierImage(data);
    setOverflow(true)
    setLoading(false)
    } catch (e) {
      setLoading(false)

      console.error(e);
    }
  };
function handelClose(){
  setOverflow(false)
  setImageFile(null)
  setDataOfClassifierImage({});

}
  return (
    <>
   
 
    <div className="bg-[#0F0839] md:mt-0 mt-9  relative z-1   text-[#fff]">
     <div className={`${overflow?"block":"hidden"} fixed z-30 bg-black opacity-90`} style={ { width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed"}} >       
    </div> 
   
  <Card ClassNameCustom={`${overflow?"block":"hidden"}`} close={handelClose} loading={loading} closeIcon={closeIcon} dataOfClassifierImage={dataOfClassifierImage} />

      {/* <Conatiner> */}
      <section className="flex justify-between  2xl:ml-[15%] ml-[12%] md:flex-nowrap pt-[150px] flex-wrap">
            <div className="pt-[80px] pb-[80px] md:w-[70%] w-[100%] flex flex-col md:items-start items-center">
          {/* content */}
          <div className=" md:mt-0 mt-[50px]">
            <H1 ClassNameCustom="py-[50px]  text-[#fff] ">
              Darb's Landmark Explorer
            </H1>
            <H2 ClassNameCustom="text-[#fff] ">
            Capture a Saudi Landmark 📸
              <br className="mb-4 " />
              and Instantly Unlock AI-Driven
              <br className="mb-4" />
              Insights and Descriptions
            </H2>
          </div>
          <div className=" rounded-md flex flex-col justify-center   items-center mt-9 md:bg-[#FFFF] bg-[#F3F0FF] md:w-[433px]  w-[90%] h-[189px]">
          <div
            className={` ${
              error ? "block" : "hidden "
            }  rounded-md bg-red-700 text-white p-2 `}
          >
            {error}
          </div> 
            <div className="">
              <img
                className=" relative cursor-pointer"
                src={imageFile?CloudCheck:CloudArrowUP}//It will check if the input file has image or not
                alt="CloudArrow"
                onClick={handelClick}
                width={"60px"}
              />
            </div>
            <p className="text-[#230751] font-bold">
              Capture or upload image here
            </p>
            <input
              onChange={handleFileUpload}
              id="image"
              style={{ display: "none" }}
              name="image"
              type="file"
              required
            />

            <form onSubmit={handlePredict}>
              <Button
                ClassNameCustom="flex mt-4 rounded-lg bg-[#9A9A9A] w-[196px] items-center justify-center h-[40px]"
                type="submit"
              >
                Recognize Landmark
                <img
                  className="ml-2 w-[15px] h-[15px] "
                  src={iconArrow}
                  alt="iconArrow"
                />
              </Button>
              <span className={`loader ${loading?"block":"hidden"} top-[15.4px]  `}></span>
            </form>
          </div>
        </div>
        <div className="py-9 relative md:bottom-0 bottom-[100px] z-0 flex justify-center max-[600px]:w-[100%] ">
          <Circles />
        </div>
      </section>
   
    </div>
    </>
  );
}
