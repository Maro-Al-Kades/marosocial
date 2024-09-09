import React from "react";
import ProfileCard from "../Home/ProfileCard";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { BsCalendarEvent, BsPostcard, BsShop } from "react-icons/bs";
import { PiCalendarCheckThin, PiImages, PiMountainsLight, PiMountainsThin } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { GiFountainPen } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import Ads from "./Ads";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}

      <div className="head text-gray-500 flex flex-col gap-4">
        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <BsPostcard size={20} className="text-primary" /> My Posts
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <PiMountainsLight size={20} className="text-primary" /> Activities
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <BsShop size={20} className="text-primary" /> MarketPlace
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <BsCalendarEvent size={20} className="text-primary" /> Events
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <PiImages size={20} className="text-primary" /> Albums
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <BiSolidVideos size={20} className="text-primary" /> Videos
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <GiFountainPen size={20} className="text-primary" /> Courses
        </Link>

        <Link
          href="/"
          className={`flex gap-2 start ${buttonVariants({
            variant: "ghost",
            className: "justify-start",
          })}`}
        >
          <IoMdSettings size={20} className="text-primary" /> Settings
        </Link>
      </div>

      <Ads size="sm" />
    </div>
  );
};

export default LeftMenu;
