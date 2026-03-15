"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import TableBodyInbound from "@/app/component/ui/table/tableBody/tableBodyOutbound";
import TableHeadInbound from "@/app/component/ui/table/tableHeaders/tableHeadInbound";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { AnimatePresence, motion } from "motion/react";
import { setIsOpenDelete, setIsOpendit, setIsOpenFilter, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setImageProduct, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { useEffect, useMemo, useState } from "react";
import { setJumlahBarangMasuk, setNominalModal, setProdukId, setTanggalMasuk } from "@/app/slicers/inboundSlicers";
import { InboundProductType, ProductData, TypeProduct } from "@/lib/type";
import { addProduct, editProduct, getDataById, syncAllDataProduct } from "@/app/layers/dataLayer/inbound";
import DonutChart from "@/app/component/ux/Chart/PieChart";
import BasicBars from "@/app/component/ux/Chart/BarChart";
import Money from "@/app/component/ui/icon/Money";
import { convertToIdr, nextPage, prevPage } from "@/app/layers/businessLogic/pagination";
import { convertToDate } from "@/app/layers/businessLogic/pagination";
import { calculateDataProduct } from "@/app/layers/dataLayer/produk";
import { fetchDataBarChart } from "@/app/layers/dataLayer/BarChartLayer";
import PieChart from "@/app/component/ux/Chart/PieChart";
import PieCharts from "@/app/component/ux/Chart/PieChart";
import PieChartsDistributed from "@/app/component/ux/Chart/PieChart/disribusiSuppliers";
import { getSupplierDistribution } from "@/app/layers/businessLogic/DistribusiSuppliers";
import SearchIcon from "@/app/component/ui/icon/Search";
import FilterIcon from "@/app/component/ui/icon/Filter";
import { exportToExcelIn, filterData, findDataByName, sortingDataIn } from "@/app/layers/businessLogic/table";
import Selector from "@/app/component/ui/Selector";
import Input from "@/app/component/ui/Input";


export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [rawData,setDataRaw] = useState<InboundProductType[]>([])
    const [selectProductId,setSelectProdukId] = useState<number>(0)
    const [dataProduk,setDataProduk] = useState<ProductData[] | null>(null)
    const [findItem, setFindItem] = useState<string>("")
    const [resultFindItem,setResultFindItem] = useState<InboundProductType[] | null>(null)
    const itemPerPage = 6;

    // Redux State
    // Inbound State Management
    const produkId = useAppSelector((state)=>state.inbound.produkId)
    const jumlahBarangMasuk = useAppSelector((state)=>state.inbound.jumlahBarangMasuk)
    const tanggalMasuk = useAppSelector((state)=>state.inbound.tanggalMasuk)
    const nominalModal = useAppSelector(state=>state.inbound.nominalModal)

    // Redux State
    // Filter State Management
    const kategoriPilihan = useAppSelector((state)=>state.filter.kategoriPilihan)
    const vendorPilihan = useAppSelector((state)=>state.filter.vendorPilihan)
    const filterPilihan = useAppSelector((state)=>state.filter.filterPilihan)

    // Inventory State Management
    const suppliers = useAppSelector(state=>state.product.suppliers)
    const category = useAppSelector(state=>state.product.kategori)
    const gudang = useAppSelector(state=>state.product.gudang)
    const productName = useAppSelector(state=>state.product.productName)
    
    // UI/UX 
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)    
    const isOpenFilter = useAppSelector(state=>state.overlay.isOpenFilter)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        syncAllDataProduct(setDataRaw)
    }, []);

    const handleExport = (e: React.MouseEvent) => {
        e.preventDefault();
        if (filterDataPilihan.length > 0) {
            exportToExcelIn(filterDataPilihan, `Laporan_Inbound_${new Date().toLocaleDateString()}`);
        } else {
            alert("Tidak ada data untuk diexport!");
        }
    };

    const supplierChartData = useMemo(() => {
        return getSupplierDistribution(rawData);
    }, [rawData]);

    useEffect(()=>{
        calculateDataProduct(setDataProduk)
    },[])

    const addProducts = async()=>{
        const payload : any= {
            jumlahBarangMasuk,
            produkId,
            tanggalMasuk,
            nominalModal
        }

        await addProduct({
            payload,
            dispatch,
            resetAction:()=>resetInputValue(),
            refreshData:()=>syncAllDataProduct(setDataRaw)
        })
    }

    const resetInputValue= ()=>{
        dispatch(setIsOpendit(false))
        dispatch(setImageProduct(""))
        dispatch(setProductName(""))
        dispatch(setKategori(0))
        dispatch(setGudang(0))
        dispatch(setSuppliers(0))
        dispatch(setTanggalMasuk(""))
        dispatch(setJumlahBarangMasuk(0))
        dispatch(setNominalModal(0))
        setSelectProdukId(0)
        dispatch(setIsOpendit(false))
        dispatch(setIsOpenOverlay(false))
        dispatch(setTanggalMasuk(new Date().toISOString().split("T")[0]))
        dispatch(setJumlahBarangMasuk(0))
        dispatch(setNominalModal(0))           
    }


    const filterDataPilihan = useMemo(()=>filterData({
        rawData,
        kategoriPilihan,
        vendorPilihan,
        filterPilihan,
        findItem
    }),[kategoriPilihan,rawData,vendorPilihan,filterPilihan,findItem])

    const currentData = filterDataPilihan.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
    const totalPages = Math.ceil(filterDataPilihan.length / itemPerPage);
    const dataSorting = sortingDataIn(currentData)

    const allStock = dataProduk ?  rawData.reduce((acc,item)=>{return acc + (item.jumlah_barang_masuk || 0)},0) : ""
    const allModal = rawData.reduce((acc,item)=>{return acc + (item.nominal_modal || 0)},0)
        return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                       
                       <div className="flex items-center gap-2 justify-center">
                        <div className="hidden md:block lg:block">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] rounded-md lg:w-80 md:w-40 w-20 font-semibold md:font-bold my-4">
                               <span>
                                <PieCharts/>
                               </span>
                                {rawData ? Number(allStock) : 0}
                            <h1>Stok Barang Masuk</h1>
                            </div>
                        </div>

                            <div className="hidden md:block lg:block">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] font-semibold rounded-md lg:w-80 md:w-40 w-20 md:font-bold my-4">
                                <PieChartsDistributed data={supplierChartData}/>
                                {supplierChartData ? Number(supplierChartData.length) : 0}
                            <h1>Distribusi Suppliers</h1>
                            </div>

                            </div>
                           <div className="hidden md:block lg:block">
                            <div className="shadow border p-2 text-green-400 
                            h-[32vh] text-center flex flex-col items-center md:text-[14px] text-[8px] lg:w-80 md:w-40 w-20 bg-white 
                            rounded-md font-semibold md:font-bold my-4">
                                <BasicBars/>
                                {rawData ? convertToIdr(Number(allModal)) : 0}
                            <h1>Total Modal</h1>
                            </div>

                           </div>
                       </div>
{/* Bagian Cari Produk */}
                          <div className="flex items-center justify-center">
                                <Input.Basic types="search" mind="Ketik Nama Produk"  
                                change={(e)=>{
                                    const data = e.target.value
                                    setFindItem(data)
                                    findDataByName(rawData,data,setResultFindItem)    
                                }}
                                />
                                <button onClick={()=>findDataByName(rawData,findItem,setResultFindItem)} className="p-2 rounded-md bg-[#048720]">
                                    <SearchIcon/>
                                </button>
                                <button onClick={()=>dispatch(setIsOpenFilter(true))} className="p-2 rounded-md bg-[#048720] mx-1">
                                    <FilterIcon/>
                                </button>
                        </div>
                        <AnimatePresence>
                        {
                            isOpenFilter &&
                            (
                            <motion.div 
                            key="sidebar"
                            initial={{ x: 256 }}
                            animate={{ x: 0 }}
                            exit={{ x: 256 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 bg-white z-50 p-3 w-80 h-screen right-0">
                                <button onClick={()=>dispatch(setIsOpenFilter(false))}>
                                    X
                                </button>
                                <h1 className="font-bold text-center text-black md:text-2xl text-xl">Filter Data</h1>
                                <hr/>
                                <div className=" flex flex-col text-black">
                                    <Selector.OptionCategory/>
                                </div> 
                        
                                <div className="mt-10 flex flex-col text-black">
                                   <Selector.OptionVendors/>
                                   </div> 

                                <div className="mt-10 flex flex-col text-black">
                                    <Selector.OptionFilterTime/>
                                </div> 

                                <div className="mt-20 flex items-center justify-center">
                                <ButtonLayer.Button clicker={()=>{}} text="Submit"/>
                                <a href="" onClick={handleExport} className="text-green-500 text-end w-full font-semibold italic my-10">EXPORT TO EXCEL</a>
                                </div>                                
                            </motion.div>     
                            )
                        }
                        </AnimatePresence>

                       
                        {
                        isOpenOverlay && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProductInbound
                            delBtn={()=>console.log("test")}
                            keuanganChange={(e)=>dispatch(setNominalModal(parseInt(e.target.value)))}
                            tanggal="Tanggal Masuk"
                            tanggalValued={new Date(tanggalMasuk).toISOString().split("T")[0]}
                            productName={productName ?? ""}
                            tanggalChange={(e)=>dispatch(setTanggalMasuk(e.target.value))}
                            keuanganValued={nominalModal ?? 0}
                            stockValued={jumlahBarangMasuk ?? 0}
                            keuangan="Modal"
                            stockChange={(e)=>dispatch(setJumlahBarangMasuk(parseInt(e.target.value)))} 
                            supplierValue={suppliers ?? ""}
                            supplierChange={(e)=>{dispatch(setSuppliers(parseInt(e.target.value)))}}
                            changeKategori={(e)=>{dispatch(setKategori(parseInt(e.target.value)))}}
                            images={""}
                            kategoriValue={category ?? ""}
                            gudangChange={(e)=>{dispatch(setGudang(parseInt(e.target.value)))}}
                            gudangValue={gudang || ""}
                            changeProductName={(e)=>{dispatch(setProductName(e.target.value))}}
                            cancel={()=>resetInputValue()}  
                            textBtn="Tambah" 
                            click={addProducts} 
                            nama="Tambah Barang Masuk"/>
                            </div>
                        )
                    }

                    {
                        isOpenEdit && (
                            <div className="flex items-center justify-center">
                            <PopUpLayer.PopUpProductInboundEdit
                            productName={productName}
                            gudangValue={""}
                            tanggal="Tanggal Masuk"
                            kategoriValue={""} // bagian isi kategori
                            supplierValue={""} //  bagian isi suppliers/vendor
                            images={""}
                            changeProductName={(e)=>{dispatch(setProductName(e.target.value))}}
                            tanggalChange={(e)=>{dispatch(setTanggalMasuk(e.target.value))}}
                            tanggalValued={tanggalMasuk ? new Date(tanggalMasuk).toISOString().split("T")[0] : ""}
                            stockValued={jumlahBarangMasuk}
                            stockChange={(e)=>dispatch(setJumlahBarangMasuk(parseInt(e.target.value)))}
                            keuangan="Nominal Modal"
                            keuanganChange={(e)=>{dispatch(setNominalModal(parseInt(e.target.value)))}}
                            keuanganValued={nominalModal}
                            cancel={()=>resetInputValue()}
                            textBtn="Edit" 
                            click={()=>{
                                    editProduct({
                                        id:selectProductId,
                                        payload:{
                                            tanggalMasuk: tanggalMasuk,
                                            nominalModal:Number(nominalModal),
                                            jumlahBarangMasuk : Number(jumlahBarangMasuk),
                                        },
                                        resetActions:()=>resetInputValue(),
                                        refreshActions:()=>syncAllDataProduct(setDataRaw)
                                    })
                                    window.location.reload()
                            }} 
                            nama="Edit Produk"/>
                            </div>
                        )
                    }
            <h1 className="text-xl font-bold text-black mb-4">List Barang Masuk</h1>
            <ButtonLayer.Button clicker={() =>dispatch(setIsOpenOverlay(true))} text="Tambah Barang Masuk" />
            <p className="text-red-500 w-72 text-[12px] md:text-sm md:w-xl">Demi Menjaga kecocokan barang masuk dan keluar, kami tidak menyediakan fitur hapus di fitur Inbound dan Outbound!. Harap lebih teliti dalam pengisian data!</p>

            <Table>
                <TableHeadInbound />   
                <tbody className="text-black">
                    {!resultFindItem || findItem == "" ? (
                        dataSorting.map((item, index) => (
                            <TableBodyInbound
                                key={index}
                                nominalModal={`${convertToIdr(item.nominal_modal)}`}
                                tanggalMasuk={`${convertToDate(new Date(item.tanggal_masuk))}`}
                                editClick={()=>{
                                    setSelectProdukId(item.id)
                                    getDataById({
                                        id:item.id,
                                        dispatch:dispatch,
                                        actions:{
                                            setProductName,
                                            setJumlahBarangMasuk,
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
                                jumlah={item.jumlah_barang_masuk}
                                lokasi={item.produk.lokasi.nama_gudang}
                                vendor={item.produk.vendors.nama_vendor}
                                nomor={(paginationId * itemPerPage) + index + 1}
                            />
                        ))
                    ) : 
                    (resultFindItem?.map((item,index)=>{
                        return(
                            <TableBodyInbound
                                key={index++}
                                nominalModal={`${convertToIdr(item.nominal_modal)}`}
                                tanggalMasuk={`${convertToDate(new Date(item.tanggal_masuk))}`}
                                editClick={()=>{
                                    setSelectProdukId(item.id)
                                    getDataById({
                                        id:item.id,
                                        dispatch:dispatch,
                                        actions:{
                                            setProductName,
                                            setJumlahBarangMasuk,
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
                                jumlah={item.jumlah_barang_masuk}
                                lokasi={item.produk.lokasi.nama_gudang}
                                vendor={item.produk.vendors.nama_vendor}
                                nomor={(paginationId * itemPerPage) + index + 1}
                            />
                        )
                    }))
                }
                    
                </tbody>
            </Table>

            <div className="flex justify-between mt-4">
                <button 
                    className={`p-2 cursor-pointer ${paginationId === 0 ? 'text-gray-400' : 'text-green-500 underline'}`} 
                    onClick={()=>{
                        prevPage({setPagination})
                    }}
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
                        totalPages,
                        setPagination
                    })}
                    disabled={paginationId >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}