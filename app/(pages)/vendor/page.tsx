"use client"
import ButtonLayer from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setCategoryName, setWarnaCategory } from "@/app/slicers/categorySlicer"
import { setAlamatGudang } from "@/app/slicers/lokasiGudangSlicers"
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { setVendorAlamat, setVendorName, setVendorWarna } from "@/app/slicers/vendorSlicers"
import { DataVendors } from "@/lib/type"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page() {
    const dispatch = useAppDispatch()

    // Redux States
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)
    const isOpenOverlay = useAppSelector(state => state.overlay.isOpenOverlay)
    const isOpenHapus = useAppSelector((state) => state.overlay.isOpenDelete)
    const namaVendors = useAppSelector((state)=>state.vendor.namaVendor)
    const alamatVendors = useAppSelector((state)=>state.vendor.alamatVendor)
    const warnaVendor = useAppSelector((state)=>state.vendor.warnaVendor)

    // Local States
    const [vendor, setVendor] = useState<DataVendors[] | null>([])
    const [categorySelected, setCategorySelected] = useState<number[]>([])
    const [editedVendor,setEditVendor] = useState<DataVendors | null | undefined>(null)
    const [idTargetHapus, setIdTargetHapus] = useState<number | null>(null)
    const [idTargetEdit, setIdTargetEdit] = useState<number | null>(null)

    const getVendors = async () => {
        try {
            const response = await fetch("/api/vendors", { method: "GET" })
            const data = await response.json()
            setVendor(data.data)
        } catch (e) {
            console.error(e)
        }
    }

    const getVendorsDetail = async (id:number) => {
        try {
            const response = await fetch(`/api/vendors/${id}`, { method: "GET" })
            const data = await response.json()
            dispatch(setVendorName(data.data.nama_vendor))
            dispatch(setVendorAlamat(data.data.alamat_vendor))
            dispatch(setVendorWarna(data.data.warna_vendor))
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        getVendors()
    }, [])

    const addCategory = async () => {
        try {
            const response = await fetch("/api/vendors", {
                method: "POST",
                body: JSON.stringify({
                    nama_vendor: namaVendors,
                    warna_vendor: warnaVendor,
                    alamat_vendor: alamatVendors
                })
            })
            if (response.ok) {
                dispatch(setIsOpenOverlay(false))
                dispatch(setVendorAlamat(""))
                dispatch(setVendorName(""))
                dispatch(setVendorWarna(""))
                getVendors()
            }
        } catch (e) {
            console.error(e)
        }
    }

    const dataCheck = (id: number) => {
        setCategorySelected(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const deleteCategory = async (id: number) => {
        try {
            const response = await fetch(`/api/vendors/${id}`, { method: "DELETE" })
            if (response.ok) {
                setVendor(prev => prev ? prev.filter(item => item.id !== id) : [])
                dispatch(setIsOpenDelete(false))
                setIdTargetHapus(null)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const editData = async (id:number|null)=>{
        if(!id) return 
        try{
            const response = await fetch(`/api/vendors/${id}`,{
                method:"PATCH",
                body:JSON.stringify({
                    nama_vendor:namaVendors,
                    warna_vendor: warnaVendor,
                    alamat_vendor: alamatVendors
                })
            })

            if(response.ok){
                dispatch(setIsOpendit(false))
                dispatch(setVendorName(""))
                dispatch(setVendorAlamat(""))
                dispatch(setVendorWarna(""))
                getVendors()
            }
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div className="flex justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-xl p-4 rounded-md h-screen w-sm text-black md:w-3xl overflow-y-auto mt-10">
                <h1 className="font-bold underline text-2xl text-center mb-4">List Vendors/Suppliers</h1>
                
                <div className="p-2">
                    {vendor ? (
                        vendor.length > 0 ? (
                            vendor.map((item) => (
                                <div className="my-2" key={item.id}>
                                    <CardView.Basic 
                                        btnEdit={()=>{
                                            getVendorsDetail(item.id)
                                            setIdTargetEdit(item.id)
                                            dispatch(setIsOpendit(true))
                                        }}
                                        btnDel={() => {
                                            setIdTargetHapus(item.id) // Set target ID di sini
                                            dispatch(setIsOpenDelete(true))
                                        }}
                                        disableEdit={categorySelected.includes(item.id)}
                                        clickCheck={() => dataCheck(item.id)}
                                        checklist={categorySelected.includes(item.id)}
                                        vendorAddress={item.alamat_vendor}
                                        color={item.warna_vendor} 
                                        vendorName={item.nama_vendor}
                                    />
                                </div>
                            ))
                        ) : (
                            <h1 className="text-gray-400 text-center">Kamu Belum ada list Vendors/Suppliers!</h1>
                        )
                    ) : (
                        Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="my-2">
                                <CardView.BasicSkeleton />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <ButtonLayer.Plus clicker={() => dispatch(setIsOpenOverlay(true))} />

            {isOpenOverlay && (
                <PopUpLayer.PopUp
                    textBtn="Tambah"
                    title1="Nama Vendor/Supplier" title2="Alamat Vendors/Suppliers" title3="Warna Vendors/Suppliers" nama="Tambah Vendor/Supplier"
                    close={() => dispatch(setIsOpenOverlay(false))}
                    colorValued={warnaVendor}
                    changeColor={(e) => dispatch(setVendorWarna(e.target.value))} 
                    valued1={namaVendors}
                    change1={(e) => dispatch(setVendorName(e.target.value))}
                    change2={(e) => {dispatch(setVendorAlamat(e.target.value))}}
                    click={addCategory}
                />
            )}

            {
                isOpenEdit && (
                <PopUpLayer.PopUp
                    textBtn="Edit"
                    title1="Nama Vendor/Supplier" title2="Alamat Vendors/Suppliers" title3="Warna Vendors/Suppliers" nama="Edit Vendor/Supplier"
                    close={() => dispatch(setIsOpendit(false))}
                    colorValued={warnaVendor}
                    changeColor={(e) => dispatch(setVendorWarna(e.target.value))} 
                    valued1={namaVendors}
                    valued2={alamatVendors}
                    change1={(e) => dispatch(setVendorName(e.target.value))}
                    change2={(e) => {dispatch(setVendorAlamat(e.target.value))}}
                    click={()=>editData(idTargetEdit)}
                />
                )
            }
            {isOpenHapus && (
                <PopUpLayer.PopUpDelete 
                    section="Vendor"
                    cancel={() => {
                        dispatch(setIsOpenDelete(false))
                        setIdTargetHapus(null)
                    }} 
                    click={() => idTargetHapus && deleteCategory(idTargetHapus)} 
                />
            )}
        </div>
    )
}