import { ChangeEvent, Dispatch, SetStateAction } from "react"

export const isCantMinus = (e : any,{dispatch,setGajiKaryawan}:{
    dispatch:any,
    setGajiKaryawan: (val : number)=>void
})=>{
        const target = parseInt(e.target.value)
        if(!e.target.value || target < 0){
            dispatch(setGajiKaryawan(0))
            return
        }
        dispatch(setGajiKaryawan(target))
    }
