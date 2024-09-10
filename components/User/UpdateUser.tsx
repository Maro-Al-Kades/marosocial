import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const UpdateUser = () => {
  return (
    <div>
      <Link
        href="/friends"
        className={`${buttonVariants({
          size: "sm",
          variant: "ghost",
        })} text-xs text-primary hover:text-primary`}
      >
        Update Your Information
      </Link>
    </div>
  );
};

export default UpdateUser;
