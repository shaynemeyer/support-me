import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Team stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">employees stats view</TabsContent>
      <TabsContent value="teams">teams stats view</TabsContent>
    </Tabs>
  );
}
export default DashboardPage;
