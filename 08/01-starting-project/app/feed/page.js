import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export async function generateMetadata(data) {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: "" + numberOfPosts + " post(s)",
    description: "All posts by all users",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
