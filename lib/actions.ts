"use server";

import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "./client";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    // check if there is existing follow
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    // if there is existing follow delete it
    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    }
    // check if there is existing follow request
    else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      // if there is existing follow request delete it
      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      }
      // create a new follow request
      else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
