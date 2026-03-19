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
import { convertToIdr } from "@/app/layers/businessLogic/pagination"
import { setAlamatKaryawan, setGajiKaryawan, setMulaiKerja, setNamaKaryawan, setStatus } from "@/app/slicers/karyawanSlicers"
import { setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function Page(){
   
    const pegawai = [
        {
            nama:"Mang Andri",
            salary:1500000,
            masuk:"24 April 2025",
            alamat:"Setiadami",
            status:"Aktif"
        },
        {
            nama:"Kaffa",
            salary:500000,
            masuk:"24 April 2025",
            alamat:"Setiadami",
            status:"Aktif"
        },
        {
            nama:"Direktur",
            salary:1000000,
            masuk:"24 April 2025",
            alamat:"Setiadami",
            status:"Aktif"
        }
    ]

    const namaKaryawan = useAppSelector(s=>s.karyawan.namaKaryawan)
    const alamatKaryawan = useAppSelector(s=>s.karyawan.alamatKaryawan)
    const gajiKaryawan = useAppSelector(s=>s.karyawan.gajiKaryawan)
    const statusKaryawan = useAppSelector(s=>s.karyawan.status)
    const mulaiKerja = useAppSelector(s=>s.karyawan.mulaiKerja)
    const isOpenEdit = useAppSelector(s=>s.overlay.isOpenEdit)
    const isOpenOverlay = useAppSelector((s)=>s.overlay.isOpenOverlay)
    const dispatch = useAppDispatch()
    return(
        <div className="flex flex-col h-full w-full">
            <h1 className="text-black font-bold text-center text-3xl">Karyawan</h1>
            <div className="my-10 flex items-center justify-center">
                <CardsView.Containt children={<TeamIcon/>} containt={pegawai.length} text="Jumlah Pegawai"/>
                <CardsView.Salary children={<Money/>} containt={convertToIdr(pegawai.reduce((acc,item)=>{
                    return acc + item.salary
                },0))} text="Total Gaji Karyawan" />
            </div>
        
            <div className="text-black">
                <ButtonNewLayers.Success click={()=>dispatch(setIsOpenOverlay(true))} text="Tambah Karyawan"/>
            </div>
        
            <Table2Data>
                <Table2Data.KaryawanTable/>
                <tbody>
                {
                    pegawai.map((item,index)=>{
                        return(                      
                <Table2Data.BarisTableKaryawan
                    pegawai={item.nama}
                    clickRow={()=>dispatch(setIsOpendit(true))}
                    key={index}
                    salary={`${convertToIdr(item.salary)}`}
                    enrollment={item.masuk}
                    status={item.status}
                    alamat={item.alamat}
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
                namaKaryawanChange={(e)=>dispatch(setNamaKaryawan(e.target.value))}
                status={statusKaryawan}
                statusChange={(e)=>dispatch(setStatus(e.target.value))}
                alamatKaryawan={alamatKaryawan}
                mulaiKerja={mulaiKerja}
                mulaiKerjaChange={(e)=>dispatch(setMulaiKerja(e.target.value))}
                alamatKaryawanChange={(e)=>dispatch(setAlamatKaryawan(e.target.value))}
                gajiKaryawan={Number(gajiKaryawan)}
                gajiKaryawanChange={(e)=>dispatch(setGajiKaryawan(Number(e.target.value)))}
                cancelClick={()=>dispatch(setIsOpenOverlay(false))} title="Tambah Karyawan"/>
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
                        namaKaryawan={namaKaryawan}
                        namaKaryawanChange={(e)=>dispatch(setNamaKaryawan(e.target.value))}
                        status={statusKaryawan}
                        statusChange={(e)=>dispatch(setStatus(e.target.value))}
                        alamatKaryawan={alamatKaryawan}
                        mulaiKerja={mulaiKerja}
                        mulaiKerjaChange={(e)=>dispatch(setMulaiKerja(e.target.value))}
                        alamatKaryawanChange={(e)=>dispatch(setAlamatKaryawan(e.target.value))}
                        gajiKaryawan={Number(gajiKaryawan)}
                        gajiKaryawanChange={(e)=>dispatch(setGajiKaryawan(Number(e.target.value)))}
                        cancelClick={()=>dispatch(setIsOpendit(false))} title="Edit Karyawan"/>

                        </>
                    )
                }
            </AnimatePresence>
            </div>               
    )
}