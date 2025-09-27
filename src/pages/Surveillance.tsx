// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { MapPin, Search, TrendingUp, AlertTriangle, Eye } from "lucide-react";

// const Surveillance = () => {
//   // Mock alert data
//   const alerts = [
//     {
//       id: "ALT-2024-001",
//       syndrome: "Fever & Rash Cluster",
//       location: "Ernakulam - Construction Zone 4",
//       cases: 15,
//       severity: "High",
//       timeTriggered: "2024-01-20 09:15",
//       status: "Active",
//       aiConfidence: 0.87,
//     },
//     {
//       id: "ALT-2024-002", 
//       syndrome: "Respiratory Symptoms",
//       location: "Thrissur - Agricultural Sector",
//       cases: 8,
//       severity: "Medium",
//       timeTriggered: "2024-01-20 07:42",
//       status: "Under Investigation",
//       aiConfidence: 0.73,
//     },
//     {
//       id: "ALT-2024-003",
//       syndrome: "Gastrointestinal Issues",
//       location: "Kottayam - Manufacturing Hub",
//       cases: 12,
//       severity: "Medium", 
//       timeTriggered: "2024-01-19 16:28",
//       status: "Resolved",
//       aiConfidence: 0.91,
//     },
//   ];

//   // Mock trend data
//   const trendData = [
//     { disease: "Tuberculosis", currentWeek: 23, previousWeek: 19, trend: "up" },
//     { disease: "Malaria", currentWeek: 7, previousWeek: 12, trend: "down" },
//     { disease: "Dengue", currentWeek: 15, previousWeek: 14, trend: "stable" },
//     { disease: "COVID-19", currentWeek: 43, previousWeek: 51, trend: "down" },
//   ];

//   const getSeverityColor = (severity: string) => {
//     switch (severity) {
//       case "High": return "destructive";
//       case "Medium": return "warning";
//       case "Low": return "success";
//       default: return "secondary";
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Active": return "destructive";
//       case "Under Investigation": return "warning";
//       case "Resolved": return "success";
//       default: return "secondary";
//     }
//   };

