import React from "react";

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <hr></hr>
      <section>{archive}</section>
      <hr></hr>
      <section>{latest}</section>
    </div>
  );
}
