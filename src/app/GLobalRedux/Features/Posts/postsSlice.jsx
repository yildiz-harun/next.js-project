import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    },
    updatePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
  },
});

export default postsSlice.reducer;
export const { addPost, removePost, updatePost } = postsSlice.actions;
