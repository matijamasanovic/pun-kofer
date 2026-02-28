"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ChevronRight, X } from "lucide-react";

type Aranzman = {
  id: string;
  naslov: string;
  destinacija: string;
  slika_url: string;
  cijena: number;
  trajanje?: string;
  opis?: string;
};

export default function SearchDestinacije({
  aranzmani,
}: {
  aranzmani: Aranzman[];
}) {
  const [query, setQuery] = useState("");

  const filtered = aranzmani.filter((a) => {
    const q = query.toLowerCase();
    return (
      a.naslov.toLowerCase().includes(q) ||
      a.destinacija.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      {/* Search bar */}
      <div className="mb-10 mx-auto max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pretražite po nazivu ili destinaciji..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {query && (
          <p className="mt-2 text-xs text-muted-foreground text-center">
            {filtered.length === 0
              ? "Nema rezultata za traženi pojam"
              : `Pronađeno ${filtered.length} ${
                  filtered.length === 1 ? "aranžman" : "aranžmana"
                }`}
          </p>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-muted-foreground text-sm">
            Nema rezultata za "
            <span className="font-semibold text-foreground">{query}</span>"
          </p>
          <button
            onClick={() => setQuery("")}
            className="mt-4 text-sm font-semibold text-primary hover:underline"
          >
            Prikaži sve aranžmane
          </button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={dest.slika_url}
                  alt={dest.naslov}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {dest.destinacija}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {dest.naslov}
                </h3>
                {dest.trajanje && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Clock className="h-3.5 w-3.5" />
                    {dest.trajanje}
                  </span>
                )}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {dest.opis}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">Od </span>
                    <span className="text-xl font-bold text-primary">
                      €{dest.cijena}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {" "}
                      /osobi
                    </span>
                  </div>
                  <Link
                    href={`/destinacije/${dest.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Pogledaj
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
