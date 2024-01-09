"use client";
import { TNavbarMenu } from "@/types/common.types";
import Link from "next/link";
import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageProps {
  items: TNavbarMenu[];
}

const MobileNavbar: FunctionComponent<PageProps> = ({ items }) => {
  const [show, setShow] = useState<boolean>(false);
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current) {
        setShow(false);
      }
    },
    [overlay]
  );

  return (
    <div>
      {!show && (
        <RxHamburgerMenu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShow(true)}
        />
      )}

      {
        <div
          className={cn(
            "fixed h-full w-screen z-30 lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            show && "translate-x-0"
          )}
          ref={overlay}
          onClick={handleClick}
        >
          <div
            className={cn(
              "bg-white fixed left-0 top-0 w-2/3 sm:w-1/2 md:w-1/3 z-40 h-full px-4"
            )}
            ref={wrapper}
          >
            <div className="flex justify-between w-full items-center">
              <Link href="/">
                <Image
                  src="/icons/icon.svg"
                  alt="icon logo"
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px]"
                />
              </Link>
              <MdClose
                className="w-6 h-6 cursor-pointer transition-all hover:rotate-90"
                onClick={() => setShow(false)}
              />
            </div>
            <div className="flex flex-col gap-3 py-2 relative">
              {items.map((item, index) => (
                <Link key={index} href={item.to}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MobileNavbar;
