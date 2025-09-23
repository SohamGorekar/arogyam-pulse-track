import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building2, RefreshCw } from "lucide-react";

export const GlobalFilters = () => {
  const [dateRange, setDateRange] = useState("last-7-days");
  const [district, setDistrict] = useState("all");
  const [industry, setIndustry] = useState("all");

  return (
    <Card className="mx-6 mt-6 p-4">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-24h">Last 24 Hours</SelectItem>
              <SelectItem value="last-7-days">Last 7 Days</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <Select value={district} onValueChange={setDistrict}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Districts</SelectItem>
              <SelectItem value="thiruvananthapuram">Thiruvananthapuram</SelectItem>
              <SelectItem value="ernakulam">Ernakulam</SelectItem>
              <SelectItem value="thrissur">Thrissur</SelectItem>
              <SelectItem value="kozhikode">Kozhikode</SelectItem>
              <SelectItem value="kottayam">Kottayam</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-muted-foreground" />
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="services">Services</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" size="sm" className="ml-auto">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Data
        </Button>
      </div>
    </Card>
  );
};