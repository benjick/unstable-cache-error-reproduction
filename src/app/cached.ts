"use server";

import { revalidateTag } from "next/cache";
import { memoize } from "nextjs-better-unstable-cache";

export const cached = memoize(get, {
  persist: true,
  duration: 60,
  revalidateTags: () => [`test-cache-value`],
});

const database = {
  value: 0,
};

async function get() {
  return Promise.resolve(database.value);
}

export async function update() {
  await sleep(500);
  database.value++;
  revalidateTag(`test-cache-value`);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}