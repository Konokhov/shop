import { configureStore } from "@reduxjs/toolkit";
import details from "./details";
import category from "./category";
import products from "./products";

const store = configureStore({
  reducer: {
    details,
    category,
    products,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
