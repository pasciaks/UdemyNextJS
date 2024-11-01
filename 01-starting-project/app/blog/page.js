import React from "react";
import Link from "next/link";
import Menu from "../components/menu";

export default function BlogPage() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/blog/1">Blog1</Link>
        </li>
        <li>
          <Link href="/blog/2">Blog2</Link>
        </li>
      </ul>
      {/* <Link href="/blog/1">Blog1</Link>
      <Link href="/blog/2">Blog2</Link> */}
      <Menu />
    </main>
  );
}
