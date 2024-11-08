"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <button disabled>Creating Post...</button>;
  }

  if (status.error) {
    return <button disabled>Error: {status.error.message}</button>;
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
