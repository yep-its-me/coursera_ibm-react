import snake_plant from "../assets/flowers/snake_plant.jpg";
import spider_plant from "../assets/flowers/spider_plant.jpg";
import peace_lily from "../assets/flowers/peace_lily.jpg";
import boston_fern from "../assets/flowers/boston_fern.jpg";
import rubber_plant from "../assets/flowers/rubber_plant.jpg";
import aloe_vera from "../assets/flowers/aloe_vera.jpg";
import lavender from "../assets/flowers/lavender.jpg";
import jasmine from "../assets/flowers/jasmine.jpg";
import rosemary from "../assets/flowers/rosemary.jpg";
import mint from "../assets/flowers/mint.jpg";
import lemon_balm from "../assets/flowers/lemon_balm.jpg";
import hyacinth from "../assets/flowers/hyacinth.jpg";
import tulip from "../assets/flowers/tulip.jpg";
import daffodil from "../assets/flowers/daffodil.jpg";
import cherry_blossom from "../assets/flowers/cherry_blossom.jpg";
import crocus from "../assets/flowers/crocus.jpg";
import magnolia from "../assets/flowers/magnolia.jpg";
import bluebell from "../assets/flowers/bluebell.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Page } from "./Page";
import { ShoppingCartItem } from "../components/ShoppingCartItem";
import { Link } from "react-router-dom";

import styles from "../style/HomePage.module.css";
import { cva } from "class-variance-authority";
import { cn } from "../util";

const buttonStyles = cva([styles["homepage-button"]]);

const pictureMap = new Map();
pictureMap.set("Snake Plant", snake_plant);
pictureMap.set("Spider Plant", spider_plant);
pictureMap.set("Peace Lily", peace_lily);
pictureMap.set("Boston Fern", boston_fern);
pictureMap.set("Rubber Plant", rubber_plant);
pictureMap.set("Aloe Vera", aloe_vera);
pictureMap.set("Lavender", lavender);
pictureMap.set("Jasmine", jasmine);
pictureMap.set("Rosemary", rosemary);
pictureMap.set("Mint", mint);
pictureMap.set("Lemon Balm", lemon_balm);
pictureMap.set("Hyacinth", hyacinth);
pictureMap.set("Tulip", tulip);
pictureMap.set("Daffodil", daffodil);
pictureMap.set("Cherry Blossom", cherry_blossom);
pictureMap.set("Crocus", crocus);
pictureMap.set("Magnolia", magnolia);
pictureMap.set("Bluebell", bluebell);

export const Cart = () => {
    const items = useSelector((state) => state.products.items);
    const totalPrice = useSelector((state) => state.products.totalPrice);
    const arr = Array.from(items, ([name, value]) => ({ name, value }));
    return (
        <Page>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, padding: 16}}>
                <h1 style={{ fontSize: 36 }}>Total Cart Amount: ${totalPrice}</h1>
                {arr.map((val) => {
                    return <ShoppingCartItem name={val.name} picture={pictureMap.get(val.name)} amount={val.value} />;
                })}
                <Link to="/products" className={cn(buttonStyles())}>
                    Continue Shopping
                </Link>
                <button className={cn(buttonStyles())} onClick={() => alert("Checkout not implemented")}>
                    Checkout
                </button>
            </div>
        </Page>
    );
};
