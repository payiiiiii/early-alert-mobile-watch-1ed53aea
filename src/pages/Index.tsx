
import React from "react";
import MainLayout from "@/components/MainLayout";
import MenuButtons from "@/components/MenuButtons";
import HazardCard from "@/components/HazardCard";
import WeatherForecast from "@/components/WeatherForecast";
import { Sun } from "lucide-react";

const Index = () => {
  // First view: Menu buttons with weather
  const [view, setView] = React.useState<'menu' | 'details'>('menu');
  
  return (
    <MainLayout title="San Pedro">
      {view === 'menu' ? (
        <>
          <MenuButtons />
          
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center">
              <img
                src="public/lovable-uploads/f0e6c2b7-d007-45c2-8760-c0e2d791d524.png"
                alt="Sun"
                className="w-32 h-32"
              />
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold">37°</div>
              <div className="text-2xl mb-1">Sunny</div>
              <div className="text-sm">RealFeel® 41°</div>
            </div>
          </div>
          
          <WeatherForecast />
        </>
      ) : (
        <>
          <button 
            className="bg-white text-sanpedro-green px-4 py-2 rounded-md mb-4"
            onClick={() => setView('menu')}
          >
            Back to Menu
          </button>
          
          <HazardCard
            type="air_quality"
            title="Air Quality"
            value="30"
            description="AQI Fair"
          />
          
          <HazardCard
            type="heat_index"
            title="Heat Index"
            value="37°"
            description="caution"
          />
          
          <HazardCard
            type="typhoon"
            title="Typhoon Updates"
            value=""
            details={{
              wind: "EAST 26.0KM/H",
              "water level": "13m",
              precipitation: "0%",
              temperature: "37°"
            }}
          />
        </>
      )}
    </MainLayout>
  );
};

export default Index;
