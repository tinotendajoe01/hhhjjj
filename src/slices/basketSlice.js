// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: {
//     cartItems: [],
//   },
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "CART_ADD_ITEM": {
//       const newItem = action.payload;
//       const existItem = state.cartItems.find(
//         (item) => item.name === newItem.name
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map((item) =>
//             item.name === existItem.name ? newItem : item
//           )
//         : [...state.cart.cartItems, newItem];
//       return { ...state, cart: { ...state.cart, cartItems } };
//     }
//     default:
//       return state;
//   }
// }
