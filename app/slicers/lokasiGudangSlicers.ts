import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateVendor = {
    alamatGudang:string,
    namaGudang:string,
    warnaGudang:string
}

const initialState : InitialStateVendor= {
    alamatGudang:"",
    namaGudang:"",
    warnaGudang:""
}

const lokasiGudangSlicers = createSlice({
    name:"lokasiGudang",
    initialState,
    reducers:{
        setNamaGudang:(state,action:PayloadAction<string>)=>{
            state.namaGudang = action.payload
        },
        setAlamatGudang:(state,action:PayloadAction<string>)=>{
            state.alamatGudang = action.payload
        },
        setWarnaGudang:(state,action:PayloadAction<string>)=>{
            state.warnaGudang = action.payload
        }
    }
})

export const { setNamaGudang,setAlamatGudang,setWarnaGudang } = lokasiGudangSlicers.actions
export default lokasiGudangSlicers.reducer