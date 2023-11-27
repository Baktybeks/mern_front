import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';


export const getPosts = createAsyncThunk(
  'posts/getPosts', async() => {
    const { data } = await axios.get('api/posts');
    return data;
  });

const initialState = {
  posts: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = 'loaded';
    },
    [getPosts.rejected]: (state, action) => {
      state.posts.items = [];
      state.posts.status = 'error';
    },
  }
});

export const postsReducer = postsSlice.reducer;
