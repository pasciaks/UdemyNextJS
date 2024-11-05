"use client";

import React from "react";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

import { useRouter } from "next/navigation";

// nested page in dynamic route

export default function InterceptedPage({ params }) {
  const router = useRouter();

  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
