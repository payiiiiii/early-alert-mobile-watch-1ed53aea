
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import RiskLevelIndicator from "@/components/RiskLevelIndicator";
import AlertCard from "@/components/AlertCard";
import StatsCard from "@/components/StatsCard";
import MapView from "@/components/MapView";
import { currentAlerts, riskLevel } from "@/data/mockData";
import { AlertLevel, HazardType } from "@/types";
import { AlertTriangle, BarChart, Map, Thermometer, Wind, Droplet, Cloud } from "lucide-react";

const Index = () => {
  // Get most recent alerts
  const recentAlerts = [...currentAlerts]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 3);
  
  // Count alerts by severity
  const alertCounts = currentAlerts.reduce(
    (acc, alert) => {
      acc[alert.level]++;
      return acc;
    },
    { low: 0, medium: 0, high: 0 }
  );

  // Count alerts by hazard type
  const hazardCounts = currentAlerts.reduce(
    (acc, alert) => {
      acc[alert.type]++;
      return acc;
    },
    { heat_index: 0, air_pollution: 0, flood: 0, thunderstorm: 0 }
  );

  // Ensure we're passing the correct type for level and trend
  const currentLevel: AlertLevel = riskLevel.current as AlertLevel;

  return (
    <div className="flex flex-col min-h-screen bg-background pb-16">
      <Header title="San Pedro Early Warning System" />
      
      <main className="flex-1 p-4">
        <RiskLevelIndicator 
          level={currentLevel}
          trend={riskLevel.trend as "increasing" | "stable" | "decreasing"}
          className="mb-6"
        />

        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatsCard
            title="High Priority Alerts"
            value={alertCounts.high}
            icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
          />
          <StatsCard
            title="Medium Priority Alerts"
            value={alertCounts.medium}
            icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatsCard
            title="Heat Index"
            value={hazardCounts.heat_index}
            icon={<Thermometer className="h-5 w-5 text-red-500" />}
          />
          <StatsCard
            title="Air Pollution"
            value={hazardCounts.air_pollution}
            icon={<Wind className="h-5 w-5 text-purple-500" />}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatsCard
            title="Flood Risk"
            value={hazardCounts.flood}
            icon={<Droplet className="h-5 w-5 text-blue-500" />}
          />
          <StatsCard
            title="Thunderstorms"
            value={hazardCounts.thunderstorm}
            icon={<Cloud className="h-5 w-5 text-amber-500" />}
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">San Pedro, Laguna</h2>
            <a href="/map" className="text-sm text-primary flex items-center">
              Full Map <Map className="h-4 w-4 ml-1" />
            </a>
          </div>
          <MapView />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Recent Alerts</h2>
            <a href="/alerts" className="text-sm text-primary flex items-center">
              View All <BarChart className="h-4 w-4 ml-1" />
            </a>
          </div>
          {recentAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Index;
