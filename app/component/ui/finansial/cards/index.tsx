import { PieChart } from "@mui/x-charts";
import { ReactNode, useState } from "react";
import TeamIcon from "../../icon/Employee";
import EyeOffIcon from "../../icon/eye-off";
import EyeIcon from "../../icon/eye";

function CardsView({children}:{children:ReactNode}){
    return(
        <div className="bg-white shadow-xl p-2 rounded-md">
        {children}
        </div>
    )
}

function CardsContaintText({children,text,containt}:{text:string,containt:string | number | any,children:ReactNode}){
    return(
        <div className="bg-white flex items-center justify-center flex-col p-2 shadow-xl w-sm h-32 text-green-500 text-center">
            { children }
            <p className="text-xl font-bold">{containt}</p>
            <h1 className="text-xl font-bold">{text}</h1>        
        </div>
    )
}

function CardsContaintSalary({children,text,containt}:{text:string,containt:string | number | any,children:ReactNode}){
    const [isOpen,setIsOpen] = useState(false)
    return(
        <div className="bg-white flex items-center justify-center flex-col p-2 shadow-xl w-sm h-32 text-green-500 text-center">
            { children }
            <p className="text-xl font-bold">{isOpen ? containt : "**********"}</p>
            <div className="flex gap-3">
            <h1 className="text-xl font-bold">{text}</h1>        
                <button onClick={()=>setIsOpen(!isOpen)}>
                    {
                        isOpen ? <EyeIcon/> : <EyeOffIcon/>
                    }
                </button>
            </div>
        </div>
    )
}

CardsView.Salary = CardsContaintSalary
CardsView.Containt = CardsContaintText
export default CardsView