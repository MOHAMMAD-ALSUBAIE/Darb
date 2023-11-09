import Button from "../Button";
const ItineraryButton = (props) => {
    return (
        <Button class={`bg-[#230751] ${props.classMargin} rounded-md text-[#fff] flex justify-center items-center gap-2 w-[148px] h-[40px]  mr-3`}>
         {props.children}
        </Button>
    );
}

export default ItineraryButton;
