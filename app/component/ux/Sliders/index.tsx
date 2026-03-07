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
        <>
        <div className="bg-white p-5 
        font-semibold bg fixed top-10 z-10 
        h-screen shadow-xl lg:w-80 md:w-72 text-green-500">
           <button>

           </button>
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
        </>
    )
}