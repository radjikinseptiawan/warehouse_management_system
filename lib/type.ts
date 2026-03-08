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