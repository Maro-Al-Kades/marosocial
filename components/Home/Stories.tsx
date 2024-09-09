import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white dark:bg-[#020817]  rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={50}
            height={50}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>{" "}
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>{" "}
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>{" "}
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>{" "}
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            alt="story"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-primary border-2 object-cover"
          />
          <span className="font-medium">Maro</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
