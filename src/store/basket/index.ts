import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartProducts } from "../../types/cardProducts";
import { Products } from "../../types/cardProducts";
import { Product } from "../../types/Product";

export const fetchBasketItem = createAsyncThunk<
  Product[],
  Products[],
  { rejectValue: string }
>("data/fetchBasketItem", async (ids, { rejectWithValue }) => {
  const basketData = await Promise.all(
    ids.map(async (requests: Products) => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${requests.productId}`
      );
      const data = await response.json();

      return data;
    })
  );

  return basketData;
});

export const fetchBasket = createAsyncThunk<
  CartProducts,
  undefined,
  { rejectValue: string }
>("data/fetchBasket", async (_, { rejectWithValue }) => {
  const response = await fetch("https://fakestoreapi.com/carts/5");

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

export type BasketData = {
  data: CartProducts | null;
  basketData: Product[];
  isLoading: boolean;
  error: null | string;
};

const initialState: BasketData = {
  data: null,
  basketData: [],
  isLoading: false,
  error: null,
};

const basketStore = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload !== undefined ? action.payload : null;
      })
      .addCase(fetchBasketItem.fulfilled, (state, action) => {
        state.basketData = action.payload;
      });
  },
});

export default basketStore.reducer;
