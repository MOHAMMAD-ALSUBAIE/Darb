

import "./DropDownCounter.css";
import { useRef, useState, useEffect } from "react";
export default function DropDownCity(props) {
  const [selectCountry, setSelectCountry] = useState("");
  const wrapper = useRef("");
  useEffect(() => {
    
      wrapper.current.classList.remove("active");
    
  }, [props.pageClicked]);
 
  const handlerSelectCounter = (e) => {
    props.selectCity(e.target.id); //content the name of counter
    setSelectCountry(e.target.id);
    wrapper.current.classList.toggle("active");
  };
  const handelSelectBtn = () => {
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
  };

  return (
    <>
       <button
        ref={wrapper}
        type="button"
        onClick={handelSelectBtn}
        className={`notInEnverimtent font-IBMPlexSans flex justify-between dropdown ${props.customClassName} ${
          props.active.options ? "active" : ""
        } wrapper w-[${props.width}]  relative z-50 top-1`}
      >
        <span className="dropdown flex items-center gap-1">
          <img src={props.icon} className="h-4 w-4" />
          <p>{selectCountry ? selectCountry : props.placeHolder}</p>{" "}
        </span>
        <svg
          className="angleDown transition-all pr-2 self-center ease-in duration-300 dropdown"
          xmlns="http://www.w3.org/2000/svg"
          height="22"
          width="22"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
 
    
     
      <div className="content absolute invisible transition-all duration-200 w-[100%] bg-[#FFFFFF] p-[20px] mt-[15px] rounded-[7px]">
     
      
       
        <ul className={`options mt-[10px] max-h-[250px] overflow-y-auto overflow-x-hidden`}>
        { props.options.map((item) => {
                return (
                  <li
                    onClick={handlerSelectCounter}
                    className="font-IBMPlexSans text-left"
                    key={item}
                    id={item}
                  >
                    {item}
                  </li>
                );
              })}
        
       
        </ul>
      </div>
      </button>
    </>
  );
}
