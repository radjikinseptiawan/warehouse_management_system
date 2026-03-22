"use client"

import  Buttons, { ButtonNewLayers }  from "@/app/component/ui/finansial/button"
import CardsView from "@/app/component/ui/finansial/cards"
import PopUpLayer from "@/app/component/ui/finansial/popUp"
import Table2Data from "@/app/component/ui/finansial/table"
import HeaderOperationalTable from "@/app/component/ui/finansial/table/tableOperasional/header"
import TableRowOperational from "@/app/component/ui/finansial/table/tableOperasional/row"
import TeamIcon from "@/app/component/ui/icon/Employee"
import Money from "@/app/component/ui/icon/Money"
import ProductIcon from "@/app/component/ui/icon/Product"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { isCantMinus } from "@/app/layers/businessLogic/karyawan"
import { convertToIdr } from "@/app/layers/businessLogic/pagination"
import { setAlamatKaryawan, setGajiKaryawan, setMulaiKerja, setNamaKaryawan, setStatus } from "@/app/slicers/karyawanSlicers"
import { setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { setBiayaOperasional, setNamaOperasional } from "@/app/slicers/operasionalSlicer"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

export default function Page(){
    const [allOperasional,setAllOperasional] = useState<{
        nama_operasional: string,
        id:number|string| any,
        biaya_operasional:number | any,
    }[] | null>([])
    const [selectedKaryawan,setSelectedKaryawan] = useState<{
        nama_karyawan: string,
        id:number,
        status: string,
        gaji_karyawan:number | any,
        mulai_kerja: string,
        alamat_karyawan:string
    } | null>()
    const [selectOperasional, setSelectOperasional] = useState<number>(0)
    const namaOperasional = useAppSelector(s=>s.operasional.nama_operasional)
    const biayaOperasional = useAppSelector(s=>s.operasional.biaya_operasional)
    const isOpenEdit = useAppSelector(s=>s.overlay.isOpenEdit)
    const isOpenOverlay = useAppSelector((s)=>s.overlay.isOpenOverlay)
    const dispatch = useAppDispatch()

    const resetValue = ()=>{
            dispatch(setIsOpendit(false))
            dispatch(setIsOpenOverlay(false))
            dispatch(setNamaOperasional(""))
            dispatch(setBiayaOperasional(0))
    }


    const getAllOperasional = async()=>{
        try{
            const res= await fetch("/api/operasional",{
                method:"GET"
            })

            const data = await res.json()
            setAllOperasional(data.data)
        }catch(e){
            return console.error(e)
        }
    }

    const updateOperasional = async()=>{
        try{
            const res = await fetch(`/api/operasional/${selectOperasional}`,{
                method:"PATCH",
                body:JSON.stringify({
                    nama_operasional:namaOperasional,
                    biaya_operasional:biayaOperasional,
                })
            })

            const data = await res.json()
            getAllOperasional()
            resetValue()
        }catch(e){
            console.error(e)
        }
    }

    const getSelectedOperasional = async(id: number)=>{
       try
       {    
        const res= await fetch(`/api/operasional/${id}`,{
                method:"GET"
            })
            const data = await res.json()
            dispatch(setNamaOperasional(data.data?.nama_operasional || ""))
            dispatch(setBiayaOperasional(data.data?.biaya_operasional || 0))
        }catch(e){
            return console.error(e)
        }    
    }

    useEffect(()=>{
        getAllOperasional()
    },[])

    const addOperasional = async()=>{
        try{
            const res = await fetch("/api/operasional",{
                method:"POST",
                body:JSON.stringify({
                    biaya_operasional:biayaOperasional,
                    nama_operasional:namaOperasional
                })
            })

            const data = await res.json()
            if(!data) console.log("failed catch data",data)
            resetValue()    
            getAllOperasional()
        }catch(e){
            console.error(e)
        }
    }

    return(
        <div className="flex flex-col h-full w-full">
            <h1 className="text-black font-bold text-center text-3xl">Operasional</h1>
            <div className="my-10 flex items-center justify-center">
                <CardsView.Containt children={<ProductIcon/>} containt={allOperasional?.length} text="Total Jumlah Operasional"/>
                <CardsView.Salary children={<Money/>} containt={convertToIdr(allOperasional?.reduce((acc: any,item : any)=>{
                    return acc + item.biaya_operasional
                },0))} text="Total Biaya Operasional" />
            </div>
        
            <div className="text-black">
                <ButtonNewLayers.Success click={()=>dispatch(setIsOpenOverlay(true))} text="Tambah Operasional"/>
            </div>
        
            <Table2Data>
                <HeaderOperationalTable/>
                <tbody>
                {
                    allOperasional?.map((item,index)=>{
                        return(                      
                <TableRowOperational
                    clicker={()=>{
                        dispatch(setIsOpendit(true))
                        setSelectOperasional(item.id)
                        getSelectedOperasional(item.id)
                    }}
                    key={index}
                    namaOperasional={item.nama_operasional}
                    biayaOperasional={convertToIdr(item.biaya_operasional)}
                />    
                        )
                    })
                }    
                </tbody>
            </Table2Data>

            <AnimatePresence>
              {isOpenOverlay && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => dispatch(setIsOpenOverlay(false))}
                    className="fixed inset-0 bg-black/50 z-40"/>

                <PopUpLayer.AddOperational 
                namaOperasional={namaOperasional}
                confirm={addOperasional}
                namaOperasionalChange={(e)=>dispatch(setNamaOperasional(e.target.value))}
                biayaOperasional={Number(biayaOperasional)}
                biayaOperasionalChange={(e)=>isCantMinus(e,{dispatch,setGajiKaryawan:setBiayaOperasional})}
                cancelClick={()=>{
                    dispatch(setIsOpenOverlay(false))
                    resetValue()
                    }} title="Tambah Operasional"/>
            </>
          )}
            </AnimatePresence>
            
            <AnimatePresence>
                {
                    isOpenEdit && (
                        <>
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            onClick={()=>dispatch(setIsOpendit(false))}
                        />

                        <PopUpLayer.AddOperational 
                        confirm={updateOperasional}
                        namaOperasional={namaOperasional || ""}
                        namaOperasionalChange={(e)=>dispatch(setNamaOperasional(e.target.value))}
                        biayaOperasional={Number(biayaOperasional || 0)}
                        biayaOperasionalChange={(e)=>dispatch(setBiayaOperasional(Number(e.target.value)))}
                        cancelClick={()=>{
                            dispatch(setIsOpendit(false))
                            resetValue()
                            }} title="Edit Operasional"/>

                        </>
                    )
                }
            </AnimatePresence>
            </div>               
    )
}