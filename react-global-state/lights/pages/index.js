import Link from "../components/Link";

export default function HomePage({ activeLightsCount }) {
    return (
        <div>
            <h1>Home</h1>
            <p>{activeLightsCount} light(s) are on.</p>
            <p>
                <Link href="/rooms">All Rooms →</Link>
            </p>
            <p>
                <Link href="/actions">Quick Actions →</Link>
            </p>
        </div>
    );
}
