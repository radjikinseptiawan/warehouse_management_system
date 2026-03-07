import { ChangeEvent, ReactNode, useRef, useState } from "react";

export function Input({children}:{children:ReactNode}){
    return(
        <div>
        {children}   
        </div>  
    )
}

export function Basic({title,types,mind}:{title:string,types:string,mind:string}){
    return(
    <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600">{title}</label>
            <input type={types} id={title} className="border-2 text-gray-400 
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

export function Color({types = 'color',title,mind=''}:{title:string,types?:string,mind?:string}){
    const [color,setColor] = useState<string>("#ffffff")
    const ref = useRef<null | HTMLInputElement>(null)

    const selectColorChanger = ()=>{
        ref.current?.click()
    }
    return(
    <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600">{title}</label>
         
            <div 
            style={{backgroundColor:color}}
            onClick={selectColorChanger}
            className={`p-4 border rounded-full`}>

            </div>
            <input ref={ref} onChange={(e)=>setColor(e.target.value)} type={types} id={title} className="border-2 text-gray-400 
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


export function Image({title,types="file",mind=''}:{title:string,types?:string,mind?:string}){
    const [image,setImage] = useState("/upload.png")
    const reference = useRef<null | HTMLInputElement>(null)

    const selectImage = (e: ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.files?.[0]
        if(target){
            const file = URL.createObjectURL(target)
            setImage(file)
        }
    }

    const clickeInput= ()=>{
        reference.current?.click()
    }
    return(
        <div className="flex items-start flex-col ">
        <label htmlFor={title} className=" text-md  text-gray-600"></label>
         <div onClick={clickeInput} className="p-2 w-72 rounded-md  h-72">
            <img src={image} alt="" />
         </div>

            <input id={title}
            hidden
            ref={reference}
            type={types}
            accept="image/png, image/jpeg, image/jpg" 
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

Input.Basic = Basic
Input.Color = Color
Input.Image = Image
export default Input