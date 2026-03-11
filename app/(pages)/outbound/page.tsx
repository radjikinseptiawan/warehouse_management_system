"use client"
import ButtonLayer from "@/app/component/ui/Button";
import Table from "@/app/component/ui/table/table";
import TableBodyInbound from "@/app/component/ui/table/tableBody/tableBodyOutbound";
import TableBodyInventory from "@/app/component/ui/table/tableBody/tableBodyInventory";
import TableHeadInbound from "@/app/component/ui/table/tableHeaders/tableHeadInbound";
import TableHeadInventory from "@/app/component/ui/table/tableHeaders/tableHeadInventory";
import PopUpLayer from "@/app/component/ux/PopUp";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setNamaGudang } from "@/app/slicers/lokasiGudangSlicers";
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";
import { setGudang, setImageProduct, setJumlah, setKategori, setProductName, setSuppliers } from "@/app/slicers/productSlicers";
import { useEffect, useState } from "react";
import { setJumlahBarangMasuk, setNominalModal, setProdukId, setTanggalMasuk } from "@/app/slicers/inboundSlicers";
import { InboundProductType, OutboundProductType, TypeProduct } from "@/lib/type";
import TableBodyOutbound from "@/app/component/ui/table/tableBody/tableBodyOutbound";
import TableHeadOutbound from "@/app/component/ui/table/tableHeaders/tableHeadOutbound";


