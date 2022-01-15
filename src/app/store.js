import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "../slices/basketSlice";
import productDetailsReducer from "../slices/productDetailsSlice";

export const store = configureStore(
  {
    reducer: {
      basket: basketReducer,
      productDetails: productDetailsReducer,
    },
  }
  // +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
