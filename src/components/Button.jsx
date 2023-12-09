import InputFieldIcon from "./InputFieldIcon";
export default function Button(props) {

  return (
    <button  type={props.type}  className={`${props.ClassNameCustom} font-IBMPlexSans hover:bg-[#230751b6]`}>
      {props.children}
    </button>
  );
}
