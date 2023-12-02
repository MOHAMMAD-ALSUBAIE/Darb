// import React, { useEffect } from "react";
// import { Select, Option } from "@material-tailwind/react";
//  import { useState,useRef } from "react";
// export default function DropDownCountry(props) {
//  // const { countries } = useCountries();
//   const [counterValue, setCounterValue] = useState("");
//   const handelChange = (e) => {
//     setCounterValue(e)

//   }
 
//   return (
//     <div className="w-72 bg-[#FFFFFF] border focus:border-blue-500">
//       <Select
//         onChange={handelChange}
//         size="lg"
//         label="Select Country"
        
//         selected={(element) => 
          
//           element &&
//           React.cloneElement(element, {
//             disabled: false,
//             className:
//               "flex items-center  opacity-100 px-0 gap-2 pointer-events-none",
//           })
//         }
        
//       >
//         {countries.map(({ name, flags }) => (
//           <Option key={name} value={name} className="flex items-center gap-2">
//             <img
//               src={flags.svg}
//               alt={name}
//               className="h-5 w-5 rounded-full object-cover"
//             />
//             {name}
//           </Option>
//         ))}
//       </Select>
//     </div>
//   );
// }

import  "./DropDownCounter.css"
import country from "../functions/country"
import { useRef ,useState,useEffect} from "react"
export default function DropDownCountry(props){
  const [search,setSearch]=useState("")
  const [findTheSearch,setFindTheSearch]=useState("")
  const [selectCountry,setSelectCountry]=useState("")
const wrapper=useRef("")
useEffect(()=>{
  const state=props.pageClicked
  if(state){
    wrapper.current.classList.remove('active')
 // props.reset
  }
  
},[props.pageClicked])
const handelSearchChange=(e)=>{
  setSearch(e.target.value)
  setFindTheSearch('')
}
const handlerSelectCounter=(e)=>{
  props.selectCity(e.target.id)//content the name of counter
  setSelectCountry(e.target.id)
  console.log(e.target.id)
  wrapper.current.classList.toggle('active')

}
  const handelSelectBtn = () =>{
    // props.reset()
    props.clicked((prev) => {
      return {
        options: false,
        Attractions: false,
        Restaurants: false,
        Shopping: false,
        [props.ID]: !prev[props.ID],
      };
    });
    console.log(props.active.options)
   
  }
return(
   <div ref={wrapper}   className={`dropdown ${props.customClassName} ${props.active.options?"active":""} wrapper w-[${props.width}] relative z-50 top-1`}>
    <div onClick={handelSelectBtn} className=" dropdown select-btn  mt-3 flex cursor-pointer   bg-[#FFFFFF]  py-0 px-[20px] rounded-[7px] text-[18px] items-center justify-between ">
    <span className="dropdown">{selectCountry?selectCountry:"Select Country "}  </span>
    <svg className="angleDown transition-all ease-in duration-300 dropdown" xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>    

    </div>
    <div className="content absolute hidden w-[100%] bg-[#FFFFFF] p-[20px] mt-[15px] rounded-[7px]">
        <div className=" search flex relative">
        <svg className="absolute left-[15px] self-center " xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <input onChange={handelSearchChange}  type="text" className=" bg-[#FFFFFF] h-[36px] w-[100%] text-[17px] py-0 pr-[15px]  pl-[43px] outline  outline-0  border-solid border-[1px] border-[#b3b3b3] rounded-[5px] " placeholder="Search"/>


        </div>
        <ul className={`options mt-[10px] max-h-[250px] overflow-y-auto`}>

          {search? '': props.options.map((item)=>{
            

            
             return              <li onClick={handlerSelectCounter} className="font-IBMPlexSans" key={item} id={item}>{item}</li>

            
          })}
          {search&&!findTheSearch? props.options.find((item)=>{
        let modifySearch=search.trim().split(" ").map((x)=>x[0]?.toUpperCase()+x?.slice(1,x.length)).join(' ')
             console.log(modifySearch)
            if( modifySearch===item){
              setFindTheSearch(modifySearch)
              return modifySearch
            }
          }):''}
          {findTheSearch?<li onClick={handlerSelectCounter} className="font-IBMPlexSans" id={findTheSearch}>{findTheSearch}</li>:''}
        </ul>
    </div>
         </div>

)
}