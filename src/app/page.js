// Features/Posts/PostsComponent.jsx
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPost,
  removePost,
  updatePost,
} from "./GLobalRedux/Features/Posts/postsSlice.jsx";

export default function Home() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    const newPost = {
      id: new Date().getTime(),
      title: "New Post",
      content: "This is a new post.",
    };
    dispatch(addPost(newPost));
  };

  const handleRemovePost = (id) => {
    dispatch(removePost({ id }));
  };

  const handleUpdatePost = (updatedPost) => {
    dispatch(updatePost(updatedPost));
  };

  return (
    <div>
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleRemovePost(post.id)}>Remove</button>
            <button
              onClick={() =>
                handleUpdatePost({ ...post, title: "Updated Title" })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
