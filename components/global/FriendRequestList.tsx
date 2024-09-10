"use client";

import { GoCheckCircleFill } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { SlClose } from "react-icons/sl";
import { FollowRequest, User } from "@prisma/client";
import { useOptimistic, useState } from "react";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequests(requestId);

    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequests(requestId);

    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  return (
    <>
      {optimisticRequests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={request.sender.avatar || "noAvatar.png"}
                alt="@avatar"
                width={40}
                height={40}
                className="w-10 h-10 object-cover rounded-full"
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>

            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>

          <div className="gap-0 flex justify-end">
            <form action={() => accept(request.id, request.senderId)}>
              <Button size="icon" variant="ghost">
                <GoCheckCircleFill
                  size={20}
                  className="text-primary cursor-pointer"
                />
              </Button>
            </form>

            <form action={() => decline(request.id, request.senderId)}>
              <Button size="icon" variant="ghost">
                <SlClose size={20} className="text-gray-400 cursor-pointer" />
              </Button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequestList;
