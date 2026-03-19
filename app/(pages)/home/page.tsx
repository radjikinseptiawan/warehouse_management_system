"use client"

import ButtonLayer from "@/app/component/ui/Button"
import GudangIcon from "@/app/component/ui/icon/Gudang"
import ProductIcon from "@/app/component/ui/icon/Product"
import ScalesIcon from "@/app/component/ui/icon/Scales"
import Supplier from "@/app/component/ui/icon/Suppliers"
import SelectorLayers from "@/app/component/ui/Selector"
import { useAppSelector } from "@/app/hooks"
import { convertToIdr } from "@/app/layers/businessLogic/pagination"
import { filterData, filterDataOut } from "@/app/layers/businessLogic/table"
import { syncAllDataProduct } from "@/app/layers/dataLayer/inbound"
import { syncAllDataProductOut } from "@/app/layers/dataLayer/outbound"
import { InboundProductType, OutboundProductType } from "@/lib/type"
import { BarChart, PieChart } from "@mui/x-charts"
import { useEffect, useMemo, useState } from "react"

const pieSettings : any = {
    height: 300,
    margin: { top: 10, bottom: 60, left: 10, right: 10 },
    slotProps: {
        legend: {
            direction: 'row' as const, 
            position: { 
                vertical: 'bottom' as const, // Tambahkan 'as const'
                horizontal: 'middle' as const // Tambahkan 'as const'
            },
            padding: 0,
        },
    },
}

export default function Page() {
    const [rawData, setRawDataIn] = useState<InboundProductType[] | any>([])
    const [rawDataOut, setRawDataOut] = useState<OutboundProductType[] | any>([])
    const filterPilihan = useAppSelector((state) => state.filter.filterPilihan)
    const filterPilihanOut = useAppSelector((state) => state.filter.filterPilihanKeluar)

    const syncDataBaseIn = async () => { await syncAllDataProduct(setRawDataIn) }
    const syncDataBaseOut = async () => { await syncAllDataProductOut(setRawDataOut) }

    useEffect(() => {
        syncDataBaseIn()
        syncDataBaseOut()
    }, [])

    const filterDataIn = useMemo(() => {
        return filterData({ rawData: rawData, filterPilihan: filterPilihan })
    }, [rawData, filterPilihan])

    const monthlyTrend = useMemo(() => {
        const map = new Map()
        rawData.forEach((item: any) => {
            const date = new Date(item.tanggal_masuk)
            const month = date.toLocaleString("id-ID", { month: "short" })
            if (!map.has(month)) map.set(month, { month, inbound: 0, outbound: 0 })
            map.get(month).inbound += item.jumlah || 1
        })
        rawDataOut.forEach((item: any) => {
            const date = new Date(item.tanggal_keluar)
            const month = date.toLocaleString("id-ID", { month: "short" })
            if (!map.has(month)) map.set(month, { month, inbound: 0, outbound: 0 })
            map.get(month).outbound += item.jumlah || 1
        })
        return Array.from(map.values())
    }, [rawData, rawDataOut])

    const filterInData = filterDataIn.map((item, index) => ({
        id: index,
        value: item.nominal_modal,
        label: item.produk.nama_produk
    }))

    const countingOutcome = filterDataIn.reduce((acc, item) => {
        const modal = item.nominal_modal * item.jumlah_barang_masuk
        return acc + modal
    }, 0)

    const filterDataOuts = useMemo(() => {
        return filterDataOut({ rawData: rawDataOut, filterPilihan: filterPilihanOut })
    }, [rawDataOut, filterPilihanOut])

    const filterOutData = filterDataOuts.map((item, index) => ({
        id: index,
        value: item.nominal_modal,
        label: item.produk.nama_produk
    }))

    const countingIncome = filterDataOuts.reduce((acc, item) => {
        const modal = item.nominal_modal * item.jumlah_barang_keluar
        return acc + modal
    }, 0)

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ButtonLayer.Main
                    clicker={() => window.location.href = "/vendor"}
                    icon={<Supplier />}
                    text="Kelola Vendors atau Supplier"
                />
                <ButtonLayer.Main
                    clicker={() => window.location.href = "/gudang"}
                    icon={<GudangIcon />}
                    text="Kelola Lokasi Gudang"
                />
                <ButtonLayer.Main
                    clicker={() => window.location.href = "/category"}
                    icon={<ProductIcon />}
                    text="Kelola Kategori Produk"
                />
                <ButtonLayer.Main
                    clicker={()=>window.location.href = "/satuan"}
                    icon={<ScalesIcon/>}
                    text="Kelola Satuan"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-100 flex flex-col items-center">
                    <div className="w-full mb-4">
                        <h1 className="text-xl font-bold text-gray-800">Pengeluaran</h1>
                        <SelectorLayers.OptionFilterTime />
                        <p className="text-2xl font-semibold text-red-600 mt-2">
                            {convertToIdr(countingOutcome)}
                        </p>
                    </div>
                    <div className="w-full h-[350px] flex justify-center">
                        <PieChart
                            series={[{
                                innerRadius: 60,
                                outerRadius: 100,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                data: filterInData,
                            }]}
                            {...pieSettings}
                        />
                    </div>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-100 flex flex-col items-center">
                    <div className="w-full mb-4">
                        <h1 className="text-xl font-bold text-gray-800">Pemasukkan</h1>
                        <SelectorLayers.OptionFilterTimeOut />
                        <p className="text-2xl font-semibold text-green-600 mt-2">
                            {convertToIdr(countingIncome)}
                        </p>
                    </div>
                    <div className="w-full h-[350px] flex justify-center">
                        <PieChart
                            series={[{
                                innerRadius: 60,
                                outerRadius: 100,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                data: filterOutData,
                            }]}
                            {...pieSettings}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-100">
                <h1 className="text-xl font-bold text-gray-800 mb-6">Tren Barang Masuk & Keluar</h1>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[600px]">
                        <BarChart
                            dataset={monthlyTrend}
                            xAxis={[{
                                scaleType: "band",
                                dataKey: "month"
                            }]}
                            series={[
                                { dataKey: "inbound", label: "Barang Masuk", color: '#3b82f6' },
                                { dataKey: "outbound", label: "Barang Keluar", color: '#10b981' }
                            ]}
                            height={400}
                            margin={{ top: 50, right: 30, left: 40, bottom: 50 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}