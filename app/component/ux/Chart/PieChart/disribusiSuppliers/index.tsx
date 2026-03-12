"use client";
import { PieChart } from '@mui/x-charts/PieChart';

// Definisikan tipe data untuk props
export type PieChartDataType = {
  id: number;
  value: number;
  label: string;
  color: string;
};

interface PieChartsDistributedProps {
  data: PieChartDataType[];
}

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export default function PieChartsDistributed({ data }: PieChartsDistributedProps) {
  return (
    <PieChart
      series={[
        {
          innerRadius: 60,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 4,
          // Jika data kosong, tampilkan placeholder "No Data"
          data: data.length > 0 ? data : [{ id: 0, label: 'Kosong', value: 0, color: '#eeeeee' }],
        },
      ]}
      {...settings}
    />
  );
}