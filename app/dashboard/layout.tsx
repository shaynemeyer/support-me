"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import MainMenu from "@/components/menu/MainMenu";
import MobileMenu from "@/components/menu/MobileMenu";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && <MobileMenu />}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Shayne!</h1>
        {children}
      </div>
    </div>
  );
}
export default DashboardLayout;
