import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import closeIcon from "/closeIcon.png"
import isAuth from "../functions/IsAuth"
import axios from "axios";
import { LandingPageContext } from "../components/ContextAPI/ContextApp";
export default function LandingPage() {
    
    const [isAuthState,setIsAuthState]=useState(false)
    const [loader,setLoader]=useState(false)
   
  useEffect(()=>{

    const asyncFn = async () => {

        const res =  await isAuth()
        console.log(res);
        if (res.data.isAuth) {
            console.log("you are already login in");
            setIsAuthState(true)
        } else {
        }
    }
    asyncFn();
  })
  useEffect(() => {
    
    const handleLoad = () => {
      // Perform actions after the component has fully loaded
      setLoader(true)
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  

    // function handelClose(){
        
    //     setClose(true)
    //     console.log(transparentBackground)
    // }
    return (
        <LandingPageContext.Provider value={{isAuthState,setIsAuthState}}>

        <div  className={`relative z-20 `}>
        <Header />
        <Body  />
        <Footer/>
        </div>
           
        </LandingPageContext.Provider>

            
 
    )
}
