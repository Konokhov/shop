import { configureStore } from "@reduxjs/toolkit";
import productsApi from "./productsApiSlice";

const store = configureStore({
  reducer: {
    products: productsApi,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
