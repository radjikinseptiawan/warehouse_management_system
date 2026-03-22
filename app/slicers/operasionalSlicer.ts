import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    nama_operasional:string,
    biaya_operasional:number
}

const initialState : InitialState= {
    nama_operasional:"",
    biaya_operasional:0
}

const operasionalSlicers = createSlice({
    name:"operasional",
    initialState,
    reducers:{
        setNamaOperasional:(state,action:PayloadAction<string>)=>{
            state.nama_operasional = action.payload
        },
        setBiayaOperasional:(state, action:PayloadAction<number>)=>{
            state.biaya_operasional = action.payload
        }
    }
})

export const { setNamaOperasional, setBiayaOperasional } = operasionalSlicers.actions
export default operasionalSlicers.reducer