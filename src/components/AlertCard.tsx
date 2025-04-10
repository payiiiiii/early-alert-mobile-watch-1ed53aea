
import { Alert } from "@/types";
import { timeAgo } from "@/utils/dateUtils";
import AlertBadge from "./AlertBadge";
import { Bell, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface AlertCardProps {
  alert: Alert;
}

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
          <Bell className="mr-2 h-4 w-4" />
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
          <span>{timeAgo(alert.timestamp)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertCard;
