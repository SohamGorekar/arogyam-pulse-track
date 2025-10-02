import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Activity, AlertTriangle, Shield } from "lucide-react";
import { DashboardAIChat } from "@/components/DashboardAIChat";

const Dashboard = () => {
  // Mock data for demonstration
  const kpiData = [
    {
      title: "Total Registrations",
      value: "24,573",
      change: "+12.5%",
      icon: Users,
      variant: "primary" as const,
    },
    {
      title: "Health Encounters (24h)",
      value: "847",
      change: "+8.2%",
      icon: Activity,
      variant: "success" as const,
    },
    {
      title: "Active Hotspot Alerts",
      value: "3",
      change: "-2",
      icon: AlertTriangle,
      variant: "warning" as const,
    },
    {
      title: "Vaccination Coverage",
      value: "78.5%",
      change: "+3.1%",
      icon: Shield,
      variant: "success" as const,
    },
  ];

  const recentAlerts = [
    {
      id: 1,
      message: "Spike in 'fever & rash' cases detected in Ernakulam construction sector",
      time: "15 min ago",
      severity: "critical" as const,
    },
    {
      id: 2,
      message: "Increased respiratory symptoms reported in Thrissur agricultural zone",
      time: "32 min ago", 
      severity: "warning" as const,
    },
    {
      id: 3,
      message: "Routine surveillance update: Normal patterns in Thiruvananthapuram",
      time: "1 hour ago",
      severity: "info" as const,
    },
    {
      id: 4,
      message: "New clinic registration: Primary Health Center, Kottayam",
      time: "2 hours ago",
      severity: "info" as const,
    },
  ];

  const topSyndromes = [
    { name: "Fever & Headache", cases: 234, percentage: 28.5 },
    { name: "Respiratory Issues", cases: 189, percentage: 23.1 },
    { name: "Gastrointestinal", cases: 156, percentage: 19.0 },
    { name: "Skin Conditions", cases: 98, percentage: 12.0 },
    { name: "Musculoskeletal", cases: 76, percentage: 9.3 },
  ];

  const getKpiCardClass = (variant: string) => {
    switch (variant) {
      case "primary": return "kpi-card-primary";
      case "success": return "kpi-card-success";
      case "warning": return "kpi-card-warning";
      case "critical": return "kpi-card-critical";
      default: return "kpi-card";
    }
  };

  const getAlertClass = (severity: string) => {
    switch (severity) {
      case "critical": return "alert-critical";
      case "warning": return "alert-warning";
      default: return "alert-info";
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Assistant */}
      <DashboardAIChat />
      
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Mission Control Dashboard</h1>
        <p className="text-muted-foreground">Real-time health surveillance across Kerala</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className={`${getKpiCardClass(kpi.variant)} transition-all hover:scale-105`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <kpi.icon className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-foreground">{kpi.value}</span>
                <Badge 
                  variant={kpi.change.startsWith('+') ? "default" : "secondary"}
                  className="text-xs"
                >
                  {kpi.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Alerts Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Live Syndromic Alerts Feed
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="alert-feed">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className={`alert-item ${getAlertClass(alert.severity)}`}>
                  <div className="font-medium text-sm mb-1">{alert.message}</div>
                  <div className="text-xs text-muted-foreground">{alert.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Syndromes Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-secondary" />
              Top 5 Reported Syndromes (Last 7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSyndromes.map((syndrome, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{syndrome.name}</span>
                      <span className="text-sm text-muted-foreground">{syndrome.cases} cases</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-secondary to-secondary-light" 
                        style={{ width: `${syndrome.percentage}%` }}
                      />
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-3">
                    {syndrome.percentage}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;