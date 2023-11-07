import InputField from "./InputField";
import Options from "./Options";
import Button from "./Button";
import InputFieldIcon from "./InputFieldIcon";
import dateIcon from "/dateIcon.png";
import dollarIcon from "/dollarIcon.png";
import searchIcon from "/searchIcon.png";
import starIcon from "/starIcon.png";
import travelIcon from "/travelIcon.png";
import locationIcon from "/locationIcon.png";

export default function Form() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="border rounded-lg bg-white  relative mt-[40px] md:top-[-305px] top-[-102px] z-10  border-[#AFB5B5] xl:w-[80%]"
      >
        <section className="m-[30px]">
          <div className="flex gap-8 mb-[15px] flex-wrap md:justify-start justify-center">
            <InputField
              icon={locationIcon}
              name="Destination"
              label="Destination"
              type="text"
              id="Destination"
              placeholder="E.g,Riyadh, Dammam"
            />
            <InputField
              icon={dateIcon}
              name="TripDate"
              label="Trip Date"
              type="text"
              id="TripDate"
              placeholder="10,sep-20,sep"
            />
            <InputField
              icon={dollarIcon}
              name="Budget"
              label="Budget"
              type="text"
              id="Budget"
              placeholder="Level of spending"
            />
            <InputField
              icon={starIcon}            
              widthXL="140px"
              widthMD="140px"
              name="interests"
              label="Main interests"
              type="text"
              id="interests"
              placeholder="history,nature,shopping"
            />
          </div>
          <div className="flex md:flex-nowrap flex-wrap  gap-8 md:justify-start justify-center">
            <Options
              icon={travelIcon}
              widthLaptopSize="140px"
              smallSize="400px"
              name="TravelCompany"
              label="Travel Companions"
              id="TravelCompany"
              placeholder="(Solo, Family, Friends)"
            />

            <InputField
              
              name="AdditionalPreference"
              widthSM="140px"
              label="Additional Preference"
              type="text"
              id="Preference"
              placeholder="Tell us more about your preferences"
              widthXL="400px"
            />
            <Button
             
              class="self-end flex items-center justify-center md:w-[40px] md:h-[40px] w-[400px] h-[40px] rounded-[10px] bg-[#230751]"
              type="submit"
            >
              <InputFieldIcon  icon={searchIcon}/>
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
}
