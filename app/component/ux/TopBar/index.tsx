"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hamburger from "../../ui/icon/Hamburger";
import Sliders from "../Sliders";
import { div } from "motion/react-client";
import { usePathname } from "next/navigation";

export default function TopBar({clicker}:{clicker:()=>void}){
    const params = usePathname()
    return(
    <>    
        <div className="p-2 h-12 z-30 shadow-xl fixed top-0 bg-green-600 w-full">
            <button onClick={clicker} className={`
            "bg-green-600 p-0.5 rounded-md" 
            transition-all cursor-pointer`}>
            {
                params == "/" ?  "" : <Hamburger/>

            }
            </button>
        
        </div>
</>

)
}