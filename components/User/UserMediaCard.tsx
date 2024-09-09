import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { User } from "@prisma/client";

const UserMediaCard = ({ user }: { user: User }) => {
  return (
    <div className="head flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-semibold">
        <span className="text-gray-600">User Media</span>
        <Link
          href="/friends"
          className={`${buttonVariants({
            size: "sm",
            variant: "ghost",
          })} text-xs text-primary hover:text-primary`}
        >
          See all
        </Link>
      </div>

      {/* BTM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/27674151/pexels-photo-27674151/free-photo-of-a-man-speaking-into-a-microphone-at-a-podium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/53214/trekking-hiking-group-alpine-53214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>

        <div className="relative w-1/5  h-28">
          <Image
            src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="img"
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
