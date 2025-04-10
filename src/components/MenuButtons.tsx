
import React from "react";
import { Thermometer, Wind, Droplet, Cloud, Map } from "lucide-react";

interface MenuButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const MenuButton = ({ text, icon, onClick }: MenuButtonProps) => (
  <button className="menu-button" onClick={onClick}>
    <div className="flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </div>
  </button>
);

const MenuButtons = () => {
  return (
    <div className="mb-6">
      <MenuButton 
        text="Heat Index" 
        icon={<Thermometer className="h-5 w-5 text-red-500" />} 
      />
      <MenuButton 
        text="Air Quality" 
        icon={<Wind className="h-5 w-5 text-purple-500" />} 
      />
      <MenuButton 
        text="Flood Warnings" 
        icon={<Droplet className="h-5 w-5 text-blue-500" />} 
      />
      <MenuButton 
        text="Typhoons" 
        icon={<Cloud className="h-5 w-5 text-amber-500" />} 
      />
      <MenuButton 
        text="Weather Forecast" 
        icon={<Cloud className="h-5 w-5 text-blue-400" />} 
      />
      <MenuButton 
        text="MAPS" 
        icon={<Map className="h-5 w-5 text-green-600" />} 
      />
    </div>
  );
};

export default MenuButtons;
