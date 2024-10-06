"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { DrawerContext } from "../ui/custom-drawer";

type Props = {
  children: React.ReactNode;
  href: string;
};

function MenuItem({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { onClose } = useContext(DrawerContext);

  return (
    <Link
      href={href}
      className={cn(
        "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
        isActive &&
          "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
      )}
      onClick={onClose}
    >
      {children}
    </Link>
  );
}

export default MenuItem;
