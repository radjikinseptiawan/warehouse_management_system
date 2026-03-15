import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState ={
    isOpenOverlay:boolean
    isOpenDelete:boolean
    isOpenEdit:boolean,
    isOpenFilter:boolean
}

const initialState : InitialState= {
    isOpenOverlay : false,
    isOpenDelete: false,
    isOpenEdit: false,
    isOpenFilter:false
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
        },
        setIsOpenFilter:(state, action:PayloadAction<boolean>)=>{
            state.isOpenFilter = action.payload
        }
    }
})

export const { setIsOpenDelete,setIsOpenFilter,setIsOpenOverlay,setIsOpendit } = isOpen.actions
export default isOpen.reducer