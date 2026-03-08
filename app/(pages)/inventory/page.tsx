"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import TableBodyInventory from "@/app/component/ui/table/tableBody/tableBodyInventory";
import TableHeadInventory from "@/app/component/ui/table/tableHeaders/tableHeadInventory";
import { useEffect, useState } from "react";

// Definisikan interface jika kamu pakai TypeScript agar lebih aman
interface Product {
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

export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [data, setData] = useState<Product[]>([]); 
    const itemPerPage = 6;

    const syncDataProduct = async () => {
        try {
            const response = await fetch("/api/produk", { method: "GET" });
            const result = await response.json();
            setData(result.data);
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
    };

    const currentData = data.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
    
    const totalPages = Math.ceil(data.length / itemPerPage);
    useEffect(() => {
        syncDataProduct();
    }, []);

    const nextPage = () => {
        console.log(currentData)
        if (paginationId < totalPages - 1) {
            setPagination(prev => prev + 1);
        }
    };

    const prevPage = () => {
        setPagination(prev => Math.max(0, prev - 1));
    };

    return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md">
            <h1 className="text-xl font-bold text-black mb-4">Inventory Barang</h1>
            <ButtonLayer.Button clicker={() => console.log("tambah")} text="Tambah Inventory" />
            
            <Table>
                <TableHeadInventory />   
                <tbody className="text-black">
                    {currentData.length > 0 ? (
                        currentData.map((item, index) => (
                            <TableBodyInventory
                                key={index}
                                color={item.kategori.warna_category}
                                nama={item.nama_produk}
                                image={item.image}
                                jumlah={item.jumlah}
                                kategori={item.kategori.nama_kategori}
                                lokasi={item.lokasi.nama_gudang}
                                vendor={item.vendors.nama_vendor || ""}
                                nomor={(paginationId * itemPerPage) + index + 1} // Agar nomor urut kontinu
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center h-80 p-4">Memuat data atau data kosong...</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <div className="flex justify-between mt-4">
                <button 
                    className={`p-2 cursor-pointer ${paginationId === 0 ? 'text-gray-400' : 'text-green-500 underline'}`} 
                    onClick={prevPage}
                    disabled={paginationId === 0}
                >
                    Previous
                </button>
                <span className="self-center text-sm text-gray-600">
                    Halaman {paginationId + 1} dari {totalPages || 1}
                </span>
                <button 
                    className={`p-2 cursor-pointer ${(paginationId >= totalPages - 1) ? 'text-gray-400' : 'text-green-500 underline'}`} 
                    onClick={nextPage}
                    disabled={paginationId >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}