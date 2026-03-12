import { CategoryType, DataCategory, DataGudang, DataVendors, GudangType, VendorType } from "@/lib/type"
import { SetStateAction, Dispatch } from "react"

export const getCategory = async (setCategory : Dispatch<SetStateAction<DataCategory[] | null>>) => {
        try {
            const response = await fetch("/api/category", { method: "GET" })
            const data = await response.json()
            setCategory(data.data)
        } catch (e) {
            console.error(e)
        }
    }


export type CategoryDetailType = {
    id:number | null,
    dispatch:any,
    actions:{
        setCategoryName:(val : string)=>void,
        setWarnaCategory:(val: string)=>void,
    }
}    

export const getCategoryDetail = async ({
    id,dispatch,actions
}:CategoryDetailType) => {
    try {
    const response = await fetch(`/api/category/${id}`, { method: "GET" })
    const data = await response.json()
    dispatch(actions.setCategoryName(data.data.nama_kategori))
    dispatch(actions.setWarnaCategory(data.data.warna_category))
    } catch (e) {
    console.error(e)
    }
}

export type AddCategoryType = {
    payload : DataCategory,
    dispatch : any,
    actions:{
        setCategoryName:(val:string)=>void,
        setWarnaCategory:(val:string)=>void
    },
}

export const addCategory = async ({payload,dispatch,actions}:AddCategoryType) => {
try {
    const response = await fetch("/api/category", {
        method: "POST",
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    console.log(data)
    if (response.ok) {
        dispatch(actions.setCategoryName(""))
        dispatch(actions.setWarnaCategory(""))
    }
} catch (e) {
    console.error(e)
}
}

export type EditCategory= {
    payload:DataCategory,
    dispatch:any,
    id:number | null,
    actions:{
        setCategoryName:(val:string)=>any,
        setWarnaCategory:(val: string)=>any,
    }
}


export const editDataCategory = async ({id,payload,dispatch,actions}:EditCategory)=>{
        if(!id) return 
        try{
            const response = await fetch(`/api/category/${id}`,{
                method:"PATCH",
                body:JSON.stringify(payload)
            })
            const data = await response.json()
            console.log(data)
            if(response.ok){
                dispatch(actions.setCategoryName(""))
                dispatch(actions.setWarnaCategory(""))
            }
        }catch(e){
            console.error(e)
        }
}

export type DeleteCategory = {
    id:number | null,
    actions:{
        setCategory:Dispatch<SetStateAction<DataCategory[] | null>>
    }
    dispatch:any,
    state:{
        setIsOpenDelete:(val:boolean)=>any
        setIdGudangTerpilih:Dispatch<SetStateAction<number|null>>
    }
}


export const deleteCategory = async ({id,dispatch,state,actions}:DeleteCategory) => {
    try {
        const response = await fetch(`/api/category/${id}`, { method: "DELETE" })

        const data = await response.json()
        console.log(data)
        if (response.ok) {
            actions.setCategory(prev => prev ? prev.filter(item => item.id !== id) : [])
            dispatch(state.setIsOpenDelete(false))
            state.setIdGudangTerpilih(null)
        }
    } catch (e) {
        console.error(e)
    }
}
    