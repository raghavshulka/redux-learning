import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./Counter";

const counterStore= configureStore({
  reducer: {
    counter: countSlice.reducer,
  },
});

export default counterStore;