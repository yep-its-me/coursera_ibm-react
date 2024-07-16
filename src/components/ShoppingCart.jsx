import { ShoppingCartIcon } from "../assets/ShoppingCartIcon";
import { cn } from "../util";
import styles from "../style/ShoppingCart.module.css";
import { cva } from "class-variance-authority";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const shoppingCartStyles = cva([styles["shoppingcart-icon"]]);

export const ShoppingCart = () => {
    const items = useSelector((state) => state.products.totalItems);
    return (
        <Link to="/cart" style={{ position: "relative", cursor: "pointer" }}>
            <ShoppingCartIcon className={cn(shoppingCartStyles())} />
            <div style={{ position: "absolute", top: "33%", left: "50%", fontSize: 14, color: "white", fontWeight: 600 }}>{items}</div>
        </Link>
    );
};
