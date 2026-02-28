// app/destinacije/[id]/page.tsx
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, ChevronRight, Clock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: aranzman } = await supabase
    .from("aranzmani")
    .select("naslov, opis, slika_url")
    .eq("id", id)
    .single();

  if (!aranzman) return { title: "Aranžman nije pronađen" };

  return {
    title: `${aranzman.naslov} | Pun Kofer`,
    description: aranzman.opis?.slice(0, 160) ?? "",
    openGraph: {
      title: aranzman.naslov,
      description: aranzman.opis?.slice(0, 160) ?? "",
      images: aranzman.slika_url ? [{ url: aranzman.slika_url }] : [],
    },
  };
}

export default async function AranzmanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: aranzman } = await supabase
    .from("aranzmani")
    .select("*")
    .eq("id", id)
    .eq("aktivan", true)
    .single();

  if (!aranzman) notFound();

  // Uzmi slična 3 aranžmana iste destinacije
  const { data: slicni } = await supabase
    .from("aranzmani")
    .select("*")
    .eq("aktivan", true)
    .eq("destinacija", aranzman.destinacija)
    .neq("id", id)
    .limit(3);

  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        {/* Hero */}
        {aranzman.slika_url && (
          <div className="relative h-[450px] lg:h-[560px] overflow-hidden">
            <Image
              src={aranzman.slika_url}
              alt={aranzman.naslov}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0f172a]/55" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto max-w-7xl w-full px-4 lg:px-8 pb-12">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
                  <MapPin className="h-3 w-3" />
                  {aranzman.destinacija}
                </span>
                <h1 className="font-serif text-3xl font-bold text-white md:text-5xl text-balance max-w-3xl">
                  {aranzman.naslov}
                </h1>
              </div>
            </div>
          </div>
        )}

        {/* Sadržaj */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Lijeva kolona — opis */}
              <div className="lg:col-span-2">
                <Link
                  href="/destinacije"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Nazad na destinacije
                </Link>

                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  O aranžmanu
                </h2>

                <div className="prose prose-neutral max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
                  {aranzman.opis?.split("\n").map(
                    (p: string, i: number) =>
                      p.trim() && (
                        <p
                          key={i}
                          className="mb-4 text-base leading-relaxed text-muted-foreground"
                        >
                          {p}
                        </p>
                      )
                  )}
                </div>
              </div>

              {/* Desna kolona — cijena i CTA */}
              <div>
                <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
                    Cijena
                  </p>
                  <div className="mb-6">
                    <span className="font-serif text-4xl font-bold text-foreground">
                      €{aranzman.cijena}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      /osobi
                    </span>
                  </div>

                  {aranzman.trajanje && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Clock className="h-4 w-4 text-primary" />
                      {aranzman.trajanje}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    {aranzman.destinacija}
                  </div>

                  <Link
                    href={`/kontakt?aranzman=${encodeURIComponent(
                      aranzman.naslov
                    )}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    Rezerviši odmah
                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Besplatna konsultacija · Bez obaveza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slični aranžmani */}
        {slicni && slicni.length > 0 && (
          <section className="bg-muted py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Slični aranžmani
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {slicni.map((s) => (
                  <Link
                    key={s.id}
                    href={`/destinacije/${s.id}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={s.slika_url}
                        alt={s.naslov}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {s.naslov}
                      </h3>
                      <p className="text-sm font-bold text-primary">
                        €{s.cijena}
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          /osobi
                        </span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
