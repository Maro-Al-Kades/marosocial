import Image from "next/image";
import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="head">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-600 font-semibold">
        <span>Sponserd Ads</span>
        <RxDotsHorizontal size={20} className="text-primary cursor-pointer" />
      </div>

      {/* BTM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/18877297/pexels-photo-18877297/free-photo-of-neon-on-old-warehouse-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="sponserd img"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/18877297/pexels-photo-18877297/free-photo-of-neon-on-old-warehouse-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="@avatar"
              width={24}
              height={24}
              className="w-10 h-10 object-cover rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>

          <span className="text-priamry font-medium">Coca Cola</span>
        </div>
        <p className={`text-gray-500 ${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing."
            : size === "md"
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quod, beatae repudiandae reiciendis mollitia expedita molestiae voluptatibus pariatur debitis vel cumque unde qui dolore nobis. Nihil maiores ad quas sit!"
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quod, beatae repudiandae reiciendis mollitia expedita molestiae voluptatibus pariatur debitis vel cumque unde qui dolore nobis. Nihil maiores ad quas sit!"}
        </p>
        <Button size="sm">Learn More</Button>
      </div>
    </div>
  );
};

export default Ads;
