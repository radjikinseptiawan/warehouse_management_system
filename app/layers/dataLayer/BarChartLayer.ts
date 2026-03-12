import { Dispatch, SetStateAction } from "react";

export type DataCategoryChart = {
    actions:{
        setLabelsName:Dispatch<SetStateAction<string[] | null>>
    }
}


export const fetchDataBarChart = async ({actions}:DataCategoryChart ) => {
        try {
            const res = await fetch("/api/barang_masuk", { method: "GET" });
            const result = await res.json();
            const rawData = result.data || [];

            actions.setLabelsName(rawData)
            return rawData
        } catch (error) {
            console.error("Gagal load data bar chart:", error);
            return[]
        }
}

export const fetchDataBarChartOut = async({actions}:DataCategoryChart)=>{
    const res = await fetch("/api/barang_keluar",{method:"GET"})
    const results = await res.json()
    const rawData = results.data || []

    actions.setLabelsName(rawData)
    return rawData
};
