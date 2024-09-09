"use client";

import { HEADER_LINKS } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-8 h-1 bg-primary rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-8 h-1 bg-primary rounded-sm  ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-8 h-1 bg-primary rounded-sm  ${
            isOpen ? "-rotate-45" : ""
          } ease-in-out duration-500`}
        />
      </div>

      {isOpen && (
        <div
          className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center
        gap-8 font-medium text-xl z-10"
        >
          {HEADER_LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
