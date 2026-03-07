import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState ={
    isOpenOverlay:boolean
}

const initialState : InitialState= {
    isOpenOverlay : false
}

const isOpen= createSlice({
    name:"isOpen",
    initialState,
    reducers:{
        setIsOpenOverlay:(state, action: PayloadAction<boolean>)=>{
            state.isOpenOverlay = action.payload
        }
    }
})

export const { setIsOpenOverlay } = isOpen.actions
export default isOpen.reducer