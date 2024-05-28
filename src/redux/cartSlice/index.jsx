// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//         totalPrice: 0
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             const newItem = action.payload;
//             state.items.push(newItem);
//             state.totalPrice += newItem.price
//         },
//         clearCart: (state) => (
//             state.items = [],
//             state.totalPrice = 0
//         )




//     }
// })

// export const selecCartItems = (state) => state.cart.items

// export const selectCartTotalPrice = (state) => state.cart.totalPrice

// export const { addToCart, clearCart } = cartSlice.actions

// export default cartSlice.reducer



import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const selecCartItems = (state) => state.cart.items;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;
export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


