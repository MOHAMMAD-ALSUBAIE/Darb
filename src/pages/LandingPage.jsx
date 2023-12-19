import Body from "../components/Body";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import Header from "../components/Header.jsx";

export default function LandingPage() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Perform actions after the component has fully loaded
      setLoader(true);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <NewHeader />

      <Header />
      <Body />
      <Footer />
    </div>
  );
}
