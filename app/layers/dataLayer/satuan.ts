import { DataGudang, DataVendors, GudangType, VendorType } from "@/lib/type"
import { SetStateAction, Dispatch, useEffect } from "react"

export const getSatuan = async (setSatuan : Dispatch<SetStateAction<DataGudang[] | null>>) => {
        try {
            const response = await fetch("/api/satuan", { method: "GET" })
            const data = await response.json()
            setSatuan(data.data)
        } catch (e) {
            console.error(e)
        }
    }


export type GudangDetailType = {
    id:number | null,
    dispatch:any,
    actions:{
        setNamaGudang:(val : string)=>void,
        setAlamatGudang:(val: string)=>void,
        setWarnaGudang:(val: string)=>void
    }
}    

export const getSatuanDetail = async ({
    id,dispatch,actions
}:GudangDetailType) => {
    try {
    const response = await fetch(`/api/satuan/${id}`, { method: "GET" })
    const data = await response.json()
    dispatch(actions.setNamaGudang(data.data.nama_gudang))
    dispatch(actions.setAlamatGudang(data.data.alamat_gudang))
    dispatch(actions.setWarnaGudang(data.data.warna_gudang))
    } catch (e) {
    console.error(e)
    }
}

export type AddGudangType = {
    payload : string,
}

export const addSatuan = async ({payload}:AddGudangType) => {
try {
    await fetch("/api/satuan", {
        method: "POST",
        body: JSON.stringify(payload)
    })
} catch (e) {
    console.error(e)
}
}


export type EditGudang= {
    payload:VendorType,
    dispatch:any,
    id:number | null,
    actions:{
        setNamaGudang:(val:string)=>any,
        setAlamatGudang:(val: string)=>any,
        setWarnaGudang:(val:string)=>any
    }
}


export const editDataSatuan = async ({id,payload,dispatch,actions}:EditGudang)=>{
        if(!id) return 
        try{
            const response = await fetch(`/api/satuan/${id}`,{
                method:"PATCH",
                body:JSON.stringify(payload)
            })
            const data = await response.json()
            console.log(data)
            if(response.ok){
                dispatch(actions.setNamaGudang(""))
                dispatch(actions.setAlamatGudang(""))
                dispatch(actions.setWarnaGudang(""))
            }
        }catch(e){
            console.error(e)
        }
}



export const deleteSatuan = async ({id,state,actions}:any) => {
    try {
        const response = await fetch(`/api/satuan/${id}`, { method: "DELETE" })

        if (response.ok) {
            actions.setSatuan((prev : any) => prev ? prev.filter((item:any) => item.id !== id) : [])
            state.setSatuanTerpilih(null)
        }
    } catch (e) {
        console.error(e)
    }
}
    