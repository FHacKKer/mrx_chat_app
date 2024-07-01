"use client";
import Link from "next/link";
import "../styles/app.css";

export default function Home() {
  return (
    <>
      <h1>Welcome To Main Page!</h1>
      <Link href={"/home"}>Go To Home Page</Link>
      <br />
      <Link href={"/chat"}>Go To Chat Page</Link>
    </>
  );
}
