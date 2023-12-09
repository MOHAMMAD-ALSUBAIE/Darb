export default function H1 (props) {
    return (<h1 className={`font-IBMPlexSans xl:text-[44px] md:text-[30px] sm:text-[20px] text-[30px] font-bold ${props.classCustomName}`}>{props.children}</h1>)
}