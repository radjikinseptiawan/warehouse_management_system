import { Dispatch, SetStateAction } from "react"

export const getAllOperasional = async(setAllOperasional:Dispatch<SetStateAction<any>>)=>{
        try{
            const res= await fetch("/api/operasional",{
                method:"GET"
            })

            const data = await res.json()
            setAllOperasional(data.data)
        }catch(e){
            return console.error(e)
        }
    }


export const updateOperasionalLayer = async({payload,id}:{
        payload:{
        namaOperasional:string,
        biayaOperasional:number
        },
        id:number
    })=>{
            try{
                const res = await fetch(`/api/operasional/${id}`,{
                    method:"PATCH",
                    body:JSON.stringify({
                        nama_operasional:payload.namaOperasional,
                        biaya_operasional:payload.biayaOperasional,
                    })
                })
    
                const data = await res.json()
            }catch(e){
                console.error(e)
            }
}

export const addOperasionalLayer = async({payload}:{
    payload:{
        biayaOperasional:number,
        namaOperasional:string
    }
})=>{
    try{
           const res = await fetch("/api/operasional",{
               method:"POST",
               body:JSON.stringify({
                   biaya_operasional:payload.biayaOperasional,
                   nama_operasional:payload.namaOperasional
               })
           })
           const data = await res.json()
           if(!data) console.log("failed catch data",data)
       }catch(e){
           console.error(e)
       }
    }

type SelectedOprerasional = {
    dispatch:any,
    id:number,
    actions:{
        setNamaOperasional: (val : string)=>void,
        setBiayaOperasional: (val:number)=>void,
    }
}

export const getSelectedOperasionalLayer = async({state}:{state:SelectedOprerasional})=>{
           try
           {    
            const res= await fetch(`/api/operasional/${state.id}`,{
                    method:"GET"
                })
                const data = await res.json()
                state.dispatch(state.actions.setNamaOperasional(data.data?.nama_operasional || ""))
                state.dispatch(state.actions.setBiayaOperasional(data.data?.biaya_operasional || 0))
            }catch(e){
                return console.error(e)
            }    
        }
    