import { TSidebar } from "@/types/common.types";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface PageProps {
  items: TSidebar;
}

const Sidebar: FunctionComponent<PageProps> = ({ items }) => {
  return (
    <div className="hidden sticky right-0 lg:block z-50">
      <div className="flex w-60 flex-col items-start justify-between">
        <div className="bg-sky-300/30 font-semibold text-sm p-8 text-nowrap uppercase text-center">
          {items.title}
        </div>
        {items.menu.map((item, index) => (
          <Link className="w-full font-semibold" key={index} href={item.to}>
            <div className="border-b-4 border-gray-300 w-full text-start py-4 px-2 hover:bg-sky-300/30">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
