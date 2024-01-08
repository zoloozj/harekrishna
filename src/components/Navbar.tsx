import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface PageProps {
  className?: string;
}

const Navbar: FunctionComponent<PageProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky bg-white inset-0 z-50 text-yellow-700 shadow-xl py-2",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex w-full justify-center items-center">
          <Image
            src="/icons/clouds-left-gray.svg"
            alt=""
            className=""
            width={300}
            height={300}
          />
          <Image
            src="/icons/cloud-left-gray.svg"
            alt=""
            className="-mt-8 -ml-8"
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
            <Image src="/icons/icon.svg" alt="logo" width={250} height={150} />
            <p className="font-semibold capitalize text-nowrap">
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
            className="-mt-10 -mr-8"
            width={120}
            height={300}
          />
          <Image
            src="/icons/clouds-right-gray.svg"
            alt=""
            className=""
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-evenly">
          <Link href="" className="text-nowrap">
            Бидний тухай
          </Link>
          <Link href="" className="text-nowrap">
            Хүмүүн соёл клуб
          </Link>
          <Link href="" className="text-nowrap">
            Тарнийн Бясалгал
          </Link>
          <Link href="" className="text-nowrap">
            Лецк
          </Link>
          <Link href="" className="text-nowrap">
            Дуу бичлэг
          </Link>
          <Link href="" className="text-nowrap">
            Сургамжит түүх
          </Link>
          <Link href="" className="text-nowrap">
            Сургамжит үлгэр
          </Link>
          <Link href="" className="text-nowrap">
            Дэлгүүр
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
