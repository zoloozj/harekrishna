import { navbarMenu } from "@/constants/common.constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import MobileNavbar from "@/components/MobileNavbar";

interface PageProps {
  className?: string;
}

const Navbar: FunctionComponent<PageProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky bg-gradient-to-b from-orange-300 via-orange-100 to-white w-full inset-0 z-50 text-yellow-700 shadow-xl py-2",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-center items-center">
          <Image
            src="/icons/clouds-left-gray.svg"
            alt=""
            className="object-contain h-[120px] w-auto"
            width={300}
            height={300}
            priority
          />
          <Image
            src="/icons/cloud-left-gray.svg"
            alt=""
            className="-mt-8 -ml-8 content"
            width={120}
            height={300}
          />
          <Image src="/icons/clouds-left.svg" alt="" width={150} height={200} />
          <Image
            src="/icons/cloud-right.svg"
            alt=""
            className="-mt-10 -ml-8"
            width={80}
            height={200}
          />
          <div className="flex flex-col items-center mx-8 justify-center">
            <Image
              src="/icons/icon.svg"
              priority
              alt="logo"
              width={250}
              height={150}
            />
            <p className="font-semibold capitalize text-sm lg:text-md text-nowrap">
              Дээд эрдэм ухаан судлахуйн төв
            </p>
          </div>
          <Image
            src="/icons/cloud-left.svg"
            alt=""
            className="-mt-10 -mr-8"
            width={80}
            height={200}
          />
          <Image
            src="/icons/clouds-right.svg"
            alt=""
            width={150}
            height={200}
          />
          <Image
            src="/icons/cloud-right-gray.svg"
            alt=""
            className="-mt-10 -mr-8 w-auto h-[55px]"
            width={120}
            height={300}
          />
          <Image
            src="/icons/clouds-right-gray.svg"
            alt=""
            className="object-contain w-auto h-[120px]"
            width={300}
            height={300}
          />
        </div>
        {/* Desktop Navbar */}
        <div className="lg:flex hidden justify-evenly">
          {navbarMenu.map((item, index) => (
            <Link
              className="text-nowrap text-center font-semibold"
              key={index}
              href={item.to}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-starts items-center ml-8">
          <MobileNavbar items={navbarMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
