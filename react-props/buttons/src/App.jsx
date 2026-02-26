export default function App() {
    function handleClick() {
        alert("You clicked me!");
    }

    return (
        <Button
            color="#ff4a11"
            disabled={false}
            text="Button"
            onClick={handleClick}
        />
    );
}

function Button({ color, disabled, text, onClick }) {
    return (
        <button
            disabled={disabled}
            style={{ color: color, height: "100px" }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
