import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { MdOutlineCelebration } from "react-icons/md";
import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="head flex flex-col gap-4">
      <div className="flex justify-between items-center font-semibold">
        <span className="text-gray-600">Birthdays</span>
      </div>

      {/* USER */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/1860368/pexels-photo-1860368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="@avatar"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>

          <span className="font-semibold">Asmaa Galal</span>
        </div>

        <div className="gap-0 flex justify-end">
          <Button
            size="sm"
            variant="default"
            className="flex gap-1 items-center"
          >
            Celebrate <MdOutlineCelebration size={18} />
          </Button>
        </div>
      </div>

      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="gift" width={24} height={24} />

        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-primary font-semibold">Upcoming Birthdays</span>
          <span className="text-gray-600">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
