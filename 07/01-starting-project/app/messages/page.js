import { getMessages } from "@/lib/messages";

// import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";

// filewide cache config

// export const revalidate = 10; // 10 seconds

// export const dynamic = "force-dynamic"; // equal to no-store caching
// export const dynamic = 'force-static'; // probably not a good choice

export default async function MessagesPage() {
  // unstable_noStore(); // force no-store caching

  // NOTE: overriding nextjs cache config for fetch

  // const response = await fetch("http://localhost:8080/messages", {
  //   headers: {
  //     "X-ID": "page1", // deliberately set to same as layout
  //   },
  //   // cache: "no-cache", // force-cache, no-store
  //   // next: {
  //   //   revalidate: 90, // 90 seconds then revalidate
  //   // },
  //   // next: {
  //   //   tags: ["messages"], // see messages/new/page.js
  //   // },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
