import { cached } from "./cached";
import { Form } from "./form";

export default async function Page() {
  const value = await cached();
  return (
    <main>
      <h1 className="text-2xl font-bold">better-unstable-cache</h1>
      <p>Count: {value}</p>
      <Form />
    </main>
  );
}
