"use server";

import { revalidateTag, unstable_cache } from "next/cache";

export const cached = unstable_cache(async () => get(), [`get`], {
  tags: [`test-cache-value-2`],
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
  console.log(`Updated value to ${database.value} (unstable_cache)`);
  revalidateTag(`test-cache-value-2`);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
