import { redirect } from "next/navigation";

export default function LocaleCatchAll({
  params,
}: Readonly<{
  params: { slug: string[] };
}>) {
  const path = params.slug.join("/");
  redirect(path ? `/${path}` : "/");
}
