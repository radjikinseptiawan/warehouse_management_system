"use client"
import Button from "@/app/component/ui/Button";
import Input from "@/app/component/ui/Input";
import SelectorLayers from "@/app/component/ui/Selector";
import CardView from "@/app/component/ux/Card";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { convertToIdr } from "@/app/layers/businessLogic/pagination";
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
    const [uangKeluar,setUangKeluar] = useState<InboundProductType[] | null>([])
    const [uangMasuk,setUangMasuk] = useState<OutboundProductType[] | null>([])
    const [biayaOperasional,setBiayaOperasional] = useState([])
    useEffect(()=>{
        getAllKaryawan(setBiayaKaryawan)
        syncAllDataProduct(setUangKeluar)
        syncAllDataProductOut(setUangMasuk)
        getAllOperasional(setBiayaOperasional)
    },[])



    const sumAllUangKeluar = uangKeluar?.reduce((acc:any,item:any)=>{
        const filterUangKeluar = item.nominal_modal

        return acc += filterUangKeluar
    },0)
    const sumAllGajiKaryawan = biayaKaryawan?.reduce((acc:any,item:any)=>{
        const gajiKaryawan = item.gaji_karyawan
        
        return acc += gajiKaryawan
    },0)

    const sumAllUangMasuk = uangMasuk?.reduce((acc:any,item:any)=>{
        const filterUangMasuk = item.nominal_modal
        return acc += filterUangMasuk
    },0)

    const sumAllBiayaOperasional = biayaOperasional.reduce((acc:any,item:any)=>{
        const filterBiayaOperasional = item.biaya_operasional
        return acc += filterBiayaOperasional
    },0)

    return( 
    <div className="flex flex-col items-center justify-center">

            <div className="my-4 flex gap-2 items-center">
                <h1 className="text-black text-center font-bold text-2xl my-4">Finansial</h1>
                <SelectorLayers.OptionFilterTime></SelectorLayers.OptionFilterTime>
            </div>

       <div className="flex w-full flex-col md:flex-row items-center gap-4 justify-center">

            <CardView.FinanceCard
            text="Total Biaya Operasional"
            nominal={convertToIdr(sumAllBiayaOperasional)}
            to="/operasional"
            />    

            <CardView.FinanceCard
            text="Total Biaya karyawan"
            nominal={convertToIdr(sumAllGajiKaryawan)}
            to="/karyawan"
            />    

            <CardView.FinanceCard
            text="Total Uang Keluar (inbound)"
            nominal={convertToIdr(sumAllUangKeluar)}
            to="/inbound"
            />    

            <CardView.FinanceCard
            text="Total Uang Masuk (outbound)"
            nominal={convertToIdr(sumAllUangMasuk)}
            to="/outbound"
            />    
    </div>
    </div>
    )
}