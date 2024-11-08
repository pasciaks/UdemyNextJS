import { getMessages } from "@/lib/messages";

// filewide cache config

// export const revalidate = 10; // 10 seconds

// export const dynamic = "force-dynamic"; // equal to no-store caching
// export const dynamic = 'force-static'; // probably not a good choice

export default async function MessagesLayout({ children }) {
  // // NOTE: overriding nextjs cache config for fetch
  // const response = await fetch("http://localhost:8080/messages", {
  //   headers: {
  //     "X-ID": "page1", // deliberately set to same as page
  //   },
  //   // cache: "no-cache", // force-cache, no-store
  //   // next: {
  //   //   revalidate: 90, // 90 seconds then revalidate
  //   // },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
