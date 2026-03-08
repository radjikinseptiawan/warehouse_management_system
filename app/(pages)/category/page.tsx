"use client"
import ButtonLayer from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setCategoryName, setWarnaCategory } from "@/app/slicers/categorySlicer"
import { setAlamatGudang, setNamaGudang, setWarnaGudang } from "@/app/slicers/lokasiGudangSlicers"
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { DataCategory, DataGudang } from "@/lib/type"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page(){
    const dispatch = useAppDispatch()

    const namaCategory = useAppSelector(state => state.category.namaCategory)
    const warnaCategory = useAppSelector(state => state.category.warnaCategory)
    const isOpenHapus = useAppSelector((state)=>state.overlay.isOpenDelete)
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)

    const [category, setCategory] = useState<DataCategory[] | null>([])
    const [categorySelected, setCategorySelected] = useState<number[]>([])
    const [idGudangTerpilih, setIdGudangTerpilih] = useState<number | null>(null) 
  
    const addCategory = async() => {
        try {
            const response = await fetch("/api/category", {
                method: "POST",
                body: JSON.stringify({
                    nama_category: namaCategory,
                    warna_category: warnaCategory,
                })
            })

            if (response.ok) {
                dispatch(setIsOpenOverlay(false))
                dispatch(setWarnaCategory(""))
                dispatch(setCategoryName(""))
                getCategory() 
            }
        } catch(e) {
            console.error(e)
        }
    }

    const getCategory = async() => {
        try {
            const response = await fetch("/api/category", { method: "GET" })
            const data = await response.json()
            setCategory(data.data)
        } catch(e) {
            console.error(e)
        }
    }

    const getCategoryDetail = async (id:number) => {
        try {
            const response = await fetch(`/api/category/${id}`, { method: "GET" })
            const data = await response.json()
            dispatch(setCategoryName(data.data.nama_kategori))
            dispatch(setWarnaCategory(data.data.warna_category))
        } catch (e) {
            console.error(e)
             }
        }


    useEffect(() => {
        getCategory()
    }, [])

    const dataCheck = (id: number) => {
        setCategorySelected(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const deleteCategory = async(id: number) => {
        try {
            const response = await fetch(`/api/category/${id}`, { method: "DELETE" })
            if (response.ok) {
                setCategory(prev => prev ? prev.filter(item => item.id !== id) : [])
                dispatch(setIsOpenDelete(false))
                setIdGudangTerpilih(null)
            }
        } catch(e) {
            console.error(e)
        }
    }

        const editData = async (id:number|null)=>{
            if(!id) return 
            try{
                const response = await fetch(`/api/category/${id}`,{
                    method:"PATCH",
                    body:JSON.stringify({
                        nama_category: namaCategory,
                        warna_category: warnaCategory,
                    })
                })
    
                if(response.ok){
                    dispatch(setIsOpendit(false))
                    dispatch(setCategoryName(""))
                    dispatch(setWarnaCategory(""))
                    getCategory()
                }
            }catch(e){
                console.error(e)
            }
        }



    return (
        <>
        <div className="flex justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-xl p-4 rounded-md text-black md:w-3xl w-sm overflow-y-auto h-screen mt-10">
                <h1 className="font-bold underline text-2xl text-center mb-4">List Kategori</h1>
                <div className="p-2">
                    {category ? (
                        category.length > 0 ? (
                            category.map((item) => (
                                <div className="my-2" key={item.id}>
                                    <CardView.Basic 
                                        btnEdit={()=>{
                                            setIdGudangTerpilih(item.id)
                                            getCategoryDetail(item.id)
                                            dispatch(setIsOpendit(true))
                                        }}
                                        btnDel={() => {
                                            setIdGudangTerpilih(item.id) // Set ID yang mau dihapus
                                            dispatch(setIsOpenDelete(true))
                                        }}
                                        disableEdit={categorySelected.includes(item.id)}
                                        clickCheck={() => dataCheck(item.id)}
                                        checklist={categorySelected.includes(item.id)}
                                        color={item.warna_category} 
                                        vendorName={item.nama_kategori}
                                    />
                                </div>
                            ))
                        ) : (
                            <h1 className="text-gray-400 text-center">Kamu Belum ada list Kategori!</h1>
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

{isOpenEdit && (
    <PopUpLayer.PopUpCategoryColor
        textBtn="Edit"
        nama="Edit Kategori"
        close={() => {
            dispatch(setIsOpendit(false));
            dispatch(setCategoryName("")); 
            dispatch(setWarnaCategory(""));
        }}
        valuedColor={warnaCategory || "#000000"} // Sesuai warna
        changeColor={(e) => dispatch(setWarnaCategory(e.target.value))} // Sesuai Slicer Kategori
        valued={namaCategory || ""}
        change={(e) => dispatch(setCategoryName(e.target.value))}
        click={() => editData(idGudangTerpilih)}
    />
)}


            {/* Modal Tambah */}
            {isOpenOverlay && (
                <PopUpLayer.PopUpCategoryColor
                    textBtn="Tambah"
                    close={() => dispatch(setIsOpenOverlay(false))}
                    valuedColor={warnaCategory}
                    valued={namaCategory}
                    nama={"Tambah Kategori"}
                    changeColor={(e) => dispatch(setWarnaCategory(e.target.value))} 
                    change={(e) => dispatch(setCategoryName(e.target.value))}
                    click={addCategory}
                />
            )}

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