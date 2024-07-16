import { cva } from "class-variance-authority";
import styles from "../style/HomePage.module.css";
import { cn } from "../util";
import { Link } from "react-router-dom";

const backgroundStyles = cva([styles["homepage-base"]]);
const landingStyles = cva([styles["homepage-landing"]]);
const buttonStyles = cva([styles["homepage-button"]]);

export const HomePage = (className) => {
    return (
        <div className={cn(backgroundStyles({ className }))}>
            <div className={cn(landingStyles())}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 16, gap: 124 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                        <h1 style={{ fontSize: 50, color: "white", width: 450, textAlign: "center" }}>Welcome To Paradise Nursery</h1>
                        <div style={{ width: 150, height: 5, borderRadius: 5, background: "green", margin: "auto" }} />
                        <p style={{ fontSize: 18, color: "white", fontWeight: 600, width: 450, textAlign: "center" }}>Where Green Meets Serenity</p>
                        <Link className={cn(buttonStyles())} to="/products">
                            Get Started
                        </Link>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 18,
                            flexDirection: "column",
                        }}
                    >
                        <h1 style={{ textAlign: "center", color: "white", fontSize: 24, fontWeight: 600 }}>Welcome to Paradise Nursery, where green meets serenity!</h1>
                        <p style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
                            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only
                            enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From airpurifying plants to aromatic fragrant
                            ones, we have something for every plant enthusiast.
                        </p>
                        <p style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
                            Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just
                            starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you
                            find the perfect plant for your home or office.
                        </p>
                        <p style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
                            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
