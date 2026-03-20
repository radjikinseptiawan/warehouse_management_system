import { ChangeEvent, ReactNode } from "react";
import ButtonNewLayers from "../button";
import { motion } from "motion/react";
import Input from "../../Input";
import { useAppDispatch } from "@/app/hooks";
import { setIsOpenOverlay } from "@/app/slicers/openOverlaySlicer";

function PopUpLayer({children}:{children:ReactNode}){
    return(
        <div>{children}</div>
    )
}


function AddItems({
    title,
    cancelClick,
    confirm,
    namaKaryawan,
    namaKaryawanChange,
    alamatKaryawan,
    alamatKaryawanChange,
    gajiKaryawan,
    gajiKaryawanChange,
    mulaiKerja,
    mulaiKerjaChange,
    status,
    statusChange
}:{
    confirm:()=>void,
    mulaiKerja:string,
    mulaiKerjaChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    status:string,
    statusChange:(e:ChangeEvent<HTMLSelectElement>)=>void,
    gajiKaryawan:any ,
    gajiKaryawanChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    alamatKaryawan:string,
    alamatKaryawanChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    namaKaryawan:string,
    namaKaryawanChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    cancelClick:()=>void,
    title:string}){
    const dispatch = useAppDispatch()
    return(
                          <div className="fixed inset-0 flex items-center justify-center  z-50 pointer-events-none">
                            <motion.div
                              initial={{ y: 100, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 100, opacity: 0 }}
                              transition={{ type: "spring", damping: 25, stiffness: 300 }}
                              className="bg-white p-6 rounded-xl shadow-2xl w-[95%] max-w-3xl pointer-events-auto"
                            >
                              <h1 className="text-center text-3xl font-bold mb-8 text-black">{title}</h1>
        
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <Input.Basic
                                value={namaKaryawan}
                                change={namaKaryawanChange}
                                types="text"
                                mind="Masukkan nama karyawan"
                                title="Nama karyawan"
                              />
                              <Input.Basic
                                value={alamatKaryawan}
                                change={alamatKaryawanChange}
                                types="text"
                                mind="Masukkan alamat karyawan"
                                title="Alamat karyawan"
                              />
                              <Input.Basic
                                value={gajiKaryawan}
                                change={gajiKaryawanChange}
                                types="number"
                                mind="Masukkan gaji karyawan"
                                title="Gaji karyawan"
                              />
                            </div>
        
                        <div className="space-y-4">
                                   <Input.Basic
                                     value={mulaiKerja}
                                     change={mulaiKerjaChange}
                                     types="date"
                                     mind=""
                                     title="Mulai Kerja"
                                   />
                                   <div className="flex flex-col">
                                     <label className="text-sm font-semibold mb-1 text-black">Status</label>
                                     <select 
                                     onChange={statusChange} value={status}
                                     className="border-2 text-gray-600 border-green-200 rounded-md p-2 w-full outline-none focus:border-green-500">
                                       <option value="">Pilih Status</option>
                                       <option value="Aktif">Aktif</option>
                                       <option value="NonAktif">Non Aktif</option>
                                     </select>
                                   </div>
                                 </div>
                               </div>
        
                               <div className="flex justify-end gap-3 mt-10">
                                 <ButtonNewLayers.Failed
                                   click={cancelClick}
                                   text="Cancel"
                                 />
                                 <ButtonNewLayers.Success
                                   click={confirm}
                                    text="Confirm"
                                />
                    </div>
                    </motion.div>
                  </div>
    )
}

PopUpLayer.Add = AddItems
export default PopUpLayer