import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState ={
    isOpenOverlay:boolean
    isOpenDelete:boolean
}

const initialState : InitialState= {
    isOpenOverlay : false,
    isOpenDelete: false
}

const isOpen= createSlice({
    name:"isOpen",
    initialState,
    reducers:{
        setIsOpenOverlay:(state, action: PayloadAction<boolean>)=>{
            state.isOpenOverlay = action.payload
        },
        setIsOpenDelete:(state,action:PayloadAction<boolean>)=>{
            state.isOpenDelete = action.payload
        }
    }
})

export const { setIsOpenDelete,setIsOpenOverlay } = isOpen.actions
export default isOpen.reducer