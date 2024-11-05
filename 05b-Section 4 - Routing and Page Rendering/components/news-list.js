import React from "react";
import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((item) => (
        <li className={"news-article"} key={item.id}>
          <Link href={`/news/${item.id}`}>
            <img src={`/images/news/${item.image}`} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
