import H1 from "./Headers/H1.jsx";
import H2 from "./Headers/H2";
import Conatiner from "./container.jsx";
import Circles from "./Circles.jsx";
export default function Body(props) {
    return <div className="bg-[#0F0839]   text-[#fff]">
       {/* <Conatiner> */}
     <section className="flex justify-between mx-[10%]">
     <div className="pt-[80px] pb-[80px]">
            {/* content */}
            <H1 class="mb-4">Darb's Landmark Explorer</H1>
            <H2>Snap a Photo of a Landmark 📸<br className="mb-4"/>
            and Get Comprehensive<br className="mb-4"/>
             Information Instantly</H2>
        </div>
        <div className="py-9">
         <Circles/>
        </div>
     </section>
       {/* </Conatiner> */}
    </div>;
}