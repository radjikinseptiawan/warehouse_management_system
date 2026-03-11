import { InboundProductType, TypeProduct } from "@/lib/type";
import { SetStateAction,Dispatch } from "react";

// Mengambil data barang masuk
export const syncAllDataProduct = async (setDataRaw:Dispatch<SetStateAction<InboundProductType[]>>) => {
        try {
            const response = await fetch("/api/barang_masuk", { method: "GET" });
            const result = await response.json();
            {setDataRaw(result.data)};
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
};

// Mengmabil dataProduk
export const calculateDataProduct = async(setDataProduk:Dispatch<SetStateAction<TypeProduct[] | undefined>>)=>{
   try {
        const response = await fetch("/api/produk", { method: "GET" });
        const result = await response.json();
        setDataProduk(result.data);
} catch (error) {
            console.error("Gagal ambil data:", error);
    }
}

export type AddProductParams = {
    payload:{
        jumlahBarangMasuk:number,
        produkId:number,
        tanggalMasuk:string,
        nominalModal:number
    },
    dispatch:any,
    resetAction:()=>void,
    refreshData:()=>void
}

    // Menambah Barang Masuk
export const addProduct = async ({
    payload,
    dispatch,
    resetAction,
    refreshData
}: AddProductParams)=>{
      try{
        const response = await fetch("/api/barang_masuk",{
            method:"POST",
            body:JSON.stringify(payload)
        })
        const data = await response.json()
        if(response.ok){
            resetAction()
            refreshData()
        }
        console.log(data)
    }catch(e){
        console.error(e)
      }
}

export type GetDataByIdType = {
    id:number,
    dispatch:any,
    actions:{
        setProductName:(val:string)=>any,
        setNominalModal:(val:number)=>any,
        setJumlahBarangMasuk:(val:number)=>any,
        setTanggalMasuk:(val:string)=>any
    }
}

export  const getDataById = async({id,dispatch,actions}:GetDataByIdType)=>{
        try{
            const response = await fetch(`/api/barang_masuk/${id}`,{
                method:"GET"
            })
            const data = await response.json()
            dispatch(actions.setProductName(data.data.produk.nama_produk))
            dispatch(actions.setNominalModal(data.data.nominal_modal))
            dispatch(actions.setJumlahBarangMasuk(data.data.jumlah_barang_masuk))
            dispatch(actions.setTanggalMasuk(data.data.tanggal_masuk))
            console.log(data)
        }catch(e){
            console.error(e)
        }
    }


export type EditProductType = {
    id:number,
    payload:{
        jumlahBarangMasuk:number,
        nominalModal:number,
        tanggalMasuk:string
    },
    resetActions:()=>void,
    refreshActions:()=>void
} 
   
export const editProduct = async({id,payload,refreshActions,resetActions}:EditProductType)=>{
    try{
          const response = await fetch(`/api/barang_masuk/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id: id,
                jumlah:payload.jumlahBarangMasuk,
                nominal_produk:payload.nominalModal,
                tanggal_masuk:payload.tanggalMasuk
            })       
            }) 
          
          if(response.ok){
            refreshActions(),
            resetActions()
            }
    
          const data = await response.json()
          console.log(data)
    }catch(e){
        console.error(e)
    }
}