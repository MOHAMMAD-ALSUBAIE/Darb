import InputFieldIcon from "./InputFieldIcon";
export default function InputField(props) {
    return (
        <div>
            <label
                htmlFor={props.htmlFor}
                className="block mb-2 text-sm  font-bold text-[#000] "
            >
                {props.label}
            </label>
            <div className="relative">
                {props.icon?    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <InputFieldIcon icon={props.icon} />
                </div>:null}
             

                <input
                    type={props.type}
                    id={props.name}
                    className={` xl:w-[230px] md:w-[140px]  w-[400px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#fff] border border-[#AFB5B5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${props.icon?"pl-10":''} p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder={props.placeholder}
                    name={props.name}
               
                />
            </div>
        </div>
    );
}
