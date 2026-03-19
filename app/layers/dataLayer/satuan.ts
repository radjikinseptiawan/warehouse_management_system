import { DataGudang, DataVendors, GudangType, VendorType } from "@/lib/type"
import { SetStateAction, Dispatch, useEffect } from "react"

export const getSatuan = async (setSatuan : Dispatch<SetStateAction<{id:number,nama_satuan:string}[] | null>>) => {
        try {
            const response = await fetch("/api/satuan", { method: "GET" })
            const data = await response.json()
            setSatuan(data.data)
        } catch (e) {
            console.error(e)
        }
    }


export const getSatuanDetail = async ({
    id,
    setDetailSatuan
}:{
    id:number,
    setDetailSatuan : SetStateAction<Dispatch <string | null>>
}) => {
    try {
    const response = await fetch(`/api/satuan/${id}`, { method: "GET" })
    const data = await response.json()
    const satuanValue = data.data?.nama_satuan
    setDetailSatuan(satuanValue)
    console.log(satuanValue)
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
    