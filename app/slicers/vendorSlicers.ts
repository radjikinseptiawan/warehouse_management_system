import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateVendor = {
    alamatVendor:string,
    namaVendor:string,
    warnaVendor:string
}

const initialState : InitialStateVendor= {
    alamatVendor:"",
    namaVendor:"",
    warnaVendor:""
}

const vendorSlicers = createSlice({
    name:"vendor",
    initialState,
    reducers:{
        setVendorName:(state,action:PayloadAction<string>)=>{
            state.namaVendor = action.payload
        },
        setVendorWarna:(state,action:PayloadAction<string>)=>{
            state.warnaVendor = action.payload
        },
        setVendorAlamat:(state,action:PayloadAction<string>)=>{
            state.alamatVendor = action.payload
        }
    }
})

export const { setVendorAlamat,setVendorName,setVendorWarna } = vendorSlicers.actions
export default vendorSlicers.reducer