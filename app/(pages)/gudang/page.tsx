"use client"
import ButtonLayer, { Button } from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import { DataGudang } from "@/lib/type"
import { useEffect, useState } from "react"

export default function Page(){
    const [vendors,setVendors]= useState<DataGudang[]| null | undefined>([])
    console.log(vendors)
    const getVendors = async()=>{
        try{
            const response = await fetch("/api/lokasi_gudang",{
                method:"GET"
            })
            const data = await response.json()
            setVendors(data.data)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getVendors()
    },[])

    return(
        <div className="flex justify-center h-screen">
        <div className="bg-white shadow-xl p-2 rounded-md text-black md:w-3xl">
            <h1 className="font-bold underline text-2xl text-center">List Lokasi Gudang</h1>
            <div className="p-2">
                {
                    vendors ?
                    vendors?.length > 0 ?
                    vendors?.map((item,index)=>{
                        return(
                            <div className="my-2" key={index}>
                            <CardView.Basic
                            disableEdit
                                clickCheck={()=>console.log("entardulu")}
                            btnDel={()=>console.log("sebentar")}
                            key={index} color={item.warna_gudang} 
                            vendorName={item.nama_gudang} 
                            vendorAddress={item.alamat_gudang}/>
                            </div>
                        )
                    }) : 
                    Array.from({length:8}).map((_,index)=>{
                        return (
                            <div key={index++} className="my-2">
                            <CardView.BasicSkeleton/>
                            </div>
                        )    
                    })
                    :
                    <h1 className="text-gray-400 text-center">Kamu Belum ada lokasi gudang!</h1>
                }
            </div>
        </div>
        </div>
    )
}