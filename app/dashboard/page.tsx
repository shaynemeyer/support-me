import EmployeeStats from "@/components/employees/EmployeeStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Team stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeeStats />
      </TabsContent>
      <TabsContent value="teams">teams stats view</TabsContent>
    </Tabs>
  );
}
export default DashboardPage;
