import { Header } from "../components/Header";

export const Page = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, background: "#eaeaea" }}>
            <Header />
            {props.children}
        </div>
    );
};
