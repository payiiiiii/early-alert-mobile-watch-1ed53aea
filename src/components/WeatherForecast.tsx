
import React from "react";
import { Sun, Cloud } from "lucide-react";

interface HourlyForecastProps {
  hour: string;
  temp: string;
  icon: React.ReactNode;
}

const HourlyForecast = ({ hour, temp, icon }: HourlyForecastProps) => (
  <div className="flex flex-col items-center">
    <div className="text-xs text-white">{hour}</div>
    <div className="my-1">{icon}</div>
    <div className="text-xs text-white">{temp}</div>
  </div>
);

interface DailyForecastProps {
  date: string;
  day: string;
  icon: React.ReactNode;
  high: string;
  low: string;
}

const DailyForecast = ({ date, day, icon, high, low }: DailyForecastProps) => (
  <div className="flex items-center justify-between text-white py-1">
    <div className="w-16">{date} {day}</div>
    <div>{icon}</div>
    <div className="w-16 text-right">{high} {low}</div>
  </div>
);

const WeatherForecast = () => {
  const hourlyData = [
    { hour: '10:00', temp: '29°C', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" /> },
    { hour: '11:00', temp: '30°C', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" /> },
    { hour: '12:00', temp: '30°C', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" /> },
    { hour: '13:00', temp: '32°C', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" /> },
    { hour: '14:00', temp: '33°C', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" /> },
    { hour: '15:00', temp: '30°C', icon: <Cloud className="h-5 w-5 text-gray-200" /> },
    { hour: '16:00', temp: '30°C', icon: <Cloud className="h-5 w-5 text-gray-200" /> },
    { hour: '17:00', temp: '28°C', icon: <Cloud className="h-5 w-5 text-gray-200" /> },
  ];

  const dailyData = [
    { date: '3/13', day: 'TDY', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '32', low: '26' },
    { date: '3/14', day: 'TMR', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '33', low: '26' },
    { date: '3/15', day: 'SAT', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '32', low: '26' },
    { date: '3/16', day: 'SUN', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '31', low: '27' },
    { date: '3/17', day: 'MON', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '34', low: '26' },
    { date: '3/18', day: 'TUE', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '33', low: '26' },
    { date: '3/19', day: 'WED', icon: <Sun className="h-5 w-5 text-sanpedro-yellow" />, high: '32', low: '27' },
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-4">
        {hourlyData.map((item, index) => (
          <HourlyForecast key={index} {...item} />
        ))}
      </div>
      
      <div className="bg-sanpedro-green-dark bg-opacity-40 rounded-lg p-4">
        {dailyData.map((item, index) => (
          <DailyForecast key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
