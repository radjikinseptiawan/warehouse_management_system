import { Dispatch,SetStateAction } from "react";

export const nextPage = ({paginationId,totalPages,setPagination}:{setPagination:Dispatch<SetStateAction<number>>,paginationId:number,totalPages:number}) => {
        if (paginationId < totalPages - 1) {
            setPagination(prev => prev + 1)
        }
    };

export const prevPage = ({setPagination}:{setPagination:Dispatch<SetStateAction<number>>}) => {
        setPagination(prev => Math.max(0, prev - 1));
    };

export const convertToIdr = (idr:number)=>{
        return new Intl.NumberFormat("ID-id",{
            style:"currency",
            currency:"IDR",
        }).format(idr)
    }

export type ResetDataType = {
    dispatch:any,
    actions:{
        setImageProduct?:(val:string)=>void,
        setProductName: (val:string)=>void,
        setKategori: (val:number)=>void,
        setGudang: (val:number)=>void,
        setSuppliers: (val:number)=>void,
        setTanggalMasuk:(val:string)=>void,
        setJumlahBarangKeluar:(val:number)=>void,
        setNominalModal:(val:number)=>void,
        setIsOpenEdit:(val:boolean)=>void,
        setIsOpenOverlay:(val:boolean)=>void
    },
    state:{setSelectProdukId:(val:number)=>Dispatch<SetStateAction<number>>}
}


export const convertToDate = (date : Date)=>{
        return new Intl.DateTimeFormat("ID-id",{
            day:"2-digit",
            month:"long",
            year:"numeric"
        }).format(date)
    }


export const resetInputValue= ({dispatch,state,actions}:ResetDataType)=>{
        dispatch(actions.setIsOpenEdit(false))
        dispatch(actions.setProductName(""))
        dispatch(actions.setKategori(0))
        dispatch(actions.setGudang(0))
        dispatch(actions.setSuppliers(0))
        dispatch(actions.setTanggalMasuk(""))
        dispatch(actions.setJumlahBarangKeluar(0))
        dispatch(actions.setNominalModal(0))
        state.setSelectProdukId(0)
        dispatch(actions.setIsOpenOverlay(false))
    }
