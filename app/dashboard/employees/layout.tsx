import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function EmployeesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
}
export default EmployeesLayout;
