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
    { name: "Private/Clinical Doctors", value: 68, count: 2863 },
    { name: "Government Doctors", value: 32, count: 1347 }
  ];

  const patientEncountersData = [
    { name: "Private Facilities", value: 62, count: 9300 },
    { name: "Govt. Facilities", value: 38, count: 5700 }
  ];

  // Table Data
  const providerEngagementData = [
    {
      providerType: "Private/Clinical Doctor",
      totalRegistered: "2,863",
      dailyActive: "1,845",
      avgPatientLoad: "15.2"
    },
    {
      providerType: "Government Doctor", 
      totalRegistered: "1,347",
      dailyActive: "485",
      avgPatientLoad: "9.8"
    },
    {
      providerType: "Private Clinic/Hospital",
      totalRegistered: "1,125",
      dailyActive: "892",
      avgPatientLoad: "42.8"
    },
    {
      providerType: "Government Hospital",
      totalRegistered: "725",
      dailyActive: "456",
      avgPatientLoad: "28.6"
    }
  ];

  const topFacilitiesData = [
    { rank: 1, facilityName: "Aster Medcity Kochi", encounters: "3,450", location: "Ernakulam" },
    { rank: 2, facilityName: "Apollo Hospitals Kerala", encounters: "3,285", location: "Kochi" },
    { rank: 3, facilityName: "KIMS Hospital Trivandrum", encounters: "2,892", location: "Thiruvananthapuram" },
    { rank: 4, facilityName: "Rajagiri Hospital Aluva", encounters: "2,745", location: "Ernakulam" },
    { rank: 5, facilityName: "General Hospital Ernakulam", encounters: "2,620", location: "Ernakulam" },
    { rank: 6, facilityName: "Medical Trust Hospital", encounters: "2,485", location: "Kochi" },
    { rank: 7, facilityName: "Medical College Thiruvananthapuram", encounters: "2,340", location: "Thiruvananthapuram" },
    { rank: 8, facilityName: "Sunrise Hospital Kakkanad", encounters: "2,265", location: "Ernakulam" },
    { rank: 9, facilityName: "District Hospital Kozhikode", encounters: "2,180", location: "Kozhikode" },
    { rank: 10, facilityName: "Lakeshore Hospital Kochi", encounters: "2,095", location: "Ernakulam" }
  ];

  const chartConfig = {
    private: {
      label: "Private",
      color: "hsl(var(--chart-1))"
    },
    government: {
      label: "Government", 
      color: "hsl(var(--chart-2))"
    }
  };

  const COLORS = ["#8b5cf6", "#3b82f6"];

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
            <CardTitle>Doctor Adoption (Private vs. Public)</CardTitle>
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
            <CardTitle>Patient Encounters (Private vs. Public)</CardTitle>
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