import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "axios";

export const fetchPosts = createAsyncThunk(
  "todos/fetchPosts",
  async function (_, { rejectWithValue, getState }) {
    try {
      const state = getState();
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: state.posts.limit,
            _page: state.posts.page,
          },
        }
      );
      const { data } = response;
      const totalCount = response.headers["x-total-count"];
      return { data, totalCount };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    totalCountPosts: 0,
    pages: [],
    limit: 10,
    page: 1,
    posts: [],
    lastElement: null,
    error: null,
    endless: false,
    isLoading: false,
  },
  reducers: {
    addPost(state, action) {
      state.posts.push({
        title: action.payload.title,
        body: action.payload.body,
        author: action.payload.author,
        id: new Date().getTime(),
        dataSort: new Date().getTime(),
        date:
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          " " +
          new Date().toISOString().slice(0, 10),
      });
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setEndless(state, action) {
      state.endless = action.payload;
    },
    setPageIncrement(state, action) {
      state.page += 1;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    saveEditPost(state, action) {
      const editPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
      editPost.title = action.payload.title;
      editPost.body = action.payload.body;
    },

    removePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    removeAllPosts(state) {
      state.posts = [];
      state.pages = [];
      state.page = 1;
      state.endless = false;
      state.totalCountPosts = 0;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.error = false;
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (state.endless === true) {
        state.posts = [...state.posts, ...action.payload.data];
        state.lastElement = state.posts[state.posts.length - 1];
      }
      if (state.endless === false) {
        state.posts = action.payload.data;
      }

      if (state.totalCountPosts !== action.payload.totalCount) {
        state.totalCountPosts = action.payload.totalCount;
        const pagesCount = Math.ceil(action.payload.totalCount / state.limit);
        for (let i = 0; i < pagesCount; i++) {
          state.pages.push(i + 1);
        }
      }
    },
    [fetchPosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  addPost,
  setPosts,
  setPage,
  setPageIncrement,
  setEndless,
  saveEditPost,
  removeAllPosts,

  removePost,
} = todoSlice.actions;
export default todoSlice.reducer;
