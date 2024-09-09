"use client";

import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2, LogIn, Search } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { CiBellOn, CiHome } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BsClockHistory } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { PiChatCircleDotsThin } from "react-icons/pi";

const Header = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className=" md:hidden lg:block w-[20%]">
        <Link href="/" className="font-[700] text-2xl text-primary">
          <Image src="/logo.svg" alt="maro-social" width={140} height={90} />
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-md font-semibold items-center justify-between">
        {/* Links */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-primary transition-all duration-200"
          >
            <CiHome size={20} className="text-primary" />
            <span>Home</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 hover:text-primary transition-all duration-200"
          >
            <GoPeople size={20} className="text-primary" />
            <span>Friends</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 hover:text-primary transition-all duration-200"
          >
            <BsClockHistory size={20} className="text-primary" />
            <span>Stories</span>
          </Link>
        </div>

        <div className="relative hidden md:flex rounded-xl items-center justify-between">
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2"
          />
          <Search className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end ">
        <ClerkLoading>
          <Loader2 className="text-primary mr-2 h-4 w-4 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="gap-4 flex">
              <Button size="icon" variant="outline">
                <IoIosPeople size={20} className="text-primary" />
              </Button>

              <Button size="icon" variant="outline">
                <PiChatCircleDotsThin size={20} className="text-primary" />
              </Button>

              <Button size="icon" variant="outline">
                <CiBellOn size={20} className="text-primary" />
              </Button>

              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in" className={`${buttonVariants()} text-sm`}>
              <LogIn className="mr-2 h-4 w-4" /> Login / Register
            </Link>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
