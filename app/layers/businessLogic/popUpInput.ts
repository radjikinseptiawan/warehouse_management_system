import { ProductData } from "@/lib/type"
import { ChangeEvent, SetStateAction } from "react"
export const isNotZeroOutbound = (e: ChangeEvent<HTMLInputElement>, {
    dispatch,
    setJumlahBarangKeluar,
    stokId, 
    produk  
}: {
    dispatch: any,
    setJumlahBarangKeluar: any,
    stokId?: number, 
    produk?: ProductData[] | null
}) => {
    const value = parseInt(e.target.value);

    if (!e.target.value || value < 0) {
        dispatch(setJumlahBarangKeluar(0));
        return;
    }

    if (produk && stokId) {
        const selectedProduct = produk.find(p => p.id === stokId);
        if (selectedProduct && value > (selectedProduct.jumlah || 0)) {
            alert(`Stok tidak mencukupi! Tersedia: ${selectedProduct.jumlah}`);
            dispatch(setJumlahBarangKeluar(0));
            e.target.value = "0";
            return;
        }
    }

    dispatch(setJumlahBarangKeluar(value));
}



export function isNotZeroInbond(e :ChangeEvent<HTMLInputElement>,{
    dispatch,
    setJumlahBarangMasuk
}:{
    dispatch:any,
    setJumlahBarangMasuk:SetStateAction<number | any>
}){
    const value = e.target.value
    
    if(value === ""){
        dispatch(setJumlahBarangMasuk(0))
        return
    }

    if(Number(value) < 0){
        dispatch(setJumlahBarangMasuk(0))
        return
    }

    dispatch(setJumlahBarangMasuk(parseInt(value)))
}