import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("data/fetchCategory", async (_, { rejectWithValue }) => {
  const response = await fetch("https://fakestoreapi.com/products/categories");

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

export type CategoryData = {
  data: string[];
  isLoading: boolean;
  error: null | string;
};

const initialState: CategoryData = {
  data: [],
  isLoading: false,
  error: null,
};

const categoryStore = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload !== undefined ? action.payload : null;
      });
  },
});

export default categoryStore.reducer;
