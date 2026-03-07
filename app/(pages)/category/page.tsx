"use client"
import ButtonLayer, { Button } from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setCategoryName } from "@/app/slicers/categorySlicer"
import { CategoryType, DataCategory, VendorType } from "@/lib/type"
import { useEffect, useState } from "react"


export default function Page(){
    const namaCategory = useAppSelector(state=>state.category.namaCategory)
    const warnaCategory = useAppSelector(state=>state.category.warnaCategory)
    const dispatch = useAppDispatch()

    const [category,setCategory] = useState<CategoryType[]| null>([])
    const getVendors = async()=>{
        try{
            const response = await fetch("/api/category",{
                method:"GET"
            })
            const data = await response.json()
            setCategory(data.data)
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
            <h1 className="font-bold underline text-2xl text-center">List Kategori</h1>
            <div className="p-2">
                {
                    category ?
                    category?.length > 0 ?
                    category?.map((item,index)=>{
                        return(
                            <div className="my-2" key={index}>
                            <CardView.Basic key={index} color={item.warna_category} vendorName={item.nama_kategori}/>
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
                    <h1 className="text-gray-400 text-center">Kamu Belum ada list Kategori!</h1>
                }
            </div>
        </div>
        <ButtonLayer.Plus clicker={()=>console.log("test")}/>
        <PopUpLayer.PopUpCategory/>
        </div>
    )
}


