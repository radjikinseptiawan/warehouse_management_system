import { DataVendors, VendorType } from "@/lib/type"
import { SetStateAction, Dispatch } from "react"

export const getVendors = async (setVendor : Dispatch<SetStateAction<DataVendors[] | null>>) => {
        try {
            const response = await fetch("/api/vendors", { method: "GET" })
            const data = await response.json()
            setVendor(data.data)
        } catch (e) {
            console.error(e)
        }
    }


export type VendorsDetailType = {
    id:number,
    dispatch:any,
    actions:{
        setVendorName:(val : string)=>void,
        setVendorAlamat:(val: string)=>void,
        setVendorWarna:(val: string)=>void
    }
}    

export const getVendorsDetail = async ({
    id,dispatch,actions
}:VendorsDetailType) => {
    try {
    const response = await fetch(`/api/vendors/${id}`, { method: "GET" })
    const data = await response.json()
    dispatch(actions.setVendorName(data.data.nama_vendor))
    dispatch(actions.setVendorAlamat(data.data.alamat_vendor))
    dispatch(actions.setVendorWarna(data.data.warna_vendor))
    } catch (e) {
    console.error(e)
    }
}

export type AddVendorsType = {
    payload : DataVendors,
    dispatch : any,
    actions:{
        setIsOpenOverlay:(val : boolean)=>void,
        setVendorName:(val:string)=>void,
        setVendorWarna:(val:string)=>void,
        setVendorAlamat:(val:string)=>void
    },
    refreshVendor:()=>void
}

export const addVendor = async ({payload,dispatch,actions,refreshVendor}:AddVendorsType) => {
try {
    const response = await fetch("/api/vendors", {
        method: "POST",
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    console.log(data)
    console.log(response)

    if (response.ok) {
        dispatch(actions.setIsOpenOverlay(false))
        dispatch(actions.setVendorAlamat(""))
        dispatch(actions.setVendorName(""))
        dispatch(actions.setVendorWarna(""))
        refreshVendor
    }
} catch (e) {
    console.error(e)
}
}

export type EditVendors= {
    payload:VendorType,
    dispatch:any,
    id:number | null,
    actions:{
        setIsOpendit:(val:boolean)=>void,
        setVendorName:(val:string)=>void,
        setVendorAlamat:(val: string)=>void,
        setVendorWarna:(val:string)=>void
    }
}


export const editData = async ({id,payload,dispatch,actions}:EditVendors)=>{
        if(!id) return 
        try{
            const response = await fetch(`/api/vendors/${id}`,{
                method:"PATCH",
                body:JSON.stringify(payload)
            })
            const data = await response.json()
            console.log(data)
            if(response.ok){
                dispatch(actions.setIsOpendit(false))
                dispatch(actions.setVendorName(""))
                dispatch(actions.setVendorAlamat(""))
                dispatch(actions.setVendorWarna(""))
            }
        }catch(e){
            console.error(e)
        }
}

export type DeleteVendors = {
    id:number | null,
    actions:{
        setVendor:Dispatch<SetStateAction<VendorType[] | null>>
    }
    dispatch:any,
    state:{
        setIsOpenDelete:(val:boolean)=>any
        setIdTargetHapus:Dispatch<SetStateAction<number|null>>
    }
}


export const deleteVendors = async ({id,dispatch,state,actions}:DeleteVendors) => {
    try {
        const response = await fetch(`/api/vendors/${id}`, { method: "DELETE" })

        const data = await response.json()
        console.log(data)
        if (response.ok) {
            actions.setVendor(prev => prev ? prev.filter(item => item.id !== id) : [])
            dispatch(state.setIsOpenDelete(false))
            state.setIdTargetHapus(null)
        }
    } catch (e) {
        console.error(e)
    }
}
    