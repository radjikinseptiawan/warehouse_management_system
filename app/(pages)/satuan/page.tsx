"use client"
import ButtonLayer from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { addSatuan, deleteSatuan, editDataSatuan, getSatuan, getSatuanDetail } from "@/app/layers/dataLayer/satuan"
import { setAlamatGudang, setNamaGudang, setWarnaGudang } from "@/app/slicers/lokasiGudangSlicers"
import { setIsOpenDelete, setIsOpendit, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { useEffect, useState } from "react"

export default function Page(){
    const dispatch = useAppDispatch()

    const isOpenHapus = useAppSelector((state)=>state.overlay.isOpenDelete)
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const isOpenEdit = useAppSelector(state=>state.overlay.isOpenEdit)
    
    const [categorySelected, setCategorySelected] = useState<number[]>([])
    const [idSatuanTerpilih, setSatuanTerpilih] = useState<number | null>(null) 
    const [satuan,setSatuan] = useState<string[] | any>([])
    const [satuanValue,setSatuanValue] = useState<string>('')

    const addSatuanValue = async ()=>{
        const payload : any= {
            nama_satuan:satuanValue
        }

        await addSatuan({
            payload
        })
        dispatch(setIsOpenOverlay(false))
        setSatuanValue("")
        getSatuan(setSatuan)
    }

    useEffect(() => {
        getSatuan(setSatuan)
    }, [])

    const dataCheck = (id: number) => {
        setCategorySelected(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }


    const satuanDelete = async ()=>{
        await deleteSatuan({
            id:idSatuanTerpilih,
            dispatch,
            state:{
                setSatuanTerpilih,
            },
            actions:{
                setSatuan
            }
        })

        dispatch(setIsOpenDelete(false))
    }

    const popUpDelete = ()=>{
        const decision = confirm("Data akan dihapus?")
        if(decision){
        satuanDelete()
        }
    }


    const satuanEdited = async ()=>{
        const payload:any = {
            nama_satuan:satuanValue,
        }
        await editDataSatuan({
            id:idSatuanTerpilih,
            payload,
            dispatch,
            actions:{
                setNamaGudang,
                setAlamatGudang,
                setWarnaGudang
            }
        })
        getSatuan(setSatuan)
        dispatch(setIsOpendit(false))
    }    


    const resetInputValue = ()=>{
            setSatuan("")
    }
    return (
        <>
        <div className="flex justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-xl p-4 rounded-md text-black md:w-3xl w-sm overflow-y-auto h-screen mt-10">
                <h1 className="font-bold underline text-2xl text-center mb-4">List Satuan</h1>
                <div className="p-2">
                    {satuan ? (
                        satuan.length > 0 ? (
                            satuan.map((item : any) => (
                                <div className="my-2" key={item.id}>
                                    <CardView.BasicSatuan
                                        btnEdit={()=>{
                                            setSatuanTerpilih(item.id)
                                            getSatuanDetail({
                                                id:item.id,
                                                dispatch,
                                                actions:{
                                                    setNamaGudang,
                                                    setAlamatGudang,
                                                    setWarnaGudang
                                                }
                                            })
                                            dispatch(setIsOpendit(true))
                                        }}
                                        btnDel={() => {
                                            setSatuanTerpilih(item.id) 
                                            dispatch(setIsOpenDelete(true))
                                        }}
                                        disableEdit={categorySelected.includes(item.id)}
                                        clickCheck={() => dataCheck(item.id)}
                                        checklist={categorySelected.includes(item.id)}
                                        vendorName={item.nama_satuan}
                                    />
                                </div>
                            ))
                        ) : (
                            <h1 className="text-gray-400 text-center">Kamu Belum ada list satuan!</h1>
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

        {isOpenOverlay && <PopUpLayer.PopUpAddSatuan 
        confirm={addSatuanValue} 
        cancel={()=>dispatch(setIsOpenOverlay(false))} 
        valueChanger={(e)=>setSatuanValue(e.target.value) } 
        satuanValue={satuanValue}/>}
       
       {
        isOpenHapus && <PopUpLayer.PopUpDelete section="Satuan" cancel={()=>dispatch(setIsOpenDelete(false))} click={()=>satuanDelete()}/>
       }
       
       {
        isOpenEdit && (<></>)
       }
       </div>
        </>
    )
}