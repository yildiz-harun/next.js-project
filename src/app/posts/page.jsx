"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link.js";
import PostCard from "../components/PostCard.jsx";

export default function Home() {
  const posts = useSelector((state) => state.posts || []);

  return (
    <div className="container mx-auto p-4">
      <Link href="/newPost">Go to New Post</Link>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <div>
              <PostCard title={post.title} content={post.content}/>
            </div>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
