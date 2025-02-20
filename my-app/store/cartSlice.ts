// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  fragance:[];
  quantity: number; // Agregamos el campo quantity
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Aseguramos que quantity se inicie en 1
      }
      state.total += action.payload.price;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
