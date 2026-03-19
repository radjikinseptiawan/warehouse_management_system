import { ReactNode } from "react"

export function ButtonNewLayers({children}:{children:ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}

export function ButtonSuccess({text,click}:{text:string,click:()=>void}){
    return <button className="bg-[#048720] text-white rounded-md p-2" onClick={click}>{text}</button>
}

export function ButtonFailed({text,click}:{text:string,click:()=>void}){
    return <button className="bg-[#d6d8d7] text-gray-600 text-white rounded-md p-2" onClick={click}>{text}</button>

}
ButtonNewLayers.Failed = ButtonFailed
ButtonNewLayers.Success = ButtonSuccess
export default ButtonNewLayers