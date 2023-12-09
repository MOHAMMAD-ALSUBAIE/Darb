import InputField from "./InputField";
import Options from "./Options";
// import Button from "./Button";
import InputFieldIcon from "./InputFieldIcon";
import shopping from "/shopping.png";
import Attraction from "/Attraction.png";
import searchIcon from "/searchIcon.png";
import etableDrinkable from "/etableDrinkable.png";
import locationIcon from "/locationIcon.png";
import DateRange from "./DateRange.jsx";
import DropDown from "./DropDown.jsx";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./ContextAPI/ContextApp";
import DropDownCity from "./DropDownCity.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Form() {
  const [date, setDate] = useState();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [selectCity, setSelectCity] = useState("");
  const { Itinerary, setItinerary } = useContext(AppContext);
  const navigate = useNavigate();
  const [active, setActive] = useState({
    options: false,
    Attractions: false,
    Restaurants: false,
    Shopping: false,
  });
  const cities = [
    "Abha",
    "Al_Ahsa",
    "Al_Baha",
    "Al_Jouf",
    "Al_Khobar",
    "Al_Taif",
    "AlUla",
    "Dahran",
    "Dammam",
    "Diriyah",
    "Hail",
    "Jazan",
    "Jeddah",
    "Jubail",
    "King_Abdullah_Economic_City",
    "Madinah",
    "Makkah",
    "Riyadh",
  ];

  const Attractions = [
    "Family & Kids",
    "Amusement Parks",
    "Cultural & Historical",
    "Iconic Landmarks",
    "Parks",
    "Nature & wildlife",
  ];
  const Restaurants = [
    "Fast Food",
    "Bakery & Cafe",
    "Specialty Coffee",
    "Saudi Traditional dishes",
    "Fine Dining",
    "Seafood",
  ];
  const Shopping = ["Traditional Markets", "Malls"];
  

 
  const handelActive = (actving) => {
    setActive(actving);
  };
  const handelDateValue = (newValue) => {
    setDate(newValue);
  };
  const handelSelectCity = (city) => {
    setSelectCity(city);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
try {
  setActive({
    options: false,
    Attractions: false,
    Restaurants: false,
    Shopping: false,
  });
  setLoad(true);

  const formData = new FormData(e.target);
  const arrayData = Array.from(formData);
  const datePattern=/[^0-9\/\-]/g
   const sanitizeStartDate=date?.startDate.replace(datePattern, '')
   const sanitizeEndDate=date?.endDate.replace(datePattern, '')
   const sanitizeCity=selectCity.replace(/[^a-zA-Z\s\_]/g, '')
  let res;
  if (date?.startDate && date?.endDate && selectCity) {
    res = await axios.post(`${import.meta.env.VITE_API}/API/itinerary`, {
      arrayData,
      sanitizeCity,
      date:{sanitizeStartDate,sanitizeEndDate},
    });
  } else {
    setError(true);
  }

  const   itinerary=res.data.itinerary
    
  setLoad(false);

  localStorage.setItem("Itinerary",JSON.stringify({ItineraryDays:itinerary.itineraryDays,ItineraryDescription:itinerary.ItineraryDescription,city:itinerary.city}))
 navigate(`/Itinerary/${res.data.id}`);
} catch (error) {
    setLoad(false);

}
  };
  const handelClickForm = (e) => {
    if (e.target.classList.contains("form")) {
      setActive({
        options: false,
        Attractions: false,
        Restaurants: false,
        Shopping: false,
      });
    }

  };
 
  return (
    <>
      <div id="form" className="form">
        <form
          onClick={handelClickForm}
          id="forma"
          onSubmit={handelSubmit}
          className="form closeHoverIn border rounded-2xl md:ml-0 bg-white  relative mt-[40px] md:top-[-305px] top-[-102px] z-1  border-[#AFB5B5]  min-[1900px]:w-[70%] min-[1750px]:w-[80%] xl:w-[90%] min-[414px]:ml-4 min-[390px]:ml-1 min-[430px]:ml-6 min-[390px]:w-[380px]"
        >
          <div
            className={`absolute ${
              error ? "block" : "hidden "
            }  rounded-md bg-red-700 text-white p-2 left-[20%] bottom-[110%]`}
          >
            Please ensure that you have filled out all the required fields
            before submitting the form.
          </div>
          {load ? (
               <div className="flex justify-center absolute z-40 left-[45%] top-[20%]">
                 <span className="loading"></span>
             </div>
         
          ) : (
            ""
          )}

          <section id="forms" className="form m-[30px] relative z-30">
            <div
              id="formDiv"
              className=" form flex items-center gap-8 mb-[15px] flex-wrap md:justify-start justify-center"
            >
              <div>
                <label className="relative top-1 font-IBMPlexSans font-bold">
                  Destination
                </label>
                <div className="card flex justify-content-center">
        </div>
                <DropDownCity
                  ID={"options"}
                  clicked={handelActive}
                  active={active}
                  options={cities}
                  selectCity={handelSelectCity}
                  useForCity={true}
                  width="200px"
                  icon={locationIcon}
                  placeHolder="E.g.,Riyadh, Dammam"
                  customClassName="border border-1 focus:border-[3px] focus:border-blue-500 border-gray-600 rounded-lg h-[44px] xl:w-[230px] md:w-[140px]  w-[400px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#fff] border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>
              <DateRange handelDateValue={handelDateValue} />
              <div>
                <label className="relative top-1 font-IBMPlexSans font-bold">
                  Explore & Discover
                </label>
                <DropDown
                  classNameCustom={"top-[5rem]"}
                  clicked={handelActive}
                  active={active}
                  tags={Attractions}
                  title="Attractions"
                  icon={Attraction}
                  widthXL="200px"
                  placeHolder={"Family & Kids, Parks, Cultural"}
                />
              </div>
            </div>
            <div className="form flex md:flex-nowrap  mt-[10px] z-40 flex-wrap  gap-8 md:justify-start justify-center">
              <div>
                <label className="relative top-1  font-IBMPlexSans font-bold">
                Restaurants & Cafes
                </label>

                <DropDown
                  classNameCustom={"top-[10.5rem] "}
                  clicked={handelActive}
                  active={active}
                  tags={Restaurants}
                  icon={etableDrinkable}
                  widthXL="270px"
                  placeHolder={"Fast Food, Bakery & Cafe, Fine Dining"}
                  title="Restaurants"
                />
              </div>
              <div>
                <label className="relative top-1 font-IBMPlexSans font-bold">
                Shopping Options
                </label>

                <DropDown
                  classNameCustom={"top-[10.5rem]"}
                  clicked={handelActive}
                  active={active}
                  tags={Shopping}
                  title="Shopping"
                  icon={shopping}
                  widthXL={"270px"}
                  placeHolder={"Traditional Markets, Malls"}

                />
              </div>

              {/* <DropDownCountry/> */}
              <button
                className="self-end relative bottom-1 flex items-center justify-center md:w-[40px] md:h-[40px] w-[400px] h-[40px] rounded-[10px] bg-[#230751]"
                type="submit"
                
              >
                
                <InputFieldIcon icon={searchIcon} />
              </button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
