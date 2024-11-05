import React from "react";
import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";
export default function DefaultPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
