import React, { useEffect } from "react";
import { Sidebar } from "../components/layouts/sidebar";
import { cn } from "../utils/cn";
import { Header } from "../components/layouts/header";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useClickOutside } from "../contexts/use-click-outside";
const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed, setCollapsed] = React.useState(true);
  const sidebarRef = React.useRef(null);
  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);
  useClickOutside([sidebarRef], () => {
    if (!isDesktopDevice) {
      setCollapsed(true);
    }
  });
  return (
    <div className="min-h-screen bg-slate-950 not-odd:transition-colors">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
          !collapsed &&
            "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30"
        )}
      />
      <Sidebar ref={sidebarRef} collapsed={collapsed} />
      <div
        className={cn(
          "transition-[margin] duration-300",
          collapsed ? "md:ml-[70px]" : "md:ml-[240px]"
        )}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
