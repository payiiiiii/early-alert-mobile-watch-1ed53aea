
import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { currentUser } from "@/data/mockData";
import { Switch } from "@/components/ui/switch";
import { Bell, Mail, MapPin, MessageCircle, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [user, setUser] = useState(currentUser);
  const [locations, setLocations] = useState(currentUser.locations.join(", "));

  const handlePreferenceChange = (key: keyof typeof user.alertPreferences, value: any) => {
    setUser(prev => ({
      ...prev,
      alertPreferences: {
        ...prev.alertPreferences,
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    setUser(prev => ({
      ...prev,
      locations: locations.split(",").map(loc => loc.trim()).filter(Boolean)
    }));
    
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-16">
      <Header title="Settings" />
      
      <main className="flex-1 p-4">
        <div className="space-y-6">
          {/* User Profile */}
          <section className="bg-card p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold flex items-center mb-4">
              <User className="h-5 w-5 mr-2" />
              User Profile
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={user.name} 
                  onChange={(e) => setUser({...user, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={user.email} 
                  onChange={(e) => setUser({...user, email: e.target.value})}
                />
              </div>
            </div>
          </section>

          {/* Alert Preferences */}
          <section className="bg-card p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold flex items-center mb-4">
              <Bell className="h-5 w-5 mr-2" />
              Alert Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <Label htmlFor="email-alerts">Email Alerts</Label>
                </div>
                <Switch 
                  id="email-alerts" 
                  checked={user.alertPreferences.email}
                  onCheckedChange={(checked) => handlePreferenceChange("email", checked)} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <Label htmlFor="push-alerts">Push Notifications</Label>
                </div>
                <Switch 
                  id="push-alerts" 
                  checked={user.alertPreferences.push} 
                  onCheckedChange={(checked) => handlePreferenceChange("push", checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <Label htmlFor="sms-alerts">SMS Notifications</Label>
                </div>
                <Switch 
                  id="sms-alerts" 
                  checked={user.alertPreferences.sms} 
                  onCheckedChange={(checked) => handlePreferenceChange("sms", checked)}
                />
              </div>
              
              <div className="pt-2">
                <Label htmlFor="min-level">Minimum Alert Level</Label>
                <Select 
                  value={user.alertPreferences.minimumLevel}
                  onValueChange={(value) => handlePreferenceChange("minimumLevel", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select minimum level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Locations */}
          <section className="bg-card p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold flex items-center mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              Monitored Locations
            </h2>
            <div>
              <Label htmlFor="locations">Locations (comma separated)</Label>
              <Input 
                id="locations"
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                placeholder="e.g. New York, Los Angeles"
              />
              <p className="text-xs text-muted-foreground mt-1">
                You will receive alerts for these locations
              </p>
            </div>
          </section>

          <Button className="w-full" onClick={handleSave}>
            Save Preferences
          </Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Settings;
