import { useRef, useEffect ,useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import isAuth from ".././functions/IsAuth";
import {onSubmit,afterSubmit} from "../functions/SubmitBG"

export default function LoginForm() {
  const [error,setError]=useState(false)
  const [massageError,setMassageError]=useState("")
  const [load,setLoad]=useState(false)

    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const button=useRef()
    useEffect(  () => {

       const asyncFn = async () => {
             try {
              const res = await isAuth()
              if (res.data.isAuth) {
                  navigate("/");
              } 
             } catch (error) {
              console.log(error.response)
             }
       }
       asyncFn();
        
       
    }, []);
    const handlerSubmit = async (event) => {
        event.preventDefault();
        onSubmit(button)//change the submit button color
        const emailInput = email.current.value.trim();
        const passwordInput = password.current.value.trim();
        const passwordInputSanitized=passwordInput.replace(/[^a-zA-Z0-9@#$%^&+=]/g, '')
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if(!emailInput||!passwordInput){
          setMassageError("Please fill all fields!")
          afterSubmit(button) //return the button to original color
          return
        }

        if(emailPattern.test(emailInput)){
           try {
            axios.defaults.withCredentials = true;
            setLoad(true)
            const response = await axios.post(`${import.meta.env.VITE_API}/user/login`, {
              email: emailInput,
              password:passwordInputSanitized
            })
            setLoad(false)
            if (response.data.isAuth) {

                navigate("/")
            }
           } catch (error) {
            button.current.classList.remove("bg-[#230751b6]")
            afterSubmit(button) //return the button to original color

            setLoad(false)
            setError(true)
            setMassageError(error.response.data.message)
            console.log(error.response)
           }
        }else{
          setMassageError("Please enter a valid email")
          afterSubmit(button) //return the button to original color

            return
        }
      
     
    };
    return (
  <>

  <section className="flex flex-col md:flex-row h-screen items-center">
  <div className="bg-indigo-600  lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img
      src="https://res.cloudinary.com/dr2baapqk/image/upload/v1701290083/Kingdom_Tower_bonxtf.jpg"
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
      {load ? (
             <div className="flex justify-center">
                 <span class="loading"></span>
             </div>
          ) : (
            ""
          )}
      <form onSubmit={handlerSubmit} className="mt-6" action="#" method="POST">
      <div
            className={` ${
              error ? "block" : "hidden "
            }  rounded-md bg-red-700 text-white p-2 left-[20%] bottom-[110%]`}
          >
            {massageError}
          </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            ref={email}
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
            ref={password}
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
          ref={button}
       
          type="submit"
          className="w-full block bg-[#230751] hover:bg-[#230751b6] focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
        >
          Log In
        </button>
      </form>
      <hr className="my-6 border-gray-300 w-full" />
     
      <p className="mt-8">
        Need an account?{" "}
        <Link to={"/register"} className="text-[#230751] hover:text-[#230751b6] font-semibold">
          Create an account
        </Link>
      </p>
    </div>
  </div>
</section>

  </>
    );
}
