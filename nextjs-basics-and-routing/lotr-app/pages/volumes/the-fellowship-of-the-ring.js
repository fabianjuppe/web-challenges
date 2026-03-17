import { volumes } from "/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function TheFellowShipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <h2>{book.ordinal}</h2>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers">Next Volume →</Link>
    </>
  );
}
