import React, { Suspense } from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "../User/UserInfoCard";
import UserMediaCard from "../User/UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>

          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
