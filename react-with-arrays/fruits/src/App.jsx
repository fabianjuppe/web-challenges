import Card from "./components/Card";
import { fruits } from "./db";

export default function App() {
    return (
        <div className="app">
            {fruits.map(({ id, name, color }) => (
                <Card key={id} name={name} color={color} />
            ))}
        </div>
    );
}
