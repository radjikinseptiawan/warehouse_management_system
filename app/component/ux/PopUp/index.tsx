import { ChangeEvent, ReactNode, useEffect, useState } from "react"
import Input from "../../ui/Input"
import ButtonLayer, { Button } from "../../ui/Button"
import { CategoryType, DataGudang, DataVendors, GudangType, VendorType } from "@/lib/type"

function PopUpLayer({children}:{children:ReactNode}){
    return(
        <div className="w-full h-full fixed 
        z-50
        flex items-center justify-center">
            {children}
        </div>
    )
}
function PopUpProduct({
    textBtn,
    cancel,
    click,
    nama,
    changeProductName,
    productNameValue,
    jumlahProduct,
    jumlahProductChange,
    changeKategori,
    kategoriValue,
    gudangValue,
    gudangChange,
    supplierChange,
    supplierValue
}:{
    cancel:()=>void,
    supplierValue:number | string,
    nama:string,
    supplierChange:(e: ChangeEvent<HTMLSelectElement>)=>void,
    gudangValue:number | string,
    gudangChange:(e: ChangeEvent<HTMLSelectElement>)=>void,
    changeKategori:(e: ChangeEvent<HTMLSelectElement>)=>void,
    kategoriValue:number | string
    jumlahProduct:string | number,
    jumlahProductChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    productNameValue:string
    textBtn:string,
    click:()=>void,
    changeProductName:(e:ChangeEvent<HTMLInputElement>)=>void    
}){
        const [dataGudang, setDataGudang] = useState<DataGudang[]>([])
        const [dataKategori,setDataKatgori] = useState<CategoryType[]>([])
        const [dataSuppliers,setDataSuppliers] = useState<DataVendors[]>([])

        const suppliersFetch = async()=>{
            const response = await fetch("/api/vendors",{method:"GET"})
            const data = await response.json()
            setDataSuppliers(data.data)            
        }

        const dataGudangFetch = async()=>{
            const response = await fetch("/api/lokasi_gudang",{method:"GET"})
            const data = await response.json()
            setDataGudang(data.data)
        }

        const kategoriFetch = async()=>{
            const response = await fetch("/api/category",{method:"GET"})
            const data = await response.json()
            setDataKatgori(data.data)
        }

        useEffect(()=>{
            kategoriFetch()
            dataGudangFetch()
            suppliersFetch()
        },[])

        return(
<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
  <div className="bg-white w-[650px] rounded-xl shadow-xl p-6">

    {/* Title */}
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">
      {nama}
    </h1>

    <div className="grid grid-cols-2 gap-4 text-gray-700">

      <div className="col-span-2">
        <label className="text-sm font-medium">Nama Produk</label>
        <input
          value={productNameValue}
          onChange={changeProductName}
          type="text"
          placeholder="Masukkan nama produk"
          className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      {/* Jumlah */}
      <div>
        <label className="text-sm font-medium">Jumlah</label>
        <input
          value={jumlahProduct}
          onChange={jumlahProductChange}
          type="number"
          placeholder="0"
          className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      {/* Kategori */}
      <div>
        <label className="text-sm font-medium">Kategori</label>
        <select onChange={changeKategori} value={kategoriValue} className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 outline-none">
          <option value="">Pilih kategori</option>

          {dataKategori.map((item)=>(
            <option key={item.id} value={item.id}>
              {item.nama_kategori}
            </option>
          ))}

        </select>
      </div>

      {/* Gudang */}
      <div>
        <label className="text-sm font-medium">Lokasi Gudang</label>
        <select onChange={gudangChange} value={gudangValue} className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 outline-none">

          <option value="">Pilih gudang</option>

          {dataGudang.map((item)=>(
            <option key={item.id} value={item.id}>
              {item.nama_gudang}
            </option>
          ))}

        </select>
      </div>

      {/* Supplier */}
      <div> 
        <label className="text-sm font-medium">Supplier / Vendor</label>
        <select onChange={supplierChange} value={supplierValue} className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 outline-none">

          <option value="">Pilih supplier</option>

          {dataSuppliers.map((item)=>(
            <option key={item.id} value={item.id}>
              {item.nama_vendor}
            </option>
          ))}

        </select>
      </div>

          <Input.Image title="Gambar"/>
    </div>

    {/* Button */}
    <div className="flex justify-end gap-3 mt-6">

      <button
        onClick={cancel}
        className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition"
      >
        Cancel
      </button>

      <button
        onClick={click}
        className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
      >
        {textBtn}
      </button>

    </div>

  </div>
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
    textBtn,
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
    textBtn:string,
    title3:string
}){
    return(
        <div className="flex items-center justify-center fixed text-black h-screen z-50">
            <div className="bg-white shadow-xl p-2 rounded-md lg:w-2xl text-center md:w-xl">
            <h1 className="text-2xl font-semibold">{nama}</h1>
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
                <ButtonLayer.Button text={textBtn} clicker={click}/>
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
    textBtn,
    changeColor
}:{
    close:()=>void
    valued?:string,
    click?:()=>void,
    textBtn:string,
    nama:String,
    changeColor:(e:ChangeEvent<HTMLInputElement>)=>void,
    valuedColor:string
    change?:(e:ChangeEvent<HTMLInputElement>)=>void
}){
    return(
        <div className="flex items-center justify-center fixed text-black h-screen z-50">
            <div className="bg-white shadow-xl p-2 rounded-md lg:w-2xl text-center md:w-xl">
            <h1 className="text-2xl font-semibold">{nama}</h1>
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
                <ButtonLayer.Button text={textBtn} clicker={click}/>
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
PopUpLayer.PopUpProduct = PopUpProduct
export default PopUpLayer