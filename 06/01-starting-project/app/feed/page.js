import Posts from "@/components/posts";
import { deletePosts, getPosts } from "@/lib/posts";

export default async function FeedPage() {
  const posts = await getPosts();
  // await deletePosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
