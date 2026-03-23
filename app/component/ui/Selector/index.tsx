import { DataCategory, DataVendors } from "@/lib/type";
import { getCategory } from "@/app/layers/dataLayer/category";
import { getVendors } from "@/app/layers/dataLayer/vendors";
import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { setFilterPilihan, setFilterPilihanKeluar, setKategoriPilihan, setVendorPilihan } from "@/app/slicers/FilterSlicers";

const selectStyle = "w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer";

function SelectorLayers({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {children}
        </div>
    );
}

function FieldWrapper({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">{label}</label>
            {children}
        </div>
    );
}

function OptionCategory() {
    const [category, setCategory] = useState<DataCategory[] | null>(null);
    const dispatch = useAppDispatch()

    useEffect(() => {
        getCategory(setCategory);
    }, []);

    return (
        <FieldWrapper label="Kategori">
            <select onChange={(e)=>dispatch(setKategoriPilihan(e.target.value))} className={selectStyle}>
                <option value="">Semua Kategori</option>
                {category?.map((item, index) => (
                    <option value={item.nama_kategori} key={index}>{item.nama_kategori}</option>
                ))}
            </select>
        </FieldWrapper>
    );
}

function OptionVendors() {
    const [vendors, setVendors] = useState<DataVendors[] | null>(null);
    const dispatch = useAppDispatch()
    useEffect(() => {
        getVendors(setVendors);
    }, []);

    return (
        <FieldWrapper label="Supplier/Vendor">
            <select className={selectStyle} onChange={(e)=>dispatch(setVendorPilihan(e.target.value))}>
                <option value="">Semua Vendor</option>
                {vendors?.map((item, index) => (
                    <option key={index} value={item.nama_vendor}>
                        {item.nama_vendor}
                    </option>
                ))}
            </select>
        </FieldWrapper>
    );
}

function OptionFilterTime({label}:{label?:string}) {
    const dispatch = useAppDispatch()
    return (
        <FieldWrapper label={label || ""}>
            <select className={selectStyle} onChange={(e)=>dispatch(setFilterPilihan(e.target.value))}>
                <option value="">Semua Hari</option>
                <option value="0">Hari Ini</option>
                <option value="3">3 Hari Lalu</option>
                <option value="7">7 Hari Lalu</option>
                <option value="30">30 Hari Lalu</option>
                <option value="90">90 Hari Lalu</option>
            </select>
        </FieldWrapper>
    );
}


function OptionFilterTimeOut(){
    const dispatch = useAppDispatch()
    return (
        <FieldWrapper label="Rentang Waktu">
            <select className={selectStyle} onChange={(e)=>dispatch(setFilterPilihanKeluar(e.target.value))}>
                <option value="">Semua Hari</option>
                <option value="0">Hari Ini</option>
                <option value="3">3 Hari Lalu</option>
                <option value="7">7 Hari Lalu</option>
                <option value="30">30 Hari Lalu</option>
                <option value="90">90 Hari Lalu</option>
            </select>
        </FieldWrapper>
    );
}


SelectorLayers.OptionCategory = OptionCategory;
SelectorLayers.OptionVendors = OptionVendors;
SelectorLayers.OptionFilterTime = OptionFilterTime;
SelectorLayers.OptionFilterTimeOut = OptionFilterTimeOut
export default SelectorLayers;