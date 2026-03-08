import { ReactNode } from "react";

function CardView({card}:{card:ReactNode}){
    return(
        <div>{card}</div>
    )
}

function Basic({
    vendorName,
    vendorAddress,
    color,
    disableEdit,
    clickCheck,
    checklist,
    btnEdit,
    btnDel
}:{
        btnDel:()=>void,
        btnEdit:()=>void,
        disableEdit:boolean ,
        clickCheck:()=>void
        vendorName:string,
        vendorAddress?:string,
        color:string,
        checklist?:boolean | null| any,
        }){
    return(
        <div className="bg-[#fafafa] p-2 rounded-md border-b-3 border-green-500">
                   <input type="checkbox" checked={checklist} onChange={clickCheck} />
                    <span className="flex justify-between text-gray-600">
                    <h1 className="font-semibold">{vendorName}</h1>
                    <p>{vendorAddress}</p>
                    </span>
                    <div className="flex justify-between items-center">
                        <input type="color" value={color} disabled/>
                    <span>
                    <button disabled={disableEdit} 
                    onClick={btnEdit}
                    className={`${disableEdit ? 
                        "mx-1 cursor-not-allowed bg-gray-500 p-1 w-20 text-white font-bold rounded-md": 
                        "mx-1 cursor-pointer bg-yellow-500 p-1 w-20 text-white font-bold rounded-md"}`}
                    >Edit</button>
                    <button 
                    
                    onClick={btnDel}
                    className="mx-1 cursor-pointer bg-red-500 p-1 w-20 text-white font-bold rounded-md">Hapus</button>
                    </span>
                    </div>
                </div>
    )
}

function BasicSkeleton(){
    return(
 <div className="bg-[#e4dfdf] p-2 rounded-md border-b-3 border-green-500 animate-pulse">
            
            <div className="flex justify-between">
                <div className="h-4 bg-gray-400 rounded w-32"></div>
                <div className="h-4 bg-gray-400 rounded w-40"></div>
            </div>

            <div className="flex justify-between items-center mt-3">
                
                <div className="rounded-full w-6 h-6 bg-gray-400"></div>

                <div className="flex gap-2">
                    <div className="h-8 w-20 bg-gray-400 rounded-md"></div>
                    <div className="h-8 w-20 bg-gray-400 rounded-md"></div>
                </div>

            </div>
        </div>    )
}

CardView.BasicSkeleton = BasicSkeleton
CardView.Basic = Basic
export default CardView