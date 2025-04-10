
import { useEffect, useRef } from "react";
import { currentAlerts } from "@/data/mockData";
import { AlertLevel, HazardType } from "@/types";

// San Pedro, Laguna coordinates
const SAN_PEDRO_LAT = 14.3595;
const SAN_PEDRO_LNG = 121.0473;

// This is a simplified map view that would be replaced with a real map library in a production app
const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const createMapMarker = (
      x: number,
      y: number,
      level: AlertLevel,
      type: HazardType,
      location: string
    ) => {
      const marker = document.createElement("div");
      marker.className = "absolute transform -translate-x-1/2 -translate-y-1/2";
      marker.style.left = `${x}px`;
      marker.style.top = `${y}px`;

      const dot = document.createElement("div");
      dot.className = "h-4 w-4 rounded-full";
      
      // Set color based on level
      if (level === "high") {
        dot.className += " bg-alert-high animate-pulse-alert";
      } else if (level === "medium") {
        dot.className += " bg-alert-medium";
      } else {
        dot.className += " bg-alert-low";
      }

      // Add an icon or indicator for hazard type
      const icon = document.createElement("div");
      icon.className = "absolute -top-1 -right-1 h-3 w-3 rounded-full border border-white";
      
      // Set icon color based on hazard type
      switch(type) {
        case "heat_index":
          icon.style.backgroundColor = "#ef4444"; // Red
          break;
        case "air_pollution":
          icon.style.backgroundColor = "#9333ea"; // Purple
          break;
        case "flood":
          icon.style.backgroundColor = "#3b82f6"; // Blue
          break;
        case "thunderstorm":
          icon.style.backgroundColor = "#f59e0b"; // Amber
          break;
      }
      
      dot.appendChild(icon);

      const tooltip = document.createElement("div");
      tooltip.className = "absolute bottom-full mb-1 bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100";
      tooltip.textContent = `${location} - ${type.replace('_', ' ')}`;

      marker.appendChild(dot);
      marker.appendChild(tooltip);
      marker.className += " group";

      return marker;
    };

    // Simple function to convert lat/lng to x/y positions within our container
    // In a real app, we'd use a mapping library like Leaflet or Google Maps
    const convertToXY = (lat: number, lng: number, width: number, height: number) => {
      // Center the map on San Pedro, Laguna with appropriate zoom
      const centerLat = SAN_PEDRO_LAT;
      const centerLng = SAN_PEDRO_LNG;
      
      // Set a zoom factor to make the San Pedro area fill most of the map
      const zoomFactor = 20; 
      
      // Calculate x and y based on the difference from the center
      const x = (width / 2) + ((lng - centerLng) * zoomFactor * width);
      const y = (height / 2) - ((lat - centerLat) * zoomFactor * height);
      
      return { x, y };
    };

    const mapContainer = mapRef.current;
    const width = mapContainer.offsetWidth;
    const height = mapContainer.offsetHeight;

    // Add all markers
    currentAlerts.forEach((alert) => {
      const { lat, lng, name } = alert.location;
      const { x, y } = convertToXY(lat, lng, width, height);
      const marker = createMapMarker(x, y, alert.level, alert.type, name);
      mapContainer.appendChild(marker);
    });

    // Add a "You are here" marker for San Pedro City Center
    const { x, y } = convertToXY(SAN_PEDRO_LAT, SAN_PEDRO_LNG, width, height);
    const userMarker = document.createElement("div");
    userMarker.className = "absolute transform -translate-x-1/2 -translate-y-1/2";
    userMarker.style.left = `${x}px`;
    userMarker.style.top = `${y}px`;
    
    const userDot = document.createElement("div");
    userDot.className = "h-4 w-4 rounded-full bg-green-500 border-2 border-white animate-pulse";
    
    const userTooltip = document.createElement("div");
    userTooltip.className = "absolute bottom-full mb-1 bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100";
    userTooltip.textContent = "You are here";
    
    userMarker.appendChild(userDot);
    userMarker.appendChild(userTooltip);
    userMarker.className += " group";
    
    mapContainer.appendChild(userMarker);

    // Cleanup
    return () => {
      while (mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-slate-100 rounded-lg overflow-hidden">
      {/* This would be replaced with an actual map in a production app */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1000x800/e9eef2/cccccc?text=San+Pedro+Laguna')] bg-cover bg-center" />
      <div ref={mapRef} className="absolute inset-0 z-10">
        {/* Map markers will be added here dynamically */}
      </div>
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md text-sm">
        <div className="flex items-center mb-1">
          <span className="h-3 w-3 rounded-full bg-alert-low mr-2"></span>
          <span>Low Risk</span>
        </div>
        <div className="flex items-center mb-1">
          <span className="h-3 w-3 rounded-full bg-alert-medium mr-2"></span>
          <span>Medium Risk</span>
        </div>
        <div className="flex items-center mb-3">
          <span className="h-3 w-3 rounded-full bg-alert-high mr-2 animate-pulse-alert"></span>
          <span>High Risk</span>
        </div>
        <div className="border-t border-gray-200 pt-2 mt-1">
          <div className="flex items-center mb-1">
            <span className="h-3 w-3 rounded-full mr-2" style={{backgroundColor: "#ef4444"}}></span>
            <span>Heat Index</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="h-3 w-3 rounded-full mr-2" style={{backgroundColor: "#9333ea"}}></span>
            <span>Air Pollution</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="h-3 w-3 rounded-full mr-2" style={{backgroundColor: "#3b82f6"}}></span>
            <span>Flood</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full mr-2" style={{backgroundColor: "#f59e0b"}}></span>
            <span>Thunderstorm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
