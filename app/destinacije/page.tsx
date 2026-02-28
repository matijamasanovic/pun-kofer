import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, Star, ChevronRight, Plane } from "lucide-react";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import SearchDestinacije from "@/components/SearchDestinacije";

export const metadata: Metadata = {
  title: "Destinacije | Pun Kofer Putovanja",
  description:
    "Istrazite nase najljepse destinacije - od Crne Gore do egzoticnih lokacija sirom svijeta.",
};

export default async function DestinacijePage() {
  const supabase = await createClient();
  const { data: allDestinations } = await supabase
    .from("aranzmani")
    .select("*")
    .eq("aktivan", true)
    .order("created_at", { ascending: false });

  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        {/* Hero banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/trip-city.jpg"
            alt="Destinacije pozadina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0f172a]/75" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm mb-6">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              Nase destinacije
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#cbd5e1]">
              Istrazite siroku ponudu destinacija koje smo pazljivo odabrali za
              vas. Od domacih ljepota Crne Gore do egzoticnih lokacija sirom
              svijeta.
            </p>
          </div>
        </section>

        {/* Destinations grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SearchDestinacije aranzmani={allDestinations ?? []} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
              Ne mozete da se odlucite?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Kontaktirajte nas i pomoci cemo vam da odaberete savrsenu
              destinaciju prema vasim zeljama i budzetu.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Posaljite upit
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
