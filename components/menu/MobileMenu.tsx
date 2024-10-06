import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/custom-drawer";
import MenuTitle from "./MenuTitle";
import MainMenu from "./MainMenu";
import { useState } from "react";

function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
      <MenuTitle />
      <Drawer
        direction="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenChange={(open) => setMobileMenuOpen(open)}
      >
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <MainMenu />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default MobileMenu;
