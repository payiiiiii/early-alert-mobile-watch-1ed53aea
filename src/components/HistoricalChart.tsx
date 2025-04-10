
import { HistoricalData } from "@/types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface HistoricalChartProps {
  data: HistoricalData[];
}

const HistoricalChart = ({ data }: HistoricalChartProps) => {
  const formattedData = data.map(item => {
    const date = new Date(item.date);
    return {
      ...item,
      formattedDate: `${date.getMonth() + 1}/${date.getDate()}`
    };
  });

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
        >
          <XAxis dataKey="formattedDate" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(255, 255, 255, 0.9)", 
              borderRadius: "8px",
              borderColor: "rgba(0, 0, 0, 0.1)" 
            }} 
            itemStyle={{ fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="alerts.low" name="Low" fill="#3b82f6" stackId="a" />
          <Bar dataKey="alerts.medium" name="Medium" fill="#f59e0b" stackId="a" />
          <Bar dataKey="alerts.high" name="High" fill="#ef4444" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalChart;
