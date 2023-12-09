export default function H2 (props) {
    return (<h2  className={`font-IBMPlexSans xl:text-[27px] md:text-[20px] text-[25px] ${props.ClassNameCustom}`}>{props.children}</h2>)
}