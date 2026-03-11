import { ChangeEvent } from "react"

export function OptionSelect({clicker,title,valued}:{valued:number,clicker:()=>void,title:string}){
    return(
        <>
               <div 
                onClick={clicker}
                className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-500 border-gray-500 border-b last:border-none">
                  <option value={valued}>
                  {title}
                  </option>
                </div>
                 
        </>
    )
}

export function InputPopupDate(
    {
        tanggalValued,
        tanggal,
        tanggalChange
    }:{
        tanggalValued:string | undefined,
        tanggal:string | undefined,
        tanggalChange?:(e:ChangeEvent<HTMLInputElement>)=>void
    }
){
    return(
         <div>
              <label className="block text-sm  font-semibold text-gray-700 mb-1">{tanggal}</label>
              <input
                type="date"
                className="w-full p-2.5 border text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                value={tanggalValued}
                onChange={tanggalChange}
              />
            </div>   
    )
}

export function InputPopUpStock({stockValued,stockChange}:{
    stockValued: any | number | string,
    stockChange?:(e:ChangeEvent<HTMLInputElement>)=>void
}){
    return(
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

    )
}

export function InputPopupKeuangan({keuanganValued,keuangan,keuanganChange}:{
    keuanganValued:string|number | any,
    keuangan:string | number | any,
    keuanganChange?:(e:ChangeEvent<HTMLInputElement>)=>void | undefined
}){
    return(
                    <div>
              <label className="block text-sm  font-semibold text-gray-700 mb-1">{keuangan}</label>
              <input
                type="number"
                className="w-full p-2.5 border text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                value={keuanganValued}
                onChange={keuanganChange}
              />
            </div>

    )
}

export function SimpanButton({click,textBtn}:{click:()=>void,textBtn:string}){
return(
    <>
    <div>
      <button
        onClick={click}
        className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 shadow-sm transition active:scale-95"
        >
            {textBtn}
          </button>
        </div>

    </>
)
}

export function BatalkanButton({cancel}:{cancel:()=>void}){
    return(
                  <button
            onClick={cancel}
            className="px-5 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition active:scale-95"
          >
            Batal
          </button>
    )
}

export function KategoriInput({
    changeKategori,
    kategoriValue,
    selectData
}:{
    changeKategori?:(e:ChangeEvent<HTMLSelectElement>)=>void
    kategoriValue:string | number,
    selectData:{kategori:{nama_kategori:string}}
}){
    return(
                    <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori</label>
              <select 
                onChange={changeKategori}
                disabled 
                value={kategoriValue} 
                className="w-full bg-gray-300 text-black p-2.5 border rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value={ kategoriValue || selectData ? selectData.kategori.nama_kategori : ""}>{selectData ? selectData.kategori.nama_kategori: ""}</option>
              </select>
              <p className="text-red-500 text-[12px]">Kolom kategori Hanya terisi jika Nama Produk terisi*</p>
            </div>

    )
}

export function GudangInput({gudangChange,gudangValue,selectData}:{
    gudangChange?:(e:ChangeEvent<HTMLSelectElement>)=>void,
    gudangValue:string | number,
    selectData:{lokasi:{nama_gudang:string}}
}){
    return(
         <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Lokasi Gudang</label>
              <select 
              disabled
                onChange={gudangChange} 
                value={gudangValue} 
                className="w-full p-2.5 text-black border rounded-lg bg-gray-300 border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value={ gudangValue || selectData? selectData.lokasi.nama_gudang : ""}>{selectData? selectData.lokasi.nama_gudang : ""}</option>
              </select>
              <p className="text-[12px] text-red-500">Kolom gudang Hanya terisi jika kolom Nama Produk terisi*</p>
            </div>

    )
}

export function VendorsInput({supplierChange,supplierValue,selectData}:
    {
        supplierChange?:(e:ChangeEvent<HTMLSelectElement>)=>void,
        supplierValue:string | number,
        selectData:{vendors:{nama_vendor:string}}
    }
){
    return(
                   
                    <div>
                      <label  className="block text-sm font-semibold text-gray-700 mb-1">Supplier / Vendor</label>
                      <select 
                        onChange={supplierChange} 
                        disabled
                        value={supplierValue} 
                        className="w-full text-black p-2.5 border rounded-lg border-gray-300 bg-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                      >
                        <option value={ supplierValue || selectData? selectData.vendors.nama_vendor : ""}>{selectData? selectData.vendors.nama_vendor : ""}</option>
                      </select>
                      <p className="text-red-500 text-[12px]">Kolom supplier/vendor hanya terisi jika kolom Nama Produk terisi*</p>
                    </div>
        
    )
}