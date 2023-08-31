"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ImBlogger } from "react-icons/im";
import { GoBellFill } from "react-icons/go";
import { BsFillGridFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const posts = useSelector((state) => state.posts || []);

  return (
    <nav className="bg-white p-3 text-black rounded-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo  */}
          <div className="rounded-full bg-primary p-3 inline-flex mr-2">
            <ImBlogger className="text-white text-2xl" />
          </div>
          {/* Company Name */}
          <Link
            className="text-2xl font-bold text-black hover:text-primary"
            href="/"
          >
            Arbit Blog
          </Link>
        </div>

        {/* Posts Count */}
        <div className="flex items-center relative">
          <div className="mx-2 relative">
            <span className="text-gray-500 font-bold text-xl">Posts</span>
            <span className="flex items-center justify-center w-6 h-6 absolute -top-5 -right-1 bg-red-500 text-white rounded-full text-sm px-1">
              {posts.length}
            </span>
          </div>
          <GoBellFill className="text-gray-500 text-2xl mx-2" />
          <BsFillGridFill className="text-gray-500 text-2xl mx-2" />
          <CgProfile className="text-primary text-5xl mx-2" />
        </div>
      </div>
    </nav>
  );
}
