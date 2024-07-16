import { cva } from "class-variance-authority";
import styles from "../style/Header.module.css";
import { cn } from "../util";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";

const logoStyles = cva([styles["header-logo"]]);

export const Header = () => {
    return (
        <header style={{ height: 48, position: "sticky", top: 0, background: "green", display: "flex", padding: 16, justifyContent: "space-between", zIndex: 50 }}>
            <Link
                to="/"
                style={{
                    display: "flex",
                    gap: 48,
                    alignItems: "center",
                    textDecoration: "none",
                }}
            >
                <div className={cn(logoStyles())} />
                <div style={{ display: "flex", flexDirection: "column", placeItems: "center", gap: 6 }}>
                    <h1 style={{ color: "white", fontSize: 20 }}>Paradise Nursery</h1>
                    <h2 style={{ color: "white", fontSize: 18, fontWeight: "normal", fontStyle: "italic", letterSpacing: 1 }}>Where Green Meets Serenity</h2>
                </div>
            </Link>
            <h1
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    fontSize: 24,
                }}
            >
                Plants
            </h1>
            <ShoppingCart />
        </header>
    );
};
