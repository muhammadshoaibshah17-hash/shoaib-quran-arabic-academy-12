import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogs } from "../../lib/blogData";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${blog.title} | Shoaib Quran Academy`,
    description: blog.description,
  };
}

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
            {blog.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">{blog.title}</h1>

          <div className="flex items-center gap-2 mt-5 text-emerald-100">
            <Calendar size={18} />
            {blog.date}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-lg p-10">
            {blog.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-lg leading-9 mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}