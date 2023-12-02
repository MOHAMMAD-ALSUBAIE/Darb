import { useState } from "react";
export default function DropDown(props) {
  const handelClick = () => {
    const title = props.title;
    console.log("clicked me", props.title, props.active[props.title]);
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
  return (
    <div>
      <button
        id={props.title}
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="w-[200px] font-IBMPlexSans text-[16px] text-gray-700  border-gray-600 flex justify-around items-center mt-6  xl:w-[230px] md:w-[140px]  h-[44px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#fff] border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
        type="button"
        onClick={handelClick}
      >
        {props.title}{" "}
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
          props.active[props.title] ? "block" : "hidden"
        } w-48 bg-white divide-y divide-gray-100 rounded-lg shadow absolute   xl:w-[230px] md:w-[140px]  min-[390px]:w-[350px]  min-[375px]:w-[375px]`}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700  xl:w-[230px] md:w-[140px]   min-[390px]:w-[350px]  min-[375px]:w-[375px]"
          aria-labelledby="dropdownCheckboxButton"
        >
          {props.tags.map((attraction, id) => (
            <li key={id}>
              <div className="flex items-center  xl:w-[230px] md:w-[140px]   min-[390px]:w-[350px]  min-[375px]:w-[375px]">
                <input
                  id={attraction}
                  type="checkbox"
                  name={props.title + "-" + id}
                  value={attraction}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={(e) => {
                    console.log(e.currentTarget);
                  }}
                />
                <label
                  htmlFor={attraction}
                  className="font-IBMPlexSans ms-2 text-md font-medium text-gray-900 hover:bg-[#7979797f] p-2 w-[100%] "
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
