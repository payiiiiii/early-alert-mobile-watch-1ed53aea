
import { cn } from "@/lib/utils";
import { AlertTriangle, ArrowDownRight, ArrowUpRight } from "lucide-react";

interface RiskLevelIndicatorProps {
  level: "low" | "medium" | "high";
  trend: "increasing" | "stable" | "decreasing";
  className?: string;
}

const RiskLevelIndicator = ({ level, trend, className }: RiskLevelIndicatorProps) => {
  const bgColors = {
    low: "bg-blue-500",
    medium: "bg-amber-500",
    high: "bg-red-500"
  };

  const trendIcons = {
    increasing: <ArrowUpRight className="h-4 w-4 ml-1" />,
    stable: null,
    decreasing: <ArrowDownRight className="h-4 w-4 ml-1" />
  };

  return (
    <div className={cn("rounded-lg p-4 text-white flex flex-col", bgColors[level], className)}>
      <div className="flex items-center mb-1">
        <AlertTriangle className="h-5 w-5 mr-2" />
        <h3 className="font-semibold text-lg">Current Risk Level</h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{level.toUpperCase()}</p>
        {trend !== "stable" && (
          <div className="flex items-center text-sm">
            <span>{trend === "increasing" ? "Rising" : "Falling"}</span>
            {trendIcons[trend]}
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskLevelIndicator;
