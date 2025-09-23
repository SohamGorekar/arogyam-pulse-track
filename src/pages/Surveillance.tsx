import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Search, TrendingUp, AlertTriangle, Eye } from "lucide-react";

const Surveillance = () => {
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "destructive";
      case "Under Investigation": return "warning";
      case "Resolved": return "success";
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
        {/* Interactive Map Placeholder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Geospatial Analysis Tool
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">Interactive Kerala Map</p>
                <p className="text-sm text-muted-foreground">Click districts to drill down • Overlay disease data</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">Layer: Disease Cases</Button>
              <Button variant="outline" size="sm">Layer: Clinics</Button>
              <Button variant="outline" size="sm">Layer: Water Sources</Button>
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
                { district: "Thiruvananthapuram", status: "Low", color: "success" },
                { district: "Ernakulam", status: "High", color: "destructive" },
                { district: "Thrissur", status: "Medium", color: "warning" },
                { district: "Kozhikode", status: "Low", color: "success" },
                { district: "Kottayam", status: "Medium", color: "warning" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
                  <span className="text-sm font-medium">{item.district}</span>
                  <Badge variant={item.color as any}>{item.status}</Badge>
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
              <AlertTriangle className="w-5 h-5 text-warning" />
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
          <div className="data-table">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Alert ID</th>
                  <th>Syndrome</th>
                  <th>Location</th>
                  <th>Cases</th>
                  <th>Severity</th>
                  <th>Status</th>
                  <th>AI Confidence</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert) => (
                  <tr key={alert.id}>
                    <td className="font-mono text-sm">{alert.id}</td>
                    <td className="font-medium">{alert.syndrome}</td>
                    <td>{alert.location}</td>
                    <td>{alert.cases}</td>
                    <td>
                      <Badge variant={getSeverityColor(alert.severity) as any}>
                        {alert.severity}
                      </Badge>
                    </td>
                    <td>
                      <Badge variant={getStatusColor(alert.status) as any}>
                        {alert.status}
                      </Badge>
                    </td>
                    <td>{(alert.aiConfidence * 100).toFixed(0)}%</td>
                    <td>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
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