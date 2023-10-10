import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";
import { Product } from "types/Product";

export const fetchDetails = createAsyncThunk<
  Product,
  Readonly<Params<string>>,
  { rejectValue: string }
>("data/fetchDetails", async ({ id }, { rejectWithValue }) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

export type DetailsData = {
  data: Product | null;
  isLoading: boolean;
  error: null | string;
};

const initialState: DetailsData = {
  data: null,
  isLoading: false,
  error: null,
};

const detailsStore = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload !== undefined ? action.payload : null;
      });
  },
});

export default detailsStore.reducer;
