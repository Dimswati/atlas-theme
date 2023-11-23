import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface CartProduct extends Product {
    numberOfProducts: number
}

export interface CartStore {
    [key: string]: CartProduct
}

export const initialState: CartStore = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            state[action.payload._id] = action.payload
        },
        removeProduct: (state, action: PayloadAction<CartProduct>) => {
            delete state[action.payload._id]
        }
    }
})

// every product