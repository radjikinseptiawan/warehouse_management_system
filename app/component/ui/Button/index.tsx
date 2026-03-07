export default function Button({clicker,text}:{clicker:()=>void,text:string}){
    return(
    <button 
    onClick={clicker}
    className="
    rounded-md bg-[#048720] 
    font-semibold hover:cursor-pointer 
    hover:shadow-2xs 
    transition-all
    lg:w-40 md:w-36 w-20
    lg:p-3  md:p-2 p-1
    "
    type="button"
    >{text}</button>
    )
}