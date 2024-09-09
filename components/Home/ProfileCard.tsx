import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const ProfileCard = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  console.log(user);

  if (!user) return null;

  return (
    <div className="head flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user?.cover || "noCover.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />

        <Avatar className="w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10">
          <AvatarImage
            src={user?.avatar || "/noAvatar.png"}
            alt="@avatar"
            width={48}
            height={48}
            className=" border-2 border-primary object-cover rounded-full"
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-xs">{user._count.followers} Followers</span>
        </div>

        <Link
          className={`${buttonVariants({ className: "w-full text-sm" })}`}
          href="/profile/1"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
