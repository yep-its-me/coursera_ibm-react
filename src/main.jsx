import * as ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Cart } from "./pages/ShoppingCart";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/coursera_ibm-react/">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
