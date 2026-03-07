"use client"

import ButtonLayer from "@/app/component/ui/Button"
import GudangIcon from "@/app/component/ui/icon/Gudang"
import ProductIcon from "@/app/component/ui/icon/Product"
import Supplier from "@/app/component/ui/icon/Suppliers"

export default function Page(){
    return(
        <>
        <div className="mt-10 ml-2 flex gap-2 w-full">
            <ButtonLayer.Main 
            clicker={()=>window.location.href = "/vendor"} 
            icon={<Supplier/>} 
            text="Kelola Vendors atau Supplier" />
            
            <ButtonLayer.Main 
            clicker={()=>window.location.href = "/gudang"}
            icon={<GudangIcon/>} 
            text="Kelola Lokasi Gudang" />
            
            <ButtonLayer.Main 
            clicker={()=>window.location.href="/category"}
            icon={<ProductIcon/>} 
            text="Kelola Kategori Produk" />
        </div>
        </>
    )
}