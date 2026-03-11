import { ChangeEvent } from "react"

export type VendorType = {
    alamat_vendor:string,
    nama_vendor:string,
    warna_vendor:string
}

export type GudangType = {
    alamat_gudang:string,
    nama_gudang:string,
    warna_gudang:string
}

export type CategoryType = {
    id:number,
    nama_kategori : string,
    warna_category: string
}

export type DataVendors = {
    id:number,
    alamat_vendor:string,
    nama_vendor:string,
    warna_vendor:string,
}

export type DataGudang = {
    id:number
    alamat_gudang : string,
    nama_gudang: string,
    warna_gudang:string
}

export type DataCategory = {
    id:number
    nama_kategori:string,
    warna_category:string
}

export type ProductData = {
    gambar_produk: string;
    is_delete: boolean,
    id:number,
    nama_produk: string;
    image: string;
    jumlah: number;
    kategori: {
        nama_kategori:string
        warna_category:string
    };
    lokasi: {nama_gudang:string};
    vendors: {nama_vendor:string};
}

// PopUpProduction
export type PopUpProduction = {
        cancel:()=>void,
        supplierValue:number  | string,
        nama:string,
        images:string,
        supplierChange:(e: ChangeEvent<HTMLSelectElement>)=>void,
        gudangValue:number  | string,
        gudangChange:(e: ChangeEvent<HTMLSelectElement>)=>void,
        changeKategori:(e: ChangeEvent<HTMLSelectElement>)=>void,
        kategoriValue:number | string
        productNameValue:string
        textBtn:string,
        click:()=>void,
        changeProductName:(e:ChangeEvent<HTMLInputElement>)=>void    
}

// PopUpProductionInbound
export type PopUpProductionType = {
  keuanganChange:(e:ChangeEvent<HTMLInputElement>)=>void,
  tanggalValued?:string,
  tanggalChange?:(e:ChangeEvent<HTMLInputElement>)=>void,
  keuanganValued:string | number | any
  productName:number | string | any,
  tanggal:string,
  delBtn?:()=>void,
  cancel: () => void,
  supplierValue: number | string | any,
  nama: string,
  keuangan:string,
  images: string,
  supplierChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  gudangValue: number | string,
  gudangChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  changeKategori?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  kategoriValue: number | string,
  stockValued: string | number,
  stockChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  textBtn: string,
  click: () => void,
  changeProductName: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export type OutboundProductType = {
    id:number,
    jumlah_barang_keluar:number,
    nominal_modal:number,
    tanggal_keluar:string,
    produk:TypeProduct
}


export type InboundProductType = {
    id:number,
    jumlah_barang_masuk:number,
    nominal_modal:number,
    tanggal_masuk:string,
    produk:TypeProduct
}


export type TypeProduct = {
    gambar_produk: string;
    is_delete: boolean,
    id:number,
    nama_produk: string;
    image: string;
    jumlah: number;
    kategori: {
        nama_kategori:string
        warna_category:string
    };
    lokasi: {nama_gudang:string};
    vendors: {nama_vendor:string};
}

