import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { GoCheckCircleFill } from "react-icons/go";
import { SlClose } from "react-icons/sl";

const FriendRequest = () => {
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="@avatar"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>

          <span className="font-semibold">Emilia Clarke</span>
        </div>

        <div className="gap-0 flex justify-end">
          <Button size="icon" variant="ghost">
            <GoCheckCircleFill
              size={20}
              className="text-primary cursor-pointer"
            />
          </Button>

          <Button size="icon" variant="ghost">
            <SlClose size={20} className="text-gray-400 cursor-pointer" />
          </Button>
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/163482/football-american-football-running-back-ball-carrier-163482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="@avatar"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>

          <span className="font-semibold">Cristiano Ronaldo</span>
        </div>

        <div className="gap-0 flex justify-end">
          <Button size="icon" variant="ghost">
            <GoCheckCircleFill
              size={20}
              className="text-primary cursor-pointer"
            />
          </Button>

          <Button size="icon" variant="ghost">
            <SlClose size={20} className="text-gray-400 cursor-pointer" />
          </Button>
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/6007205/pexels-photo-6007205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="@avatar"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>

          <span className="font-semibold">Dwayne Johnson</span>
        </div>

        <div className="gap-0 flex justify-end">
          <Button size="icon" variant="ghost">
            <GoCheckCircleFill
              size={20}
              className="text-primary cursor-pointer"
            />
          </Button>

          <Button size="icon" variant="ghost">
            <SlClose size={20} className="text-gray-400 cursor-pointer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
