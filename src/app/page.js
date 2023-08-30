"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
