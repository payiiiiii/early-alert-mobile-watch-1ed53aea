
import { AlertLevel } from "@/types";
import { cn } from "@/lib/utils";

interface AlertBadgeProps {
  level: AlertLevel;
  className?: string;
}

const AlertBadge = ({ level, className }: AlertBadgeProps) => {
  const baseClasses = "px-2 py-1 rounded-full font-medium text-white text-xs";
  
  const levelClasses = {
    low: "bg-alert-low",
    medium: "bg-alert-medium",
    high: "bg-alert-high animate-pulse-alert"
  };
  
  return (
    <span className={cn(baseClasses, levelClasses[level], className)}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

export default AlertBadge;
