import { syncAllDataProduct } from '@/app/layers/dataLayer/inbound';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';

export default function DynamicBarChart() {
    const [seriesData, setSeriesData] = useState<{ modal: number[], jumlah: number[] }>({ modal: [], jumlah: [] });
    const [categories, setCategories] = useState<string[]>([]);

    const fetchData = async () => {
        try {
            const res = await fetch("/api/barang_masuk", { method: "GET" });
            const result = await res.json();
            const rawData = result.data || [];

            // Grouping data per Kategori
            const grouped = rawData.reduce((acc: any, item: any) => {
                const catName = item.produk.kategori.nama_kategori;
                if (!acc[catName]) {
                    acc[catName] = { modal: 0, jumlah: 0 };
                }
                acc[catName].modal += item.nominal_modal;
                acc[catName].jumlah += item.jumlah_barang_masuk;
                return acc;
            }, {});

            const labels = Object.keys(grouped);
            const modalValues = labels.map(label => grouped[label].modal);
            const jumlahValues = labels.map(label => grouped[label].jumlah);

            setCategories(labels);
            setSeriesData({ modal: modalValues, jumlah: jumlahValues });
        } catch (error) {
            console.error("Gagal load data bar chart:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
            <BarChart
                xAxis={[{ 
                    scaleType: 'band', 
                    data: categories.length > 0 ? categories : ['Loading...'] 
                }]}
                series={[
                    { data: seriesData.modal, label: 'Total Modal (IDR)', color: '#4ade80' },
                    { data: seriesData.jumlah, label: 'Total Stok', color: '#60a5fa' },
                ]}
                height={170}
                margin={{ top: 50, bottom: 50, left: 80, right: 10 }}
            />
    );
}