import { useEffect, useState } from "react";

export default function DropDown(props) {
  const [tagsActive,setTagsActive]=useState(props.tagsActive)
  const [placeHolder,setPlaceholder]=useState(props.placeHolder)
  const title = props.title;
   
  const handelClick = () => {
    props.clicked((prev) => {
      return {
        options: false,
        Attractions: false,
        Restaurants: false,
        Shopping: false,
        [title]: !prev[title],
      };
    });
  };
  useEffect(()=>{
    let placeholder=[]

    for( const [key,value] of Object.entries(tagsActive)){
      if(value&&placeholder.length<3){
        placeholder.push(key)
      }else if(placeholder.length===3){
        placeholder.push("...")
        break
      }
    }
    if(placeholder.length===0){
      setPlaceholder(props.placeHolder)
    }else{
      setPlaceholder(placeholder.join(','))

    }

  },[tagsActive])
  const handelChange = (e) => {
    const key=e.target.getAttribute("data-value")
 
    setTagsActive((prev)=>{
      return{
        ...prev,
        [e.target.getAttribute("data-value")]:!prev[e.target.getAttribute("data-value")],
      }
    })
      


  

   
 
   // console.log(tagsActive)
    //console.log(tagsActive[e.target.getAttribute("data-id")][e.target.getAttribute("data-value")])
   // console.log(e.target);
  }

  return (
    <div className="notInEnverimtent relative md:w-[120%]">
      <button
        id={props.title}
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className={
          " notInEnverimtent px-2  font-IBMPlexSans text-[16px] text-gray-700  border-gray-600 focus:ring-blue-500 focus:border-blue-500 flex  justify-between items-center mt-1    h-[44px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#fff] border focus:border-[3px]  text-sm rounded-lg  " +
          ` xl:${props.widthXL}`
        }
        type="button"
        onClick={handelClick}
      >
        <div className="flex gap-3">
          <img src={props.icon} width={"20px"}/>
          <p className="text-left">{placeHolder}</p>{" "}
        </div>
        <svg
          className="w-2.5 h-2.5 ms-3 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownDefaultCheckbox"
        className={`z-10 ${
          props.active[props.title]
            ? `visible ${props.classNameCustom}  `
            : "invisible top-0"
        }  bg-white divide-y duration-200 top-0 divide-gray-100 transition-all rounded-lg shadow absolute   xl:${props.widthXL}
        }   min-[390px]:w-[350px]  min-[375px]:w-[375px] `}
      >
        <ul
          className={`p-3 space-y-3 text-sm text-gray-700 xl:${props.widthXL}   min-[390px]:w-[350px]  min-[375px]:w-[375px]`}
          aria-labelledby="dropdownCheckboxButton"
        >
          {props.tags.map((attraction, id) => (
            <li
              key={id}
              className="hover:bg-[#f2f2f2] p-2 md:w-[100%] rounded"
            >
              <div
                
                className={`flex items-center xl:${props.widthXL}   min-[390px]:w-[350px]  min-[375px]:w-[375px]`}
              >
                <input
                  data-id={id}
                  id={attraction}
                  type="checkbox"
                  name={props.title + "-" + id}
                  data-value={attraction}
                  value={attraction}
                 onChange={handelChange}
                  className="w-4 h-4 attractions text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={attraction}
                  className="font-IBMPlexSans ms-2 text-md font-medium text-gray-900  p-2  "
                >
                  {attraction}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
