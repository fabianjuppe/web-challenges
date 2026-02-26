import React from "react";
import "./styles.css";

export default function App() {
    return (
        <main>
            <Button>A Button A</Button>
            <Button>B Button B</Button>
            <Button>C Button C</Button>
            <Button>D Button D</Button>
        </main>
    );
}

function Button({ children }) {
    return (
        <button className="button" type="button">
            {children}
        </button>
    );
}
