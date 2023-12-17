import banner from "/banner.png";
import UserDropDown from "../UserDropDown";

export default function Banner(props) {
  return (
    <div className=" object-cover h-[350px]">
      <img className={`${props.classCustomName} `} src={banner} />
    </div>
  );
}
