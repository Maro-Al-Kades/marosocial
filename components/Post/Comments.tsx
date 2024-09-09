import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { RxDotsHorizontal } from "react-icons/rx";

const Comments = () => {
  return (
    <div className="px-6">
      {/* Write */}
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="@avatar"
            width={40}
            height={40}
            className="w-12 h-12 object-cover rounded-full"
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>

        <div className=" flex items-center justify-between rounded-xl gap-2 text-sm  w-full py-2">
          <Input
            type="text"
            placeholder="Write a comment..."
            className="outline-none flex-1 text-primary"
          />

          <Image
            src="/emoji.png"
            alt="emoji"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <Card className="text-sm">
        <CardContent className="p-3">
          <div className="flex flex-row items-center justify-between px-2">
            <div className="flex flex-row items-center justify-start gap-2 pb-4">
              <Avatar>
                <AvatarImage
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="@avatar"
                  width={40}
                  height={40}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>

              <span className="font-medium text-primary">Kero Ayman</span>
            </div>

            <RxDotsHorizontal size={20} className="text-primary cursor-pointer" />

          </div>
          {/* Desc */}
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              nihil quia? Odit obcaecati ducimus provident, nam quae repellat
              voluptatibus et laudantium, delectus molestiae repellendus debitis
              unde ullam consequatur, quo aperiam!
            </p>

            <div className="">
              like comment
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Comments;
