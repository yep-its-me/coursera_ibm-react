import { add, priceTable } from "../store/slice";
import { useSelector, useDispatch } from "react-redux";

import styles from "../style/HomePage.module.css";
import { cva } from "class-variance-authority";
import { cn } from "../util";

const buttonStyles = cva([styles["homepage-button"]]);

export const ProductCard = ({ onSale, name, description, picture }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.products.items);

    return (
        <div
            style={{
                borderRadius: 8,
                border: "1px solid #E4E4E7",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 12,
                background: "white",
                gap: 12,
                position: "relative",
                width: 500,
            }}
        >
            <h3>{name}</h3>
            {onSale && <span style={{ position: "absolute", top: 0, right: 0, background: "#BF0A30", padding: 14, color: "white", borderBottomLeftRadius: 8 }}>SALE</span>}
            <img
                src={picture}
                alt={name}
                style={{
                    width: 250,
                    borderRadius: 8,
                }}
            />
            <span style={{ color: "red", fontSize: 20, fontWeight: 600 }}>${priceTable.get(name)}</span>
            <span style={{ fontSize: 12, padding: 12 }}>{description}</span>
            <button
                onClick={() => {
                    dispatch(add(name));
                }}
                disabled={items.get(name) > 0}
                className={cn(buttonStyles())}
                style={{ marginTop: "auto", marginBottom: "unset" }}
            >
                Add To Cart
            </button>
        </div>
    );
};
