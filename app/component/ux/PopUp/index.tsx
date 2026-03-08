import { ChangeEvent, ReactNode } from "react"
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

function PopUpCategory({
    click,
    valued1,
    valued2,
    colorValued,
    close,
    nama,
    change2,
    change1,
    title1,
    mind1,
    title2,
    mind2,
    title3,
    changeColor
}:{
    colorValued:string,
    close:()=>void,
    title1:string,
    mind1?:string,
    title2:string,
    mind2?:string,
    click?:()=>void,
    nama:String,
    changeColor:(e:ChangeEvent<HTMLInputElement>)=>void,
    change1?:(e:ChangeEvent<HTMLInputElement>)=>void,
    change2?:(e:ChangeEvent<HTMLInputElement>)=>void,
    valued1?:string,
    valued2?:string,
    title3:string
}){
    return(
        <div className="flex items-center justify-center fixed text-black h-screen z-50">
            <div className="bg-white shadow-xl p-2 rounded-md lg:w-2xl text-center md:w-xl">
            <h1 className="text-2xl font-semibold">Tambah {nama}</h1>
            <div className="flex flex-col items-start mx-10 text-[#048720]">
                <Input.Basic 
                change={change1}
                value={valued1}
                mind={mind1} title={title1} types="text"/>
                <Input.Basic 
                types="text"
                change={change2}
                mind={mind2}
                value={valued2}
                title={title2}/>
                <Input.Color
                title={title3}
                valued={colorValued}
                change={changeColor}    
                />
                </div>
                <span className="text-white">
                <ButtonLayer.Button text="Cancel" color="bg-[#b3b3b3] mx-2" clicker={close}/>
                <ButtonLayer.Button text="Tambah" clicker={click}/>
                </span>
            </div>
        </div>
    )
}


function PopUpCategoryColor({
    click,
    valued,
    close,
    nama,
    change,
    valuedColor,
    changeColor
}:{
    close:()=>void
    valued?:string,
    click?:()=>void,
    nama:String,
    changeColor:(e:ChangeEvent<HTMLInputElement>)=>void,
    valuedColor:string
    change?:(e:ChangeEvent<HTMLInputElement>)=>void
}){
    return(
        <div className="flex items-center justify-center fixed text-black h-screen z-50">
            <div className="bg-white shadow-xl p-2 rounded-md lg:w-2xl text-center md:w-xl">
            <h1 className="text-2xl font-semibold">Tambah {nama}</h1>
            <div className="flex flex-col items-start mx-10 text-[#048720]">
                <Input.Basic 
                change={change}
                value={valued}
                mind="Nama Kategori" title="Nama Kategori" types="text"/>
                <Input.Color 
                change={changeColor}
                valued={valuedColor}
                title="Warna Kategori"/>
                </div>
                <span className="text-white">
                <ButtonLayer.Button text="Cancel" color="bg-[#b3b3b3] mx-2" clicker={close}/>
                <ButtonLayer.Button text="Tambah" clicker={click}/>
                </span>
            </div>
        </div>
    )
}


function PopUpDelete({
    click,
    cancel,
    section
}:{
    section:string
    cancel?:()=>void
    click?:()=>void,
}){
    return(
        <div className="flex items-center justify-center fixed text-black h-screen z-50">
            <div className="bg-white shadow-xl p-2 rounded-md lg:w-2xl text-center md:w-xl">
            <h1 className="text-2xl font-semibold">Hapus {section}</h1>
                <span className="text-white">
                  <h1 className="text-black my-4">Kamu yakin ingin menghapus data ini?</h1>
                <div className="gap-2 flex items-center justify-center">
                <ButtonLayer.Button text="Batalkan" color="bg-[#910200]" clicker={cancel}/>
                <ButtonLayer.Button color="bg-[#690503]" text="Hapus" clicker={click}/>
                </div>
                </span>
            </div>
        </div>
    )
}

PopUpLayer.PopUpDelete = PopUpDelete
PopUpLayer.PopUpCategoryColor = PopUpCategoryColor
PopUpLayer.PopUp = PopUpCategory
export default PopUpLayer