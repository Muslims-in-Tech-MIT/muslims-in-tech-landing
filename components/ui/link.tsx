import React from "react";
import Link from "next/link";

// types
import { HOCPropType } from "@/types/ui";

// utils
import { mergeClasses } from "@/utils";

const LinkBase = ({ children, href, className, ...props }: HOCPropType) => {
  return (
    <Link
        {...props}
        href={href}
        className={mergeClasses("py-0 px-4 text-black no-underline", className)}
      >
      {children}
    </Link>
  );
};

export default LinkBase;
