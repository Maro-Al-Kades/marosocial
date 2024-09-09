import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { GiGraduateCap } from "react-icons/gi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoPersonAdd, IoPersonAddOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);
  const formatedDate = createdAtDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();
  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);

    const followReq = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReq ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <div className="head flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-semibold">
        <span className="text-gray-600">User Information</span>
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
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-primary font-semibold">
            {" "}
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>

        {user.description && <p>{user.description}</p>}

        {user.city && (
          <div className="flex items-center gap-2">
            <FaLocationDot size={22} className="text-primary" />
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}

        {user.school && (
          <div className="flex items-center gap-2">
            <GiGraduateCap size={22} className="text-primary" />
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}

        {user.work && (
          <div className="flex items-center gap-2">
            <PiBagSimpleFill size={22} className="text-primary" />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex gap-1 items-center">
              <IoIosLink size={22} className="text-primary" />
              <Link href={user.website} className="font-bold text-gray-600">
                {user.website}
              </Link>
            </div>
          )}

          <div className="flex gap-1 items-center">
            <BsCalendar2DateFill />
            <span>Joined {formatedDate}</span>
          </div>
        </div>

        <UserInfoCardInteraction
          userId={user.id}
          currentUserId={currentUserId}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />
      </div>
    </div>
  );
};

export default UserInfoCard;
