
export type AlertLevel = 'low' | 'medium' | 'high';

export interface Alert {
  id: string;
  title: string;
  description: string;
  level: AlertLevel;
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
  };
}
