
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import MapView from "@/components/MapView";
import { AlertCircle } from "lucide-react";

const Map = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-16">
      <Header title="Alert Map" />
      
      <main className="flex-1 p-4">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 rounded">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              This map shows current alerts and risk levels. Tap on a marker for more details.
            </p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden border h-[calc(100vh-200px)]">
          <MapView />
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Map;
