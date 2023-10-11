import { configureStore } from "@reduxjs/toolkit";
import productsApi from "./productsApiSlice";
import details from "./details";
import category from "./category";

const store = configureStore({
  reducer: {
    details,
    category,
    products: productsApi,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
