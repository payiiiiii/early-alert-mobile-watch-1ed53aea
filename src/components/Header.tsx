
import { BellRing } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-background border-b border-border p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <BellRing className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-destructive rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
