import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import { GrEmoji } from "react-icons/gr";
import {
  PiCalendarCheckThin,
  PiChartLineThin,
  PiGooglePhotosLogoThin,
} from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {
  const { userId } = auth();

  console.log("USER_ID ====== ", userId);

  // const testAction = async (formData: FormData) => {
  //   "use server";

  //   if (!userId) return;
  //   const desc = formData.get("desc") as string;
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       },
  //     });

  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="p-4 bg-white dark:bg-[#020817] shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@avatar"
          width={48}
          height={48}
          className="w-12 h-12 border-2 border-primary object-cover rounded-full"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>

      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action="" className="flex gap-4 p-4">
          <Textarea
            placeholder="What's on you mind ?"
            className="bg-slate-100 dark:bg-[#020817] rounded-lg p-2"
            name="desc"
          />

          <GrEmoji size={24} className="self-end text-primary" />

          <Button>Send</Button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center mt-4 text-gray-600 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary text-gray-600 flex items-center gap-2 cursor-pointer"
          >
            <PiGooglePhotosLogoThin size={21} className="text-primary" />
            Photo
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary text-gray-600 flex items-center gap-2 cursor-pointer"
          >
            <CiVideoOn className="text-primary" size={21} />
            Video
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary text-gray-600 flex items-center gap-2 cursor-pointer"
          >
            <PiChartLineThin size={21} className="text-primary" />
            Poll
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary text-gray-600 text-sm flex items-center gap-2 cursor-pointer"
          >
            <PiCalendarCheckThin size={21} className="text-primary" />
            Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
