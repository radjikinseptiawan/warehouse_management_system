import { InboundProductType, ProductData } from "@/lib/type";
import { Dispatch, SetStateAction } from "react";

export const calculateDataProduct = async(setDataProduk:Dispatch<SetStateAction<ProductData[]| null>>)=>{
           try {
            const response = await fetch("/api/produk", { method: "GET" });
            const result = await response.json();
            setDataProduk(result.data);
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
    }
export const syncInventoryData = async (setDataMasuk:Dispatch<SetStateAction<InboundProductType[] | null>>)=>{
        const response = await fetch("/api/produk",{method:"GET"})
        const data = await response.json()
        setDataMasuk(data.data)
    }

export type AddProductType = {
    dispatch:any,
    payload:ProductData[],
    actions:{
        setProductName: (val:string)=>void,
        setJumlah:(val:number)=>void,
        setGudang:(val:number)=>void,
        setSatuan:(val:number)=>void,
        setImageProduct:(val:string)=>void,
        setKategori:(val:number)=>void,
        setSuppliers:(val:number)=>void
    }
}

export const addProduct = async ({payload,dispatch,actions}:AddProductType)=>{
          try{
            const response = await fetch("/api/produk",{
                method:"POST",
                body:JSON.stringify(payload)
            })
            const data = await response.json()
            if(response.ok){
                dispatch(actions.setProductName(""))
                dispatch(actions.setJumlah(0))
                dispatch(actions.setSatuan(0))
                dispatch(actions.setGudang(0))
                dispatch(actions.setImageProduct(""))
                dispatch(actions.setKategori(0))
                dispatch(actions.setSuppliers(0))
            }
        }catch(e){
            console.error(e)
      }
}

export type DeleteProductType = {
    id:number | null,
    dispatch:any,
    actions:{
        setIsOpenDelete:(val:boolean)=>void
    }
}

export const deleteProduct= async({dispatch,id,actions}:DeleteProductType)=>{
        try{
            const response = await fetch(`/api/produk/${id}`,{method:"DELETE"})
            const data = await response.json()
            if(response.ok){
                dispatch(actions.setIsOpenDelete(false))
            }
        }catch(e){
            console.error(e)
        }
    }

export type GetDataByIdType = {
    id:number| null,
    dispatch:any,
    actions:{
        setImageProduct:(val:string)=>void,
        setProductName:(val:string)=>void,
        setGudang:(val:number)=>void,
        setKategori:(val:number)=>void,
        setSuppliers:(val:number)=>void
    }
}

export const getDataById = async({dispatch,id,actions}:GetDataByIdType)=>{
    try{
        const response = await fetch(`/api/produk/${id}`,{
            method:"GET"
        })
        const data = await response.json()
        dispatch(actions.setImageProduct(data.data.gambar_produk))
        dispatch(actions.setProductName(data.data.nama_produk))
        dispatch(actions.setGudang(data.data.lokasi.id))
        dispatch(actions.setKategori(data.data.kategori.id))
        dispatch(actions.setSuppliers(data.data.vendors.id))
        }catch(e){
            console.error(e)
        }
    }

export type EditProductType = {
    id:number | null,
    payload : ProductData,
    dispatch:any,
    actions:{
        setImageProduct:(val:string)=>void
        setProductName:(val:string)=>void,
        setGudang:(val:number)=>void,
        setKategori:(val:number)=>void,
        setSuppliers:(val:number)=>void,
        setNamaGudang:(val:string)=>void
    }
}

export const editProduct = async({id,payload,dispatch,actions}:EditProductType)=>{
        try{
              const response = await fetch(`/api/produk/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)       
                }) 
              
              if(response.ok){
                dispatch(actions.setImageProduct(""))
                dispatch(actions.setGudang(0))
                dispatch(actions.setKategori(0))
                dispatch(actions.setNamaGudang(""))
                dispatch(actions.setSuppliers(0))
        }
    }catch(e){
            console.error(e)
    }
}


