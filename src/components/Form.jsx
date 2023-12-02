import InputField from "./InputField";
import Options from "./Options";
import Button from "./Button";
import InputFieldIcon from "./InputFieldIcon";
import dateIcon from "/dateIcon.png";
import dollarIcon from "/dollarIcon.png";
import searchIcon from "/searchIcon.png";
import starIcon from "/starIcon.png";
import travelIcon from "/travelIcon.png";
import locationIcon from "/locationIcon.png";
import DateRange from './DateRange.jsx'
import DropDown from "./DropDown.jsx"
import { useContext, useState } from "react";
import { AppContext } from "./ContextAPI/ContextApp";
 import DropDownCountry from "./DropDownCountry.jsx";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
export default function Form() {
const [date,setDate]=useState()
const [selectCity,setSelectCity]=useState("")
const {Itinerary,setItinerary}=useContext(AppContext)
const navigate=useNavigate()
const [active,setActive]=useState({
  options:false,
  Attractions:false,
  Restaurants:false,
  Shopping:false
})
const cities = [
  "Abha", "Al_Ahsa", "Al_Baha", "Al_Jouf",
  "Al_Khobar", "Al_Taif", "AlUla", "Dahran",
  "Dammam", "Diriyah", "Hail", "Jazan",
  "Jeddah", "Jubail", 
  "King_Abdullah_Economic_City", "Madinah",
  "Makkah", "Riyadh"
  ]

const Attractions= ["Family & Kids", "Amusement Parks", "Cultural & Historical", "Iconic Landmarks", "Parks", "Nature & wildlife"]
const Restaurants=["Fast Food", "Bakery & Cafe", "Specialty Coffee", "Saudi Traditional dishes", "Fine Dining", "Seafood"]
const Shopping=["Traditional Markets", "Malls"]

const handelActive=(actving)=>{
  setActive(actving)
}
const handelDateValue=(newValue)=>{
  console.log(newValue)
  setDate(newValue)
}
const handelSelectCity=(city)=>{
  setSelectCity(city)
}
  const handelSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    console.log(formData,selectCity,date)
    const arrayData=Array.from(formData)
  await axios.post("http://localhost:3000/API/itinerary", {
    arrayData,selectCity,date
  })
  //   setItinerary({
      
  //   })

  //  navigate("/Itinerary")
  };
//   const handelClickForm=(e)=>{
//     setStateClickedForm(e.target.id)
// console.log(e.target)
//   }
  return (
    <div id='form' className="" >
      <form
      id='forma'
        //  onClick={handelClickForm}
        onSubmit={handelSubmit}
        className="border rounded-lg md:ml-0 bg-white  relative mt-[40px] md:top-[-305px] top-[-102px] z-1  border-[#AFB5B5]  min-[1900px]:w-[70%] min-[1750px]:w-[80%] xl:w-[90%] min-[414px]:ml-4 min-[390px]:ml-1 min-[430px]:ml-6 min-[390px]:w-[380px]"
      >
        <section id='forms' className="m-[30px]">
          <div id='formDiv' className="flex gap-8 mb-[15px] flex-wrap md:justify-start justify-center">
          {/* <DropDown tags={cities} title="Destination" /> */}
            <div>
              <label className="relative top-1">Destination</label>
            <DropDownCountry ID={'options'} clicked={handelActive} active={active} options={cities} selectCity={handelSelectCity} width="200px" customClassName="border border-1 border-gray-600 rounded-lg h-[44px] xl:w-[230px] md:w-[140px]  w-[400px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#fff] border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "/>
            </div>
        <DateRange handelDateValue={handelDateValue} />
        <DropDown clicked={handelActive} active={active} tags={Attractions} title="Attractions"/>

          </div>
          <div className="flex md:flex-nowrap  z-40 flex-wrap  gap-8 md:justify-start justify-center">
        

           
           <DropDown clicked={handelActive} active={active} tags={Restaurants} title="Restaurants"/>
           <DropDown clicked={handelActive} active={active} tags={Shopping} title="Shopping"/>

           {/* <DropDownCountry/> */}
            <Button
             
              class="self-end flex items-center justify-center md:w-[40px] md:h-[40px] w-[400px] h-[40px] rounded-[10px] bg-[#230751]"
              type="submit"
            >
              <InputFieldIcon  icon={searchIcon}/>
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
}
