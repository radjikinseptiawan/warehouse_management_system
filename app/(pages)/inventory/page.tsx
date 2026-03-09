"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import TableBodyInventory from "@/app/component/ui/table/tableBody/tableBodyInventory";
import TableHeadInventory from "@/app/component/ui/table/tableHeaders/tableHeadInventory";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setIsOpenDelete, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { useEffect, useState } from "react";

// Definisikan interface jika kamu pakai TypeScript agar lebih aman
interface Product {
    gambar_produk: string;
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

export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [data, setData] = useState<Product[]>([]); 
    const [idTarget,setIdTarget] = useState<number>(0)
    const itemPerPage = 6;

    // Redux State
    const suppliers = useAppSelector(state=>state.product.suppliers)
    const category = useAppSelector(state=>state.product.kategori)
    const jumlah = useAppSelector(state=>state.product.jumlah)
    const gudang = useAppSelector(state=>state.product.gudang)
    const productName = useAppSelector(state=>state.product.productName)
    const imageProduct = useAppSelector(state=>state.product.image)
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenDelete = useAppSelector(state=>state.overlay.isOpenDelete)
    const publicId = useAppSelector(state=>state.product.public_id)
    const dispatch = useAppDispatch()
    // Mengambil data produk
    const syncDataProduct = async () => {
        try {
            const response = await fetch("/api/produk", { method: "GET" });
            const result = await response.json();
            setData(result.data);
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
    };

    // Melihat data sekarang
    const currentData = data.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
    // Kalkulasi total halaman dibuat
    const totalPages = Math.ceil(data.length / itemPerPage);
    useEffect(() => {
        syncDataProduct();
    }, []);

    // Halaman Selanjutnya
    const nextPage = () => {
        if (paginationId < totalPages - 1) {
            setPagination(prev => prev + 1);
        }
    };

    // Halaman Sebelumnya
    const prevPage = () => {
        setPagination(prev => Math.max(0, prev - 1));
    };


    // Menambah Produk
    const addProduct = async ()=>{
      try{
        const formData = new FormData()
        formData.append("jumlah",jumlah.toString())
        formData.append("nama_produk",productName)
        formData.append("kategoriId",category.toString())
        formData.append("lokasiId",gudang.toString())
        formData.append("vendorId",suppliers.toString())
        formData.append("gambar_produk",imageProduct as string)
        formData.append("public_id",publicId)
        const response = await fetch("/api/produk",{
            method:"POST",
            body:formData
        })
        const data = await response.json()
        if(response.ok){
            dispatch(setIsOpenOverlay(false))
            dispatch(setProductName(""))
            dispatch(setJumlah(0))
            dispatch(setGudang(0))
            dispatch(setKategori(0))
            dispatch(setSuppliers(0))
            syncDataProduct()
        }
      }catch(e){
        console.error(e)
      }
    }

    const deleteProduct= async(id:number)=>{
        try{
            const response = await fetch(`/api/produk/${id}`,{method:"DELETE"})
            if(response.ok){
                dispatch(setIsOpenDelete(false))
                syncDataProduct()
            }
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                        {
                        isOpenOverlay && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProduct 
                            supplierValue={suppliers}
                            supplierChange={(e)=>{dispatch(setSuppliers(parseInt(e.target.value)))}}
                            changeKategori={(e)=>{dispatch(setKategori(parseInt(e.target.value)))}}
                            kategoriValue={category}
                            jumlahProduct={jumlah}
                            jumlahProductChange={(e)=>{dispatch(setJumlah(parseInt(e.target.value)))}}
                            gudangChange={(e)=>{dispatch(setGudang(parseInt(e.target.value)))}}
                            gudangValue={gudang}
                            productNameValue={productName}
                            changeProductName={(e)=>{dispatch(setProductName(e.target.value))}}
                            cancel={()=>dispatch(setIsOpenOverlay(false))}
                            textBtn="Tambah" 
                            click={addProduct} 
                            
                            nama="Tambah Produk"/>
                            </div>
                        )
                    }
                    {
                        isOpenDelete && (
                            <div className="flex items-center justify-center align-middle">
                            <PopUpLayer.PopUpDelete 
                            cancel={()=>dispatch(setIsOpenDelete(false))}
                            click={()=>deleteProduct(idTarget)}
                            section="Produk"/>
                            </div>
                        )
                    }

            
            <h1 className="text-xl font-bold text-black mb-4">Inventory Barang</h1>
            <ButtonLayer.Button clicker={() =>dispatch(setIsOpenOverlay(true))} text="Tambah Inventory" />
            
            <Table>
                <TableHeadInventory />   
                <tbody className="text-black">
                    {currentData.length > 0 ? (
                        currentData.map((item, index) => (
                            <TableBodyInventory
                                key={index}
                                clicker={()=>{
                                    dispatch(setIsOpenDelete(true))
                                    setIdTarget(item.id)
                                }}
                                color={item.kategori.warna_category}
                                nama={item.nama_produk}
                                image={item.gambar_produk}
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