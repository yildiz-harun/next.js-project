"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ImBlogger } from "react-icons/im";

export default function Navbar() {
  const posts = useSelector((state) => state.posts || []);

  return (
    <nav className="bg-white p-3 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo  */}
          <div className="rounded-full bg-primary p-3 inline-flex mr-2">
            <ImBlogger className="text-white text-2xl" />
          </div>
          {/* Company Name */}
          <Link
            className="text-2xl font-semibold text-black hover:text-primary"
            href="/"
          >
            Arbit Blog
          </Link>
        </div>

        {/* Posts Count */}
        <div className="flex items-center">
          <span className="mr-4">Posts ({posts.length})</span>

          {/* Icons */}
          <span className="material-icons mr-4">icon_name1</span>
          <span className="material-icons mr-4">icon_name2</span>

          {/* Profile Image */}
          <img
            src="profile_image.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
