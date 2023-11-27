import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface CartProduct {
    _id: string
    title: string
    slug: string
    price: number
    productImage: Image
    quantity: number
    totalPrice: number
}

export interface CartStore {
    itemsList: CartProduct[]
}

export const initialState: CartStore = {
    itemsList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<Omit<CartProduct, 'quantity' | 'totalPrice'>>) {
            // console.log('ADD PRODUCT', action.payload)

            const newItem = action.payload

            const existingItem = state.itemsList.find(product => product._id === newItem._id)

            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += existingItem.price
            } else {
                state.itemsList.push({
                    _id: newItem._id,
                    title: newItem.title,
                    slug: newItem.slug,
                    price: newItem.price,
                    productImage: newItem.productImage,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        },
        // prepare(product: Product, numberOfProducts = 1){
        //     return {
        //         payload: {
        //             ...product,
        //             amount: numberOfProducts
        //         }
        //     }
        // }

        removeProduct (state, action: PayloadAction<Omit<CartProduct, 'quantity' | 'totalPrice'>>) {
            const existingItem = state.itemsList.find(product => product._id === action.payload._id)

            console.log("removing product", action.payload)

            if (!existingItem) {
                return
            }

            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(product => product._id !== action.payload._id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= action.payload.price
            }
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions

export const useCartProducts = (state: RootState) => state.cart.itemsList

export default cartSlice.reducer