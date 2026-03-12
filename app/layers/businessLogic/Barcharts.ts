import { setCategoryName } from "@/app/slicers/categorySlicer";
import { label, object } from "motion/react-client";
import { Dispatch, SetStateAction } from "react";

export type DataFillBusiness = {
    data:string[] | null,
    actions:{
    setLabelsName:Dispatch<SetStateAction<string[] | null>>,
    setSeriesData:Dispatch<SetStateAction<{modal:number[]}>>
    }
}

export const fillDataBusiness = async ({data,actions}:DataFillBusiness)=>{
    try{
        if(!data || !Array.isArray(data)){
            console.warn("Data untuk chart kosong!")
            return
        }

        
        const grouping = data?.reduce((acc:any,item:any)=>{
        const capitalIncome = item.produk?.kategori?.nama_kategori || "Tanpa Kategori"
        if(!acc[capitalIncome]){
            acc[capitalIncome] = {modal:0}
        }
        acc[capitalIncome].modal += Number(item.nominal_modal) || 0 
        acc[capitalIncome].label += String(item.produk.kategori.nama_kategori) || ""
    
        return acc
},{})
        
        const labels = Object.keys(grouping)
        const modalValues = labels.map((label)=>grouping[label].modal)
        actions.setLabelsName(labels)
        actions.setSeriesData({modal:modalValues})
    }catch(e){
        console.error(e)
    }
 }

export const fillDataBusinessOut = async ({data,actions}:DataFillBusiness)=>{
    try{
        if(!data || !Array.isArray(data)){
            console.warn("Array kosong!")
        }

        const grouping = data?.reduce((acc: any,item: any)=>{
            const capitalOutcome = item.produk?.kategori?.nama_kategori || "Tanpa Kategori"
            if(!acc[capitalOutcome]){
            acc[capitalOutcome] = {modal:0}
            }

            acc[capitalOutcome].modal += Number(item.nominal_modal) || 0
            acc[capitalOutcome].label = String(item.produk.kategori.nama_kategori)
            
            return acc
        },{})
        const labels = Object.keys(grouping)
        const modalValues = labels.map(item=>grouping[item].modal)
        actions.setLabelsName(labels)
        actions.setSeriesData({modal:modalValues})
    }catch(e){
        console.error(e)
    }
}
