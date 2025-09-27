import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const ProviderAnalytics = () => {
  // KPI Data
  const kpiData = [
    {
      title: "Total Registered Doctors",
      value: "4,210",
      description: "Active healthcare providers"
    },
    {
      title: "Total Registered Hospitals/Clinics",
      value: "1,850",
      description: "Healthcare facilities"
    },
    {
      title: "Overall Doctor Adoption Rate",
      value: "65%",
      description: "Using digital platform"
    },
    {
      title: "Daily Active Providers",
      value: "1,520",
      description: "Last 24 hours"
    }
  ];

  // Chart Data
  const doctorAdoptionData = [
    { name: "Government Doctors", value: 70, count: 2947 },
    { name: "Private Doctors", value: 30, count: 1263 }
  ];

  const patientEncountersData = [
    { name: "Govt. Facilities", value: 85, count: 12750 },
    { name: "Private Facilities", value: 15, count: 2250 }
  ];

  // Table Data
  const providerEngagementData = [
    {
      providerType: "Government Doctor",
      totalRegistered: "2,947",
      dailyActive: "1,180",
      avgPatientLoad: "12.5"
    },
    {
      providerType: "Private Doctor", 
      totalRegistered: "1,263",
      dailyActive: "340",
      avgPatientLoad: "8.2"
    },
    {
      providerType: "Government Hospital",
      totalRegistered: "1,295",
      dailyActive: "892",
      avgPatientLoad: "85.6"
    },
    {
      providerType: "Private Clinic",
      totalRegistered: "555",
      dailyActive: "156",
      avgPatientLoad: "32.4"
    }
  ];

  const topFacilitiesData = [
    { rank: 1, facilityName: "General Hospital Ernakulam", encounters: "2,450", location: "Ernakulam" },
    { rank: 2, facilityName: "Medical College Thiruvananthapuram", encounters: "2,285", location: "Thiruvananthapuram" },
    { rank: 3, facilityName: "District Hospital Kozhikode", encounters: "1,892", location: "Kozhikode" },
    { rank: 4, facilityName: "Rajiv Gandhi Institute Thrissur", encounters: "1,745", location: "Thrissur" },
    { rank: 5, facilityName: "Government Hospital Kottayam", encounters: "1,620", location: "Kottayam" },
    { rank: 6, facilityName: "Aster Medcity Kochi", encounters: "1,485", location: "Ernakulam" },
    { rank: 7, facilityName: "District Hospital Palakkad", encounters: "1,340", location: "Palakkad" },
    { rank: 8, facilityName: "KMCT Medical College", encounters: "1,265", location: "Kozhikode" },
    { rank: 9, facilityName: "Apollo Hospitals Bangalore", encounters: "1,180", location: "Karnataka" },
    { rank: 10, facilityName: "Government Hospital Kannur", encounters: "1,095", location: "Kannur" }
  ];

  const chartConfig = {
    government: {
      label: "Government",
      color: "hsl(var(--chart-1))"
    },
    private: {
      label: "Private", 
      color: "hsl(var(--chart-2))"
    }
  };

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Provider Analytics & Adoption</h1>
        <p className="text-muted-foreground mt-2">
          Healthcare provider engagement and facility utilization metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader className="pb-2">
              <CardDescription className="text-sm">{kpi.title}</CardDescription>
              <CardTitle className="text-3xl font-bold text-primary">{kpi.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Provider Type Breakdown Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Doctor Adoption (Public vs. Private)</CardTitle>
            <CardDescription>Distribution of registered doctors by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={doctorAdoptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {doctorAdoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Patient Encounters (Public vs. Private)</CardTitle>
            <CardDescription>Distribution of patient visits by facility type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={patientEncountersData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {patientEncountersData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Provider Engagement Metrics</CardTitle>
            <CardDescription>Activity and performance by provider type</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Provider Type</TableHead>
                  <TableHead>Total Registered</TableHead>
                  <TableHead>Daily Active</TableHead>
                  <TableHead>Avg Patient Load</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {providerEngagementData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.providerType}</TableCell>
                    <TableCell>{row.totalRegistered}</TableCell>
                    <TableCell>{row.dailyActive}</TableCell>
                    <TableCell>{row.avgPatientLoad}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Top Performing Facilities</CardTitle>
            <CardDescription>Most active hospitals/clinics (last 30 days)</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Facility Name</TableHead>
                  <TableHead>Encounters</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topFacilitiesData.map((row) => (
                  <TableRow key={row.rank}>
                    <TableCell className="font-medium">#{row.rank}</TableCell>
                    <TableCell>{row.facilityName}</TableCell>
                    <TableCell>{row.encounters}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProviderAnalytics;