"use client";

export default function FilterError({ error }) {
  return (
    <div>
      <h2>An Error ocurred - Invalid Path</h2>
      <p>{error.message}</p>
    </div>
  );
}