export default function Page() {
    const [paginationId, setPagination] = useState<number>(0);
    const [rawData,setDataRaw] = useState<OutboundProductType[]>([])
    const [selectProductId,setSelectProdukId] = useState<number>(0)
    const [dataProduk,setDataProduk] = useState<TypeProduct[]>()
    const itemPerPage = 6;

    // Redux State
    // Inbound State Management
    const produkId = useAppSelector((state)=>state.inbound.produkId)
    const jumlahBarangMasuk = useAppSelector((state)=>state.inbound.jumlahBarangMasuk)
    const tanggalMasuk = useAppSelector((state)=>state.inbound.tanggalMasuk)
    const nominalModal = useAppSelector(state=>state.inbound.nominalModal)

    // Inventory State Management
    const suppliers = useAppSelector(state=>state.product.suppliers)
    const category = useAppSelector(state=>state.product.kategori)
    const gudang = useAppSelector(state=>state.product.gudang)
    const productName = useAppSelector(state=>state.product.productName)
    const imageProduct = useAppSelector(state=>state.product.image)
    
    // UI/UX 
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenDelete = useAppSelector(state=>state.overlay.isOpenDelete)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)    
    const dispatch = useAppDispatch()
    
    // Mengambil data produk
    const syncAllDataProduct = async () => {
        try {
            const response = await fetch("/api/barang_keluar", { method: "GET" });
            const result = await response.json();
            setDataRaw(result.data);
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
    };

    const calculateDataProduct = async()=>{
           try {
            const response = await fetch("/api/produk", { method: "GET" });
            const result = await response.json();
            setDataProduk(result.data);
        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
    }

    // Melihat data sekarang
    const currentData = rawData.slice(paginationId * itemPerPage, (paginationId + 1) * itemPerPage);
    // Kalkulasi total halaman dibuat
    const totalPages = Math.ceil(rawData.length / itemPerPage);
    useEffect(() => {
        syncAllDataProduct()
    }, []);

    useEffect(()=>{
      calculateDataProduct()
    },[])

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

    // Mengubah nomor ke rupiah
    const convertToIdr = (idr:number)=>{
        return new Intl.NumberFormat("ID-id",{
            style:"currency",
            currency:"IDR",
        }).format(idr)
    }

    const convertToDate = (date : Date)=>{
        return new Intl.DateTimeFormat("ID-id",{
            day:"2-digit",
            month:"long",
            year:"numeric"
        }).format(date)
    }

    // Menambah Produk
    const addProduct = async ()=>{
      try{
        const response = await fetch("/api/barang_keluar",{
            method:"POST",
            body:JSON.stringify({
                jumlahBarangMasuk,
                produkId,
                tanggalMasuk,
                nominalModal
            })
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
            dispatch(setJumlahBarangMasuk(0))
            dispatch(setTanggalMasuk(""))
            dispatch(setProdukId(0))
            dispatch(setNominalModal(0))
            syncAllDataProduct()
        }
        console.log(data)
    }catch(e){
        console.error(e)
      }
    }

    // Ambil data sesuai id
    const getDataById = async(id:number)=>{
        try{
            const response = await fetch(`/api/barang_keluar/${id}`,{
                method:"GET"
            })
            const data = await response.json()
            dispatch(setProductName(data.data.produk.nama_produk))
            dispatch(setNominalModal(data.data.nominal_modal))
            dispatch(setJumlahBarangMasuk(data.data.jumlah_barang_keluark))
            dispatch(setTanggalMasuk(data.data.tanggal_keluar))
            console.log(data)
        }catch(e){
            console.error(e)
        }
    }

    // Edit Produk
    const editProduct = async(id:number)=>{
        try{
              const response = await fetch(`/api/barang_keluar/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id: id,
                    jumlah:jumlahBarangMasuk,
                    nominal_produk:nominalModal,
                    tanggal_masuk:tanggalMasuk
                })       
                }) 
              
              if(response.ok){
                resetInputValue()
                }

              const data = await response.json()
              console.log(data)
        }catch(e){
            console.error(e)
        }
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
        dispatch(setNamaGudang(""))
        dispatch(setProductName(""))
        dispatch(setSuppliers(0))
        dispatch(setTanggalMasuk(""))
        dispatch(setJumlahBarangMasuk(0))
        dispatch(setNominalModal(0))
        setSelectProdukId(0)
        dispatch(setIsOpendit(false))
        dispatch(setIsOpenOverlay(false))
        dispatch(setImageProduct(""))
        dispatch(setProductName(""))
        dispatch(setKategori(0))
        dispatch(setGudang(0))
        dispatch(setSuppliers(0))
        dispatch(setTanggalMasuk(""))
        dispatch(setJumlahBarangMasuk(0))
        dispatch(setNominalModal(0))           
    }

    const allStock = dataProduk ?  rawData.reduce((acc,item)=>{return acc + (item.jumlah_barang_keluar || 0)},0) : ""
    const allModal = rawData.reduce((acc,item)=>{return acc + (item.nominal_modal || 0)},0)
    return (
        <div className="p-4 bg-white rounded-lg flex flex-col justify-center shadow-md h-screen">
                       
                       <div className="flex items-center gap-2 justify-center">
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] lg:w-80 rounded-md md:w-40 w-20 font-semibold md:font-bold my-4">
                                {rawData ? Number(allStock) : 0}
                            <h1>Stok Barang Keluar</h1>
                            </div>
                            <div className="border shadow p-2 text-green-400 bg-white
                            text-center md:text-[14px] text-[8px] font-semibold rounded-md lg:w-80 md:w-40 w-20 md:font-bold my-4">
                                {rawData.length}
                            <h1>Total Produk</h1>
                            </div>
                           
                            <div className="shadow border p-2 text-green-400 
                            text-center md:text-[14px] text-[8px] lg:w-80 md:w-40 w-20 bg-white rounded-md font-semibold md:font-bold my-4">
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
                            tanggalValued={tanggalMasuk ? new Date(tanggalMasuk).toISOString().split("T")[0] : ""}
                            productName={productName || ""}
                            tanggalChange={(e)=>dispatch(setTanggalMasuk(e.target.value))}
                            keuanganValued={nominalModal ?? 0}
                            stockValued={jumlahBarangMasuk ?? 0}
                            keuangan="Laba Kotor/Revenue"
                            stockChange={(e)=>dispatch(setJumlahBarangMasuk(parseInt(e.target.value)))} 
                            supplierValue={suppliers || ""}
                            supplierChange={(e)=>{dispatch(setSuppliers(parseInt(e.target.value)))}}
                            changeKategori={(e)=>{dispatch(setKategori(parseInt(e.target.value)))}}
                            images={""}
                            kategoriValue={category || ""}
                            gudangChange={(e)=>{dispatch(setGudang(parseInt(e.target.value)))}}
                            gudangValue={gudang || ""}
                            changeProductName={(e)=>{dispatch(setProductName(productName ? e.target.value : ""))}}
                            cancel={()=>resetInputValue()}  
                            textBtn="Tambah" 
                            click={addProduct} 
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
                            tanggalValued={tanggalMasuk ? new Date(tanggalMasuk).toISOString().split("T")[0] : ""}

                            stockValued={jumlahBarangMasuk}
                            stockChange={(e)=>dispatch(setJumlahBarangMasuk(parseInt(e.target.value)))}

                            keuangan="Laba Kotor/Revenue"
                            keuanganChange={(e)=>{dispatch(setNominalModal(parseInt(e.target.value)))}}
                            keuanganValued={nominalModal}

                            
                            cancel={()=>resetInputValue()}
                            textBtn="Edit" 
                            click={()=>editProduct(selectProductId)} 
                            nama="Edit Produk"/>
                            </div>
                        )
                    }
            <h1 className="text-xl font-bold text-black mb-4">List Barang Keluar</h1>
            <ButtonLayer.Button clicker={() =>dispatch(setIsOpenOverlay(true))} text="Tambah Barang Keluar" />
            
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
                                    getDataById(item.id)
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