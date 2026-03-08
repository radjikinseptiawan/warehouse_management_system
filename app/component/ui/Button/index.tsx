import { ReactNode } from "react"

export function ButtonLayer({children}:{children:ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}

export function Button({clicker,text,color = "bg-[#048720]" }:{color?:string,clicker?:()=>void,text:string}){
    return(
    <button 
    onClick={clicker}
    className={`
    rounded-md ${color}
    font-normal hover:cursor-pointer 
    hover:shadow-2xs 
    lg:text-[17px] text-[12px] md:text-[14px]
    transition-all
    lg:w-50 md:w-30 w-20
    lg:p-2  md:p-1 my-1 p-1
    `}
    type="button"
    >{text}</button>
    )
}

export function Main({clicker,icon,text}:{icon:ReactNode,text:string,clicker?:()=>void}){
    return(
          <button className="p-2 
                    text-gray-500
                    border
                    hover:border-gray-600
                    cursor-pointer
                    hover:text-gray-600
                    hover:scale-105
                    transition-all
                    bg-white shadow-xl 
                    rounded-md flex items-center flex-col" onClick={clicker}>
                        {icon}
                            <p className="lg:text-[20px] md:text-[17px] text-[12px]">{text}</p>
                    </button>                  
    )
}

export function Plus({clicker}:{clicker:()=>void}){
    return(
        <button 
        onClick={clicker}
        className="fixed bg-[#048720] p-2 w-12 h-12 rounded-full shadow
        hover:cursor-pointer
        hover:shadow-xl
        bottom-10 lg:right-30 md:right-20 right-10 font-bold">+</button>

    )
}

ButtonLayer.Button = Button
ButtonLayer.Plus = Plus
ButtonLayer.Main = Main
export default ButtonLayer