"use client"
import ButtonLayer from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { addVendor, deleteVendors, editData, getVendors, getVendorsDetail } from "@/app/layers/dataLayer/vendors"
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


    useEffect(() => {
        getVendors(setVendor)
    }, [])

    const addVendors = async()=>{
        const payload :any = {
            alamat_vendor: alamatVendors,
            nama_vendor: namaVendors,
            warna_vendor: warnaVendor
        }
        await addVendor({
            payload,dispatch,
            actions:{
            setIsOpenOverlay,
            setVendorAlamat,
            setVendorName,
            setVendorWarna,
        },refreshVendor:()=>getVendors(setVendor)})
    
        getVendors(setVendor)
    }

    const dataCheck = (id: number) => {
        setCategorySelected(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const vendorsDeleted = async()=>{
        await deleteVendors({
        id:idTargetHapus,
        dispatch,
        state:{
            setIdTargetHapus,
            setIsOpenDelete
        },
        actions:{
            setVendor
        }
    })
    }

    const dataEdited = async()=>{
        const payload : any = {
            nama_vendor:namaVendors,
            warna_vendor:warnaVendor,
            alamat_vendor:alamatVendors
        }

        await editData({
            id:idTargetEdit,
            payload,
            dispatch,
            actions:{
                setIsOpendit,
                setVendorName,
                setVendorAlamat,
                setVendorWarna
            }
        })
        getVendors(setVendor)

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
                                            getVendorsDetail({
                                                id:item.id,
                                                dispatch,
                                                actions:{
                                                    setVendorName,
                                                    setVendorAlamat,
                                                    setVendorWarna
                                                }
                                            })
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
                    click={addVendors}
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
                    click={dataEdited}
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
                    click={vendorsDeleted} 
                />
            )}
        </div>
    )
}