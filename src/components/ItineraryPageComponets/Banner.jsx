import banner from "/banner.png"
export default function Banner(props) {
    return(
        <div className=" h-[350px]">
            <img className={props.class} src={banner} alt="banner"/>
        </div>
    )
}