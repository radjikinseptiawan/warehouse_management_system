"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setIsOpendit, setIsOpenFilter, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setImageProduct, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { setJumlahBarangKeluar, setNominalModal, setProdukId, setTanggalMasuk } from "@/app/slicers/outboundSlicers";
import { OutboundProductType, ProductData, TypeProduct } from "@/lib/type";
import TableBodyOutbound from "@/app/component/ui/table/tableBody/tableBodyOutbound";
import TableHeadOutbound from "@/app/component/ui/table/tableHeaders/tableHeadOutbound";
import { syncAllDataProductOut,addProduct, editProduct, getDataById } from "@/app/layers/dataLayer/outbound";
import DonutCharLayer from "@/app/component/ux/Chart/PieChart";
import DynamicBarChart from "@/app/component/ux/Chart/BarChart";
import { convertToIdr, nextPage, prevPage } from "@/app/layers/businessLogic/pagination";
import { convertToDate } from "@/app/layers/businessLogic/pagination";
import { calculateDataProduct } from "@/app/layers/dataLayer/produk";
import PieCharts from "@/app/component/ux/Chart/PieChart";
import PieChartsDistributed from "@/app/component/ux/Chart/PieChart/disribusiSuppliers";
import { getOutSupplierDistribution, getSupplierDistribution } from "@/app/layers/businessLogic/DistribusiSuppliers";
import SearchIcon from "@/app/component/ui/icon/Search";
import FilterIcon from "@/app/component/ui/icon/Filter";
import { exportToExcelOut, filterData, filterDataOut, sortingDataOut } from "@/app/layers/businessLogic/table";
import { AnimatePresence, motion } from "motion/react";
import Selector from "@/app/component/ui/Selector";
import { isNotZeroOutbound } from "@/app/layers/businessLogic/popUpInput";


