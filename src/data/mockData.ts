
import { Alert, HistoricalData, User } from "@/types";

export const currentAlerts: Alert[] = [
  {
    id: "1",
    title: "Flood Warning",
    description: "Heavy rainfall may cause flash floods in low-lying areas.",
    level: "medium",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    location: {
      lat: 34.0522,
      lng: -118.2437,
      name: "Los Angeles"
    }
  },
  {
    id: "2",
    title: "Extreme Heat",
    description: "Temperature expected to rise above 40°C. Stay hydrated.",
    level: "high",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    location: {
      lat: 33.4484,
      lng: -112.0740,
      name: "Phoenix"
    }
  },
  {
    id: "3",
    title: "Air Quality Alert",
    description: "Air quality index reaching unhealthy levels for sensitive groups.",
    level: "low",
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    location: {
      lat: 37.7749,
      lng: -122.4194,
      name: "San Francisco"
    }
  },
  {
    id: "4",
    title: "Storm Warning",
    description: "Thunderstorms with possibility of hail and strong winds.",
    level: "medium",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    location: {
      lat: 41.8781,
      lng: -87.6298,
      name: "Chicago"
    }
  },
  {
    id: "5",
    title: "Wildfire Risk",
    description: "High risk of wildfires due to dry conditions and strong winds.",
    level: "high",
    timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    location: {
      lat: 34.4208,
      lng: -119.6982,
      name: "Santa Barbara"
    }
  }
];

export const historicalData: HistoricalData[] = [
  {
    date: "2025-04-03",
    alerts: { low: 3, medium: 2, high: 1 }
  },
  {
    date: "2025-04-04",
    alerts: { low: 2, medium: 3, high: 0 }
  },
  {
    date: "2025-04-05",
    alerts: { low: 4, medium: 1, high: 1 }
  },
  {
    date: "2025-04-06",
    alerts: { low: 2, medium: 2, high: 2 }
  },
  {
    date: "2025-04-07",
    alerts: { low: 1, medium: 3, high: 3 }
  },
  {
    date: "2025-04-08",
    alerts: { low: 5, medium: 2, high: 0 }
  },
  {
    date: "2025-04-09",
    alerts: { low: 3, medium: 4, high: 1 }
  },
];

export const currentUser: User = {
  id: "user1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  locations: ["Los Angeles", "San Francisco"],
  alertPreferences: {
    email: true,
    push: true,
    sms: false,
    minimumLevel: "medium"
  }
};

export const riskLevel = {
  current: "medium",
  trend: "increasing"
};
