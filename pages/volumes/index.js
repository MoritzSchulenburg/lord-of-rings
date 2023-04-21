import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes?.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
        {/* <li>
          <Link href="pages/volumes/the-fellowship-of-the-ring.js">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="pages/volumes/the-return-of-the-king.js">
            the return of the King
          </Link>
        </li>
        <li>
          <Link href="pages/volumes/the-two-towers.js">The two towers</Link>
        </li> */}
      </ul>
    </>
  );
}
