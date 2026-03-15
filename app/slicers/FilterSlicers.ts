import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    filterPilihan:string,
    kategoriPilihan:string,
    vendorPilihan:string,
    filterPilihanKeluar:string
}

const initialState : InitialState= {
    filterPilihan:"",
    kategoriPilihan:"",
    vendorPilihan:"",
    filterPilihanKeluar:""
}

export const FilterSlicers = createSlice({
    name:"filter",
    initialState,
    reducers:{
        setFilterPilihan:(state,action:PayloadAction<string>)=>{
            state.filterPilihan = action.payload
        },
        setKategoriPilihan:(state,action:PayloadAction<string>)=>{
            state.kategoriPilihan = action.payload
        },
        setVendorPilihan:(state,action:PayloadAction<string>)=>{
            state.vendorPilihan = action.payload
        },
        setFilterPilihanKeluar:(state,action: PayloadAction<string>)=>{
            state.filterPilihanKeluar = action.payload
        }
    }
})
export const { setFilterPilihan,setKategoriPilihan,setVendorPilihan, setFilterPilihanKeluar } = FilterSlicers.actions
export default FilterSlicers.reducer