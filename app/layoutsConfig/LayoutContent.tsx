"use client"

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";
import TopBar from "../component/ux/TopBar";
import Sliders from "../component/ux/Sliders";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setIsOpenOverlay } from "../slicers/openOverlaySlicer";

export default function LayoutContent({children}:{children:ReactNode}){
 const [isOpen,setIsOpen] = useState<boolean>(false)
 const isOpenOverlay = useAppSelector((state)=>state.overlay.isOpenOverlay)
 const dispatch = useAppDispatch()
 return(
            <div className="flex min-h-screen">
           {
                    isOpenOverlay && <div onClick={()=>dispatch(setIsOpenOverlay(false))} className="bg-black/80 z-40 h-full w-full fixed"></div>
            }
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="sidebar"
                    className="top-10"
                    initial={{ x: -256 }}
                    animate={{ x: 0 }}
                    exit={{ x: -256 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sliders/>
                  </motion.div>
                )}
              </AnimatePresence>
    
              <div className="flex-1 flex flex-col">
                <TopBar clicker={() => setIsOpen(!isOpen)} />
    
                <main className="p-4 mt-12">
                  {children}
                </main>
              </div>
    
            </div>        
 )   
}