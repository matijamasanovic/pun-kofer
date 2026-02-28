import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AranžmanMenu from "./AranžmanMenu";
import { Plane, Plus, MapPin, BookOpen, MessageSquare } from "lucide-react";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: aranzmani } = await supabase
    .from("aranzmani")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: upiti } = await supabase
    .from("upiti")
    .select("id, procitan")
    .eq("procitan", false);

  const neprocitani = upiti?.length ?? 0;

  return (
    <div className="min-h-screen bg-background">
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
                href="/admin/upiti"
                className="relative inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <MessageSquare className="h-4 w-4" />
                Upiti
                {neprocitani > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {neprocitani}
                  </span>
                )}
              </Link>
              <Link
                href="/admin/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <BookOpen className="h-4 w-4" />
                Blog
              </Link>
              <Link
                href="/admin/novi"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Plus className="h-4 w-4" />
                Novi aranžman
              </Link>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Ukupno
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {aranzmani?.length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">aranžmana</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Aktivni
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {aranzmani?.filter((a) => a.aktivan).length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">aranžmana</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Neaktivni
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {aranzmani?.filter((a) => !a.aktivan).length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">aranžmana</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Upravljanje
          </p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Svi aranžmani
          </h2>
        </div>

        {aranzmani?.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Plane className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Nema aranžmana
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Dodajte prvi aranžman klikom na dugme ispod.
            </p>
            <Link
              href="/admin/novi"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              Dodaj prvi aranžman
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {aranzmani?.map((a) => (
              <div
                key={a.id}
                className={`group rounded-2xl border bg-card p-4 shadow-sm transition-all hover:shadow-md flex items-center justify-between gap-4 ${
                  a.aktivan ? "border-border" : "border-red-200 opacity-60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    {a.slika_url && (
                      <img
                        src={a.slika_url}
                        alt={a.naslov}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                    )}
                    <span
                      className={`absolute -top-1.5 -left-1.5 h-3.5 w-3.5 rounded-full border-2 border-card ${
                        a.aktivan ? "bg-green-500" : "bg-red-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {a.naslov}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {a.destinacija}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-primary mt-1">
                      €{a.cijena}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        /osobi
                      </span>
                    </p>
                  </div>
                </div>
                <AranžmanMenu
                  id={a.id}
                  aktivan={a.aktivan}
                  slikaUrl={a.slika_url}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
