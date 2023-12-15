import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import isAuth from "../functions/IsAuth";
import axios from "axios";

export default function UserDropDown(props){
   // const {isAuthState,setIsAuthState}=useContext(LandingPageContext)
    const [load,setLoad]=useState()
    const [isAuthState,setIsAuthState]=useState(false)
   
  useEffect(()=>{

    const asyncFn = async () => {

        const res =  await isAuth()
        if (res?.data.isAuth) {
            setIsAuthState(true)
        } else {
        }
    }
    asyncFn();
  },[])
    const handelLogout= async ()=>{
      try {
        if(isAuthState){
        console.log("cliked")
        setLoad(true)
        axios.defaults.withCredentials=true
        const response = await axios.delete(`${import.meta.env.VITE_API}/user/logout`)
        console.log(response)
      setIsAuthState(false)
      document.cookie = "username=connect.sid; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
      setLoad(false)
        }

      } catch (error) {
        console.log(error)
        setLoad(false)

      }
    }
    return(
        <div className=" font-IBMPlexSans flex top-8 flex-col absolute right-[0px]">
  <button
    onClick={ async () => {
      
      document
        .getElementById("dropdownAvatar")
        .classList.toggle("hidden");
    }}
    //  onBlur={()=>{
    //     document.getElementById("dropdownAvatar")
    //     .classList.add("hidden");
    //  }}
    id="dropdownUserAvatarButton"
    data-dropdown-toggle="dropdownAvatar"
    className="flex justify-center h-[60px] w-[180px] bg-[#fff0] rounded-full md:me-0  "
    type="button"
  >
    {/* <span className="sr-only">Open user menu</span> */}
    <div className="h-[60px] w-[60px] bg-[#f5f8ff00] rounded-full flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    </div>
  </button>
  {/* Dropdown menu */}
  <div
    id="dropdownAvatar"
    className="z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
  >
    {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div> */}
    <ul
      className={`${isAuthState?"hidden":""} py-2 text-sm text-gray-700 dark:text-gray-200`}
      aria-labelledby="dropdownUserAvatarButton"
    >
      <li>
        <Link
          to={'/login'}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to={'/register'}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Register
        </Link>
      </li>
   
    </ul>
    <ul
      className={`${isAuthState?"":"hidden"} py-2 text-sm text-gray-700 dark:text-gray-200`}
      aria-labelledby="dropdownUserAvatarButton"
    >
      <li>
        <Link
          to={'/favoriteList'}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          FavoriteList
        </Link>
      </li>
   
   
    </ul>
    <div className="py-2">
      <button
        onClick={handelLogout}
        className={`${isAuthState?"block":"hidden"} px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}
      >
        Sign out
      </button>
    </div>
  </div>
  {load ? (
            // <div className="  z-40 left-[45%] top-[20%] ">
             <div className="flex absolute top-[60px] right-7 z-40 justify-center">
                 <span class="loading"></span>
             </div>
          ) : (
            ""
          )}
</div>

    )
}