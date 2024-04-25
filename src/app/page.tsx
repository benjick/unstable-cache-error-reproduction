import { cached } from "./cached";
import { Form } from "./form";

export default async function Page() {
  const value = await cached();
  return (
    <main>
      <p>{value}</p>
      <Form />
    </main>
  );
}