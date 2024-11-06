import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  // const response = await fetch("http://localhost:8080/news");
  // const news = await response.json();
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }

  const news = await getAllNews();

  return (
    <div id="news">
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
