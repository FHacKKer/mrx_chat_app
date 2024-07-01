import React from "react";
import "../../styles/app.css";
import Link from "next/link";
const Page = () => {
  return (
    <div>
      <h1>Welcome To Chat Page!</h1>
      <code>This Is Demo Purpose Only</code>
      <Link href={"/"}>Go To Index Page!</Link>
      <br />
      <Link href={"/home"}>Go To Home Page!</Link>
    </div>
  );
};

export default Page;
