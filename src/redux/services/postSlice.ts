import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  postList: { id: number; title: string; body: string }[];
}

const initialState: initialStateProps = {
  postList: [],
};

const postSLice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPostList: (state, action) => {
      state.postList = action.payload;
    },
    deletePostList: (state, action) => {
      state.postList = state.postList.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPostList, deletePostList } = postSLice.actions;
export default postSLice.reducer;
