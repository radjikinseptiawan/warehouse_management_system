import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setImageProduct, setPublicId } from "@/app/slicers/productSlicers";
import { ChangeEvent, ReactNode, useRef, useState } from "react";

export function Input({children}:{children:ReactNode}){
    return(
        <div>
        {children}   
        </div>  
    )
}

export function Basic({title,change,types,mind,value}:{value?:string,change?:(e:ChangeEvent<HTMLInputElement>)=>void,title?:string,types:string,mind:string | any | null}){
    return(
    <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600">{title}</label>
            <input 
            autoComplete="off"
            onChange={change}
            value={value}
            type={types} id={title} className="border-2 text-gray-400 
            border-green-200 rounded-md
            lg:p-2 md:p-2 p-1  
            lg:my-2 md:my-2 my-1 
            lg:w-80 md:w-72 w-60
            " 
            placeholder={mind}
            />
    </div>
    )
}

export function Disabled({title,change,types,mind,value}:{value?:string,change?:(e:ChangeEvent<HTMLInputElement>)=>void,title:string,types:string,mind:string | any}){
    return(
    <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600">{title}</label>
            <input 
            autoComplete="off"
            onChange={change}
            value={value}
            type={types} id={title} className="border-2 text-gray-400 
            border-green-200 rounded-md
            lg:p-2 md:p-2 p-1  
            disabled bg-gray-300
            lg:my-2 md:my-2 my-1 
            lg:w-80 md:w-72 w-60
            " 
            placeholder={mind}
            />
    </div>
    )
}


export function Color({types = 'color',title,mind='',valued,change}:{valued?:string,change?:(e:ChangeEvent<HTMLInputElement>)=>void,
    title:string,types?:string,mind?:string}){
    const ref = useRef<null | HTMLInputElement>(null)

    const selectColorChanger = ()=>{
        ref.current?.click()
    }
    return(
    <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600">{title}</label>
         
            <div 
            style={{backgroundColor:valued}}
            onClick={selectColorChanger}
            className={`p-4 border rounded-full`}>

            </div>
            <input ref={ref} 
            value={valued}
            onChange={change} type={types} id={title} className="border-2 text-gray-400 
            border-green-200 rounded-md hidden
            lg:p-2 md:p-2 p-1  
            lg:my-2 md:my-2 my-1 
            lg:w-80 md:w-72 w-60
            " 
            placeholder={mind}
            />
    </div> 
    )
}


export function Image({title,types="file",mind='',images}:{images:string,title:string,types?:string,mind?:string}){
    
    const [imagePreview,setImagePreview] = useState("")
    const dispatch = useAppDispatch()
    const reference = useRef<null | HTMLInputElement>(null)

    const selectImage = async (e: ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.files?.[0]
        if(target){
            const image = URL.createObjectURL(target)
            setImagePreview(image)
           const formData = new FormData()
           formData.append("file",target)
            const response = await fetch("/api/upload",{
                method:"POST",
                body: formData
            }) 
            const data = await response.json()
            dispatch(setImageProduct(data.url))
            dispatch(setPublicId(data.public_id))
        }
    }

    const clickeInput= ()=>{
        reference.current?.click()
    }
    return(
        <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600"></label>
         <div onClick={clickeInput} className="p-2 md:w-52 w-30 rounded-md h-30  md:h-52">
            <img src={images} alt="" />
         </div>

            <input id={title}
            hidden
            ref={reference}
            type={types}
            accept="image/png, image/jpeg, image/jpg, image/webp, image/jfif" 
            onChange={(e)=>selectImage(e)}
            className="border-2 text-gray-400 
            border-green-200 rounded-md
            lg:p-2 md:p-2 p-1  
            lg:my-2 md:my-2 my-1 
            lg:w-80 md:w-72 w-60
            " 
            placeholder={mind}
            />
    </div> 
)    
}


export function ImageInboundOutbound({title,types="file",mind='',images}:{images:string,title:string,types?:string,mind?:string}){
   
    return(
        <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600"></label>
         <div className="p-2 md:w-52 w-30 rounded-md h-30  md:h-52">
            <img src={images} alt="" />
         </div>

            <input id={title}
            hidden
            type={types}
            accept="image/png, image/jpeg, image/jpg, image/webp, image/jfif" 
            className="border-2 text-gray-400 
            border-green-200 rounded-md
            lg:p-2 md:p-2 p-1  
            lg:my-2 md:my-2 my-1 
            lg:w-80 md:w-72 w-60
            " 
            placeholder={mind}
            />
    </div> 
)    
}

Input.Basic = Basic
Input.ImageInboundOutbound = ImageInboundOutbound
Input.Color = Color
Input.Image = Image
Input.Disabled = Disabled
export default Input