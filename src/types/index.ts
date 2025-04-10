
export type AlertLevel = 'low' | 'medium' | 'high';

export type HazardType = 'heat_index' | 'air_pollution' | 'flood' | 'thunderstorm';

export interface Alert {
  id: string;
  title: string;
  description: string;
  level: AlertLevel;
  type: HazardType;
  timestamp: string;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
}

export interface HistoricalData {
  date: string;
  alerts: {
    low: number;
    medium: number;
    high: number;
  };
  hazardTypes: {
    heat_index: number;
    air_pollution: number;
    flood: number;
    thunderstorm: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  locations: string[];
  alertPreferences: {
    email: boolean;
    push: boolean;
    sms: boolean;
    minimumLevel: AlertLevel;
    subscribedTypes: HazardType[];
  };
}
