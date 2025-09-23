import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Building2, MapPin } from "lucide-react";

const Analytics = () => {
  // Mock demographic data
  const demographicData = [
    { state: "West Bengal", population: 8750, percentage: 35.6 },
    { state: "Odisha", population: 5200, percentage: 21.2 },
    { state: "Bihar", population: 4100, percentage: 16.7 },
    { state: "Uttar Pradesh", population: 3800, percentage: 15.5 },
    { state: "Assam", population: 2723, percentage: 11.1 },
  ];

  const industryData = [
    { industry: "Construction", workers: 12450, percentage: 50.7 },
    { industry: "Agriculture", workers: 6200, percentage: 25.2 },
    { industry: "Manufacturing", workers: 3900, percentage: 15.9 },
    { industry: "Services", workers: 1500, percentage: 6.1 },
    { industry: "Others", workers: 523, percentage: 2.1 },
  ];

  const healthcareUtilization = [
    { facility: "Public Primary Health Centers", visits: 18750, avgWaitTime: "45 min" },
    { facility: "Government Hospitals", visits: 8900, avgWaitTime: "2.5 hrs" },
    { facility: "Private Clinics", visits: 12400, avgWaitTime: "25 min" },
    { facility: "Community Health Workers", visits: 5600, avgWaitTime: "15 min" },
  ];

  const schemeUtilization = [
    { scheme: "Kerala Arogya Shree Portal (KASP)", enrolled: 15200, eligible: 24573, coverage: 61.8 },
    { scheme: "Rashtriya Swasthya Bima Yojana", enrolled: 9800, eligible: 24573, coverage: 39.9 },
    { scheme: "Pradhan Mantri Jan Arogya Yojana", enrolled: 12100, eligible: 24573, coverage: 49.2 },
    { scheme: "State Health Insurance", enrolled: 7650, eligible: 24573, coverage: 31.1 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Health Analytics & Insights</h1>
        <p className="text-muted-foreground">Strategic data for policy planning and resource allocation</p>
      </div>

      {/* Demographic Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Population by Home State
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demographicData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{item.state}</span>
                      <span className="text-sm text-muted-foreground">{item.population.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-primary-light" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-3">
                    {item.percentage}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-secondary" />
              Industry Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {industryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{item.industry}</span>
                      <span className="text-sm text-muted-foreground">{item.workers.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-secondary to-secondary-light" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-3">
                    {item.percentage}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Healthcare Utilization Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-success" />
            Healthcare Facility Utilization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="data-table">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Facility Type</th>
                  <th>Monthly Visits</th>
                  <th>Average Wait Time</th>
                  <th>Utilization Rate</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {healthcareUtilization.map((facility, index) => {
                  const utilizationRate = (facility.visits / 50000 * 100).toFixed(1);
                  const status = parseFloat(utilizationRate) > 80 ? "High Load" : parseFloat(utilizationRate) > 50 ? "Moderate" : "Available";
                  const statusColor = parseFloat(utilizationRate) > 80 ? "destructive" : parseFloat(utilizationRate) > 50 ? "warning" : "success";
                  
                  return (
                    <tr key={index}>
                      <td className="font-medium">{facility.facility}</td>
                      <td>{facility.visits.toLocaleString()}</td>
                      <td>{facility.avgWaitTime}</td>
                      <td>{utilizationRate}%</td>
                      <td>
                        <Badge variant={statusColor as any}>
                          {status}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Health Scheme Utilization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Government Health Scheme Utilization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemeUtilization.map((scheme, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium text-sm mb-3">{scheme.scheme}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Enrolled:</span>
                    <span className="font-medium">{scheme.enrolled.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Eligible:</span>
                    <span className="text-muted-foreground">{scheme.eligible.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-success to-success-light" 
                      style={{ width: `${scheme.coverage}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Coverage</span>
                    <Badge variant="outline">{scheme.coverage}%</Badge>
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

export default Analytics;