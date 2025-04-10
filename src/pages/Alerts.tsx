
import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AlertCard from "@/components/AlertCard";
import { currentAlerts } from "@/data/mockData";
import { AlertLevel, HazardType } from "@/types";
import { Filter, Thermometer, Wind, Droplet, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Alerts = () => {
  const [levelFilter, setLevelFilter] = useState<AlertLevel | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<HazardType | 'all'>('all');

  const filteredAlerts = currentAlerts.filter(alert => {
    const matchesLevel = levelFilter === 'all' || alert.level === levelFilter;
    const matchesType = typeFilter === 'all' || alert.type === typeFilter;
    return matchesLevel && matchesType;
  });

  const sortedAlerts = [...filteredAlerts].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="flex flex-col min-h-screen bg-background pb-16">
      <Header title="Alerts" />
      
      <main className="flex-1 p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Alert Filters</h2>
          
          <Tabs defaultValue="severity" className="w-full mb-4">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="severity">Severity</TabsTrigger>
              <TabsTrigger value="type">Hazard Type</TabsTrigger>
            </TabsList>
            
            <TabsContent value="severity" className="mt-2">
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={levelFilter === 'all' ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setLevelFilter('all')}
                >
                  All
                </Button>
                <Button 
                  variant={levelFilter === 'low' ? "default" : "outline"}
                  size="sm"
                  className="border-blue-500 text-blue-700"
                  onClick={() => setLevelFilter('low')}
                >
                  Low
                </Button>
                <Button 
                  variant={levelFilter === 'medium' ? "default" : "outline"}
                  size="sm"
                  className="border-amber-500 text-amber-700"
                  onClick={() => setLevelFilter('medium')}
                >
                  Medium
                </Button>
                <Button 
                  variant={levelFilter === 'high' ? "default" : "outline"}
                  size="sm"
                  className="border-red-500 text-red-700"
                  onClick={() => setLevelFilter('high')}
                >
                  High
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="type" className="mt-2">
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={typeFilter === 'all' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTypeFilter('all')}
                >
                  All
                </Button>
                <Button 
                  variant={typeFilter === 'heat_index' ? "default" : "outline"}
                  size="sm"
                  className="border-red-500 text-red-700"
                  onClick={() => setTypeFilter('heat_index')}
                >
                  <Thermometer className="h-4 w-4 mr-1" />
                  Heat Index
                </Button>
                <Button 
                  variant={typeFilter === 'air_pollution' ? "default" : "outline"}
                  size="sm"
                  className="border-purple-500 text-purple-700"
                  onClick={() => setTypeFilter('air_pollution')}
                >
                  <Wind className="h-4 w-4 mr-1" />
                  Air Pollution
                </Button>
                <Button 
                  variant={typeFilter === 'flood' ? "default" : "outline"}
                  size="sm"
                  className="border-blue-500 text-blue-700"
                  onClick={() => setTypeFilter('flood')}
                >
                  <Droplet className="h-4 w-4 mr-1" />
                  Flood
                </Button>
                <Button 
                  variant={typeFilter === 'thunderstorm' ? "default" : "outline"}
                  size="sm"
                  className="border-amber-500 text-amber-700"
                  onClick={() => setTypeFilter('thunderstorm')}
                >
                  <Cloud className="h-4 w-4 mr-1" />
                  Thunderstorm
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Current Alerts</h2>
          <p className="text-sm text-muted-foreground">San Pedro, Laguna</p>
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
              onClick={() => {
                setLevelFilter('all');
                setTypeFilter('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Alerts;
