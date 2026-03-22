import { EmployeeAction, EmployeeAdd, EmployeeDetail, EmployeeEdit } from "@/lib/type"
import { Dispatch, SetStateAction } from "react"

type Employee = {
        nama_karyawan: string,
        id:number,
        status: string,
        gaji_karyawan:number | any,
        mulai_kerja: string,
        alamat_karyawan:string
    }

// Mengambil semua data karyawan
export const getAllKaryawan = async(setAllKaryawan : Dispatch<SetStateAction<Employee[] | null>>)=>{
        try{
            const res= await fetch("/api/karyawan",{
                method:"GET"
            })

            const data = await res.json()
            setAllKaryawan(data.data)
        }catch(e){
            return console.error(e)
        }
    }



    // mengambil data karyawan by id
export const getKaryawanById = async({id,dispatch,state}:EmployeeDetail)=>{
           try
           {    
            const res= await fetch(`/api/karyawan/${id}`,{
                    method:"GET"
                })
                const data = await res.json()
                dispatch(state.setNamaKaryawan(data.data?.nama_karyawan || ""))
                dispatch(state.setAlamatKaryawan(data.data?.alamat_karyawan || ""))
                dispatch(state.setMulaiKerja(data.data?.mulai_kerja || ""))
                dispatch(state.setStatus(data.data?.status || ""))
                dispatch(state.setGajiKaryawan(data.data?.gaji_karyawan || 0))
                console.log(data)
            }catch(e){
                return console.error(e)
            }    
}

// Menambahkan karyawan
export const addKaryawanLogic = async(payload : EmployeeAdd)=>{
            const res = await fetch("/api/karyawan",{
                method:"POST",
                body:JSON.stringify({
                    nama_karyawan:payload.namaKaryawan,
                    alamat_karyawan:payload.alamatKaryawan,
                    gaji_karyawan:payload.gajiKaryawan,
                    status_karyawan:payload.statusKaryawan,
                    mulai_kerja:payload.mulaiKerja,                
                })
            })

            const data = await res.json()
            if(!data) console.log("failed catch data",data)
           
}

export const editKaryawanLogic = async({payload,id}:{id:number,payload:EmployeeEdit})=>{
      const res = await fetch(`/api/karyawan/${id}`,{
                method:"PATCH",
                body:JSON.stringify({
                    nama_karyawan:payload.namaKaryawan,
                    alamat_karyawan:payload.alamatKaryawan,
                    gaji_karyawan:payload.gajiKaryawan,
                    status_karyawan:payload.statusKaryawan,
                    mulai_kerja:payload.mulaiKerja,                                   
                })
            })
        return res
}