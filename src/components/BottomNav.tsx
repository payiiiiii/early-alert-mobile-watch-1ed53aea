
import { Bell, Home, Map, Settings, BarChart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Bell, label: "Alerts", path: "/alerts" },
  { icon: Map, label: "Map", path: "/map" },
  { icon: BarChart, label: "History", path: "/history" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 flex justify-around items-center z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              "flex flex-col items-center py-1 px-3 rounded-md transition-colors",
              isActive 
                ? "text-sanpedro-green" 
                : "text-gray-500 hover:text-sanpedro-green"
            )}
          >
            <item.icon className={cn("h-5 w-5", isActive && "text-sanpedro-green")} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
