import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://shoaib-quran-arabic-academy-12.vercel.app/sitemap.xml",
  };
}