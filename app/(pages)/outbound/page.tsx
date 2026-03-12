"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setImageProduct, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { useEffect, useState } from "react";
import { setJumlahBarangKeluar, setNominalModal, setProdukId, setTanggalMasuk } from "@/app/slicers/outboundSlicers";
import { OutboundProductType, ProductData, TypeProduct } from "@/lib/type";
import TableBodyOutbound from "@/app/component/ui/table/tableBody/tableBodyOutbound";
import TableHeadOutbound from "@/app/component/ui/table/tableHeaders/tableHeadOutbound";
import { syncAllDataProduct,addProduct, editProduct, getDataById } from "@/app/layers/dataLayer/outbound";
import DonutCharLayer from "@/app/component/ux/Chart/PieChart";
import DynamicBarChart from "@/app/component/ux/Chart/LineChart";
import { convertToIdr, nextPage, prevPage } from "@/app/layers/businessLogic/pagination";
import { convertToDate } from "@/app/layers/businessLogic/pagination";
import { calculateDataProduct } from "@/app/layers/dataLayer/produk";


export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [rawData,setDataRaw] = useState<OutboundProductType[]>([])
    const [selectProductId,setSelectProdukId] = useState<number>(0)
    const [dataProduk,setDataProduk] = useState<ProductData[] | null>(null)
    const itemPerPage = 6;

    // Redux State
    // outbound State Management
    const produkId = useAppSelector((state)=>state.outbound.produkId)
    const jumlahBarangKeluar = useAppSelector((state)=>state.outbound.jumlahBarangKeluar)
    const tanggalKeluar = useAppSelector((state)=>state.outbound.tanggalKeluar)
    const nominalModal = useAppSelector(state=>state.outbound.nominalKeluar)

    // Inventory State Management
    const suppliers = useAppSelector(state=>state.product.suppliers)
    const category = useAppSelector(state=>state.product.kategori)
    const gudang = useAppSelector(state=>state.product.gudang)
    const productName = useAppSelector(state=>state.product.productName)
    
    // UI/UX 
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenDelete = useAppSelector(state=>state.overlay.isOpenDelete)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)    
    const dispatch = useAppDispatch()
    
    
    const currentData = rawData.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
  
    const totalPages = Math.ceil(rawData.length / itemPerPage);
    useEffect(() => {
        syncAllDataProduct(setDataRaw)
    }, []);

    useEffect(()=>{
        calculateDataProduct(setDataProduk)
    },[])

    const addProducts = async()=>{
        const payload : any= {
            jumlahBarangKeluar,
            tanggalKeluar,
            nominalModal,
            produkId
        }

        await addProduct({
            payload,
            dispatch,
            resetAction:()=>resetInputValue(),
            refreshData:()=>syncAllDataProduct(setDataRaw)
        })

        dispatch(setIsOpenOverlay(false))
    }

    const editProducts = async()=>{
        const selected = selectProductId
        
        const payload:any = {
            jumlahBarangKeluar,
            nominalModal,
            tanggalKeluar
        }
        
        await editProduct({
            id:selected,
            payload,
            refreshActions:()=>syncAllDataProduct(setDataRaw),
            resetActions:()=>resetInputValue()
        })

        setIsOpendit(false)
    }

    const resetInputValue= ()=>{
        dispatch(setIsOpendit(false))
        dispatch(setImageProduct(""))
        dispatch(setProductName(""))
        dispatch(setKategori(0))
        dispatch(setGudang(0))
        dispatch(setSuppliers(0))
        dispatch(setImageProduct(""))
        dispatch(setGudang(0))
        dispatch(setKategori(0))
        dispatch(setTanggalMasuk(""))
        dispatch(setJumlahBarangKeluar(0))
        dispatch(setNominalModal(0))
        setSelectProdukId(0)
        dispatch(setIsOpendit(false))
        dispatch(setIsOpenOverlay(false))
        dispatch(setImageProduct(""))
        dispatch(setProductName(""))
        dispatch(setJumlahBarangKeluar(0))
        dispatch(setNominalModal(0))           
    }

    const allStock = dataProduk ?  rawData.reduce((acc,item)=>{return acc + (item.jumlah_barang_keluar || 0)},0) : ""
    const allModal = rawData.reduce((acc,item)=>{return acc + (item.nominal_modal || 0)},0)
    return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                       
                       <div className="flex items-center gap-2 justify-center">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] lg:w-80 rounded-md md:w-40 w-20 font-semibold md:font-bold my-4">
                                <DonutCharLayer.StokMasukBaseCategory/>
                                {rawData ? Number(allStock) : 0}
                            <h1>Stok Barang Keluar</h1>
                            </div>
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] font-semibold rounded-md lg:w-80 md:w-40 w-20 md:font-bold my-4">
                                <DonutCharLayer.StokMasukBaseVendors/>
                                {rawData.length}
                            <h1>Total Produk</h1>
                            </div>
                           
                            <div className="shadow border p-2 text-green-400 
                            text-center md:text-[14px] text-[8px] lg:w-80 md:w-40 w-20 bg-white rounded-md font-semibold md:font-bold my-4">
                                <DynamicBarChart/>
                                {rawData ? convertToIdr(Number(allModal)) : 0}
                            <h1>Total Revenue</h1>
                            </div>

                       </div>
                       
                        {
                        isOpenOverlay && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProductInbound
                            keuanganChange={(e)=>dispatch(setNominalModal(parseInt(e.target.value)))}
                            tanggal="Tanggal Keluar"
                            tanggalValued={tanggalKeluar ? new Date(tanggalKeluar).toISOString().split("T")[0] : ""}
                            productName={productName ?? ""}
                            tanggalChange={(e)=>dispatch(setTanggalMasuk(e.target.value))}
                            keuanganValued={nominalModal ?? 0}
                            stockValued={jumlahBarangKeluar ?? 0}
                            keuangan="Laba Kotor/Revenue"
                            stockChange={(e)=>dispatch(setJumlahBarangKeluar(parseInt(e.target.value)))} 
                            supplierValue={suppliers ?? ""}
                            supplierChange={(e)=>{dispatch(setSuppliers(parseInt(e.target.value)))}}
                            changeKategori={(e)=>{dispatch(setKategori(parseInt(e.target.value)))}}
                            images={""}
                            kategoriValue={category ?? ""}
                            gudangChange={(e)=>{dispatch(setGudang(parseInt(e.target.value)))}}
                            gudangValue={gudang ?? ""}
                            changeProductName={(e)=>{dispatch(setProductName(productName ? e.target.value : ""))}}
                            cancel={()=>resetInputValue()}  
                            textBtn="Tambah" 
                            click={addProducts} 
                            nama="Tambah Barang Keluar"/>
                            </div>
                        )
                    }

                    {
                        isOpenEdit && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProductInboundEdit
                            productName={productName}
                            gudangValue={""}
                            tanggal="Tanggal Keluar"
                            kategoriValue={""} // bagian isi kategori
                            supplierValue={""} //  bagian isi suppliers/vendor
                            images={""}


                            changeProductName={(e)=>{dispatch(setProductName(e.target.value))}}
                            tanggalChange={(e)=>{dispatch(setTanggalMasuk(e.target.value))}}
                            tanggalValued={tanggalKeluar ? new Date(tanggalKeluar).toISOString().split("T")[0] : ""}

                            stockValued={jumlahBarangKeluar ?? 0}
                            stockChange={(e)=>dispatch(setJumlahBarangKeluar(parseInt(e.target.value)))}

                            keuangan="Laba Kotor/Revenue"
                            keuanganChange={(e)=>{dispatch(setNominalModal(parseInt(e.target.value)))}}
                            keuanganValued={nominalModal}

                            
                            cancel={()=>resetInputValue()}
                            textBtn="Edit" 
                            click={editProducts} 
                            nama="Edit Produk"/>
                            </div>
                        )
                    }
            <h1 className="text-xl font-bold text-black mb-4">List Barang Keluar</h1>
            <ButtonLayer.Button clicker={() =>dispatch(setIsOpenOverlay(true))} text="Tambah Barang Keluar" />
            <p className="text-red-500 w-72 text-[12px] md:text-sm md:w-xl">Demi Menjaga kecocokan barang masuk dan keluar, kami tidak menyediakan fitur hapus di fitur Inbound dan Outbound!. Harap lebih teliti dalam pengisian data!</p>

            <Table>
                <TableHeadOutbound />   
                <tbody className="text-black">
                    {currentData.length > 0 ? (
                        currentData.map((item, index) => (
                            <TableBodyOutbound
                                key={index}
                                nominalModal={`${convertToIdr(item.nominal_modal)}`}
                                tanggalMasuk={`${convertToDate(new Date(item.tanggal_keluar))}`}
                                editClick={()=>{
                                    setSelectProdukId(item.id)
                                    getDataById({
                                        id:item.id,
                                        dispatch,
                                        actions:{
                                            setProductName,
                                            setJumlahBarangMasuk:setJumlahBarangKeluar,
                                            setNominalModal,
                                            setTanggalMasuk
                                        }
                                    })
                                    dispatch(setIsOpendit(true))
                                }}
                                color={item.produk.kategori.warna_category}
                                nama={item.produk.nama_produk}
                                image={item.produk.gambar_produk}
                                kategori={item.produk.kategori.nama_kategori}
                                jumlah={item.jumlah_barang_keluar}
                                lokasi={item.produk.lokasi.nama_gudang}
                                vendor={item.produk.vendors.nama_vendor}
                                nomor={(paginationId * itemPerPage) + index + 1}
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
                    onClick={()=>prevPage({setPagination})}
                    disabled={paginationId === 0}
                >
                    Previous
                </button>
                <span className="self-center text-sm text-gray-600">
                    Halaman {paginationId + 1} dari {totalPages || 1}
                </span>
                <button 
                    className={`p-2 cursor-pointer ${(paginationId >= totalPages - 1) ? 'text-gray-400' : 'text-green-500 underline'}`} 
                    onClick={()=>nextPage({paginationId,totalPages,setPagination})}
                    disabled={paginationId >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}