import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductType{
    suppliers:number,
    kategori:number,
    jumlah:number,
    gudang:number,
    public_id:string
    productName:string,
    image:null | string 
}

const initialState : ProductType= {
    suppliers:0,
    kategori:0,
    jumlah:0,
    public_id:"",
    gudang:0,
    image:"",
    productName:""
}

const productSlicers = createSlice({
    name:"product",
    initialState,
    reducers:{
        setSuppliers:(state,action:PayloadAction<number>)=>{
            state.suppliers = action.payload
        },
        setKategori:(state,action:PayloadAction<number>)=>{
            state.kategori = action.payload
        },
        setJumlah: (state,action:PayloadAction<number>)=>{
            state.jumlah = action.payload
        },
        setGudang: (state, action:PayloadAction<number>)=>{
            state.gudang = action.payload
        },
        setProductName:(state,action:PayloadAction<string>)=>{
            state.productName = action.payload
        },
        setImageProduct:(state,action:PayloadAction<string | null>)=>{
            state.image = action.payload
        },
        setPublicId:(state,action:PayloadAction<string>)=>{
            state.public_id = action.payload
        }
    }
})

export const { setPublicId,setSuppliers,setImageProduct, setKategori, setJumlah, setGudang, setProductName } = productSlicers.actions
export default productSlicers.reducer