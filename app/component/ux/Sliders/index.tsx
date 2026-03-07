"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"

const listSliders = [
    {
        text:"Home",
        params:"/home",
        icon:"/SVG/dashboard-svgrepo-com (1).svg"
    },
    {
        text:"Notification",
        params:"/notification",
        icon:"/SVG/notification-bell-on-svgrepo-com (1).svg"    
    },
    {
        text:"Inventory",
        params:"/inventory",
        icon:"/SVG/inventory-svgrepo-com.svg"
    },
    {
        text:"Inbound",
        params:"/inbound",
        icon:"/SVG/filter-lines-svgrepo-com.svg"
    },
    {
        text:"Outbound",
        params:"/outbound",
        icon:"/SVG/outbound-svgrepo-com.svg"
    },
    {
        text:"Logout",
        logou:"/logout",
        icon:"/SVG/logout-2-svgrepo-com.svg"
    }
]

export default function Sliders(){
    const params = usePathname()
    return(
        <div className="p-2">
        <h1 className=" md:text-[17px] text-[12px] lg:text-xl text-center text-green-600 mt-5 font-bold">SiBumDes</h1>
        <hr className="text-gray-400"/>
        <div className="bg-white p-5 
        font-semibold relative top-5 z-10
        min-h-screen shadow-xl lg:w-80 md:w-72 text-green-500">
            <ul>
            {
                listSliders.map((item,index)=>{
                    return(
                        <a href={item.params} className={`p-3 flex items-center 
                        rounded-md
                        gap-2 text-72 hover:bg-green-200/20 ${item.params == params ? "bg-green-200/80":""}`} key={index}>
                            <div>
                            <Image src={item.icon as string} width={30} height={50} alt={item.text}/>
                            </div>
                            <li >{item.text}</li>
                        </a>
                    )
                })
            }   
            </ul>
        </div>
        </div>
    )
}