import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/shop");
  return <div>Home</div>;
}
