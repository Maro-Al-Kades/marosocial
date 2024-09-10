import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { GoCheckCircleFill } from "react-icons/go";
import { SlClose } from "react-icons/sl";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import FriendRequestList from "./FriendRequestList";

const FriendRequest = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },

    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return null;
  return (
    <div className="head flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-semibold">
        <span className="text-gray-600">Friend Requests</span>
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

      {/* USER */}
      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequest;
