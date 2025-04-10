
import React from "react";
import { ChevronRight, Thermometer, Wind, Droplet, Cloud } from "lucide-react";

interface HazardCardProps {
  type: 'air_quality' | 'heat_index' | 'typhoon' | 'flood';
  title: string;
  value: string | number;
  description?: string;
  details?: Record<string, any>;
}

const HazardCard = ({ type, title, value, description, details }: HazardCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'heat_index':
        return <Thermometer className="h-6 w-6 text-sanpedro-green-dark" />;
      case 'air_quality':
        return <Wind className="h-6 w-6 text-sanpedro-green-dark" />;
      case 'flood':
        return <Droplet className="h-6 w-6 text-sanpedro-green-dark" />;
      case 'typhoon':
        return <Cloud className="h-6 w-6 text-sanpedro-green-dark" />;
      default:
        return null;
    }
  };

  return (
    <div className="hazard-card mb-4">
      <div className="text-center text-sanpedro-green font-semibold text-lg mb-2">
        {title}
      </div>
      
      {type === 'typhoon' ? (
        <div className="flex flex-col">
          <div className="flex justify-center mb-4">
            <img 
              src="public/lovable-uploads/1706540b-3a3c-44ce-b024-908bb134fd71.png" 
              alt="Map of San Pedro"
              className="w-4/5 h-auto"
            />
          </div>
          <div className="text-center text-xl font-bold mb-2">
            SAN PEDRO
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {details && Object.entries(details).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between bg-sanpedro-green px-2 py-1 rounded-md">
                <span className="text-white uppercase text-xs font-bold">{key}</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">{value}</div>
            {description && <div className="text-sm">{description}</div>}
          </div>
          <div>
            {getIcon()}
          </div>
        </div>
      )}
      
      <div className="flex justify-end mt-2">
        <button className="tips-button">
          TIPS <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HazardCard;
