
import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AlertCard from "@/components/AlertCard";
import { currentAlerts } from "@/data/mockData";
import { AlertLevel } from "@/types";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Alerts = () => {
  const [filter, setFilter] = useState<AlertLevel | 'all'>('all');

  const filteredAlerts = filter === 'all'
    ? currentAlerts
    : currentAlerts.filter(alert => alert.level === filter);

  const sortedAlerts = [...filteredAlerts].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="flex flex-col min-h-screen bg-background pb-16">
      <Header title="Alerts" />
      
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Alerts</h2>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as AlertLevel | 'all')}
              className="text-sm border rounded px-2 py-1 bg-background"
            >
              <option value="all">All Levels</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        
        {sortedAlerts.length > 0 ? (
          sortedAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No alerts match your filter criteria</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setFilter('all')}
            >
              Reset Filter
            </Button>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Alerts;
