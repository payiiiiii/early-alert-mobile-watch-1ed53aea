
import { Alert, HistoricalData, User } from "@/types";

// San Pedro, Laguna Coordinates
const SAN_PEDRO_LAT = 14.3595;
const SAN_PEDRO_LNG = 121.0473;

// Nearby areas for different alerts
const locations = [
  { name: "San Pedro City Center", lat: SAN_PEDRO_LAT, lng: SAN_PEDRO_LNG },
  { name: "Barangay San Vicente", lat: 14.3690, lng: 121.0540 },
  { name: "Barangay Landayan", lat: 14.3468, lng: 121.0560 },
  { name: "Barangay San Antonio", lat: 14.3715, lng: 121.0392 },
  { name: "Barangay Cuyab", lat: 14.3538, lng: 121.0330 }
];

export const currentAlerts: Alert[] = [
  {
    id: "1",
    title: "High Heat Index Warning",
    description: "Heat index expected to reach 42°C. Stay hydrated and avoid prolonged sun exposure.",
    level: "high",
    type: "heat_index",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    location: locations[0]
  },
  {
    id: "2",
    title: "Air Quality Alert",
    description: "Air quality index has reached unhealthy levels for sensitive groups.",
    level: "medium",
    type: "air_pollution",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    location: locations[1]
  },
  {
    id: "3",
    title: "Flash Flood Warning",
    description: "Heavy rainfall expected to cause flash floods in low-lying areas.",
    level: "high",
    type: "flood",
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    location: locations[2]
  },
  {
    id: "4",
    title: "Thunderstorm Alert",
    description: "Thunderstorms with possibility of lightning strikes expected in the next 2 hours.",
    level: "medium",
    type: "thunderstorm",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    location: locations[3]
  },
  {
    id: "5",
    title: "Moderate Flood Risk",
    description: "Rising water levels reported in low-lying areas. Avoid riverside areas.",
    level: "medium",
    type: "flood",
    timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    location: locations[4]
  }
];

export const historicalData: HistoricalData[] = [
  {
    date: "2025-04-03",
    alerts: { low: 3, medium: 2, high: 1 },
    hazardTypes: { heat_index: 2, air_pollution: 1, flood: 2, thunderstorm: 1 }
  },
  {
    date: "2025-04-04",
    alerts: { low: 2, medium: 3, high: 0 },
    hazardTypes: { heat_index: 1, air_pollution: 2, flood: 1, thunderstorm: 1 }
  },
  {
    date: "2025-04-05",
    alerts: { low: 4, medium: 1, high: 1 },
    hazardTypes: { heat_index: 3, air_pollution: 1, flood: 1, thunderstorm: 1 }
  },
  {
    date: "2025-04-06",
    alerts: { low: 2, medium: 2, high: 2 },
    hazardTypes: { heat_index: 2, air_pollution: 1, flood: 2, thunderstorm: 1 }
  },
  {
    date: "2025-04-07",
    alerts: { low: 1, medium: 3, high: 3 },
    hazardTypes: { heat_index: 2, air_pollution: 2, flood: 2, thunderstorm: 1 }
  },
  {
    date: "2025-04-08",
    alerts: { low: 5, medium: 2, high: 0 },
    hazardTypes: { heat_index: 3, air_pollution: 2, flood: 1, thunderstorm: 1 }
  },
  {
    date: "2025-04-09",
    alerts: { low: 3, medium: 4, high: 1 },
    hazardTypes: { heat_index: 2, air_pollution: 3, flood: 2, thunderstorm: 1 }
  },
];

export const currentUser: User = {
  id: "user1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  locations: ["San Pedro City Center", "Barangay San Vicente"],
  alertPreferences: {
    email: true,
    push: true,
    sms: false,
    minimumLevel: "medium",
    subscribedTypes: ["heat_index", "flood", "thunderstorm", "air_pollution"]
  }
};

export const riskLevel = {
  current: "medium",
  trend: "increasing"
};
