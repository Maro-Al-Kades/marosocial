import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import Comments from "./Comments";
import { RxDotsHorizontal } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
const Post = () => {
  return (
    <Card className="flex flex-col gap-4 pb-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {/* AVATAR */}
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@avatar"
              width={40}
              height={40}
              className="w-12 h-12 object-cover rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>

          <span className="font-bold  text-sm text-primary">Maro Asam</span>
        </div>
        <RxDotsHorizontal size={20} className="text-primary cursor-pointer" />
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>

        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          possimus adipisci, fugiat incidunt labore, harum sit voluptatum
          asperiores voluptas quos unde quas tenetur nam odio neque alias
          repellat recusandae odit!
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between text-xs">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 dark:bg-[#0f0f0f] cursor-pointer dark-[#020817] p-2 rounded-xl">
            <AiOutlineLike size={20} className="text-primary" />
            <span className="text-gray-300">|</span>
            <span className="text-primary font-medium">
              324 <span className="hidden md:inline text-gray-500"> Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 dark:bg-[#0f0f0f] cursor-pointer dark-[#020817] p-2 rounded-xl">
          <GoCommentDiscussion size={20} className="text-primary" />
            <span className="text-gray-300">|</span>
            <span className="text-primary font-medium">
              324{" "}
              <span className="hidden md:inline text-gray-500"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100  dark:bg-[#0f0f0f] cursor-pointer p-2 rounded-xl">
          <CiShare2 size={20} className="text-primary" />
            <span className="text-gray-300">|</span>
            <span className="text-primary font-medium">
              324{" "}
              <span className="hidden md:inline text-gray-500 dark:text-gray-300">
                {" "}
                Shares
              </span>
            </span>
          </div>
        </div>
      </CardFooter>

      <Comments />
    </Card>
  );
};

export default Post;
