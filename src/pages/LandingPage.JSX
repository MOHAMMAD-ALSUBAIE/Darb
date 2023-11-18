import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { useState } from "react";
import Card from "../components/Card";
import closeIcon from "/closeIcon.png"
export default function LandingPage() {
    const [transparentBackground,setTransparentBackground]=useState(null)
    const [dataOfCard,setDataOfCard]=useState(null)
    const [close,setClose]=useState(false)
    function handelTransform(state,dataOfClassifierImage=null){
        setDataOfCard(dataOfClassifierImage)
        setTransparentBackground(state)

    }
    // function handelClose(){
        
    //     setClose(true)
    //     console.log(transparentBackground)
    // }
    return (<>
        <div className={`relative z-20 `}>
        <Header />
        <Body  />
        <Footer/>
        </div>



            
 
    </>)
}
