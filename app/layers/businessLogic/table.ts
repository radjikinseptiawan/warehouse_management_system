import { InboundProductType, OutboundProductType } from "@/lib/type";
import { Dispatch, SetStateAction } from "react";
import * as XLSX from 'xlsx';

export function sortingDataIn(currentData: InboundProductType[]){
        const sorter = currentData.sort((a,b)=>new Date(b.tanggal_masuk).getTime() - new Date(a.tanggal_masuk).getTime())
        return sorter
}

export function sortingDataOut(currentData:OutboundProductType[]){
    const sorter = currentData.sort((a,b)=>new Date(a.tanggal_keluar).getTime() - new Date(b.tanggal_keluar).getTime())
    return sorter
}


export const findDataByName = async(rawData:InboundProductType[],inputValue: string,setResultFindItem:Dispatch<SetStateAction<InboundProductType[] | null>>)=>{
       const dataFounded = rawData.filter((item)=>item.produk.nama_produk.toLowerCase().includes(inputValue?.toLowerCase() || ""))
        setResultFindItem(dataFounded)
}

export const filterData = ({ rawData, kategoriPilihan, vendorPilihan, filterPilihan, findItem }: {
    rawData: InboundProductType[],
    kategoriPilihan: string,
    vendorPilihan: string,
    filterPilihan: string,
    findItem: string
}) => {
    let data = [...rawData];

    if (findItem) {
        data = data.filter(item =>
            item.produk.nama_produk.toLowerCase().includes(findItem.toLowerCase())
        );
    }

    if (kategoriPilihan && kategoriPilihan !== "") {
        data = data.filter((item) => item.produk.kategori.nama_kategori === kategoriPilihan);
    }

    if (vendorPilihan && vendorPilihan !== "") {
        data = data.filter(item => item.produk.vendors.nama_vendor === vendorPilihan);
    }

    if (filterPilihan && filterPilihan !== "") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const limit = parseInt(filterPilihan);

        data = data.filter((item) => {
            const itemDate = new Date(item.tanggal_masuk);
            itemDate.setHours(0, 0, 0, 0);
            const diffTime = today.getTime() - itemDate.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 0 && diffDays <= limit;
        });
    }

    return data.sort((a, b) => new Date(b.tanggal_masuk).getTime() - new Date(a.tanggal_masuk).getTime());
};


export const filterDataOut = ({ rawData, kategoriPilihan, vendorPilihan, filterPilihan, findItem }: {
    rawData: OutboundProductType[],
    kategoriPilihan: string,
    vendorPilihan: string,
    filterPilihan: string,
    findItem: string
}) => {
    let data = [...rawData];

    if (findItem) {
        data = data.filter(item =>
            item.produk.nama_produk.toLowerCase().includes(findItem.toLowerCase())
        );
    }

    if (kategoriPilihan && kategoriPilihan !== "") {
        data = data.filter((item) => item.produk.kategori.nama_kategori === kategoriPilihan);
    }

    if (vendorPilihan && vendorPilihan !== "") {
        data = data.filter(item => item.produk.vendors.nama_vendor === vendorPilihan);
    }

    if (filterPilihan && filterPilihan !== "") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const limit = parseInt(filterPilihan);

        data = data.filter((item) => {
            const itemDate = new Date(item.tanggal_keluar);
            itemDate.setHours(0, 0, 0, 0);
            const diffTime = today.getTime() - itemDate.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 0 && diffDays <= limit;
        });
    }

    return data.sort((a, b) => new Date(b.tanggal_keluar).getTime() - new Date(a.tanggal_keluar).getTime());
};

export const exportToExcelIn = (data: any[], fileName: string) => {
    const worksheetData = data.map((item, index) => ({
        No: index + 1,
        'Nama Produk': item.produk.nama_produk,
        Kategori: item.produk.kategori.nama_kategori,
        'Jumlah Masuk': item.jumlah_barang_masuk,
        'Nominal Modal': item.nominal_modal,
        'Tanggal Masuk': item.tanggal_masuk,
        Vendor: item.produk.vendors.nama_vendor,
        Gudang: item.produk.lokasi.nama_gudang,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inbound Data");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const exportToExcelOut = (data: any[], fileName: string) => {
    const worksheetData = data.map((item, index) => ({
        No: index + 1,
        'Nama Produk': item.produk.nama_produk,
        Kategori: item.produk.kategori.nama_kategori,
        'Jumlah Keluar': item.jumlah_barang_keluar,
        'Nominal Modal': item.nominal_modal,
        'Tanggal Keluar': item.tanggal_keluar,
        Vendor: item.produk.vendors.nama_vendor,
        Gudang: item.produk.lokasi.nama_gudang,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inbound Data");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};