"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import TableBodyInventory from "@/app/component/ui/table/tableBody/tableBodyInventory";
import TableHeadInventory from "@/app/component/ui/table/tableHeaders/tableHeadInventory";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { nextPage, prevPage } from "@/app/layers/businessLogic/pagination";
import { addProduct, calculateDataProduct, deleteProduct, editProduct, getDataById, syncInventoryData } from "@/app/layers/dataLayer/produk";
import { setNamaGudang } from "@/app/slicers/lokasiGudangSlicers";
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setImageProduct, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { InboundProductType, ProductData } from "@/lib/type";
import { useEffect, useState } from "react";

export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [data, setData] = useState<ProductData[]>([]); 
    const [dataMasuk,setDataMasuk] = useState<InboundProductType[] | null>(null)
    const [rawData,setDataRaw] = useState<ProductData[] | null>(null)
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

    // Melihat data sekarang
    const currentData = data.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
    // Kalkulasi total halaman dibuat
    const totalPages = Math.ceil(data.length / itemPerPage);
    useEffect(() => {
        calculateDataProduct(setDataRaw)
    }, []);

    useEffect(()=>{
        dataSelection()
    },[rawData])

    // Halaman Selanjutnya

    const dataSelection = ()=>{
        const deletedData = rawData ? rawData.filter((item)=>item.is_delete == true) : []
        setDataTrash(deletedData)
        const existData = rawData ? rawData.filter((item)=>item.is_delete == false) : []
        setData(existData)
    }




    useEffect(()=>{
        syncInventoryData(setDataMasuk)
    },[])

    // Menambah Produk
        const addProductValue = async ()=>{
          try{
            const payload :any = {
                nama_produk: productName,
                kategoriId:category,
                lokasiId:gudang,
                vendorId:suppliers,
                gambar_produk:imageProduct
            }

            await addProduct({
                payload,
                dispatch,
                actions:{
                    setGudang,
                    setProductName,
                    setImageProduct,
                    setJumlah,
                    setKategori,
                    setSuppliers
                }
            })
            dispatch(setIsOpenOverlay(false))
            calculateDataProduct(setDataRaw)
            dataSelection()        
        }catch(e){
            console.error(e)
          }
        }

    // Hapus Produk
    const deleteProductValue= async()=>{
        try{    
            await deleteProduct({
                dispatch,
                id:idTarget,
                actions:{
                    setIsOpenDelete
                }
            })
            calculateDataProduct(setDataRaw)
            dataSelection()    
        }catch(e){
            console.error(e)
        }
    }

    // Edit Produk
    const editProductValue = async()=>{
        try{
                const payload: any = {
                    jumlah:jumlah,
                    nama_produk:productName,
                    kategoriId:category,
                    lokasiId:gudang,
                    vendorId:suppliers
                }

                await editProduct({
                    id:selectProductId,
                    payload,
                    dispatch,
                    actions:{
                        setImageProduct,
                        setGudang,
                        setProductName,
                        setSuppliers,
                        setKategori,
                        setNamaGudang
                    }
                })
                dispatch(setIsOpendit(false))
                dataSelection()
                calculateDataProduct(setDataRaw)
            }catch(e){
            console.error(e)
        }
    }

     const allStock = rawData ? rawData.reduce((acc,item)=>{return acc + (item.jumlah || 0)},0) : []
   
    return (
        <div className="p-2 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                       
                       <div className="flex items-center my-2 gap-2 justify-center">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[34px] hidden md:block lg:block text-[8px] lg:w-80 rounded-md md:w-40 w-20 font-semibold md:font-bold my-4">
                                {data.length}
                            <h1>Produk Tersedia</h1>
                            </div>
                            <div className="border shadow p-2 text-green-400 bg-white hidden md:block lg:block
                            text-center md:text-[34px] text-[8px] font-semibold rounded-md lg:w-80 md:w-40 w-20 md:font-bold my-4">
                                {rawData?.length}
                            <h1>Total Produk</h1>
                            </div>
                           
                            <div className="shadow border p-2 text-green-400 hidden md:block lg:block
                            text-center md:text-[34px] text-[8px] lg:w-80 md:w-40 w-20 bg-white rounded-md font-semibold md:font-bold my-4">
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
                            click={addProductValue} 
                            nama="Tambah Produk"/>
                            </div>
                        )
                    }
                    {
                        isOpenDelete && (
                            <div className="flex items-center justify-center align-middle">
                            <PopUpLayer.PopUpDelete 
                            cancel={()=>dispatch(setIsOpenDelete(false))}
                            click={deleteProductValue}
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
                            click={()=>editProductValue()} 
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
                                    getDataById({
                                        id:item.id,
                                        dispatch,
                                        actions:{
                                            setGudang,
                                            setImageProduct,
                                            setKategori,
                                            setProductName,
                                            setSuppliers,
                                        }
                                    })
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
                    onClick={()=>prevPage({ setPagination })}
                    disabled={paginationId === 0}
                >
                    Previous
                </button>
                <span className="self-center text-sm text-gray-600">
                    Halaman {paginationId + 1} dari {totalPages || 1}
                </span>
                <button 
                    className={`p-2 cursor-pointer ${(paginationId >= totalPages - 1) ? 'text-gray-400' : 'text-green-500 underline'}`} 
                    onClick={()=>nextPage({
                        paginationId,
                        setPagination,
                        totalPages
                    })}
                    disabled={paginationId >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}