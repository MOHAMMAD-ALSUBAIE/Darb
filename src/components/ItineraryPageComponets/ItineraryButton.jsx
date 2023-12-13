import Button from "../Button";
const ItineraryButton = (props) => {
 const handelClick=()=>{
    props.onClick()
 }
    return (
        <button onClick={handelClick} className={`${props.classNameCustom?props.classNameCustom:'bg-[#230751] hover:bg-[#230751b6]'} ${props.classMargin} rounded-md text-[#fff] flex justify-center items-center gap-2 w-[148px] h-[40px]  mr-3`}>
         {props.children}
        </button>
    );
}

export default ItineraryButton;
