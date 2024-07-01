import React from "react";
import "../../styles/app.css";
import Link from "next/link";
const Page = () => {
  return (
    <div>
      <h1>Welcome To Home page!</h1>
      <code>This Is Demo Purpose Only</code>
      <br />
      <Link href={"/chat"}>GOTO Chat Page</Link>
      <Link href={"/"}>GOTO Index Page</Link>
    </div>
  );
};

export default Page;
