import { ReactNode } from "react"
import Input from "../../ui/Input"
import ButtonLayer, { Button } from "../../ui/Button"

function PopUpLayer({children}:{children:ReactNode}){
    return(
        <div className="w-full h-full fixed 
        z-50
        flex items-center justify-center">
            {children}
        </div>
    )
}
function PopUpCategory(){
    return(
        <div className="flex items-center justify-center fixed text-black h-screen">
            <div className="bg-white shadow-xl p-2 rounded-md lg:w-2xl text-center md:w-xl">
            <h1 className="text-2xl font-semibold">Tambah Kategori</h1>
            <div className="flex flex-col items-start mx-10 text-[#048720]">
                <Input.Basic mind="Nama Kategori" title="Nama Kategori" types="text"/>
                <Input.Color title="Warna Kategori"/>
                </div>
                <span className="text-white">
                <ButtonLayer.Button text="Tambah" clicker={()=>{console.log("test")}}/>
                </span>
            </div>
        </div>
    )
}
PopUpLayer.PopUpCategory = PopUpCategory
export default PopUpLayer