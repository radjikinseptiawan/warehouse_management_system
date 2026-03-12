import { InboundProductType } from "@/lib/type"
import { Dispatch, SetStateAction } from "react"
import { PieChartDataType } from "../../component/ux/Chart/PieChart"

export type TypeDataChartPie = {
    actions:{
        setLabelsName:Dispatch<SetStateAction< PieChartDataType[] | string[]>>
    }
}

export const fetchChartDataInbound = async({actions}:TypeDataChartPie)=>{
    const res = await fetch("/api/barang_masuk",{method:"GET"})
    const data = await res.json()
    const rawData = data.data

    actions.setLabelsName(rawData)
    return rawData
}


export const fetchChartDataOutbound = async({actions}:TypeDataChartPie)=>{
    const res = await fetch("/api/barang_keluar",{method:"GET"})
    const data = await res.json()
    const rawData = data.data

    actions.setLabelsName(rawData)
    return rawData
}