import { volumes } from "/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
    const router = useRouter();

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function handleRandomVolume() {
        router.push(`/volumes/${getRandomElement(volumes).slug}`);
    }

    return (
        <>
            <Link href="/volumes">Go to all volumes</Link>
            <div></div>
            <button onClick={handleRandomVolume}>Random Volume</button>
        </>
    );
}
