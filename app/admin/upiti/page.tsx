// app/admin/upiti/page.tsx
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "../LogoutButton";
import UpitiList from "./UpitiList";
import { Plane, ArrowLeft, MessageSquare } from "lucide-react";

export default async function AdminUpitiPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: upiti } = await supabase
    .from("upiti")
    .select("*")
    .order("created_at", { ascending: false });

  const neprocitani = upiti?.filter((u) => !u.procitan).length ?? 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-3">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Plane className="h-5 w-5 text-primary" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Admin panel
                </p>
                <h1 className="font-serif text-xl font-bold text-foreground">
                  Pun Kofer
                </h1>
              </div>
            </div>

            {/* Akcije */}
            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Nazad</span>
              </Link>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
              Ukupno
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {upiti?.length ?? 0}
            </p>
            <p className="text-sm text-muted-foreground mt-1">upita</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-1">
              Neprocitani
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {neprocitani}
            </p>
            <p className="text-sm text-muted-foreground mt-1">upita</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-600 mb-1">
              Pročitani
            </p>
            <p className="font-serif text-3xl font-bold text-foreground">
              {(upiti?.length ?? 0) - neprocitani}
            </p>
            <p className="text-sm text-muted-foreground mt-1">upita</p>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Upravljanje
          </p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Svi upiti
          </h2>
        </div>

        {upiti?.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <MessageSquare className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Nema upita
            </h3>
            <p className="text-sm text-muted-foreground">
              Kada korisnici pošalju poruku, pojaviće se ovdje.
            </p>
          </div>
        ) : (
          <UpitiList upiti={upiti ?? []} />
        )}
      </main>
    </div>
  );
}
