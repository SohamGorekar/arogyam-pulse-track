import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Plus, Users, Eye, Edit, Trash2, UserCheck } from "lucide-react";

const Reports = () => {
  // Mock user data
  const users = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "State Health Secretary", 
      district: "All Districts",
      lastLogin: "2024-01-20 10:30",
      status: "Active"
    },
    {
      id: 2,
      name: "Dr. Priya Menon",
      role: "District Health Officer",
      district: "Ernakulam", 
      lastLogin: "2024-01-20 09:15",
      status: "Active"
    },
    {
      id: 3,
      name: "Mr. Suresh Nair",
      role: "Surveillance Officer",
      district: "Thrissur",
      lastLogin: "2024-01-19 16:45", 
      status: "Active"
    },
    {
      id: 4,
      name: "Dr. Latha Abraham",
      role: "Public Health Analyst", 
      district: "Thiruvananthapuram",
      lastLogin: "2024-01-18 14:20",
      status: "Inactive"
    }
  ];

  // Mock audit log data
  const auditLogs = [
    {
      id: 1,
      user: "Dr. Rajesh Kumar",
      action: "Generated Disease Surveillance Report",
      timestamp: "2024-01-20 10:45",
      details: "State-wide report for Q4 2023"
    },
    {
      id: 2, 
      user: "Dr. Priya Menon",
      action: "Accessed Alert Investigation Panel",
      timestamp: "2024-01-20 09:30",
      details: "Viewed alert ALT-2024-001"
    },
    {
      id: 3,
      user: "Mr. Suresh Nair", 
      action: "Updated Global Filters",
      timestamp: "2024-01-20 08:15",
      details: "Changed district filter to Thrissur"
    },
    {
      id: 4,
      user: "System",
      action: "Automated Data Backup",
      timestamp: "2024-01-20 02:00", 
      details: "Daily backup completed successfully"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "success" : "secondary";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Reports & Administration</h1>
        <p className="text-muted-foreground">Generate custom reports and manage system access</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Custom Report Generator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Custom Report Generator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Report Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="surveillance">Disease Surveillance Summary</SelectItem>
                    <SelectItem value="demographics">Demographic Analysis</SelectItem>
                    <SelectItem value="utilization">Healthcare Utilization</SelectItem>
                    <SelectItem value="schemes">Scheme Performance</SelectItem>
                    <SelectItem value="alerts">Alert Activity Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Time Period</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-week">Last Week</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="last-quarter">Last Quarter</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Geographic Scope</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scope" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="state-wide">State-wide</SelectItem>
                    <SelectItem value="ernakulam">Ernakulam District</SelectItem>
                    <SelectItem value="thrissur">Thrissur District</SelectItem>
                    <SelectItem value="thiruvananthapuram">Thiruvananthapuram District</SelectItem>
                    <SelectItem value="kozhikode">Kozhikode District</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Format</label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Excel
                  </Button>
                </div>
              </div>
            </div>

            <Button className="w-full">
              Generate Report
            </Button>
          </CardContent>
        </Card>

        {/* Quick Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Daily Surveillance Summary", desc: "Today's key metrics and alerts" },
                { name: "Weekly Health Trends", desc: "7-day disease pattern analysis" },
                { name: "Monthly District Comparison", desc: "Cross-district health indicators" },
                { name: "Quarterly Policy Brief", desc: "Executive summary for leadership" }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                  <div>
                    <div className="font-medium text-sm">{report.name}</div>
                    <div className="text-xs text-muted-foreground">{report.desc}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" />
              User Management Panel
            </CardTitle>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="data-table">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Access Scope</th>
                  <th>Last Login</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="font-medium">{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.district}</td>
                    <td className="text-sm">{user.lastLogin}</td>
                    <td>
                      <Badge variant={getStatusColor(user.status) as any}>
                        {user.status}
                      </Badge>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Audit Log Viewer */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-warning" />
              System Audit Log
            </CardTitle>
            <Input placeholder="Search audit logs..." className="w-64" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditLogs.map((log) => (
              <div key={log.id} className="flex items-start justify-between p-3 border rounded-lg hover:bg-muted/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{log.user}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-sm">{log.action}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{log.details}</div>
                </div>
                <div className="text-xs text-muted-foreground">{log.timestamp}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;