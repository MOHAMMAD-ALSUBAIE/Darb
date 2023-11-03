export default function H1 (props) {
    return (<h1 className={`text-[44px] font-bold ${props.class}`}>{props.children}</h1>)
}