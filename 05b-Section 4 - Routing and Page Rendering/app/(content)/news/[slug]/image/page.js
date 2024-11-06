import React from "react";

import { DUMMY_NEWS } from "@/dummy-news_old";
import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";
// nested page in dynamic route

export default async function ImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
