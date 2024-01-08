import { cn } from "@/lib/utils";
import React, { FunctionComponent, ReactNode } from "react";

interface PageProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: FunctionComponent<PageProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto w-full px-2.5 md:px-10", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
