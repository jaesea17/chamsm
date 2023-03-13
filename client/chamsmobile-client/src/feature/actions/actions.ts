import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../utils/interfaces";

const API = "http://localhost:3000/book/";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (data, thunkApi) => {
        try {
            const response = await axios.get<Post[]>(API);
            return response.data;
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);

export const savePosts = createAsyncThunk(
    "posts/savePosts",
    async (data: Record<string, string>, thunkApi) => {
        try {
            const response = await axios.post<Post>(API, data);
            return response.data;
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const editPost = createAsyncThunk(
    "posts/editPosts",
    async (data: { id: string, author?: string, description?: string, title?: string }, thunkApi) => {
        try {
            const response = await axios.patch<Post[]>(`${API}${data.id}`, data);
            return response.data;
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const deletePost = createAsyncThunk(
    "posts/deletePosts",
    async (data: { id: string }, thunkApi) => {
        try {
            const response = await axios.delete(`${API}${data.id}`);
            return response.data;
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)
