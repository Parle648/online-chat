import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IBooking {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: string | Date;
  trip: {
    title: string;
    duration: number;
    price: number;
  };
  totalPrice: number;
  createdAt: string | Date;
}

interface Ibookings {
  token: string | null;
}

const initialValue: Ibookings = {
  token: null,
};

const token = createSlice({
  name: "token",
  initialState: initialValue,
  reducers: {
    updatetoken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { updatetoken } = token.actions;

export default token.reducer;
