import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductType{
    suppliers:number | string |null,
    kategori:number | string | null,
    jumlah:number | string | null,
    gudang:number | string | null,
    public_id:string | null | number,
    productName:string | number | null,
    image:null | string | number,
    satuan:number|null|any
}

const initialState : ProductType= {
    suppliers:"",
    kategori:"",
    jumlah:"",
    public_id:"",
    gudang:"",
    image:"",
    productName:"",
    satuan:""
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
        },
        setSatuan:(state,action : PayloadAction<string | number | any>)=>{
            state.satuan = action.payload
        }
    }
})

export const { setPublicId,setSuppliers,setSatuan,setImageProduct, setKategori, setJumlah, setGudang, setProductName } = productSlicers.actions
export default productSlicers.reducer