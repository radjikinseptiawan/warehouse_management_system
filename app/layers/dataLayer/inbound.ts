import { AddProductParams, EditProductType, EditProductTypeIn, GetDataByIdType, InboundProductType, TypeProduct } from "@/lib/type";
import { SetStateAction,Dispatch } from "react";

// Mengambil data barang masuk
export const syncAllDataProduct = async (setDataRaw:Dispatch<SetStateAction<InboundProductType[] | any>>) => {
        try {
            const response = await fetch("/api/barang_masuk", { method: "GET" });
            await fetch("/api/produk",{method:"GET"})
            const result = await response.json();
            {setDataRaw(result.data)};
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
};

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
        window.location.reload()
    }catch(e){
        console.error(e)
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
        }catch(e){
            console.error(e)
        }
    }



export const editProduct = async({id,payload,refreshActions,resetActions}:EditProductTypeIn)=>{
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
    }catch(e){
        console.error(e)
    }
}