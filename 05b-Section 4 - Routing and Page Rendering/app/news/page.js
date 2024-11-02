import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li className={"news-article"} key={item.id}>
            <Link href={`/news/${item.id}`}>
              <img src={`/images/news/${item.image}`} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
