"use client";

import { useFormStatus } from "react-dom";
import { update } from "./cached";

export function Form() {
  return (
    <form action={update}>
      <LoadingButton>Update</LoadingButton>
    </form>
  );
}

function LoadingButton({
  children
}: {
  children: React.ReactNode;
}) {
  const status = useFormStatus()
  const loading = status.pending
  return (
    <button disabled={loading}>
      {loading ? "Loading..." : children}
    </button>
  );
}