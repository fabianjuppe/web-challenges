export default function App() {
    return <Greeting name="Roland" />;
}

function Greeting({ name }) {
    return <div>Hello, {name === "Roland" ? "Coach" : name}!</div>;
}