//   const getTrendIcon = (trend: string) => {
//     switch (trend) {
//       case "up": return "↗️";
//       case "down": return "↘️";
//       default: return "➡️";
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-primary">Disease Surveillance</h1>
//         <p className="text-muted-foreground">Early warning system for disease outbreak detection</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Interactive Map Placeholder */}
//         <Card className="lg:col-span-2">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <MapPin className="w-5 h-5 text-primary" />
//               Geospatial Analysis Tool
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-96 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
//               <div className="text-center">
//                 <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
//                 <p className="text-muted-foreground font-medium">Interactive Kerala Map</p>
//                 <p className="text-sm text-muted-foreground">Click districts to drill down • Overlay disease data</p>
//               </div>
//             </div>
//             <div className="flex gap-2 mt-4">
//               <Button variant="outline" size="sm">Layer: Disease Cases</Button>
//               <Button variant="outline" size="sm">Layer: Clinics</Button>
//               <Button variant="outline" size="sm">Layer: Water Sources</Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* State-wide Hotspot Map */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-lg">State Hotspot Status</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {[
//                 { district: "Thiruvananthapuram", status: "Low", color: "success" },
//                 { district: "Ernakulam", status: "High", color: "destructive" },
//                 { district: "Thrissur", status: "Medium", color: "warning" },
//                 { district: "Kozhikode", status: "Low", color: "success" },
//                 { district: "Kottayam", status: "Medium", color: "warning" },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
//                   <span className="text-sm font-medium">{item.district}</span>
//                   <Badge variant={item.color as any}>{item.status}</Badge>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Alert Investigation Panel */}
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <CardTitle className="flex items-center gap-2">
//               <AlertTriangle className="w-5 h-5 text-warning" />
//               Alert Investigation Panel
//             </CardTitle>
//             <div className="flex gap-2">
//               <Input placeholder="Search alerts..." className="w-64" />
//               <Button variant="outline" size="sm">
//                 <Search className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="data-table">
//             <table className="w-full">
//               <thead>
//                 <tr>
//                   <th>Alert ID</th>
//                   <th>Syndrome</th>
//                   <th>Location</th>
//                   <th>Cases</th>
//                   <th>Severity</th>
//                   <th>Status</th>
//                   <th>AI Confidence</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {alerts.map((alert) => (
//                   <tr key={alert.id}>
//                     <td className="font-mono text-sm">{alert.id}</td>
//                     <td className="font-medium">{alert.syndrome}</td>
//                     <td>{alert.location}</td>
//                     <td>{alert.cases}</td>
//                     <td>
//                       <Badge variant={getSeverityColor(alert.severity) as any}>
//                         {alert.severity}
//                       </Badge>
//                     </td>
//                     <td>
//                       <Badge variant={getStatusColor(alert.status) as any}>
//                         {alert.status}
//                       </Badge>
//                     </td>
//                     <td>{(alert.aiConfidence * 100).toFixed(0)}%</td>
//                     <td>
//                       <Button variant="ghost" size="sm">
//                         <Eye className="w-4 h-4" />
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Disease Trend Analysis */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <TrendingUp className="w-5 h-5 text-secondary" />
//             Disease Trend Analysis
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {trendData.map((disease, index) => (
//               <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-2">
//                   <h4 className="font-medium text-sm">{disease.disease}</h4>
//                   <span className="text-lg">{getTrendIcon(disease.trend)}</span>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="flex justify-between text-sm">
//                     <span>Current Week:</span>
//                     <span className="font-medium">{disease.currentWeek}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-muted-foreground">
//                     <span>Previous Week:</span>
//                     <span>{disease.previousWeek}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Surveillance;




// import React, { useEffect, useRef, useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { MapPin, Search, TrendingUp, AlertTriangle, Eye } from "lucide-react";

// // Type definitions
// declare global {
//   interface Window {
//     google: typeof google;
//   }
// }

// type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "warning";

// const Surveillance = () => {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
//   const [selectedLayers, setSelectedLayers] = useState({
//     diseaseCases: true,
//     clinics: false,
//     waterSources: false
//   });

//   // Mock data for map markers
//   const diseaseData = [
//     { lat: 9.9312, lng: 76.2673, title: "Ernakulam - Fever & Rash Cluster", cases: 15, severity: "High" },
//     { lat: 10.5276, lng: 76.2144, title: "Thrissur - Respiratory Symptoms", cases: 8, severity: "Medium" },
//     { lat: 9.5916, lng: 76.5222, title: "Kottayam - Gastrointestinal Issues", cases: 12, severity: "Medium" }
//   ];

//   const clinicsData = [
//     { lat: 8.5241, lng: 76.9366, title: "Thiruvananthapuram General Hospital" },
//     { lat: 9.9312, lng: 76.2673, title: "Ernakulam Medical Centre" },
//     { lat: 11.2588, lng: 75.7804, title: "Kozhikode District Hospital" }
//   ];

//   const waterSourcesData = [
//     { lat: 10.0889, lng: 76.3419, title: "Periyar River Treatment Plant" },
//     { lat: 9.4981, lng: 76.3388, title: "Vembanad Lake Source" },
//     { lat: 11.8745, lng: 75.3704, title: "Kabini River Source" }
//   ];

//   // Initialize Google Map
//   useEffect(() => {
//     if (!window.google) {
//       console.error('Google Maps API not loaded');
//       return;
//     }

//     const initMap = () => {
//       const mapInstance = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 10.8505, lng: 76.2711 }, // Center of Kerala
//         zoom: 7,
//         styles: [
//           {
//             featureType: "administrative.province",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#4285f4" }, { weight: 2 }]
//           }
//         ]
//       });

//       setMap(mapInstance);
//     };

//     initMap();
//   }, []);

//   // Add markers based on selected layers
//   useEffect(() => {
//     if (!map) return;

//     // Clear existing markers
//     markers.forEach(marker => marker.setMap(null));
//     setMarkers([]);
//     const newMarkers: google.maps.Marker[] = [];
    
//     if (selectedLayers.diseaseCases) {
//       diseaseData.forEach(point => {
//         const marker = new window.google.maps.Marker({
//           position: { lat: point.lat, lng: point.lng },
//           map: map,
//           title: point.title,
//           icon: {
//             url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="12" cy="12" r="8" fill="${point.severity === 'High' ? '#ef4444' : '#f59e0b'}" stroke="white" stroke-width="2"/>
//                 <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${point.cases}</text>
//               </svg>
//             `)}`,
//             scaledSize: new window.google.maps.Size(24, 24)
//           }
//         });

//         const infoWindow = new window.google.maps.InfoWindow({
//           content: `
//             <div>
//               <h3 style="margin: 0; font-size: 14px; font-weight: bold;">${point.title}</h3>
//               <p style="margin: 5px 0; font-size: 12px;">Cases: ${point.cases}</p>
//               <p style="margin: 5px 0; font-size: 12px;">Severity: ${point.severity}</p>
//             </div>
//           `
//         });

//         marker.addListener('click', () => {
//           infoWindow.open(map, marker);
//         });

//         newMarkers.push(marker);
//       });
//     }

//     if (selectedLayers.clinics) {
//       clinicsData.forEach(clinic => {
//         const marker = new window.google.maps.Marker({
//           position: { lat: clinic.lat, lng: clinic.lng },
//           map: map,
//           title: clinic.title,
//           icon: {
//             url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="12" cy="12" r="8" fill="#10b981" stroke="white" stroke-width="2"/>
//                 <path d="M12 6v12M6 12h12" stroke="white" stroke-width="2"/>
//               </svg>
//             `)}`,
//             scaledSize: new window.google.maps.Size(24, 24)
//           }
//         });
        
//         newMarkers.push(marker);
//       });
//     }

//     if (selectedLayers.waterSources) {
//       waterSourcesData.forEach(source => {
//         const marker = new window.google.maps.Marker({
//           position: { lat: source.lat, lng: source.lng },
//           map: map,
//           title: source.title,
//           icon: {
//             url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="12" cy="12" r="8" fill="#3b82f6" stroke="white" stroke-width="2"/>
//                 <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="white"/>
//               </svg>
//             `)}`,
//             scaledSize: new window.google.maps.Size(24, 24)
//           }
//         });
        
//         newMarkers.push(marker);
//       });
//     }

//     setMarkers(newMarkers);
//   }, [map, selectedLayers]);

//   const toggleLayer = (layer: keyof typeof selectedLayers) => {
//     setSelectedLayers(prev => ({
//       ...prev,
//       [layer]: !prev[layer]
//     }));
//   };

//   // Mock alert data
//   const alerts = [
//     {
//       id: "ALT-2024-001",
//       syndrome: "Fever & Rash Cluster",
//       location: "Ernakulam - Construction Zone 4",
//       cases: 15,
//       severity: "High",
//       timeTriggered: "2024-01-20 09:15",
//       status: "Active",
//       aiConfidence: 0.87,
//     },
//     {
//       id: "ALT-2024-002", 
//       syndrome: "Respiratory Symptoms",
//       location: "Thrissur - Agricultural Sector",
//       cases: 8,
//       severity: "Medium",
//       timeTriggered: "2024-01-20 07:42",
//       status: "Under Investigation",
//       aiConfidence: 0.73,
//     },
//     {
//       id: "ALT-2024-003",
//       syndrome: "Gastrointestinal Issues",
//       location: "Kottayam - Manufacturing Hub",
//       cases: 12,
//       severity: "Medium", 
//       timeTriggered: "2024-01-19 16:28",
//       status: "Resolved",
//       aiConfidence: 0.91,
//     },
//   ];

//   // Mock trend data
//   const trendData = [
//     { disease: "Tuberculosis", currentWeek: 23, previousWeek: 19, trend: "up" },
//     { disease: "Malaria", currentWeek: 7, previousWeek: 12, trend: "down" },
//     { disease: "Dengue", currentWeek: 15, previousWeek: 14, trend: "stable" },
//     { disease: "COVID-19", currentWeek: 43, previousWeek: 51, trend: "down" },
//   ];

//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case "High": return "destructive";
//       case "Medium": return "warning";
//       case "Low": return "success";
//       default: return "secondary";
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active": return "destructive";
//       case "Under Investigation": return "warning";
//       case "Resolved": return "success";
//       default: return "secondary";
//     }
//   };

//   const getTrendIcon = (trend) => {
//     switch (trend) {
//       case "up": return "↗️";
//       case "down": return "↘️";
//       default: return "➡️";
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-primary">Disease Surveillance</h1>
//         <p className="text-muted-foreground">Early warning system for disease outbreak detection</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Google Maps Integration */}
//         <Card className="lg:col-span-2">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <MapPin className="w-5 h-5 text-primary" />
//               Geospatial Analysis Tool
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div 
//               ref={mapRef} 
//               className="h-96 rounded-lg border"
//               style={{ minHeight: '400px' }}
//             />
//             <div className="flex gap-2 mt-4">
//               <Button 
//                 variant={selectedLayers.diseaseCases ? "default" : "outline"} 
//                 size="sm"
//                 onClick={() => toggleLayer('diseaseCases')}
//               >
//                 Layer: Disease Cases
//               </Button>
//               <Button 
//                 variant={selectedLayers.clinics ? "default" : "outline"} 
//                 size="sm"
//                 onClick={() => toggleLayer('clinics')}
//               >
//                 Layer: Clinics
//               </Button>
//               <Button 
//                 variant={selectedLayers.waterSources ? "default" : "outline"} 
//                 size="sm"
//                 onClick={() => toggleLayer('waterSources')}
//               >
//                 Layer: Water Sources
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* State-wide Hotspot Map */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-lg">State Hotspot Status</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {[
//                 { district: "Thiruvananthapuram", status: "Low", color: "success" },
//                 { district: "Ernakulam", status: "High", color: "destructive" },
//                 { district: "Thrissur", status: "Medium", color: "warning" },
//                 { district: "Kozhikode", status: "Low", color: "success" },
//                 { district: "Kottayam", status: "Medium", color: "warning" },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
//                   <span className="text-sm font-medium">{item.district}</span>
//                   <Badge variant={item.color}>{item.status}</Badge>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Alert Investigation Panel */}
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <CardTitle className="flex items-center gap-2">
//               <AlertTriangle className="w-5 h-5 text-warning" />
//               Alert Investigation Panel
//             </CardTitle>
//             <div className="flex gap-2">
//               <Input placeholder="Search alerts..." className="w-64" />
//               <Button variant="outline" size="sm">
//                 <Search className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="data-table">
//             <table className="w-full">
//               <thead>
//                 <tr>
//                   <th>Alert ID</th>
//                   <th>Syndrome</th>
//                   <th>Location</th>
//                   <th>Cases</th>
//                   <th>Severity</th>
//                   <th>Status</th>
//                   <th>AI Confidence</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {alerts.map((alert) => (
//                   <tr key={alert.id}>
//                     <td className="font-mono text-sm">{alert.id}</td>
//                     <td className="font-medium">{alert.syndrome}</td>
//                     <td>{alert.location}</td>
//                     <td>{alert.cases}</td>
//                     <td>
//                       <Badge variant={getSeverityColor(alert.severity)}>
//                         {alert.severity}
//                       </Badge>
//                     </td>
//                     <td>
//                       <Badge variant={getStatusColor(alert.status)}>
//                         {alert.status}
//                       </Badge>
//                     </td>
//                     <td>{(alert.aiConfidence * 100).toFixed(0)}%</td>
//                     <td>
//                       <Button variant="ghost" size="sm">
//                         <Eye className="w-4 h-4" />
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Disease Trend Analysis */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <TrendingUp className="w-5 h-5 text-secondary" />
//             Disease Trend Analysis
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {trendData.map((disease, index) => (
//               <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-2">
//                   <h4 className="font-medium text-sm">{disease.disease}</h4>
//                   <span className="text-lg">{getTrendIcon(disease.trend)}</span>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="flex justify-between text-sm">
//                     <span>Current Week:</span>
//                     <span className="font-medium">{disease.currentWeek}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-muted-foreground">
//                     <span>Previous Week:</span>
//                     <span>{disease.previousWeek}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Surveillance;


import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MapPin, Search, TrendingUp, AlertTriangle, Eye, MoreHorizontal, FileText, Users, Phone, MapIcon, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

// Type definitions
declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }
}

// Use only the actual Badge variants that exist in your component
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const Surveillance = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [selectedLayers, setSelectedLayers] = useState({
    diseaseCases: true,
    clinics: false,
    waterSources: false
  });
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

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

  // Check if Google Maps is loaded
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setIsGoogleMapsLoaded(true);
      } else {
        // If not loaded, check again after a short delay
        setTimeout(checkGoogleMaps, 100);
      }
    };

    checkGoogleMaps();

    // Also set up a timeout to prevent infinite checking
    const timeoutId = setTimeout(() => {
      if (!window.google) {
        console.error('Google Maps failed to load within expected time');
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Initialize Google Map when API is loaded
  useEffect(() => {
    if (!isGoogleMapsLoaded || !mapRef.current) return;

    const initMap = () => {
      try {
        const mapInstance = new window.google.maps.Map(mapRef.current!, {
          center: { lat: 10.8505, lng: 76.2711 }, // Center of Kerala
          zoom: 7,
          styles: [
            {
              featureType: "administrative.province",
              elementType: "geometry.stroke",
              stylers: [{ color: "#4285f4" }, { weight: 2 }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true
        });

        setMap(mapInstance);
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
      }
    };

    initMap();
  }, [isGoogleMapsLoaded]);

  // Add markers based on selected layers
  useEffect(() => {
    if (!map || !isGoogleMapsLoaded) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    const newMarkers: google.maps.Marker[] = [];
    
    if (selectedLayers.diseaseCases) {
      diseaseData.forEach(point => {
        const marker = new window.google.maps.Marker({
          position: { lat: point.lat, lng: point.lng },
          map: map,
          title: point.title,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" fill="${point.severity === 'High' ? '#ef4444' : '#f59e0b'}" stroke="white" stroke-width="2"/>
                <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${point.cases}</text>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(24, 24)
          }
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${point.title}</h3>
              <p style="margin: 4px 0; font-size: 12px;">Cases: ${point.cases}</p>
              <p style="margin: 4px 0; font-size: 12px;">Severity: ${point.severity}</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        newMarkers.push(marker);
      });
    }

    if (selectedLayers.clinics) {
      clinicsData.forEach(clinic => {
        const marker = new window.google.maps.Marker({
          position: { lat: clinic.lat, lng: clinic.lng },
          map: map,
          title: clinic.title,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" fill="#10b981" stroke="white" stroke-width="2"/>
                <path d="M12 6v12M6 12h12" stroke="white" stroke-width="2"/>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(24, 24)
          }
        });
        
        newMarkers.push(marker);
      });
    }

    if (selectedLayers.waterSources) {
      waterSourcesData.forEach(source => {
        const marker = new window.google.maps.Marker({
          position: { lat: source.lat, lng: source.lng },
          map: map,
          title: source.title,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" fill="#3b82f6" stroke="white" stroke-width="2"/>
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="white"/>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(24, 24)
          }
        });
        
        newMarkers.push(marker);
      });
    }

    setMarkers(newMarkers);
  }, [map, selectedLayers, isGoogleMapsLoaded]);

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
        {/* Google Maps Integration */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Geospatial Analysis Tool
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isGoogleMapsLoaded ? (
              <div className="h-96 rounded-lg border flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading Google Maps...</p>
                </div>
              </div>
            ) : (
              <>
                <div 
                  ref={mapRef} 
                  className="h-96 rounded-lg border"
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
              </>
            )}
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