export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [rawData,setDataRaw] = useState<OutboundProductType[]>([])
    const [selectProductId,setSelectProdukId] = useState<number>(0)
    const [dataProduk,setDataProduk] = useState<ProductData[] | null>(null)
    const [findItem, setFindItem] = useState<string>("")
    const [resultFindItem,setResultFindItem] = useState<OutboundProductType[] | null>(null)

    const itemPerPage = 6;
    // Redux State
    // outbound State Management
    const produkId = useAppSelector((state)=>state.outbound.produkId)
    const jumlahBarangKeluar = useAppSelector((state)=>state.outbound.jumlahBarangKeluar)
    const tanggalKeluar = useAppSelector((state)=>state.outbound.tanggalKeluar)
    const nominalModal = useAppSelector(state=>state.outbound.nominalKeluar)
    const productId = useAppSelector((state)=>state.inbound.produkId)
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
    const isOpenFilter = useAppSelector(state=>state.overlay.isOpenFilter)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)    
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        syncAllDataProductOut(setDataRaw)
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
            refreshData:()=>syncAllDataProductOut(setDataRaw)
        })
        window.location.reload()
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
            refreshActions:()=>syncAllDataProductOut(setDataRaw),
            resetActions:()=>resetInputValue()
        })
        setIsOpendit(false)
        window.location.reload()
    }

    const supplierChartData = useMemo(() => {
        return getOutSupplierDistribution(rawData);
    }, [rawData]);

    

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

    const findDataByName = async(inputValue: string)=>{
        const dataFounded = rawData.filter((item)=>item.produk.nama_produk.toLowerCase().includes(inputValue?.toLowerCase() || ""))
    
        setResultFindItem(dataFounded)
    }

        const filterDataPilihan = useMemo(()=>filterDataOut({
            rawData,
            kategoriPilihan,
            vendorPilihan,
            filterPilihan,
            findItem
        }),[kategoriPilihan,rawData,vendorPilihan,filterPilihan,findItem])
    
        const currentData = filterDataPilihan.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
        const totalPages = Math.ceil(filterDataPilihan.length / itemPerPage);
        const dataSorting = sortingDataOut(currentData)

        const handleExport = (e: React.MouseEvent) => {
            e.preventDefault();
            if (filterDataPilihan.length > 0) {
                exportToExcelOut(filterDataPilihan, `Laporan_Outbound_${new Date().toLocaleDateString()}`);
            } else {
                alert("Tidak ada data untuk diexport!");
            }
        };

    const allStock = dataProduk ?  rawData.reduce((acc,item)=>{return acc + (item.jumlah_barang_keluar || 0)},0) : ""
    const allModal = rawData.reduce((acc,item)=>{
        const modal = item.nominal_modal * item.jumlah_barang_keluar  
        return acc + modal
    },0)
    return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                       
                       <div className="flex items-center gap-2 justify-center">
                            <div className="hidden md:block lg:block">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] lg:w-80 rounded-md md:w-40 w-20 font-semibold md:font-bold my-4">
                                <PieCharts/>
                                {rawData ? Number(allStock) : 0}
                            <h1>Stok Barang Keluar</h1>
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
                                    text-center md:text-[14px] text-[8px] lg:w-80 md:w-40 w-20 bg-white rounded-md font-semibold md:font-bold my-4">
                                    <DynamicBarChart/>
                                    {rawData ? convertToIdr(Number(allModal)) : 0}
                                    <h1>Total Revenue</h1>
                                </div>
                            </div>

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
                            keuanganChange={(e)=>dispatch(setNominalModal(parseInt(e.target.value)))}
                            tanggal="Tanggal Keluar"
                            tanggalValued={tanggalKeluar ? new Date(tanggalKeluar).toISOString().split("T")[0] : ""}
                            productName={productName ?? ""}
                            tanggalChange={(e)=>dispatch(setTanggalMasuk(e.target.value))}
                            keuanganValued={nominalModal ?? 0}
                            stockValued={jumlahBarangKeluar ?? 0}
                            keuangan="Laba Kotor/Revenue"
                            stockChange={(e)=>{
                                isNotZeroOutbound(e,{
                                dispatch,
                                setJumlahBarangKeluar,
                                stokId:Number(productId),
                                produk:dataProduk
                            })
                            
                            }} 
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
                            stockChange={(e)=>isNotZeroOutbound(e,{dispatch,setJumlahBarangKeluar})}

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

                    <div className="flex items-center justify-center">
                                <input type="search" placeholder="Ketik Nama Produk" autoComplete="false" 
                                onChange={(e)=>{
                                    const data = e.target.value
                                    setFindItem(data)
                                    findDataByName(data)    
                                }}
                                className="border text-black 
                                w-60
                                border-green-400 p-1 rounded-md bg-gray-200"/>
                                <button onClick={()=>findDataByName(findItem)} className="p-2 rounded-md bg-[#048720]">
                                    <SearchIcon/>
                                </button>
                                <button onClick={()=>dispatch(setIsOpenFilter(true))} className="p-2 rounded-md bg-[#048720] mx-1">
                                    <FilterIcon/>
                                </button>
                        </div>


            <h1 className="text-xl font-bold text-black mb-4">List Barang Keluar</h1>
            <ButtonLayer.Button clicker={() =>dispatch(setIsOpenOverlay(true))} text="Tambah Barang Keluar" />
            <p className="text-red-500 w-72 text-[12px] md:text-sm md:w-xl">Demi Menjaga kecocokan barang masuk dan keluar, kami tidak menyediakan fitur hapus di fitur Inbound dan Outbound!. Harap lebih teliti dalam pengisian data!</p>

            <Table>
                <TableHeadOutbound />   
                <tbody className="text-black">
                    {!resultFindItem || findItem == "" ? (
                        dataSorting.map((item, index) => (
                            <TableBodyOutbound
                                key={index}
                                unit={item.produk.unit?.nama_satuan}
                                nominalModal={`${convertToIdr(item.nominal_modal * item.jumlah_barang_keluar)}`}
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
                    ) : (resultFindItem?.map((item,index)=>{
                                            return(
                                                <TableBodyOutbound
                                                    key={index++}
                                                    unit={item.produk.unit?.nama_satuan}
                                                    nominalModal={`${convertToIdr(item.nominal_modal * item.jumlah_barang_keluar)}`}
                                                    tanggalMasuk={`${convertToDate(new Date(item.tanggal_keluar))}`}
                                                    editClick={()=>{
                                                        setSelectProdukId(item.id)
                                                        getDataById({
                                                            id:item.id,
                                                            dispatch:dispatch,
                                                            actions:{
                                                                setProductName,
                                                                setJumlahBarangMasuk : setJumlahBarangKeluar,
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
                                            )
                                        }))}
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