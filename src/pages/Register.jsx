import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import isAuth from ".././functions/IsAuth";
import closeDialog from "../functions/CloseDialog";
import closeIcon from "/closeIcon.png";
import DropDownCountry from "../components/DropDownCountry";
import country from "../functions/country";
export default function Register() {
  const [error, setError] = useState("");
  const [pageClicked, setPageClicked] = useState(false);
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();

  const email = useRef();
  const password = useRef();
  const passwordAgin = useRef();

  useEffect(() => {
    const asyncFn = async () => {
      // const res = await isAuth();
      console.log(res);
      if (res.data.isAuth) {
        console.log("you are already login in");
        navigate("/");
      } else {
      }
    };
    asyncFn();
  }, []);
  // const handlerSubmit = async (event) => {
  //   event.preventDefault();
  //   const firstNameInput = firstName.current.value;
  //   const lastNameInput = lastName.current.value;
  //   console.log(email.current.value);
  //   const emailInput = email.current.value;
  //   const passwordInput = password.current.value;
  //   const enterPassAgin = passwordAgin.current.value;
  //   if (
  //     !firstNameInput ||
  //     !lastNameInput ||
  //     !emailInput ||
  //     !passwordInput ||
  //     !passwordAgin
  //   ) {
  //     setError("Please fill all the fields");
  //     return;
  //   }
  //   if (passwordInput !== enterPassAgin) {
  //     setError("Password not match");
  //     return;
  //   }
  //   console.log(import.meta.env.VITE_API);
  //   axios.defaults.withCredentials = true;
  //   axios
  //     .post(`${import.meta.env.VITE_API}/user/register`, {
  //       firstName: firstNameInput,
  //       lastName: lastNameInput,
  //       email: emailInput,
  //       password: passwordInput,
  //       passwordAgin: enterPassAgin,
  //     })
  //     .then((response) => {
  //       setError("");
  //       if (response.status === 201) {
  //         navigate("/Login");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handlerSubmit=(e)=>{
e.preventDefault()
console.log(e.target)
  }

  const handelClickPage = (e) => {
    console.log(e.target.classList)

   // console.log(e.target.classList.contains("dropdown"))
    if(!e.target.classList.contains("dropdown")) {
      setPageClicked(true)

    }
  }
  const resetHandelClickPage = () => { // will pass to DropDwonCountry  component
    setPageClicked(false)
  }
  return (
    <>
      <section onClick={handelClickPage}  className="font-IBMPlexSans flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://res.cloudinary.com/dr2baapqk/image/upload/v1701290083/Kingdom_Tower_bonxtf.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-[#F5F8FF] w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Create your account to start new Adventure
            </h1>
            <form onSubmit={handlerSubmit} className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 mb-2 rounded-lg bg-[#FFFFFF] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus=""
                  autoComplete=""
                  required=""
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg mb-2 bg-[#FFFFFF] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus=""
                  autoComplete=""
                  required=""
                />
              </div>
              <div className="flex justify-between gap-1">
                <div className="w-[50%]">
                  <label className="block text-gray-700">Date Of birth</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg mb-2 bg-[#FFFFFF] mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                    required=""
                  />
                </div>

                <div className="w-[50%]">
                  <label className="block text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <DropDownCountry pageClicked={pageClicked} reset={resetHandelClickPage}/>
                  {/* <select data-te-select-init
                     
                    id="country"
                    name="country"
                    type="password"
                    placeholder="Country"
                    className="w-full px-4 py-3 rounded-lg mb-1 bg-[#FFFFFF] mt-2 border focus:border-blue-500
  focus:bg-white focus:outline-none "
                    required=""
                  >
                    {country.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>

                    }
                      
                    )
                    }
                    
                  </select> */}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Enter Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg mb-2 bg-[#FFFFFF] mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                    required=""
                  />
                </div>

                <div className="w-[45%]">
                  <label className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="ConfirmPassword"
                    id=""
                    placeholder="Confirm Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg mb-1 bg-[#FFFFFF] mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                    required=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
