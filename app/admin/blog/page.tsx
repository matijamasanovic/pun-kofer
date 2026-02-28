// app/admin/blog/page.tsx
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "../LogoutButton";
import BlogMenu from "./BlogMenu";
import { Plane, Plus, BookOpen, ArrowLeft } from "lucide-react";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Plane className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Admin panel
                </p>
                <h1 className="font-serif text-xl font-bold text-foreground">
                  Pun Kofer
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Aranžmani
              </Link>
              <Link
                href="/admin/blog/novi"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Plus className="h-4 w-4" />
                Novi post
              </Link>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Ukupno
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {posts?.length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">postova</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Aktivni
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {posts?.filter((p) => p.aktivan).length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">postova</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Neaktivni
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {posts?.filter((p) => !p.aktivan).length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">postova</p>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Upravljanje
          </p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Svi blog postovi
          </h2>
        </div>

        {/* Lista */}
        {posts?.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Nema blog postova
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Dodajte prvi post klikom na dugme ispod.
            </p>
            <Link
              href="/admin/blog/novi"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              Dodaj prvi post
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts?.map((p) => (
              <div
                key={p.id}
                className={`group rounded-2xl border bg-card p-4 shadow-sm transition-all hover:shadow-md flex items-center justify-between gap-4 ${
                  p.aktivan ? "border-border" : "border-red-200 opacity-60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    {p.slika_url && (
                      <img
                        src={p.slika_url}
                        alt={p.naslov}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                    )}
                    <span
                      className={`absolute -top-1.5 -left-1.5 h-3.5 w-3.5 rounded-full border-2 border-card ${
                        p.aktivan ? "bg-green-500" : "bg-red-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {p.naslov}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(p.created_at).toLocaleDateString("sr-Latn", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <BlogMenu
                  id={p.id}
                  aktivan={p.aktivan}
                  slikaUrl={p.slika_url}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
