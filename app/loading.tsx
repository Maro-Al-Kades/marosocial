"use client";
import { Grid } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="">
      <div className="h-screen w-full items-center justify-center flex mx-auto">
        <Grid
          visible={true}
          height="50"
          width="50"
          color="#2563EB"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    </div>
  );
};

export default loading;
