import { useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import isAuth from ".././functions/IsAuth";
import closeIcon from "/closeIcon.png"
import closeDialog from "../functions/CloseDialog";
export default function LoginForm() {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    useEffect(  () => {

       const asyncFn = async () => {
            //   const res = await isAuth()
            //   if (res.data.isAuth) {
            //       console.log("you are already login in");
            //       navigate("/");
            //   } else {
            //   }
       }
       asyncFn();
        
       
    }, []);
    const handlerSubmit = async (event) => {
        event.preventDefault();
        const emailInput = email.current.value;
        const passwordInput = password.current.value;
        console.log(import.meta.env.VITE_API);
        let res;
        axios.defaults.withCredentials = true;
        axios
            .post(`${import.meta.env.VITE_API}/user/login`, {
                email: emailInput,
                password: passwordInput,
            })
            .then((response) => {
                console.log(response);
                res = response.data.isAuth;
                if (res&& response.data.role==="ADMIN") {

                    navigate("/adminPanel/");
                }
                else if(res){

                    navigate("/books")
                }
            })
            .catch((err) => console.log(err));

        // const response = await fetch(`${import.meta.env.VITE_API}/user/login`, {
        //     method: "POST",

        //     credentials: "include",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: emailInput,
        //         password: passwordInput,
        //     }),
        // });
        // const data = await response.json();
        // console.log(data);
    };
    return (
  <>

  <section className="flex flex-col md:flex-row h-screen items-center">
  <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img
      src="https://i.postimg.cc/rwTrJTsx/Ithra.png"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
  <div
    className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
  >
    <div className="w-full h-100">
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
        Log in to your account
      </h1>
      <form className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autofocus=""
            autoComplete=""
            required=""
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            minLength={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
            required=""
          />
        </div>
        <div className="text-right mt-2">
          <a
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
          >
            Forgot Password?
          </a>
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
        Need an account?{" "}
        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
          Create an account
        </a>
      </p>
    </div>
  </div>
</section>

  </>
    );
}
