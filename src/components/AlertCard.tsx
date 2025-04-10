
import { Alert } from "@/types";
import { timeAgo } from "@/utils/dateUtils";
import AlertBadge from "./AlertBadge";
import { Bell, MapPin, Thermometer, Wind, Droplet, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface AlertCardProps {
  alert: Alert;
}

// Helper function to get the appropriate icon for each hazard type
const getHazardIcon = (type: string) => {
  switch (type) {
    case 'heat_index':
      return <Thermometer className="mr-2 h-4 w-4" />;
    case 'air_pollution':
      return <Wind className="mr-2 h-4 w-4" />;
    case 'flood':
      return <Droplet className="mr-2 h-4 w-4" />;
    case 'thunderstorm':
      return <Cloud className="mr-2 h-4 w-4" />;
    default:
      return <Bell className="mr-2 h-4 w-4" />;
  }
};

// Helper function to get the color for each hazard type
const getHazardColor = (type: string) => {
  switch (type) {
    case 'heat_index':
      return '#ef4444'; // Red
    case 'air_pollution':
      return '#9333ea'; // Purple
    case 'flood':
      return '#3b82f6'; // Blue
    case 'thunderstorm':
      return '#f59e0b'; // Amber
    default:
      return '#6b7280'; // Gray
  }
};

const AlertCard = ({ alert }: AlertCardProps) => {
  return (
    <Card className="mb-4 overflow-hidden border-l-4" style={{
      borderLeftColor: alert.level === 'high' 
        ? '#ef4444' 
        : alert.level === 'medium'
          ? '#f59e0b'
          : '#3b82f6'
    }}>
      <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center">
          {getHazardIcon(alert.type)}
          <h3 className="font-semibold">{alert.title}</h3>
        </div>
        <AlertBadge level={alert.level} />
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{alert.location.name}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-3">{timeAgo(alert.timestamp)}</span>
            <span 
              className="px-2 py-0.5 rounded-full text-xs" 
              style={{ 
                backgroundColor: getHazardColor(alert.type) + '20',
                color: getHazardColor(alert.type)
              }}
            >
              {alert.type.replace('_', ' ')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertCard;
