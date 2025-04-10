
import { useEffect, useRef } from "react";
import { currentAlerts } from "@/data/mockData";
import { AlertLevel } from "@/types";

// This is a simplified map view that would be replaced with a real map library in a production app
const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const createMapMarker = (
      x: number,
      y: number,
      level: AlertLevel,
      location: string
    ) => {
      const marker = document.createElement("div");
      marker.className = "absolute transform -translate-x-1/2 -translate-y-1/2";
      marker.style.left = `${x}px`;
      marker.style.top = `${y}px`;

      const dot = document.createElement("div");
      dot.className = "h-4 w-4 rounded-full";
      
      if (level === "high") {
        dot.className += " bg-alert-high animate-pulse-alert";
      } else if (level === "medium") {
        dot.className += " bg-alert-medium";
      } else {
        dot.className += " bg-alert-low";
      }

      const tooltip = document.createElement("div");
      tooltip.className = "absolute bottom-full mb-1 bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100";
      tooltip.textContent = location;

      marker.appendChild(dot);
      marker.appendChild(tooltip);
      marker.className += " group";

      return marker;
    };

    // Simple function to convert lat/lng to x/y positions within our container
    // In a real app, we'd use a mapping library like Leaflet or Google Maps
    const convertToXY = (lat: number, lng: number, width: number, height: number) => {
      // Very basic conversion for demonstration purposes
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return { x, y };
    };

    const mapContainer = mapRef.current;
    const width = mapContainer.offsetWidth;
    const height = mapContainer.offsetHeight;

    // Add all markers
    currentAlerts.forEach((alert) => {
      const { lat, lng, name } = alert.location;
      const { x, y } = convertToXY(lat, lng, width, height);
      const marker = createMapMarker(x, y, alert.level, name);
      mapContainer.appendChild(marker);
    });

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
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1000x800/e9eef2/cccccc?text=Map+View')] bg-cover bg-center" />
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
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-alert-high mr-2 animate-pulse-alert"></span>
          <span>High Risk</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
