export default function App() {
    return <Sum valueA={2} valueB={4} />;
}

function Sum({ valueA, valueB }) {
    return (
        <div>
            {valueA} + {valueB} = {valueA + valueB}
        </div>
    );
}
