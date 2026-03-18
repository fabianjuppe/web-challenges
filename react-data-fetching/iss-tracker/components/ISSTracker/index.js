import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function fetcher(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = await response.json();
        error.status = response.status;
        throw error;
    }
    return response.json();
}

export default function ISSTracker() {
    const {
        data: coords,
        isLoading,
        error,
        mutate,
    } = useSWR(URL, fetcher, {
        refreshInterval: 5000,
    });

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <main>
            <Map longitude={coords.longitude} latitude={coords.latitude} />
            <Controls
                longitude={coords.longitude}
                latitude={coords.latitude}
                onRefresh={mutate}
            />
        </main>
    );
}
