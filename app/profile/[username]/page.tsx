import LeftMenu from "@/components/global/LeftMenu";
import RightMenu from "@/components/global/RightMenu";
import Feed from "@/components/Home/Feed";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import prisma from "@/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noCover.png"}
                alt=""
                fill
                className="object-cover rounded-lg"
              />

              {/* AVATAR */}
              <Avatar className="w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-primary">
                <AvatarImage
                  src={user.avatar || "https://github.com/shadcn.png"}
                  alt="@avatar"
                  width={128}
                  height={128}
                  className="object-cover rounded-full"
                />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
            </div>

            <h1 className="mt-20 mb-4 text-2xl font-bold text-primary">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm text-primary">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm text-primary">Followers</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm text-primary">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
