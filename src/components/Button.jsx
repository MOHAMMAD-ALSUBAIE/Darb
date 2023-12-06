import InputFieldIcon from "./InputFieldIcon";
export default function Button(props) {
const handlerClick=()=>{
  props.onClick()
}
  return (
    <button onClick={handlerClick} type={props.type}  className={`${props.class} font-IBMPlexSans hover:bg-[#230751b6]`}>
      {props.children}
    </button>
  );
}
