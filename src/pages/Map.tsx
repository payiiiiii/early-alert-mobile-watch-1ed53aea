
import React from "react";
import MainLayout from "@/components/MainLayout";
import MapView from "@/components/MapView";

const Map = () => {
  return (
    <MainLayout title="Map">
      <div className="hazard-card">
        <div className="text-center text-sanpedro-green font-semibold text-lg mb-4">
          San Pedro, Laguna
        </div>
        <div className="rounded-lg overflow-hidden border h-[calc(100vh-280px)]">
          <MapView />
        </div>
      </div>
    </MainLayout>
  );
};

export default Map;
