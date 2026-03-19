import { Payload } from "@prisma/client/runtime/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    namaKaryawan:string,
    alamatKaryawan:string,
    gajiKaryawan:number,
    mulaiKerja:string,
    status:string

}

const initialState : InitialState = {
    namaKaryawan:"",
    alamatKaryawan:"",
    gajiKaryawan:0,
    mulaiKerja:"",
    status:""
}

const Karyawan = createSlice({
    name:"karyawan",
    initialState,
    reducers:{
        setNamaKaryawan:(state,action:PayloadAction<string>)=>{
            state.namaKaryawan = action.payload
        },
        setAlamatKaryawan:(state,action:PayloadAction<string>)=>{
            state.alamatKaryawan = action.payload
        },
        setGajiKaryawan:(state,action:PayloadAction<number>)=>{
            state.gajiKaryawan = action.payload
        },
        setMulaiKerja:(state,action:PayloadAction<string>)=>{
            state.mulaiKerja = action.payload
        },
        setStatus:(state,action:PayloadAction<string>)=>{
            state.status = action.payload
        }
    }
})

export const { setNamaKaryawan, setAlamatKaryawan, setGajiKaryawan, setMulaiKerja, setStatus } = Karyawan.actions
export default Karyawan.reducer