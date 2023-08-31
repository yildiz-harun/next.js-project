"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPost,
  removePost,
  updatePost,
} from "../GLobalRedux/Features/Posts/postsSlice.jsx";
import Link from "next/link.js";

export default function Home() {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const posts = useSelector((state) => state.posts || []);

  return (
    <div className="container mx-auto p-4">
      <Link href="/newPost">New Post</Link>
      <h1 className="text-4xl mb-4">Manage Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4 border p-4 rounded">
              <span className="text-lg">{post.title}</span>
              <span className="text-lg">{post.content}</span>
              <button
                onClick={() => handleRemovePost(post.id)}
                className="bg-red-500 text-white p-2 rounded ml-4"
              >
                Remove
              </button>
              <button
                onClick={() =>
                  handleUpdatePost({ ...post, title: "Updated Title" })
                }
                className="bg-green-500 text-white p-2 rounded ml-4"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No posts available.</p>
      )}
    </div>
  );
}
