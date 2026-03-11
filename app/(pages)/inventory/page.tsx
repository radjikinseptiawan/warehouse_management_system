"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import TableBodyInventory from "@/app/component/ui/table/tableBody/tableBodyInventory";
import TableHeadInventory from "@/app/component/ui/table/tableHeaders/tableHeadInventory";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setNamaGudang } from "@/app/slicers/lokasiGudangSlicers";
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setImageProduct, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { InboundProductType, ProductData } from "@/lib/type";
import { useEffect, useState } from "react";

export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [data, setData] = useState<ProductData[]>([]); 
    const [dataMasuk,setDataMasuk] = useState<InboundProductType[]>([])
    const [rawData,setDataRaw] = useState<ProductData[]>([])
    const [dataTrash,setDataTrash] = useState<ProductData[]>([])
    const [selectProductId,setSelectProdukId] = useState<number>(0)
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
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)
    const publicId = useAppSelector(state=>state.product.public_id)
    
    const dispatch = useAppDispatch()
    
    
    // Mengambil data produk
    const syncAllDataProduct = async () => {
        try {
            const response = await fetch("/api/produk/all", { method: "GET" });
            const result = await response.json();
            setDataRaw(result.data);
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
    };

    // Melihat data sekarang
    const currentData = data.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
    // Kalkulasi total halaman dibuat
    const totalPages = Math.ceil(data.length / itemPerPage);
    useEffect(() => {
        syncAllDataProduct()
    }, []);

    useEffect(()=>{
        dataSelection()
    },[rawData])

    // Halaman Selanjutnya
    const nextPage = () => {
        if (paginationId < totalPages - 1) {
            setPagination(prev => prev + 1);
        }
    };

    const dataSelection = ()=>{
        const deletedData = rawData.filter((item)=>item.is_delete == true)
        setDataTrash(deletedData)
        const existData = rawData.filter((item)=>item.is_delete == false)
        setData(existData)
    }

    // Halaman Sebelumnya
    const prevPage = () => {
        setPagination(prev => Math.max(0, prev - 1));
    };

    const syncInventoryData = async ()=>{
        const response = await fetch("/api/produk",{method:"GET"})
        const data = await response.json()
        setDataMasuk(data.data)
    }

    useEffect(()=>{
        syncInventoryData()
    },[])

    // Menambah Produk
    const addProduct = async ()=>{
      try{
        const formData = new FormData()
        formData.append("nama_produk",productName as string)
        formData.append("kategoriId",category ? category.toString():"")
        formData.append("lokasiId",gudang? gudang.toString(): "")
        formData.append("vendorId",suppliers ? suppliers.toString():"")
        formData.append("gambar_produk",imageProduct as string)
        formData.append("public_id",publicId as string)
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
            dispatch(setImageProduct(""))
            dispatch(setKategori(0))
            dispatch(setSuppliers(0))
            syncAllDataProduct()
            dataSelection()        
        }
        console.log(data)
    }catch(e){
        console.error(e)
      }
    }

    // Hapus Produk
    const deleteProduct= async(id:number)=>{
        try{
            const response = await fetch(`/api/produk/${id}`,{method:"DELETE"})
            if(response.ok){
                dispatch(setIsOpenDelete(false))
                syncAllDataProduct()
                dataSelection()
            }
        }catch(e){
            console.error(e)
        }
    }

    // Ambil data sesuai id
    const getDataById = async(id:number)=>{
        try{
            const response = await fetch(`/api/produk/${id}`,{
                method:"GET"
            })
            const data = await response.json()
            dispatch(setImageProduct(data.data.gambar_produk))
            dispatch(setProductName(data.data.nama_produk))
            dispatch(setGudang(data.data.lokasi.id))
            dispatch(setKategori(data.data.kategori.id))
            dispatch(setSuppliers(data.data.vendors.id))
        }catch(e){
            console.error(e)
        }
    }

    // Edit Produk
    const editProduct = async(id:number)=>{
        try{
              const response = await fetch(`/api/produk/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    jumlah:jumlah,
                    nama_produk:productName,
                    kategoriId:category,
                    lokasiId:gudang,
                    vendorId:suppliers
                 })       
                }) 
              
              if(response.ok){
                dispatch(setImageProduct(""))
                dispatch(setGudang(0))
                dispatch(setKategori(0))
                dispatch(setNamaGudang(""))
                dispatch(setSuppliers(0))
                setSelectProdukId(0)
                dispatch(setIsOpendit(false))
                syncAllDataProduct()
                dataSelection()            }

              const data = await response.json()
              console.log(data)
        }catch(e){
            console.error(e)
        }
    }

     const allStock = rawData.reduce((acc,item)=>{return acc + (item.jumlah || 0)},0)
   

    return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                       
                       <div className="flex items-center gap-2 justify-center">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] lg:w-80 rounded-md md:w-40 w-20 font-semibold md:font-bold my-4">
                                {data.length}
                            <h1>Produk Tersedia</h1>
                            </div>
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] font-semibold rounded-md lg:w-80 md:w-40 w-20 md:font-bold my-4">
                                {rawData.length}
                            <h1>Total Produk</h1>
                            </div>
                           
                            <div className="shadow border p-2 text-green-400 
                            text-center md:text-[14px] text-[8px] lg:w-80 md:w-40 w-20 bg-white rounded-md font-semibold md:font-bold my-4">
                                {allStock}
                            <h1>Stok Tersedia</h1>
                            </div>

                       </div>
                       
                        {
                        isOpenOverlay && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProduct 
                            supplierValue={suppliers || ""}
                            supplierChange={(e)=>{dispatch(setSuppliers(parseInt(e.target.value)))}}
                            changeKategori={(e)=>{dispatch(setKategori(parseInt(e.target.value)))}}
                            images={imageProduct ? String(imageProduct) : "/upload.png"}
                            kategoriValue={category || ""}
                            gudangChange={(e)=>{dispatch(setGudang(parseInt(e.target.value)))}}
                            gudangValue={gudang || ""}
                            productNameValue={productName ? String(productName) : ""}
                            changeProductName={(e)=>{dispatch(setProductName(e.target.value))}}
                            cancel={()=>{
                                dispatch(setIsOpenOverlay(false))
                                dispatch(setImageProduct(""))
                                dispatch(setProductName(""))
                                dispatch(setKategori(0))
                                dispatch(setGudang(0))
                                dispatch(setSuppliers(0))
                            }}  
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

                    {
                        isOpenEdit && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProduct 
                            images={imageProduct ? String(imageProduct) : "/upload.png"}
                            supplierValue={suppliers || ""}
                            supplierChange={(e)=>{dispatch(setSuppliers(parseInt(e.target.value)))}}
                            changeKategori={(e)=>{dispatch(setKategori(parseInt(e.target.value)))}}
                            kategoriValue={category || ""}
                            gudangChange={(e)=>{dispatch(setGudang(parseInt(e.target.value)))}}
                            gudangValue={gudang || ""}
                            productNameValue={productName ? String(productName) : ""}
                            changeProductName={(e)=>{dispatch(setProductName(e.target.value))}}
                            cancel={()=>{
                                dispatch(setIsOpendit(false))
                                dispatch(setImageProduct(""))
                                dispatch(setProductName(""))
                                dispatch(setKategori(0))
                                dispatch(setGudang(0))
                                dispatch(setSuppliers(0))
                            }}
                            textBtn="Edit" 
                            click={()=>editProduct(selectProductId)} 
                            nama="Edit Produk"/>
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
                                editClick={()=>{
                                    setSelectProdukId(item.id)
                                    getDataById(item.id)
                                    dispatch(setIsOpendit(true))
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