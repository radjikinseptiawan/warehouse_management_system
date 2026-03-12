import { Dispatch, SetStateAction } from "react"
import { fetchChartDataInbound } from "../dataLayer/PieLayers"
import { PieChartDataType } from "../../component/ux/Chart/PieChart"

export type DataFillBusiness = {
    data:any[] | null,
    actions:{
    setLabelsName:Dispatch<SetStateAction<any[] | string[]>>,
    setSeriesData?:Dispatch<SetStateAction<any[] | null>>
    }
}

export const fillDataPieChart =  ({data,actions}:DataFillBusiness)=>{
    if(!data || !Array.isArray(data)){
        console.warn("DATA KOSONG!")
    }
    const grouping = data?.reduce((acc:any,item:any)=>{
        const kategori = item.produk.kategori.nama_kategori
        const jumlahBarangMasuk = item.jumlah_barang_masuk
        if(!acc[kategori]){
            acc[kategori] = {
                label:kategori,
                value:0,
                color:item.produk.kategori.warna_category
            }
        }

        acc[kategori].value += jumlahBarangMasuk
        return acc
    },{})

    
    const labels = Object.keys(grouping)
    const finalSeriees = labels.map((i,key)=>({
        index:key,
        label: grouping[i].label,
        value: grouping[i].value,
        color: grouping[i].color
    }))
    actions.setLabelsName(finalSeriees)
}

export const fillDataPieChartOutbound =  ({data,actions}:DataFillBusiness)=>{
    if(!data || !Array.isArray(data)){
        console.warn("DATA KOSONG!")
    }
    const grouping = data?.reduce((acc:any,item:any)=>{
        const kategori = item.produk.kategori.nama_kategori
        const jumlahBarangMasuk = item.jumlah_barang_keluar
        if(!acc[kategori]){
            acc[kategori] = {
                label:kategori,
                value:0,
                color:item.produk.kategori.warna_category
            }
        }

        acc[kategori].value += jumlahBarangMasuk
        return acc
    },{})

    
    const labels = Object.keys(grouping)
    const finalSeriees = labels.map((i,key)=>({
        index:key,
        label: grouping[i].label,
        value: grouping[i].value,
        color: grouping[i].color
    }))
    actions.setLabelsName(finalSeriees)
}
