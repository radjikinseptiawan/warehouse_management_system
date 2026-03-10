import { ChangeEvent, ReactNode, useEffect, useState } from "react"
import Input from "../../ui/Input"
import ButtonLayer, { Button } from "../../ui/Button"
import { CategoryType, DataGudang, DataVendors, GudangType, ProductData, VendorType } from "@/lib/type"

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
    changeKategori,
    kategoriValue,
    images,
    gudangValue,
    gudangChange,
    supplierChange,
    supplierValue
}:{
    cancel:()=>void,
    supplierValue:number  | string,
    nama:string,
    images:string,
    supplierChange:(e: ChangeEvent<HTMLSelectElement>)=>void,
    gudangValue:number  | string,
    gudangChange:(e: ChangeEvent<HTMLSelectElement>)=>void,
    changeKategori:(e: ChangeEvent<HTMLSelectElement>)=>void,
    kategoriValue:number | string
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
          type="number"
          placeholder="0"
          className="w-full mt-1 p-2 border rounded-md bg-gray-300 border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          disabled
      />
      <p className="text-[12px] text-red-500">Jumlah atau Stok hanya bisa di input di halaman inbound/outbound*</p>
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

          <Input.Image images={images} title="Gambar"/>
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


function PopUpProductInbound({
  textBtn,
  cancel,
  click,
  nama,
  changeProductName,
  changeKategori,
  kategoriValue,
  gudangValue,
  gudangChange,
  supplierChange,
  supplierValue,
  stockValued,
  tanggal,
  productNameValue,
  keuangan,
  stockChange
}: {
  keuangan:string
  tanggal:string,
  cancel: () => void,
  supplierValue: number | string,
  nama: string,
  images: string,
  supplierChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  gudangValue: number | string,
  gudangChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  changeKategori: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  kategoriValue: number | string,
  stockValued: string,
  stockChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  productNameValue: string
  textBtn: string,
  click: () => void,
  changeProductName: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  const [dataProduk, setDataProduk] = useState<ProductData[]>([])
  const [selectData,setSelectData] = useState<ProductData | any>(null)
  const [searchTerm,setSearchTerm] = useState<string>("")
  const [isDropDown,setIsDropDown] = useState<boolean>(false)


  const inputFilterProduk = dataProduk.filter((item)=>item.nama_produk.toLowerCase().includes(searchTerm?.toLowerCase()))

  const produkItem = async () => {
    const res = await fetch("/api/produk/", { method: "GET" })
    const data = await res.json()
    setDataProduk(data.data)
  }

  const produkItemId = async(id: string | any)=>{
    const selectedData = dataProduk.find(item=>item.nama_produk === id)
    setSelectData(selectedData)
  }

  useEffect(() => {
    produkItem()
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white w-full overflow-y-auto h-96 md:h-[87vh] md:overflow-y-scroll max-w-2xl rounded-xl shadow-2xl overflow-hidden">
        
        <div className="px-6 py-4 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-800">{nama}</h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="md:col-span-2">
              <Input.Basic types="text" value={searchTerm || ""} 
              change={(e)=>{
                setSearchTerm(e.target.value)
                setIsDropDown(true)
                if(e.target.value === '') setIsDropDown(false)
                changeProductName
              }} mind={"Cari atau ketik nama Produk"} title="Nama Produk"/>
              {
                isDropDown && (
                  <div className="absolute z-10 w-80 shadow-xl mt-1 bg-white border border-gray-200 rounded-lg max-h-60 overflow-y-auto">
                    {
                      inputFilterProduk.length > 0 ? 
                      inputFilterProduk.map((item,index)=>(
                        <div key={index}
                        onClick={()=>{
                          setSearchTerm(item.nama_produk)
                          const fakeEvent = {target:{value:item.nama_produk, name:"productName"}} as any
                          changeProductName(fakeEvent)
                          produkItemId(item.nama_produk)
                          setIsDropDown(false)
                        }}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-500 border-gray-500 border-b last:border-none">
                          {item.nama_produk}
                          </div>
                      )):(
                        <div className="px-4 py-4 text-gray-500 italic text-sm">
                          Produk tidak ditemukan
                        </div>
                      )

                    }
                  </div>
                )
              }
              <a href="/inventory" className="text-green-500 italic text-[12px] underline">Lihat Produk Terdaftar</a>
            </div>

            <div>
              <label className="block text-sm  font-semibold text-gray-700 mb-1">Jumlah</label>
              <input
                type="number"
                placeholder="0"
                className="w-full p-2.5 border text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                value={stockValued}
                onChange={stockChange}
              />
            </div>

            <div>
              <label className="block text-sm  font-semibold text-gray-700 mb-1">{tanggal}</label>
              <input
                type="date"
                className="w-full p-2.5 border text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                value={stockValued}
                onChange={stockChange}
              />
            </div>

            <div>
              <label className="block text-sm  font-semibold text-gray-700 mb-1">{keuangan}</label>
              <input
                type="text"
                className="w-full p-2.5 border text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                value={stockValued}
                onChange={stockChange}
              />
            </div>


            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori</label>
              <select 
                onChange={changeKategori}
                disabled 
                value={kategoriValue} 
                className="w-full bg-gray-300 text-black p-2.5 border rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value={selectData ? selectData.kategori.nama_kategori : ""}>{selectData ? selectData.kategori.nama_kategori: ""}</option>
              </select>
              <p className="text-red-500 text-[12px]">Kolom kategori Hanya terisi jika Nama Produk terisi*</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Lokasi Gudang</label>
              <select 
              disabled
                onChange={gudangChange} 
                value={gudangValue} 
                className="w-full p-2.5 text-black border rounded-lg bg-gray-300 border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value={selectData? selectData.lokasi.nama_gudang : ""}>{selectData? selectData.lokasi.nama_gudang : ""}</option>
              </select>
              <p className="text-[12px] text-red-500">Kolom gudang Hanya terisi jika kolom Nama Produk terisi*</p>
            </div>

            <div>
              <label  className="block text-sm font-semibold text-gray-700 mb-1">Supplier / Vendor</label>
              <select 
                onChange={supplierChange} 
                disabled
                value={supplierValue} 
                className="w-full text-black p-2.5 border rounded-lg border-gray-300 bg-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value={selectData? selectData.vendors.nama_vendor : ""}>{selectData? selectData.vendors.nama_vendor : ""}</option>
              </select>
              <p className="text-red-500 text-[12px]">Kolom supplier/vendor hanya terisi jika kolom Nama Produk terisi*</p>
            </div>

            {/* Image Section - Full Width */}
            <div className="md:col-span-2 mt-2">
          <p className="text-red-500 text-[12px]">Gambar akan dimuat jika kolom Nama Produk terisi*</p>

               <Input.ImageInboundOutbound images={selectData ? selectData.gambar_produk : "/upload.png"} title="Gambar Produk" />
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
          <button
            onClick={cancel}
            className="px-5 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition active:scale-95"
          >
            Batal
          </button>
          <button
            onClick={click}
            className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 shadow-sm transition active:scale-95"
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
PopUpLayer.PopUpProductInbound = PopUpProductInbound
export default PopUpLayer