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
import { convertToDate, convertToIdr } from "@/app/layers/businessLogic/pagination"
import { setAlamatKaryawan, setGajiKaryawan, setMulaiKerja, setNamaKaryawan, setStatus } from "@/app/slicers/karyawanSlicers"
import { setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

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


    const getAllKaryawan = async()=>{
        try{
            const res= await fetch("/api/karyawan",{
                method:"GET"
            })

            const data = await res.json()
            setAllKaryawan(data.data)
        }catch(e){
            return console.error(e)
        }
    }

    const updateKaryawan = async()=>{
        try{
            const res = await fetch(`/api/karyawan/${selectKayawan}`,{
                method:"PATCH",
                body:JSON.stringify({
                    nama_karyawan:namaKaryawan,
                    alamat_karyawan:alamatKaryawan,
                    gaji_karyawan:gajiKaryawan,
                    status_karyawan:statusKaryawan,
                    mulai_kerja:mulaiKerja,                                   
                })
            })

            const data = await res.json()
            getAllKaryawan()
            resetValue()
        }catch(e){
            console.error(e)
        }
    }

    const getSelectedKaryawan = async()=>{
       try
       {    
        const res= await fetch(`/api/karyawan/${selectKayawan}`,{
                method:"GET"
            })
            const data = await res.json()
            dispatch(setNamaKaryawan(data.data?.nama_karyawan || ""))
            dispatch(setAlamatKaryawan(data.data?.alamat_karyawan || ""))
            dispatch(setMulaiKerja(data.data?.mulai_kerja || ""))
            dispatch(setStatus(data.data?.status || ""))
            dispatch(setGajiKaryawan(data.data?.gaji_karyawan || 0))
            console.log(data)
        }catch(e){
            return console.error(e)
        }    
    }

    useEffect(()=>{
        getAllKaryawan()
    },[])

    const addKaryawan = async()=>{
        try{
            const res = await fetch("/api/karyawan",{
                method:"POST",
                body:JSON.stringify({
                    nama_karyawan:namaKaryawan,
                    alamat_karyawan:alamatKaryawan,
                    gaji_karyawan:gajiKaryawan,
                    status_karyawan:statusKaryawan,
                    mulai_kerja:mulaiKerja,                
                })
            })

            const data = await res.json()
            if(!data) console.log("failed catch data",data)
            resetValue()    
            getAllKaryawan()
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
                        getSelectedKaryawan()
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
                gajiKaryawanChange={(e)=>dispatch(setGajiKaryawan(Number(e.target.value)))}
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
                        gajiKaryawanChange={(e)=>dispatch(setGajiKaryawan(Number(e.target.value)))}
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