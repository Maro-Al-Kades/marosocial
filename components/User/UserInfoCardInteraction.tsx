"use client";

import { IoPersonAdd } from "react-icons/io5";
import { Button } from "../ui/button";
import { MdBlock } from "react-icons/md";
import { useOptimistic, useState } from "react";
import { switchBlock, switchFollow } from "@/lib/actions";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
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
    switchOptimisticState("follow");
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

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingRequestSent:
              !state.following && !state.followingRequestSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  return (
    <>
      <form action={follow}>
        <Button size="sm" className="flex items-center gap-2 w-full">
          {optimisticState.following ? (
            <>
              Following <IoPersonAdd size={16} />
            </>
          ) : optimisticState.followingRequestSent ? (
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

      <form action={block} className="self-end">
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 text-xs cursor-pointer flex gap-1 items-center hover:text-red-500"
        >
          {optimisticState.blocked ? "UnBlock User" : "Block User"}
          <MdBlock />
        </Button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
