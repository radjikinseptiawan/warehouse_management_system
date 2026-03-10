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
