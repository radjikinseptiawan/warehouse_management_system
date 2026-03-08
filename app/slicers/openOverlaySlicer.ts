import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState ={
    isOpenOverlay:boolean
    isOpenDelete:boolean
    isOpenEdit:boolean
}

const initialState : InitialState= {
    isOpenOverlay : false,
    isOpenDelete: false,
    isOpenEdit: false
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
        },
        setIsOpendit:(state,action:PayloadAction<boolean>)=>{
            state.isOpenEdit = action.payload
        }
    }
})

export const { setIsOpenDelete,setIsOpenOverlay,setIsOpendit } = isOpen.actions
export default isOpen.reducer