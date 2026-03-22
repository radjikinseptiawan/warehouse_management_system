import { useState } from "react"
import EyeIcon from "../../../icon/eye"
import EyeOffIcon from "../../../icon/eye-off"

export default function TableRowOperational({namaOperasional,biayaOperasional,clicker}:{clicker:()=>void,namaOperasional:string,biayaOperasional:string|number|any}){
    const [show,isShow] = useState(false)
    return(
        <>
            <tr className="bg-white p-2 text-center">
                <td className="bg-white p-2 text-center">
                    {namaOperasional}
                </td>
                <td className="bg-white p-2 flex gap-3 justify-center text-center">
                      {
                                show ? <p>{biayaOperasional}</p> : "************"

                            }
                            <button onClick={()=>isShow(!show)}>
                                {
                                    show ? <EyeIcon/> : <EyeOffIcon/>}
                            </button>
                        
                </td>
                <td className="bg-white p-2 text-center">
                    <button className="underline text-green-500" onClick={clicker}>Edit</button>
                </td>
            </tr>
        </>
    )
}