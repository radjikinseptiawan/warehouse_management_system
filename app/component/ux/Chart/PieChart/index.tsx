import { InboundProductType } from '@/lib/type';
import { PieChart } from '@mui/x-charts/PieChart';
import { ReactNode, useEffect, useState } from 'react';
import { fetchChartDataInbound, fetchChartDataOutbound } from '../../../../layers/dataLayer/PieLayers';
import { fillDataPieChart, fillDataPieChartOutbound } from '../../../../layers/businessLogic/PieLogicBusiness';
import { usePathname } from 'next/navigation';

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export type PieChartDataType = {
    value:number | null,
    label:string | null,
    color:string | null
}

export default function PieCharts() {
    const [labelsName, setLabelsName] = useState<any[] | string[]>([]);
    const [seriesData, setSeriesData] = useState<string[] | null>([])
    const pathName = usePathname()
    
    
    const dataFetchFillInbound = async ()=>{
        const rawData = await fetchChartDataInbound({
            actions:{
                setLabelsName
            }
        })

        fillDataPieChart({
            data:rawData,
            actions:{
                setLabelsName,
                setSeriesData
            }
        })
    }   

    const dataFetchFillOutbound = async()=>{
        const rawData = await fetchChartDataOutbound({
            actions:{
                setLabelsName
            }
        })

        fillDataPieChartOutbound({
            data:rawData,
            actions:{
                setLabelsName,
                setSeriesData
            }
        })
    }

    useEffect(() => {
       pathName === "/inbound"? dataFetchFillInbound() : dataFetchFillOutbound()
    }, [pathName]);

    return (
        <PieChart
            series={[{ 
                innerRadius: 60, 
                outerRadius: 100, 
                data: labelsName && labelsName.length > 0 ? labelsName : [{ label: 'Loading...', value: 0 }], 
            }]}
            {...settings}
        />
    );
}
