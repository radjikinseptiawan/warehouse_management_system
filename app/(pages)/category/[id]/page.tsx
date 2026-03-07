"use client"
import ButtonLayer, { Button } from "@/app/component/ui/Button"
import CardView from "@/app/component/ux/Card"
import PopUpLayer from "@/app/component/ux/PopUp"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setCategoryName, setWarnaCategory } from "@/app/slicers/categorySlicer"
import { setIsOpenDelete, setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer"
import { CategoryType, DataCategory, VendorType } from "@/lib/type"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Page(){
    const isOpenOverlay = useAppSelector(state=>state.overlay.isOpenOverlay)
    const namaCategory = useAppSelector(state=>state.category.namaCategory)
    const warnaCategory = useAppSelector(state=>state.category.warnaCategory)
    const dispatch = useAppDispatch()
    const isOpenHapus = useAppSelector((state)=>state.overlay.isOpenDelete)
    const params = useParams()
    const router = useRouter()
    const [category,setCategory] = useState<CategoryType[]| null>([])
    const [categorySelected,setCategorySelected] = useState<number[]>([])
    const [allChecked,setAllChecked] = useState<boolean>(false)
    const addCategory = async()=>{
        try{
            const response = await fetch("/api/category",{
                method:"POST",
                body:JSON.stringify({
                    nama_category:namaCategory,
                    warna_category: warnaCategory
                })
            })

            const data = await response.json()
            dispatch(setIsOpenOverlay(false))
            dispatch(setWarnaCategory(""))
            dispatch(setCategoryName(""))
            return data
        }catch(e){
            console.error(e)
        }
    }

    const getCategory = async()=>{
        try{
            const response = await fetch("/api/category",{
                method:"GET"
            })
            const data = await response.json()
            setCategory(data.data)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getCategory()
    },[])

    // Mengambil data kategori
    const dataCheck = (id:number)=>{
        setCategorySelected(prev=>{
            if(prev.includes(id)){
                return prev.filter(item => item !== id)
            }
            return [...prev,id]
        })
    }

    // Mengambil Semua Data Kategori
    const dataCheckAll = ()=>{
        if(categorySelected.length === category?.length){
            setCategorySelected([])            
            setAllChecked(false)
        }else{
            const allsId = category?.map(item=>item.id) || []
            setAllChecked(true)
            setCategorySelected(allsId)
        }
    }

    const deleteCategory = async(id:number | any)=>{
        try{
            const response = await fetch(`/api/category/${id}`,{
                method:"DELETE"
            })
        
            const data = await response.json()
            dispatch(setIsOpenDelete(false))
            router.push("/category/")

            return data
        }catch(e){
            console.error(e)
        }
    }
    return(
        <>
        <div className="flex justify-center h-screen">
        <div className="bg-white shadow-xl p-2 rounded-md text-black md:w-3xl">
            <h1 className="font-bold underline text-2xl text-center">List Kategori</h1>
            <span className="flex gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                <input type="checkbox" onClick={dataCheckAll} id="all"/>
                <label htmlFor="all" className="text-gray-400 text-[12px] underline ">Select All</label>
                </div>
                <p className="text-gray-400 text-[12px] font-semibold">{categorySelected.length > 0? categorySelected.length :0} Item Selected</p>
            </span>
            <div className="p-2">
                {
                    category ?
                    category?.length > 0 ?
                    category?.map((item,index)=>{
                        return(
                            <div className="my-2" key={index}>
                            <CardView.Basic 
                            btnDel={()=>dispatch(setIsOpenDelete(true))}
                            disableEdit={categorySelected.includes(item.id)}
                            clickCheck={()=>dataCheck(item.id)}
                            checklist={categorySelected.includes(item.id)}
                            key={index} color={item.warna_category} vendorName={item.nama_kategori}/>
                            </div>
                        )
                    }) : 
                    Array.from({length:8}).map((_,index)=>{
                        return (
                            <div key={index++} className="my-2">
                            <CardView.BasicSkeleton/>
                            </div>
                        )    
                    })
                    :
                    <h1 className="text-gray-400 text-center">Kamu Belum ada list Kategori!</h1>
                }
            </div>
        </div>
        <ButtonLayer.Plus clicker={()=>dispatch(setIsOpenOverlay(true))}/>
            {
                isOpenOverlay && <PopUpLayer.PopUpCategory
                valuedColor={warnaCategory}
                changeColor={(e)=>dispatch(setWarnaCategory(e.target.value))} 
                valued={namaCategory}
                change={(e)=>dispatch(setCategoryName(e.target.value))}
                click={addCategory}/>
            }
            {
                isOpenHapus && <PopUpLayer.PopUpDelete cancel={()=>{
                    dispatch(setIsOpenDelete(false)
                )}} click={()=>deleteCategory(parseInt(params.id as string))}/>
            }
        </div>
    </>
    )
}


