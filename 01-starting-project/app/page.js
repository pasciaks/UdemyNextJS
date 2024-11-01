import Link from "next/link";

import Menu from "./components/menu";

import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Menu />
    </main>
  );
}
