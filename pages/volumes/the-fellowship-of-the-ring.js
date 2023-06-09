import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function fellowship() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/volumes">All Volumes</Link>;
      <h1>The fellowship of the ring</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      <Link href="/volumes/the-two-towers">next Volume</Link>;
    </>
  );
}
