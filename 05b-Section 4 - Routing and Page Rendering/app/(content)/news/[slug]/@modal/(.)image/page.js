import React from "react";

import { DUMMY_NEWS } from "@/dummy-news_old";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

// nested page in dynamic route

export default async function InterceptedPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
