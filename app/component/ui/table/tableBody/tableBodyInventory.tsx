export default function TableBodyInventory({
    nama,nomor,image,jumlah,kategori,lokasi, unit,
    color, clicker,editClick,
    vendor}:{
        color:string,
        nama:string,
        editClick:()=>void,
    nomor:number,
    image:string,
    jumlah:number,
    kategori:number | any,
    lokasi:number | any,
    unit:number | any,
    vendor:number | any,
    clicker:()=>void
}){
    return(
            <tr className="border-b hover:bg-gray-50 w-full transition">
                        <td className="p-3">{nomor}</td>
                        <td className="p-3">
                            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                                <img src={image} alt="" />
                            </div>
                        </td>
                        <td className="p-3 font-medium">{nama}</td>
                        <td className="p-3">
                            <span className="px-2 py-1 rounded-full text-xs text-white" style={{backgroundColor:`${color}`}}>{kategori}</span>
                        </td>
                        <td className="p-3 text-center text-sm">{unit}</td>
                        <td className="p-3">{jumlah}</td>
                        <td className="p-3 text-sm">{lokasi}</td>
                        <td className="p-3 text-sm text-blue-600">{vendor}</td>
                        <td className="p-3">
                             <button onClick={editClick} className="text-blue-500 mr-2">Edit</button>
                             <button onClick={clicker} className="text-red-500">Hapus</button>
                        </td>
                    </tr>
                
    )
}