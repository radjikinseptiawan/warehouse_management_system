import { ReactNode, useState } from "react";
import EyeIcon from "../../icon/eye";
import EyeOffIcon from "../../icon/eye-off";

function Table2Data({children}:{children:ReactNode}){
    return(
        <div className="w-full overflow-x-auto text-black rounded-lg border border-gray-100 shadow-sm mt-10">
            <table className="w-full text-left border-collapse bg-white">
                {children}
            </table>
        </div>
    
    )
}

function HeaderKaryawanTable(){
    return(
        <>
            <thead className="text-black border-b">
                <tr>
                    <th className="bg-gray-100 p-2 text-center">Nama Karyawan</th>
                    <th className="bg-gray-100 p-2 text-center">Alamat Karyawan</th>
                    <th className="bg-gray-100 p-2 text-center">Gaji Karyawan</th>
                    <th className="bg-gray-100 p-2 text-center">Mulai Kerja</th>
                    <th className="bg-gray-100 p-2 text-center">Status</th>
                    <th className="bg-gray-100 p-2 text-center">Aksi</th>
                </tr>
                </thead>
        </>
    )
}


function RowKaryawanTable({
    pegawai,
    alamat,
    salary,
    enrollment,
    status,
    clickRow
}:{
    clickRow:()=>void,
    pegawai:string,
    alamat:string,
    salary:number | number | any,
    enrollment:string,
    status:string
}){
    const [show,isShow] = useState(false)

    return(
                 <tr className="text-center border-b-gray-400 bg-gray-50 p-2 border-b  text-black">
                        <td className=" p-2 ">{pegawai}</td>
                        <td className=" p-2 ">{alamat}</td>
                        <td className=" p-2 flex gap-5 items-center justify-center">
                            {
                                show ? <p>{salary}</p> : "************"

                            }
                            <button onClick={()=>isShow(!show)}>
                                {
                                    show ? <EyeIcon/> : <EyeOffIcon/>}
                            </button>
                            </td>
                        <td className=" p-2 ">{enrollment}</td>
                        <td className=" p-2"> {status}</td>
                        <td> <button onClick={clickRow} className="underline text-green-600">Edit</button> </td>
                    </tr>
    )
}

Table2Data.KaryawanTable = HeaderKaryawanTable
Table2Data.BarisTableKaryawan = RowKaryawanTable
export default Table2Data