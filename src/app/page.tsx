import Link from "next/link";

export default function Page() {
  return (
    <main>
      <ul>
        <li>
          <Link
            href="/better-unstable-cache"
            className="underline underline-offset-2"
          >
            better-unstable-cache
          </Link>
        </li>
        <li>
          <Link href="/unstable_cache" className="underline underline-offset-2">
            unstable_cache
          </Link>
        </li>
      </ul>
    </main>
  );
}
