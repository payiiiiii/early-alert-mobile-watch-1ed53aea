
import React from "react";
import { Settings } from "lucide-react";
import BottomNav from "./BottomNav";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title = "San Pedro" }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-sanpedro-green pb-16">
      <header className="bg-sanpedro-green p-4 flex justify-between items-center border-b border-sanpedro-green-dark">
        <div className="flex items-center">
          <button className="mr-2">
            <div className="flex flex-col space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
        <button className="p-2 bg-white rounded-full">
          <Settings className="h-5 w-5 text-sanpedro-green" />
        </button>
      </header>
      
      <main className="flex-1 px-4 py-6">
        {children}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default MainLayout;
