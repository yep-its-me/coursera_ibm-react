import { createSlice } from "@reduxjs/toolkit";

export const priceTable = new Map();
priceTable.set("Snake Plant", 15);
priceTable.set("Spider Plant", 12);
priceTable.set("Peace Lily", 18);
priceTable.set("Boston Fern", 20);
priceTable.set("Rubber Plant", 17);
priceTable.set("Aloe Vera", 14);
priceTable.set("Lavender", 20);
priceTable.set("Jasmine", 18);
priceTable.set("Rosemary", 15);
priceTable.set("Mint", 12);
priceTable.set("Lemon Balm", 14);
priceTable.set("Hyacinth", 22);
priceTable.set("Tulip", 33);
priceTable.set("Daffodil", 17);
priceTable.set("Cherry Blossom", 12);
priceTable.set("Crocus", 22);
priceTable.set("Magnolia", 40);
priceTable.set("Bluebell", 30);

const initialState = {
    totalItems: 0,
    totalPrice: 0,
    items: new Map(),
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add: (state, payload) => {
            state.totalItems += 1;
            state.items.set(payload.payload, (state.items.get(payload.payload) || 0) + 1);
            state.totalPrice += priceTable.get(payload.payload);
        },
        remove: (state, payload) => {
            state.totalItems -= 1;
            state.items.set(payload.payload, (state.items.get(payload.payload) || 0) - 1);
            state.totalPrice -= priceTable.get(payload.payload);
        },
        del: (state, payload) => {
            state.totalItems -= state.items.get(payload.payload);
            state.totalPrice -= state.items.get(payload.payload) * priceTable.get(payload.payload);
            state.items.delete(payload.payload);
        }
    },
});

export const { add, remove, del } = productSlice.actions;

export default productSlice.reducer;
