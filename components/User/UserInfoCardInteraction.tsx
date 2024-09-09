"use client";

import { IoPersonAdd } from "react-icons/io5";
import { Button } from "../ui/button";
import { MdBlock } from "react-icons/md";
import { useState } from "react";
import { switchFollow } from "@/lib/actions";

const UserInfoCardInteraction = ({
  currentUserId,
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  currentUserId: string;
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {}
  };
  return (
    <>
      <form action={follow}>
        <Button size="sm" className="flex items-center gap-2 w-full">
          {userState.following ? (
            <>
              Following <IoPersonAdd size={16} />
            </>
          ) : userState.followingRequestSent ? (
            <>
              Friend Request Sent <IoPersonAdd size={16} />
            </>
          ) : (
            <>
              Follow <IoPersonAdd size={16} />
            </>
          )}
        </Button>
      </form>

      <form action="" className="self-end">
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 text-xs cursor-pointer flex gap-1 items-center hover:text-red-500"
        >
          {userState.blocked ? "UnBlock User" : "Block User"}
          <MdBlock />
        </Button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
