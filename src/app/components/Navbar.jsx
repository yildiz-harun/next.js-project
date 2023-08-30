"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const posts = useSelector((state) => state.posts || []);

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src="logo.png" alt="Company Logo" className="w-8 h-8 mr-2" />
          <Link href="/"> Arbit Blog </Link>
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
