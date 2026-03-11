import { PieChart } from '@mui/x-charts/PieChart';
import { ReactNode, useEffect, useState } from 'react';

const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export function DonutCharLayer({children}:{children:ReactNode}) {

  return (
    <div className='hidden md:block'>
    {
    children
    }
    </div>
    );
}

export function StokMasukDonutChart() {
    const [chartData, setChartData] = useState<{ label: string, value: number, color?: string }[]>([]);
    
    const fetchData = async () => {
        try {
            const res = await fetch("/api/barang_masuk", { method: "GET" });
            const result = await res.json();
            const rawData = result.data;

            console.log(rawData)
            const filterData = rawData.reduce((acc : any,item : any)=>{
                const kategoriName = item.produk.kategori.nama_kategori
                const jumlah = item.jumlah_barang_masuk

                if(!acc[kategoriName]){
                    acc[kategoriName] = {
                        label: kategoriName,
                        value:0,
                        color: item.produk.kategori.warna_category
                    }
                }

                acc[kategoriName].value += jumlah
                return acc
            },{})

            setChartData(Object.values(filterData))
        } catch (error) {
            console.error("Gagal load data chart:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PieChart
            series={[{ 
                innerRadius: 60, 
                outerRadius: 100, 
                data: chartData.length > 0 ? chartData : [{ label: 'Loading...', value: 0 }], 
                arcLabel: (item) => `${item.value}`,
            }]}
            {...settings}
        />
    );
}


export function StokMasukDonutChartSuppliers(){
    const [chartData, setChartData] = useState<{ label: string, value: number, color?: string }[]>([]);
    
    const fetchData = async () => {
        try {
            const res = await fetch("/api/barang_masuk", { method: "GET" });
            const result = await res.json();
            const rawData = result.data;
            
            console.log(rawData)
            const filterData = rawData.reduce((acc : any,item : any)=>{
                const vendorName = item.produk.vendors.nama_vendor

                if(!acc[vendorName]){
                    acc[vendorName] = {
                        label: vendorName,
                        value:0,
                        color: item.produk.vendors.warna_vendor
                    }
                }

                acc[vendorName].value = rawData.length
                return acc
            },{})

            setChartData(Object.values(filterData))
        } catch (error) {
            console.error("Gagal load data chart:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <PieChart
            series={[{ 
                innerRadius: 60, 
                outerRadius: 100, 
                data: chartData.length > 0 ? chartData : [{ label: 'Loading...', value: 0 }], 
                arcLabel: (item) => `${item.value}`,
            }]}
            {...settings}
        />
    )
}

DonutCharLayer.StokMasukBaseCategory = StokMasukDonutChart
DonutCharLayer.StokMasukBaseVendors = StokMasukDonutChartSuppliers
export default DonutCharLayer 