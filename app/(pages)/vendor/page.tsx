"use client"
import ButtonLayer, { Button } from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import { DataVendors } from "@/lib/type"
import { useEffect, useState } from "react"

export default function Page(){
    const [vendors,setVendors]= useState<DataVendors[]| null | undefined>([])
    const getVendors = async()=>{
        try{
            const response = await fetch("/api/vendors",{
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
            <h1 className="font-bold underline text-2xl text-center">List Vendors/Suppliers</h1>
            <div className="p-2">
                {
                    vendors ?
                    vendors?.length > 0 ?
                    vendors?.map((item,index)=>{
                        return(
                            <CardView.Basic key={index} color={item.warna_vendor} vendorName={item.nama_vendor} vendorAddress={item.alamat_vendor}/>
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
                    <h1 className="text-gray-400 text-center">Kamu Belum ada Vendors atau Suppliers!</h1>
                }
            </div>
        </div>
        </div>
    )
}