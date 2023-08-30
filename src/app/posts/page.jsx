"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPost,
  removePost,
  updatePost,
} from "../GLobalRedux/Features/Posts/postsSlice.jsx";

export default function Home() {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const posts = useSelector((state) => state.posts || []);
  const dispatch = useDispatch();

  // Function to handle adding a new post
  const handleAddPost = () => {
    if (newPostTitle === "" || newPostContent === "") {
      alert("Title and content cannot be empty");
      return;
    }

    const newPost = {
      id: new Date().getTime(),
      title: newPostTitle,
      content: newPostContent,
    };

    dispatch(addPost(newPost));
    alert("New post added");

    // Reset form fields
    setNewPostTitle("");
    setNewPostContent("");
  };

  // Function to handle removing a post by id
  const handleRemovePost = (id) => {
    dispatch(removePost({ id }));
    alert("Post removed");
  };

  // Function to handle updating a post
  const handleUpdatePost = (updatedPost) => {
    dispatch(updatePost(updatedPost));
    alert("Post updated");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Manage Posts</h1>

      <div className="mb-8 flex">
        <input
          type="text"
          placeholder="Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <textarea
          placeholder="Content"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="border p-2 mr-2 rounded"
        ></textarea>
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Post
        </button>
      </div>

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
