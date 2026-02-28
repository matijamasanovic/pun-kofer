// app/blog/[id]/page.tsx
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("naslov, sadrzaj, slika_url")
    .eq("id", id)
    .single();

  if (!post) return { title: "Post nije pronađen" };

  const opis = post.sadrzaj?.replace(/<[^>]*>/g, "").slice(0, 160) ?? "";

  return {
    title: `${post.naslov} | Pun Kofer`,
    description: opis,
    openGraph: {
      title: post.naslov,
      description: opis,
      images: post.slika_url ? [{ url: post.slika_url }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .eq("aktivan", true)
    .single();

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        {post.slika_url && (
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src={post.slika_url}
              alt={post.naslov}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0f172a]/50" />
          </div>
        )}

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Nazad na blog
            </Link>

            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.created_at).toLocaleDateString("sr-Latn", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>

            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-8 text-balance">
              {post.naslov}
            </h1>

            <div
              className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.sadrzaj || "" }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
