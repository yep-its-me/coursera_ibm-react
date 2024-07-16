import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice";
import { enableMapSet } from "immer";

enableMapSet();

export const store = configureStore({
    reducer: {
        products: productSlice,
    },
});
