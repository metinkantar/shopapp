import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "MeKaShop"
}

export const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const selectedValue = state => state.counter.value;

export default countSlice.reducer;