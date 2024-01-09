import React, { FunctionComponent, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { sidebarMenu } from "@/constants/common.constants";

interface PageProps {
  children: ReactNode;
}

const MainContentWithSidebar: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <main className="text-center w-full">
      <div className="flex gap-4 m-4">
        <div className="flex-grow h-[calc(100vh-220px)] bg-white z-50 shadow-xl border">
          {children}
        </div>
        <Sidebar items={sidebarMenu} />
      </div>
    </main>
  );
};

export default MainContentWithSidebar;
