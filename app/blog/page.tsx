// app/blog/page.tsx
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pun Kofer Putovanja",
  description:
    "Čitajte naše najnovije tekstove o putovanjima, destinacijama i savjetima za putnike.",
};

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("aktivan", true)
    .order("created_at", { ascending: false });

  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/trip-city.jpg"
            alt="Blog pozadina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0f172a]/75" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              Blog
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#cbd5e1]">
              Savjeti, priče i inspiracija za vaše sljedeće putovanje.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {posts?.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Trenutno nema objavljenih postova.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts?.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {post.slika_url && (
                        <Image
                          src={post.slika_url}
                          alt={post.naslov}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.created_at).toLocaleDateString(
                          "sr-Latn",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </div>
                      <h2 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.naslov}
                      </h2>
                      <div
                        className="text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-4 [&>*]:inline"
                        dangerouslySetInnerHTML={{ __html: post.sadrzaj || "" }}
                      />
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Čitaj više
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
