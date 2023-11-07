import InputFieldIcon from "./InputFieldIcon";
export default function Button(props) {
  return (
    <button type={props.type}  className={`${props.class} `}>
      {props.children}
    </button>
  );
}
