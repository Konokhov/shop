import { configureStore } from "@reduxjs/toolkit";
import details from "./details";
import category from "./category";
import products from "./products";
import basket from "./basket";

const store = configureStore({
  reducer: {
    details,
    category,
    products,
    basket,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
