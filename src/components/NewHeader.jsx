import logo from "/Logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import isAuth from "../functions/IsAuth";

export default function NewHeader() {
  const [load, setLoad] = useState();
  const [isAuthState, setIsAuthState] = useState(false);

  useEffect(() => {
    const asyncFn = async () => {
      const res = await isAuth();
      if (res?.data.isAuth) {
        setIsAuthState(true);
      } else {
      }
    };
    asyncFn();
  }, []);

  const handelLogout = async () => {
    try {
      if (isAuthState) {
        console.log("cliked");
        setLoad(true);
        axios.defaults.withCredentials = true;
        const response = await axios.delete(
          `${import.meta.env.VITE_API}/user/logout`
        );
        console.log(response);
        setIsAuthState(false);
        document.cookie =
          "username=connect.sid; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="ml-[5vw] max-[600px]:ml-0 w-20" alt="Logo" />
          </Link>

          {isAuthState ? (
            <div className="flex items-center lg:order-2">
              <Link
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                to={"/favoriteList"}
              >
                Favorite List
              </Link>

              <button
                onClick={handelLogout}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center lg:order-2">
              <Link
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                to={"/login"}
              >
                Login
              </Link>

              <Link
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                to={"/Register"}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
