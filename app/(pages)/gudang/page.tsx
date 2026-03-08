"use client"
import ButtonLayer from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setCategoryName, setWarnaCategory } from "@/app/slicers/categorySlicer"
import { setAlamatGudang, setNamaGudang, setWarnaGudang } from "@/app/slicers/lokasiGudangSlicers"
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { DataGudang } from "@/lib/type"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page(){
    const dispatch = useAppDispatch()

    const namaGudang = useAppSelector(state => state.gudang.namaGudang)
    const warnaGudang = useAppSelector(state => state.gudang.warnaGudang)
    const alamatGudang = useAppSelector(state => state.gudang.alamatGudang)
    const isOpenHapus = useAppSelector((state)=>state.overlay.isOpenDelete)
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)
    
    const [gudang, setGudang] = useState<DataGudang[] | null>([])
    const [categorySelected, setCategorySelected] = useState<number[]>([])
    const [idGudangTerpilih, setIdGudangTerpilih] = useState<number | null>(null) 
  
    const addCategory = async() => {
        try {
            const response = await fetch("/api/lokasi_gudang", {
                method: "POST",
                body: JSON.stringify({
                    nama_gudang: namaGudang,
                    warna_gudang: warnaGudang,
                    alamat_gudang: alamatGudang
                })
            })

            if (response.ok) {
                dispatch(setIsOpenOverlay(false))
                dispatch(setAlamatGudang(""))
                dispatch(setNamaGudang(""))
                dispatch(setWarnaGudang(""))
                getGudang() 
            }
        } catch(e) {
            console.error(e)
        }
    }


    const getGudangDetail = async (id:number) => {
        try {
            const response = await fetch(`/api/lokasi_gudang/${id}`, { method: "GET" })
            const data = await response.json()
            dispatch(setNamaGudang(data.data.nama_gudang))
            dispatch(setAlamatGudang(data.data.alamat_gudang))
            dispatch(setWarnaGudang(data.data.warna_gudang))
        } catch (e) {
            console.error(e)
             }
        }

    // Mngambil semua data gudang
    const getGudang = async() => {
        try {
            const response = await fetch("/api/lokasi_gudang", { method: "GET" })
            const data = await response.json()
            setGudang(data.data)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getGudang()
    }, [])

    const dataCheck = (id: number) => {
        setCategorySelected(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const editData = async (id:number|null)=>{
            if(!id) return 
            try{
                const response = await fetch(`/api/lokasi_gudang/${id}`,{
                    method:"PATCH",
                    body:JSON.stringify({
                        nama_gudang:namaGudang,
                        warna_gudang: warnaGudang,
                        alamat_gudang: alamatGudang
                    })
                })
    
                if(response.ok){
                    dispatch(setIsOpendit(false))
                    dispatch(setNamaGudang(""))
                    dispatch(setAlamatGudang(""))
                    dispatch(setWarnaGudang(""))
                    getGudang()
                }
            }catch(e){
                console.error(e)
            }
        }
    

    const deleteCategory = async(id: number) => {
        try {
            const response = await fetch(`/api/lokasi_gudang/${id}`, { method: "DELETE" })
            if (response.ok) {
                setGudang(prev => prev ? prev.filter(item => item.id !== id) : [])
                dispatch(setIsOpenDelete(false))
                setIdGudangTerpilih(null)
            }
        } catch(e) {
            console.error(e)
        }
    }

    return (
        <>
        <div className="flex justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-xl p-4 rounded-md text-black md:w-3xl w-sm overflow-y-auto h-screen mt-10">
                <h1 className="font-bold underline text-2xl text-center mb-4">List Lokasi Gudang</h1>
                <div className="p-2">
                    {gudang ? (
                        gudang.length > 0 ? (
                            gudang.map((item) => (
                                <div className="my-2" key={item.id}>
                                    <CardView.Basic 
                                        btnEdit={()=>{
                                            getGudangDetail(item.id)
                                            setIdGudangTerpilih(item.id)
                                            dispatch(setIsOpendit(true))
                                        }}
                                        btnDel={() => {
                                            setIdGudangTerpilih(item.id) // Set ID yang mau dihapus
                                            dispatch(setIsOpenDelete(true))
                                        }}
                                        disableEdit={categorySelected.includes(item.id)}
                                        clickCheck={() => dataCheck(item.id)}
                                        checklist={categorySelected.includes(item.id)}
                                        vendorAddress={item.alamat_gudang}
                                        color={item.warna_gudang} 
                                        vendorName={item.nama_gudang}
                                    />
                                </div>
                            ))
                        ) : (
                            <h1 className="text-gray-400 text-center">Kamu Belum ada list gudang!</h1>
                        )
                    ) : (
                        Array.from({length: 5}).map((_, index) => (
                            <div key={index} className="my-2">
                                <CardView.BasicSkeleton />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <ButtonLayer.Plus clicker={() => dispatch(setIsOpenOverlay(true))} />

            {/* Modal Tambah */}
            {isOpenOverlay && (
                <PopUpLayer.PopUp
                    textBtn="Tambah"
                    title1="Nama Gudang" title2="Alamat Gudang" title3="Warna Gudang" nama="Tambah Gudang"
                    close={() => dispatch(setIsOpenOverlay(false))}
                    colorValued={warnaGudang}
                    changeColor={(e) => dispatch(setWarnaGudang(e.target.value))} 
                    valued1={namaGudang}
                    valued2={alamatGudang}
                    change1={(e) => dispatch(setNamaGudang(e.target.value))}
                    change2={(e) => dispatch(setAlamatGudang(e.target.value))}
                    click={addCategory}
                />
            )}

            {
                isOpenEdit && (
                <PopUpLayer.PopUp
                    textBtn="Edit"
                    title1="Nama Gudang" title2="Alamat Gudang" title3="Warna Gudang" nama="Edit Gudang"
                    close={() => dispatch(setIsOpendit(false))}
                    colorValued={warnaGudang || ""}
                    changeColor={(e) => dispatch(setWarnaGudang(e.target.value))} 
                    valued1={namaGudang || ""}
                    valued2={alamatGudang || ""}
                    change1={(e) => dispatch(setNamaGudang(e.target.value))}
                    change2={(e) => {dispatch(setAlamatGudang(e.target.value))}}
                    click={()=>editData(idGudangTerpilih)}
                />
                )
            }

            {/* Modal Hapus */}
            {isOpenHapus && (
                <PopUpLayer.PopUpDelete 
                    section="Gudang"
                    cancel={() => {
                        dispatch(setIsOpenDelete(false))
                        setIdGudangTerpilih(null)
                    }} 
                    click={() => idGudangTerpilih && deleteCategory(idGudangTerpilih)} 
                />
            )}
        </div>
        </>
    )
}