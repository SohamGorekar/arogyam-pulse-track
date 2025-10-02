import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MapPin, Search, TrendingUp, AlertTriangle, Eye, MoreHorizontal, FileText, Users, Phone, MapIcon, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const Surveillance = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [selectedLayers, setSelectedLayers] = useState({
    diseaseCases: true,
    clinics: false,
    waterSources: false
  });

  // Mock data for map markers
  const diseaseData = [
    { lat: 9.9312, lng: 76.2673, title: "Ernakulam - Fever & Rash Cluster", cases: 15, severity: "High" },
    { lat: 10.5276, lng: 76.2144, title: "Thrissur - Respiratory Symptoms", cases: 8, severity: "Medium" },
    { lat: 9.5916, lng: 76.5222, title: "Kottayam - Gastrointestinal Issues", cases: 12, severity: "Medium" }
  ];

  const clinicsData = [
    { lat: 8.5241, lng: 76.9366, title: "Thiruvananthapuram General Hospital" },
    { lat: 9.9312, lng: 76.2673, title: "Ernakulam Medical Centre" },
    { lat: 11.2588, lng: 75.7804, title: "Kozhikode District Hospital" }
  ];

  const waterSourcesData = [
    { lat: 10.0889, lng: 76.3419, title: "Periyar River Treatment Plant" },
    { lat: 9.4981, lng: 76.3388, title: "Vembanad Lake Source" },
    { lat: 11.8745, lng: 75.3704, title: "Kabini River Source" }
  ];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialize map centered on Kerala
    const map = L.map(mapRef.current).setView([10.8505, 76.2711], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update markers based on selected layers
  useEffect(() => {
    if (!mapInstance.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add disease case markers
    if (selectedLayers.diseaseCases) {
      diseaseData.forEach(point => {
        const color = point.severity === 'High' ? '#ef4444' : '#f59e0b';
        const icon = L.divIcon({
          html: `<div style="background-color: ${color}; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${point.cases}</div>`,
          className: 'custom-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker([point.lat, point.lng], { icon })
          .addTo(mapInstance.current!)
          .bindPopup(`
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${point.title}</h3>
              <p style="margin: 4px 0; font-size: 12px;">Cases: ${point.cases}</p>
              <p style="margin: 4px 0; font-size: 12px;">Severity: ${point.severity}</p>
            </div>
          `);

        markersRef.current.push(marker);
      });
    }

    // Add clinic markers
    if (selectedLayers.clinics) {
      clinicsData.forEach(clinic => {
        const icon = L.divIcon({
          html: `<div style="background-color: #10b981; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">+</div>`,
          className: 'custom-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker([clinic.lat, clinic.lng], { icon })
          .addTo(mapInstance.current!)
          .bindPopup(`
            <div style="padding: 8px;">
              <h3 style="margin: 0; font-size: 14px; font-weight: bold;">${clinic.title}</h3>
            </div>
          `);

        markersRef.current.push(marker);
      });
    }

    // Add water source markers
    if (selectedLayers.waterSources) {
      waterSourcesData.forEach(source => {
        const icon = L.divIcon({
          html: `<div style="background-color: #3b82f6; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">💧</div>`,
          className: 'custom-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker([source.lat, source.lng], { icon })
          .addTo(mapInstance.current!)
          .bindPopup(`
            <div style="padding: 8px;">
              <h3 style="margin: 0; font-size: 14px; font-weight: bold;">${source.title}</h3>
            </div>
          `);

        markersRef.current.push(marker);
      });
    }
  }, [selectedLayers]);

  const toggleLayer = (layer: keyof typeof selectedLayers) => {
    setSelectedLayers(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }));
  };

  // Mock alert data
  const alerts = [
    {
      id: "ALT-2024-001",
      syndrome: "Fever & Rash Cluster",
      location: "Ernakulam - Construction Zone 4",
      cases: 15,
      severity: "High",
      timeTriggered: "2024-01-20 09:15",
      status: "Active",
      aiConfidence: 0.87,
    },
    {
      id: "ALT-2024-002", 
      syndrome: "Respiratory Symptoms",
      location: "Thrissur - Agricultural Sector",
      cases: 8,
      severity: "Medium",
      timeTriggered: "2024-01-20 07:42",
      status: "Under Investigation",
      aiConfidence: 0.73,
    },
    {
      id: "ALT-2024-003",
      syndrome: "Gastrointestinal Issues",
      location: "Kottayam - Manufacturing Hub",
      cases: 12,
      severity: "Medium", 
      timeTriggered: "2024-01-19 16:28",
      status: "Resolved",
      aiConfidence: 0.91,
    },
  ];

  // Mock trend data
  const trendData = [
    { disease: "Tuberculosis", currentWeek: 23, previousWeek: 19, trend: "up" },
    { disease: "Malaria", currentWeek: 7, previousWeek: 12, trend: "down" },
    { disease: "Dengue", currentWeek: 15, previousWeek: 14, trend: "stable" },
    { disease: "COVID-19", currentWeek: 43, previousWeek: 51, trend: "down" },
  ];

  const getSeverityColor = (severity: string): BadgeVariant => {
    switch (severity) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "default";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string): BadgeVariant => {
    switch (status) {
      case "Active": return "destructive";
      case "Under Investigation": return "secondary";
      case "Resolved": return "default";
      default: return "secondary";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "↗️";
      case "down": return "↘️";
      default: return "➡️";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Disease Surveillance</h1>
        <p className="text-muted-foreground">Early warning system for disease outbreak detection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* OpenStreetMap Integration */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Geospatial Analysis Tool
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              ref={mapRef} 
              className="h-96 rounded-lg border z-0"
              style={{ minHeight: '400px' }}
            />
            <div className="flex gap-2 mt-4 flex-wrap">
              <Button 
                variant={selectedLayers.diseaseCases ? "default" : "outline"} 
                size="sm"
                onClick={() => toggleLayer('diseaseCases')}
              >
                Layer: Disease Cases
              </Button>
              <Button 
                variant={selectedLayers.clinics ? "default" : "outline"} 
                size="sm"
                onClick={() => toggleLayer('clinics')}
              >
                Layer: Clinics
              </Button>
              <Button 
                variant={selectedLayers.waterSources ? "default" : "outline"} 
                size="sm"
                onClick={() => toggleLayer('waterSources')}
              >
                Layer: Water Sources
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* State-wide Hotspot Map */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">State Hotspot Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { district: "Thiruvananthapuram", status: "Low", color: "default" as BadgeVariant },
                { district: "Ernakulam", status: "High", color: "destructive" as BadgeVariant },
                { district: "Thrissur", status: "Medium", color: "secondary" as BadgeVariant },
                { district: "Kozhikode", status: "Low", color: "default" as BadgeVariant },
                { district: "Kottayam", status: "Medium", color: "secondary" as BadgeVariant },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
                  <span className="text-sm font-medium">{item.district}</span>
                  <Badge variant={item.color}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert Investigation Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Alert Investigation Panel
            </CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Search alerts..." className="w-64" />
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Alert ID</th>
                  <th className="text-left py-2 px-4">Syndrome</th>
                  <th className="text-left py-2 px-4">Location</th>
                  <th className="text-left py-2 px-4">Cases</th>
                  <th className="text-left py-2 px-4">Severity</th>
                  <th className="text-left py-2 px-4">Status</th>
                  <th className="text-left py-2 px-4">AI Confidence</th>
                  <th className="text-left py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert) => (
                  <tr key={alert.id} className="border-b hover:bg-muted/50">
                    <td className="py-2 px-4 font-mono text-sm">{alert.id}</td>
                    <td className="py-2 px-4 font-medium">{alert.syndrome}</td>
                    <td className="py-2 px-4">{alert.location}</td>
                    <td className="py-2 px-4">{alert.cases}</td>
                    <td className="py-2 px-4">
                      <Badge variant={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                    </td>
                    <td className="py-2 px-4">
                      <Badge variant={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                    </td>
                    <td className="py-2 px-4">{(alert.aiConfidence * 100).toFixed(0)}%</td>
                    <td className="py-2 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Generate Report
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Assign Team
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Contact Facility
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <MapIcon className="w-4 h-4" />
                            Field Investigation
                          </DropdownMenuItem>
                          {alert.status === "Active" && (
                            <>
                              <DropdownMenuItem className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Mark Under Investigation
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Mark Resolved
                              </DropdownMenuItem>
                            </>
                          )}
                          {alert.status === "Under Investigation" && (
                            <DropdownMenuItem className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Mark Resolved
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                            <AlertCircle className="w-4 h-4" />
                            Escalate Alert
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Disease Trend Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Disease Trend Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendData.map((disease, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{disease.disease}</h4>
                  <span className="text-lg">{getTrendIcon(disease.trend)}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Current Week:</span>
                    <span className="font-medium">{disease.currentWeek}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Previous Week:</span>
                    <span>{disease.previousWeek}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Surveillance;
