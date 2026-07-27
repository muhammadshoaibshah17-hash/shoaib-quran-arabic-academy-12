import { redirect } from "next/navigation";

export default async function LocaleCatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug ? slug.join("/") : "";
  redirect(path ? `/${path}` : "/");
}