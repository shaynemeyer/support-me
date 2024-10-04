import MainMenu from "@/components/menu/MainMenu";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Shayne!</h1>
        {children}
      </div>
    </div>
  );
}
export default DashboardLayout;
