import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
  const news = getAllNews();
  return (
    <div id="news">
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
