"use client"

import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";

const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const storeRef = useRef<AppStore>()

    if(!storeRef.current) {
        // create the store instance the first time it renders
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default CartProvider