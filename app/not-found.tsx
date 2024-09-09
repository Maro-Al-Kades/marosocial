import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 h-[89vh]">
      <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
      <p className="text-3xl text-primary">
        Sorry, the page you are looking for does not exist
      </p>
      <Link href="/" className={`${buttonVariants({size: "lg"})}`}>
        Back to Home Page
      </Link>
    </div>
  );
};

export default notFound;
