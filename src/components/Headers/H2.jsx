export default function H2 (props) {
    return (<h2  className={`font-IBMPlexSans xl:text-[170%] md:text-[160%] text-[25px] ${props.ClassNameCustom}`}>{props.children}</h2>)
}