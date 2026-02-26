import "./styles.css";

export default function App() {
    return <Article />;
}

function Article() {
    return (
        <article className="article">
            <h2 className="article__title">Example Heading</h2>
            <label htmlFor="exampleInput">Example Input</label>
            <input id="exampleInput" type="text"></input>
            <a
                className="article__link"
                href="https://de.wikipedia.org/wiki/Olympische_Winterspiele_2026"
            >
                Olympische Winterspiele 2026
            </a>
        </article>
    );
}
