import { DataGudang, DataVendors, GudangType, VendorType } from "@/lib/type"
import { SetStateAction, Dispatch } from "react"

export const getGudang = async (setGudang : Dispatch<SetStateAction<DataGudang[] | null>>) => {
        try {
            const response = await fetch("/api/lokasi_gudang", { method: "GET" })
            const data = await response.json()
            setGudang(data.data)
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

export const getGudangDetail = async ({
    id,dispatch,actions
}:GudangDetailType) => {
    try {
    const response = await fetch(`/api/lokasi_gudang/${id}`, { method: "GET" })
    const data = await response.json()
    dispatch(actions.setNamaGudang(data.data.nama_gudang))
    dispatch(actions.setAlamatGudang(data.data.alamat_gudang))
    dispatch(actions.setWarnaGudang(data.data.warna_gudang))
    } catch (e) {
    console.error(e)
    }
}

export type AddGudangType = {
    payload : DataGudang,
    dispatch : any,
    actions:{
        setNamaGudang:(val:string)=>void,
        setAlamatGudang:(val:string)=>void,
        setWarnaGudang:(val:string)=>void
    },
}

export const addGudang = async ({payload,dispatch,actions}:AddGudangType) => {
try {
    const response = await fetch("/api/lokasi_gudang", {
        method: "POST",
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    console.log(data)
    console.log(response)

    if (response.ok) {
        dispatch(actions.setNamaGudang(""))
        dispatch(actions.setAlamatGudang(""))
        dispatch(actions.setWarnaGudang(""))
    }
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


export const editDataGudang = async ({id,payload,dispatch,actions}:EditGudang)=>{
        if(!id) return 
        try{
            const response = await fetch(`/api/lokasi_gudang/${id}`,{
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

export type DeleteVendors = {
    id:number | null,
    actions:{
        setGudang:Dispatch<SetStateAction<GudangType[] | null>>
    }
    dispatch:any,
    state:{
        setIsOpenDelete:(val:boolean)=>any
        setIdGudangTerpilih:Dispatch<SetStateAction<number|null>>
    }
}


export const deleteGudang = async ({id,dispatch,state,actions}:DeleteVendors) => {
    try {
        const response = await fetch(`/api/lokasi_gudang/${id}`, { method: "DELETE" })

        const data = await response.json()
        console.log(data)
        if (response.ok) {
            actions.setGudang(prev => prev ? prev.filter(item => item.id !== id) : [])
            dispatch(state.setIsOpenDelete(false))
            state.setIdGudangTerpilih(null)
        }
    } catch (e) {
        console.error(e)
    }
}
    