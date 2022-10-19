import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCount += 1;
      state.cartList.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
