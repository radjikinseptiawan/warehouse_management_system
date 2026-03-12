import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OutboundType = {
        jumlahBarangKeluar:number | string,
        nominalKeluar:number | string,
        tanggalKeluar:string,
        produkId:number | string
}

const initialState : OutboundType= {
        jumlahBarangKeluar:0,
        nominalKeluar:0,
        tanggalKeluar: new Date().toISOString().split("T")[0],
        produkId:0
}
export const inboundSlicers = createSlice({
    name:"inbound",
    initialState,
    reducers:{
        setJumlahBarangKeluar:(state,action:PayloadAction<number>)=>{
            state.jumlahBarangKeluar = action.payload ?? 0
        },
        setNominalModal:(state,action:PayloadAction<number>)=>{
            state.nominalKeluar = action.payload ?? 0
        },
        setTanggalMasuk:(state,action:PayloadAction<string>)=>{
            state.tanggalKeluar = action.payload ?? ""
        },
        setProdukId:(state,action:PayloadAction<number>)=>{
            state.produkId = action.payload ?? 0
        }
    }
})

export const { setJumlahBarangKeluar, setTanggalMasuk, setProdukId,setNominalModal } = inboundSlicers.actions
export default inboundSlicers.reducer