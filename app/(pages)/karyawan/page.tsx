"use client"

import  Buttons, { ButtonNewLayers }  from "@/app/component/ui/finansial/button"
import CardsView from "@/app/component/ui/finansial/cards"
import PopUpLayer from "@/app/component/ui/finansial/popUp"
import Table2Data from "@/app/component/ui/finansial/table"
import TeamIcon from "@/app/component/ui/icon/Employee"
import EyeIcon from "@/app/component/ui/icon/eye"
import EyeOffIcon from "@/app/component/ui/icon/eye-off"
import Money from "@/app/component/ui/icon/Money"
import Input from "@/app/component/ui/Input"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { isCantMinus } from "@/app/layers/businessLogic/karyawan"
import { convertToDate, convertToIdr } from "@/app/layers/businessLogic/pagination"
import { addKaryawanLogic, editKaryawanLogic, getAllKaryawan, getKaryawanById } from "@/app/layers/dataLayer/karyawan"
import { setAlamatKaryawan, setGajiKaryawan, setMulaiKerja, setNamaKaryawan, setStatus } from "@/app/slicers/karyawanSlicers"
import { setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { AnimatePresence, motion } from "motion/react"
import { ChangeEvent, useEffect, useState } from "react"

export default function Page(){
    const [allKaryawan,setAllKaryawan] = useState<{
        nama_karyawan: string,
        id:number,
        status: string,
        gaji_karyawan:number | any,
        mulai_kerja: string,
        alamat_karyawan:string
    }[] | null>([])
    const [selectedKaryawan,setSelectedKaryawan] = useState<{
        nama_karyawan: string,
        id:number,
        status: string,
        gaji_karyawan:number | any,
        mulai_kerja: string,
        alamat_karyawan:string
    } | null>()
    const [selectKayawan, setSelectKaryawan] = useState<number>(0)
    const namaKaryawan = useAppSelector(s=>s.karyawan.namaKaryawan)
    const alamatKaryawan = useAppSelector(s=>s.karyawan.alamatKaryawan)
    const gajiKaryawan = useAppSelector(s=>s.karyawan.gajiKaryawan)
    const statusKaryawan = useAppSelector(s=>s.karyawan.status)
    const mulaiKerja = useAppSelector(s=>s.karyawan.mulaiKerja)
    const isOpenEdit = useAppSelector(s=>s.overlay.isOpenEdit)
    const isOpenOverlay = useAppSelector((s)=>s.overlay.isOpenOverlay)
    const dispatch = useAppDispatch()

    const resetValue = ()=>{
            dispatch(setIsOpendit(false))
            dispatch(setIsOpenOverlay(false))
            dispatch(setGajiKaryawan(0))
            dispatch(setAlamatKaryawan(""))
            dispatch(setNamaKaryawan(""))
            dispatch(setStatus(""))
    }



    const updateKaryawan = async()=>{
        try{
            const payload = {
                namaKaryawan,
                alamatKaryawan,
                gajiKaryawan,
                statusKaryawan,
                mulaiKerja
            }
            await editKaryawanLogic({payload,id:selectKayawan})
            getAllKaryawan(setAllKaryawan)
            resetValue()
        }catch(e){
            console.error(e)
        }
    }

    const getSelectedKaryawan = async(id:number)=>{
       try
       {    
        await getKaryawanById({
            id,
            dispatch,
            state:{
                setNamaKaryawan,
                setAlamatKaryawan,
                setMulaiKerja,
                setStatus,
                setGajiKaryawan
            }
        })
        
        }catch(e){
            return console.error(e)
        }    
    }

    useEffect(()=>{
        getAllKaryawan(setAllKaryawan)
    },[])

    const addKaryawan = async()=>{
        try{
            const payload = {
                namaKaryawan,
                alamatKaryawan,
                gajiKaryawan,
                statusKaryawan,
                mulaiKerja
            }
            await addKaryawanLogic(payload)
            resetValue()    
            getAllKaryawan(setAllKaryawan)
        }catch(e){
            console.error(e)
        }
    }

    return(
        <div className="flex flex-col h-full w-full">
            <h1 className="text-black font-bold text-center text-3xl">Karyawan</h1>
            <div className="my-10 flex items-center justify-center">
                <CardsView.Containt children={<TeamIcon/>} containt={allKaryawan?.length} text="Jumlah Pegawai"/>
                <CardsView.Salary children={<Money/>} containt={convertToIdr(allKaryawan?.reduce((acc: any,item : any)=>{
                    return acc + item.gaji_karyawan
                },0))} text="Total Gaji Karyawan" />
            </div>
        
            <div className="text-black">
                <ButtonNewLayers.Success click={()=>dispatch(setIsOpenOverlay(true))} text="Tambah Karyawan"/>
            </div>
        
            <Table2Data>
                <Table2Data.KaryawanTable/>
                <tbody>
                {
                    allKaryawan?.map((item,index)=>{
                        return(                      
                <Table2Data.BarisTableKaryawan
                    pegawai={item.nama_karyawan}
                    clickRow={()=>{
                        setSelectKaryawan(item.id)
                        dispatch(setIsOpendit(true))
                        getSelectedKaryawan(item.id)
                    }}
                    key={index}
                    salary={`${convertToIdr(item.gaji_karyawan)}`}
                    enrollment={`${convertToDate( new Date(item.mulai_kerja))}`}
                    status={item.status}
                    alamat={item.alamat_karyawan}
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

                <PopUpLayer.Add 
                namaKaryawan={namaKaryawan}
                confirm={addKaryawan}
                namaKaryawanChange={(e)=>dispatch(setNamaKaryawan(e.target.value))}
                status={statusKaryawan}
                statusChange={(e)=>dispatch(setStatus(e.target.value))}
                alamatKaryawan={alamatKaryawan}
                mulaiKerja={mulaiKerja}
                mulaiKerjaChange={(e)=>dispatch(setMulaiKerja(e.target.value))}
                alamatKaryawanChange={(e)=>dispatch(setAlamatKaryawan(e.target.value))}
                gajiKaryawan={Number(gajiKaryawan)}
                gajiKaryawanChange={(e)=>isCantMinus(e,{dispatch,setGajiKaryawan})}
                cancelClick={()=>{
                    dispatch(setIsOpenOverlay(false))
                    resetValue()
                    }} title="Tambah Karyawan"/>
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

                        <PopUpLayer.Add 
                        confirm={updateKaryawan}
                        namaKaryawan={namaKaryawan || ""}
                        namaKaryawanChange={(e)=>dispatch(setNamaKaryawan(e.target.value))}
                        status={statusKaryawan || ""}
                        statusChange={(e)=>dispatch(setStatus(e.target.value))}
                        alamatKaryawan={alamatKaryawan || ""}
                        mulaiKerja={mulaiKerja || ""}
                        mulaiKerjaChange={(e)=>dispatch(setMulaiKerja(e.target.value))}
                        alamatKaryawanChange={(e)=>dispatch(setAlamatKaryawan(e.target.value))}
                        gajiKaryawan={Number(gajiKaryawan || 0)}
                        gajiKaryawanChange={(e)=>isCantMinus(e,{dispatch,setGajiKaryawan})}
                        cancelClick={()=>{
                            dispatch(setIsOpendit(false))
                            resetValue()
                            }} title="Edit Karyawan"/>

                        </>
                    )
                }
            </AnimatePresence>
            </div>               
    )
}