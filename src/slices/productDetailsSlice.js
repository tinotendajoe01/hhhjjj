import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: [],
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    //actions
    addToProductDetails: (state, action) => {
      state.details = [...state.details, action.payload];
    },
  },
});

export const { addToProductDetails } = productDetailsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.productDetails.details;

export default productDetailsSlice.reducer;
