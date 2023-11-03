import InputField from "./InputField";
import Options from "./Options";
import Button from "./Button";
export default function Form() {
    return (
        <div>
            <form className="border rounded-lg relative top-[250px]  border-[#AFB5B5] w-[70%]">
             <section className="m-[30px]">
             <div className="flex gap-8 mb-[15px] flex-wrap">
                    <InputField
                        name="Destination"
                        label="Destination"
                        type="text"
                        id="Destination"
                        
                        placeholder="E.g,Riyadh, Dammam"
                    />
                    <InputField
                        name="TripDate"
                        label="Trip Date"
                        type="text"
                        id=""
                        placeholder="10,sep-20,sep"
                    />
                    <InputField
                        name="Budget"
                        label="Budget"
                        type="text"
                        id="Budget"
                        placeholder="Level of spending"
                    />
                    <InputField
                        name="interests"
                        label="Main interests"
                        type="text"
                        id="interests"
                        placeholder="history,nature,shopping"
                        width='w-[500px]'
                    />
                </div>
                <div className="flex gap-8">
                 <Options   
                        name="TravelCompany"
                        label="Travel Companions"
                        id="TravelCompany"
                        placeholder="(Solo, Family, Friends)"
                    />
                
                <InputField
                        name="AdditionalPreference"
                        label="Additional Preference"
                        type="text"
                        id="Preference"
                        placeholder="Tell us more about your preferences"
                     
                        width='w-[500px]'
                    />
                   <Button class="self-end flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-[#230751]" type='submit' />
                </div>
             </section>
            </form>
        </div>
    );
}
