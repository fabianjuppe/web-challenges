export default function App() {
    return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
    const smiley = isHappy ? ":)" : ":(";
    return <div>{smiley}</div>;
}
