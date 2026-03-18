import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, activeLightsCount, turnAllLightsOff, turnAllLightsOn }) {
    return (
        <>
            <Link href="/">← Back home</Link>
            <h1>Quick Actions</h1>
            <QuickActions
                lights={lights}
                activeLightsCount={activeLightsCount}
                onTurnAllLightsOff={turnAllLightsOff}
                onTurnAllLightsOn={turnAllLightsOn}
            />
        </>
    );
}
