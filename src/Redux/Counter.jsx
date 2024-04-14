import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    add: (state, actions) => {
      state.value += Number(actions.payload);
    },
    subtract: (state, actions) => {
      state.value += Number(actions.payload);
    },
  },
});

export const counterAction = countSlice.actions;
export default countSlice;
