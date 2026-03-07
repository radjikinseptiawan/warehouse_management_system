import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateVendor = {
    namaCategory:string,
    warnaCategory:string
}

const initialState : InitialStateVendor= {
    namaCategory:"",
    warnaCategory:""
}

const categorySlicer = createSlice({
    name:"category",
    initialState,
    reducers:{
        setCategoryName:(state,action:PayloadAction<string>)=>{
            state.namaCategory = action.payload
        },
        setWarnaCategory:(state,action:PayloadAction<string>)=>{
            state.warnaCategory = action.payload
        }
    }
})

export const { setWarnaCategory,setCategoryName } = categorySlicer.actions
export default categorySlicer.reducer