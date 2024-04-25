import { cached } from "./cached";
import { Form } from "./form";

export default async function Page() {
  const value = await cached();
  return (
    <main>
      <h1 className="text-2xl font-bold">unstable_cache</h1>
      <p>{value}</p>
      <Form />
    </main>
  );
}
