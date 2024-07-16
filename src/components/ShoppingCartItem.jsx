import { useDispatch } from "react-redux";
import { priceTable, add, remove, del } from "../store/slice";

export const ShoppingCartItem = ({ name, picture, amount }) => {
    const dispatch = useDispatch();
    return (
        <div style={{ display: "flex", flexDirection: "row", padding: 16, width: 500, height: 200, border: "1px solid #E4E4E7", background: "white", borderRadius: 8, gap: 48 }}>
            <img
                src={picture}
                alt={name}
                style={{
                    width: 250,
                    borderRadius: 8,
                    objectFit: "cover",
                }}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <h1 style={{ fontSize: 24 }}>{name}</h1>
                <span>${priceTable.get(name) * amount}</span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 12}}>
                    <button
                        disabled={amount === 1}
                        onClick={() => {
                            dispatch(remove(name));
                        }}
                    >
                        -
                    </button>
                    {amount}
                    <button
                        onClick={() => {
                            dispatch(add(name));
                        }}
                    >
                        +
                    </button>
                </div>
                <button
                    style={{
                        background: "#BF0A30",
                        border: "none",
                        padding: 8,
                        borderRadius: 8,
                        color: "white",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        dispatch(del(name));
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
