import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { deletePost, editPost, getPosts, savePosts } from "../actions/actions";
import { Post } from "../utils/interfaces";


interface PostState {
    loading: Boolean;
    error: null | string;
    data: Post[];
}

const initialState: PostState = {
    loading: false,
    error: null,
    data: []
}

//SLICE
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(savePosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(savePosts.fulfilled, (state, action: PayloadAction<Post>) => {
                state.loading = false;
                state.data = [action.payload, ...state.data];
            })
            .addCase(savePosts.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(editPost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(editPost.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(editPost.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.data = (state.data?.filter(result => result.id !== action.payload)) as Post[]
            })
            .addCase(deletePost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deletePost.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export default postSlice.reducer;