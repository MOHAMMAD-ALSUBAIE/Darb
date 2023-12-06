import banner from "/banner.png"
export default function Banner(props) {
    return(
        <div className=" object-cover h-[350px]">
            <img className={`${props.classCustomName} `} src={banner} alt="banner"/>
        </div>
    )
}