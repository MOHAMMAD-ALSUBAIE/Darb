import InputFieldIcon from "./InputFieldIcon";
export default function Options(props) {
    return         <div>
    <label
        htmlFor={props.id}
        className="block mb-2 text-sm  font-bold text-[#000] "
    >
        {props.label}
    </label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <InputFieldIcon />
        </div>

        <select
            type={props.type}
            id={props.id}
            className="bg-[#fff] border border-[#AFB5B5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={props.placeholder}
            name={props.name}
        >
            <option value={"Solo"}>{props.placeholder}</option>
            <option value={"Solo"}>Solo</option>
            <option value={"Family"}>Family</option>
            <option value={"Friends"}>Friends</option>

        </select>
    </div>
</div>;
}