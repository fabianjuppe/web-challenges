import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

async function fetcher(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        error.info = await response.json();
        error.status = response.status;
        throw error;
    }
    return response.json();
}

export default function Character() {
    const router = useRouter();
    const { id } = router.query;

    const URL = `https://swapi.py4e.com/api/people/${id}`;
    const { data, isLoading, error } = useSWR(URL, fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <Layout>
            <Card
                id={id}
                name={data.name}
                height={data.height}
                eyeColor={data.eye_color}
                birthYear={data.birth_year}
            />
        </Layout>
    );
}
