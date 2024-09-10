import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { User } from "@prisma/client";
import prisma from "@/lib/client";

const UserMediaCard = async ({ user }: { user: User }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
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
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative w-1/5  h-28" key={post.id}>
                <Image
                  src={post.img!}
                  fill
                  alt="img"
                  className="object-cover rounded-md cursor-pointer"
                />
              </div>
            ))
          : "No Media Found!"}
      </div>
    </div>
  );
};

export default UserMediaCard;
