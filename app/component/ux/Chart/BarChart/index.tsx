import { syncAllDataProduct } from '@/app/layers/dataLayer/inbound';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { DataCategoryChart, fetchDataBarChart, fetchDataBarChartOut } from '../../../../layers/dataLayer/BarChartLayer';
import { fillDataBusiness, fillDataBusinessOut } from '../../../../layers/businessLogic/Barcharts';
import { usePathname } from 'next/navigation';
import { fetchExternalImage } from 'next/dist/server/image-optimizer';


export default function DynamicBarChart() {
    const [seriesData, setSeriesData] = useState<{ modal: number[] }>({ modal: [] });
    const [labelsName, setLabelsName] = useState<string[] | null>(null);
    const pathName = usePathname()

    const fillDataChart = async()=>{
        const raw = await fetchDataBarChart({
            actions:{
                setLabelsName    
            }
        });
        
        if(raw && raw.length > 0){
            fillDataBusiness({
            data:raw,
            actions:{
                setLabelsName,
                setSeriesData
            }
        })
        }
       
    }

    const fillDataChartOut = async()=>{
        const raw = await fetchDataBarChartOut({
            actions:{
                setLabelsName
            }
        })

        if(raw && raw.length > 0){
            fillDataBusinessOut({
                data:raw,
                actions:{
                    setLabelsName,
                    setSeriesData
                }
            })
        }
    }
    useEffect(() => {
        pathName =="/inbound" ? fillDataChart() : fillDataChartOut()
    }, [pathName]);

    return (
        <BarChart
                xAxis={[{ 
                    scaleType: 'band', 
                    data: labelsName && labelsName?.length  > 0 ? labelsName : ['Loading...'] 
                }]}
                series={[
                    { data: seriesData.modal, label: 'Total Modal (IDR)', color: '#4ade80' },
                ]}
                height={170}
                margin={{ top: 50, bottom: 50, left: 80, right: 10 }}
            />
    );
}