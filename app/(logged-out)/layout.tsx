import LightDarkToggle from "@/components/LightDarkToggle";

type Props = {
  children?: React.ReactNode;
};

function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2" />
    </>
  );
}

export default LoggedOutLayout;
