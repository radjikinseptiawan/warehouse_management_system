import { InboundProductType, OutboundProductType } from "@/lib/type";

// PieLogicBusiness.ts atau file sejenis
export const getSupplierDistribution = (data: InboundProductType[]) => {
    if (!data || data.length === 0) return [];

    const grouping = data.reduce((acc: any, item: any) => {
        const name = item.produk?.vendors?.nama_vendor || "Tanpa Vendor";
        const qty = Number(item.jumlah_barang_masuk) || 0;

        if (!acc[name]) {
            acc[name] = { label: name, value: 0 };
        }
        acc[name].value += qty;
        return acc;
    }, {});

    return Object.values(grouping).map((item: any, index: number) => ({
        id: index,
        label: item.label,
        value: item.value,
        color: `hsl(${(index * 137) % 360}, 65%, 50%)`
    }));
};



export const getOutSupplierDistribution = (data: OutboundProductType[]) => {
    if (!data || data.length === 0) return [];

    const grouping = data.reduce((acc: any, item: any) => {
        const name = item.produk?.vendors?.nama_vendor || "Tanpa Vendor";
        const qty = Number(item.jumlah_barang_keluar) || 0;

        if (!acc[name]) {
            acc[name] = { label: name, value: 0 };
        }
        acc[name].value += qty;
        return acc;
    }, {});

    return Object.values(grouping).map((item: any, index: number) => ({
        id: index,
        label: item.label,
        value: item.value,
        color: `hsl(${(index * 137) % 360}, 65%, 50%)`
    }));
};

