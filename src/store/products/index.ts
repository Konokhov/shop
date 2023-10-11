import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types/Product";

export type ProductsData = {
  data: Product[];
  isLoading: boolean;
  error: null | string;
};

export const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: string }
>("data/fetchProducts", async (_, { rejectWithValue }) => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

const initialState: ProductsData = {
  data: [],
  isLoading: false,
  error: null,
};

const productsStore = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload !== undefined ? action.payload : null;
      });
  },
});

export default productsStore.reducer;
