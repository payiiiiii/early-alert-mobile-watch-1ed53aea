
import React from "react";
import MainLayout from "@/components/MainLayout";
import HazardCard from "@/components/HazardCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Alerts = () => {
  return (
    <MainLayout title="Alerts">
      <HazardCard
        type="heat_index"
        title="Heat Index"
        value="37°"
        description="caution"
      />
      
      <HazardCard
        type="air_quality"
        title="Air Quality"
        value="30"
        description="AQI Fair"
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
      
      <HazardCard
        type="flood"
        title="Flood Warnings"
        value="Low Risk"
        description="No imminent flooding"
      />
    </MainLayout>
  );
};

export default Alerts;
