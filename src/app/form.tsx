"use client";

import { update } from "./cached";

export function Form() {
  return (
    <form action={update}>
      <button>Update</button>
    </form>
  );
}