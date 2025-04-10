
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import HistoricalChart from "@/components/HistoricalChart";
import { historicalData } from "@/data/mockData";
import { Clock, Filter } from "lucide-react";

const History = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-16">
      <Header title="Alert History" />
      
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Historical Trends</h2>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <select
              className="text-sm border rounded px-2 py-1 bg-background"
              defaultValue="week"
            >
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-sm mb-6">
          <h3 className="text-sm font-medium mb-2">Alert Frequency</h3>
          <HistoricalChart data={historicalData} />
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium mb-2">Alert Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">
                {historicalData.reduce((sum, item) => sum + item.alerts.low, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Low Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">
                {historicalData.reduce((sum, item) => sum + item.alerts.medium, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Medium Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {historicalData.reduce((sum, item) => sum + item.alerts.high, 0)}
              </div>
              <div className="text-xs text-muted-foreground">High Alerts</div>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default History;
