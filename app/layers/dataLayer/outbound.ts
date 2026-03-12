import { AddProductParams, EditProductType, GetDataByIdType, InboundProductType, OutboundProductType, TypeProduct } from "@/lib/type";
import { SetStateAction,Dispatch } from "react";

// Mengambil data barang masuk
export const syncAllDataProduct = async (setDataRaw:Dispatch<SetStateAction<OutboundProductType[]>>) => {
        try {
            const response = await fetch("/api/barang_keluar", { method: "GET" });
            const result = await response.json();
            {setDataRaw(result.data)};
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
};


// Menambah Barang Masuk
export const addProduct = async ({payload,dispatch,resetAction,refreshData}:AddProductParams)=>{
      try{
        const response = await fetch("/api/barang_keluar",{
            method:"POST",
            body:JSON.stringify(payload)
        })
        const data = await response.json()
        if(response.ok){
            resetAction
            refreshData()
        }
    }catch(e){
        console.error(e)
      }
    }

export const getDataById = async({id,dispatch,actions}:GetDataByIdType)=>{
        try{
            const response = await fetch(`/api/barang_keluar/${id}`,{
                method:"GET"
            })
            const data = await response.json()
            dispatch(actions.setProductName(data.data.produk.nama_produk))
            dispatch(actions.setNominalModal(data.data.nominal_modal))
            dispatch(actions.setJumlahBarangMasuk(data.data.jumlah_barang_keluar))
            dispatch(actions.setTanggalMasuk(data.data.tanggal_keluar))

            console.log(data)
        }catch(e){
            console.error(e)
        }
    }



export const editProduct = async({id,payload,refreshActions,resetActions}:EditProductType)=>{
    try{
          const response = await fetch(`/api/barang_keluar/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id: id,
                jumlah_barang_keluar:payload.jumlahBarangKeluar,
                nominal_produk:payload.nominalModal,
                tanggal_masuk:payload.tanggalKeluar
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