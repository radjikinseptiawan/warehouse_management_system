import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OutboundType = {
        jumlahBarangMasuk:number | string,
        nominalModal:number | string,
        tanggalMasuk:string,
        produkId:number | string
}

const initialState : OutboundType= {
        jumlahBarangMasuk:0,
        nominalModal:0,
        tanggalMasuk:"",
        produkId:0
}
export const inboundSlicers = createSlice({
    name:"inbound",
    initialState,
    reducers:{
        setJumlahBarangMasuk:(state,action:PayloadAction<number>)=>{
            state.jumlahBarangMasuk = action.payload
        },
        setNominalModal:(state,action:PayloadAction<number>)=>{
            state.nominalModal = action.payload
        },
        setTanggalMasuk:(state,action:PayloadAction<string>)=>{
            state.tanggalMasuk = action.payload
        },
        setProdukId:(state,action:PayloadAction<number>)=>{
            state.produkId = action.payload
        }
    }
})

export const { setJumlahBarangMasuk, setTanggalMasuk, setProdukId,setNominalModal } = inboundSlicers.actions
export default inboundSlicers.reducer