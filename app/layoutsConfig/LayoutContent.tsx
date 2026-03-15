"use client"

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";
import TopBar from "../component/ux/TopBar";
import Sliders from "../component/ux/Sliders";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setIsOpenDelete, setIsOpendit, setIsOpenFilter, setIsOpenOverlay } from "../slicers/openOverlaySlicer";

export default function LayoutContent({children}:{children:ReactNode}){
 const [isOpen,setIsOpen] = useState<boolean>(false)
 const isOpenOverlay = useAppSelector((state)=>state.overlay.isOpenOverlay)
 const isOpenHapus = useAppSelector(state=>state.overlay.isOpenDelete)
 const isOpenEdit = useAppSelector((state)=>state.overlay.isOpenEdit)
 const isOpenFilter = useAppSelector(state=>state.overlay.isOpenFilter)
 const dispatch = useAppDispatch()


  const closeOverlay = ()=>{
    dispatch(setIsOpenOverlay(false))
    dispatch(setIsOpenDelete(false))
    dispatch(setIsOpenFilter(false))
    dispatch(setIsOpendit(false))
  }  
 return(
            <div className="flex min-h-screen">
           {
                    (isOpenOverlay || isOpenHapus || isOpenEdit || isOpenFilter) && <div onClick={closeOverlay} className="bg-black/80 z-40 h-full w-full fixed"></div>
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
    
              <div className="flex-1 overflow-y-scroll h-[100vh] flex flex-col">
                <TopBar clicker={() => setIsOpen(!isOpen)} />
    
                <main className="p-4 mt-12">
                  {children}
                </main>
              </div>
    
            </div>        
 )   
}