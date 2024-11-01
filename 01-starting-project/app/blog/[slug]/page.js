import React from "react";
import Menu from "../../components/menu";
export default function BlogItem(props) {
  return (
    <main>
      <div>{JSON.stringify(props.params.slug)}</div>
      <Menu />
    </main>
  );
}
