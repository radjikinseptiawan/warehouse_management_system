"use client"
import Button from "@/app/component/ui/Button";
import Input from "@/app/component/ui/Input";
import SelectorLayers from "@/app/component/ui/Selector";
import CardView from "@/app/component/ux/Card";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { convertToIdr } from "@/app/layers/businessLogic/pagination";
import { sumAll } from "@/app/layers/dataLayer/finansial";
import { syncAllDataProduct } from "@/app/layers/dataLayer/inbound";
import { Employee, getAllKaryawan } from "@/app/layers/dataLayer/karyawan";
import { getAllOperasional } from "@/app/layers/dataLayer/operasional";
import { syncAllDataProductOut } from "@/app/layers/dataLayer/outbound";
import { setNominalModal } from "@/app/slicers/inboundSlicers";
import { InboundProductType, OutboundProductType } from "@/lib/type";
import { useSvgRef } from "@mui/x-charts";
import { useEffect, useState } from "react";

export default function Page(){
    const [biayaKaryawan,setBiayaKaryawan] = useState<Employee[] | null>([])
    const [uangKeluar,setUangKeluar] = useState<InboundProductType[] | any | null>([])
    const [uangMasuk,setUangMasuk] = useState<OutboundProductType[] | any | null>([])
    const [biayaOperasional,setBiayaOperasional] = useState<{biaya_operasional:number | null}[] | any>([])
    
    
    const allUangKeluar = sumAll(uangKeluar)
    const allBiayaKaryawan = sumAll(biayaKaryawan)
    const allBiayaoperasional = sumAll(biayaOperasional)
    const allUangMasuk = sumAll(uangMasuk)

    useEffect(()=>{
        getAllKaryawan(setBiayaKaryawan)
        syncAllDataProduct(setUangKeluar)
        syncAllDataProductOut(setUangMasuk)
        getAllOperasional(setBiayaOperasional)
    },[])

    return( 
    <div className="flex flex-col items-center justify-center">

            <div className="my-4 flex gap-2 items-center">
                <h1 className="text-black text-center font-bold text-2xl my-4">Finansial</h1>
                <SelectorLayers.OptionFilterTime></SelectorLayers.OptionFilterTime>
            </div>

       <div className="flex w-full flex-col md:flex-row items-center gap-4 justify-center">

            <CardView.FinanceCard
            text="Total Biaya Operasional"
            nominal={convertToIdr(allBiayaoperasional)}
            to="/operasional"
            />    

            <CardView.FinanceCard
            text="Total Biaya karyawan"
            nominal={convertToIdr(allBiayaKaryawan)}
            to="/karyawan"
            />    

            <CardView.FinanceCard
            text="Total Uang Keluar (inbound)"
            nominal={convertToIdr(allUangKeluar)}
            to="/inbound"
            />    

            <CardView.FinanceCard
            text="Total Uang Masuk (outbound)"
            nominal={convertToIdr(allUangMasuk)}
            to="/outbound"
            />    
    </div>
    
    <div className="flex flex-col md:flex-row">
        <div className="shadow p-2 w-72 text-black md:w-xl bg-white my-10 rounded-md">
                <h1 className="font-bold text-black">Total Pengeluaran</h1>
                <p className="text-red-500">
                {
                    convertToIdr(allUangKeluar + allBiayaKaryawan + allBiayaoperasional)
                }
                </p>
        </div>

        <div className="shadow w-72 p-2 md:w-xl text-black bg-white my-10 rounded-md">
                <h1 className="font-bold text-black">Total Pemasukkan</h1>
                <p className="text-green-500">
                    {
                        convertToIdr(allUangMasuk)
                    }
                </p>
        </div>

    </div>
    </div>
    )
}