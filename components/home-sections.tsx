"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Shield,
  Compass,
  ChevronRight,
  Quote,
  User,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
  CountUp,
} from "./scroll-animations";

function CloudSeparator() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-1px",
        left: 0,
        width: "100%",
        zIndex: 20,
        pointerEvents: "none",
      }}
    >
      <img
        src="/cloud-separator.png"
        alt=""
        aria-hidden="true"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <Image
        src="/images/hero-beach.jpg"
        alt="Tropska plaza - Pun Kofer Putovanja"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/50 to-transparent" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm border border-primary/30"
        >
          Otkrijte nezaboravne destinacije
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl text-balance"
        >
          Gdje Pocinje Vasa
          <span className="text-primary"> Avantura</span> Snova
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 max-w-lg text-base leading-relaxed text-[#cbd5e1] md:text-lg"
        >
          Dobrodosli u Pun Kofer Putovanja! Mi smo profesionalna turisticka
          agencija posvecena kreiranju savrsenih putovanja za svakoga.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/destinacije"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
          >
            Pogledajte destinacije
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
          >
            Kontaktirajte nas
          </Link>
        </motion.div>
      </div>
      <CloudSeparator />
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Nas tim"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl lg:block"
              >
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Godina iskustva</p>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <p className="mb-2 font-serif text-lg italic text-primary">
                O nama
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Premijer turisticka agencija u Crnoj Gori
              </h2>
              <div className="mb-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/20">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-foreground">
                      Ekskluzivna putovanja
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nudimo pazljivo birana putovanja za svaki ukus i budzet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/20">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-foreground">
                      Profesionalni vodici
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nas tim iskusnih vodica osigurava nezaboravno iskustvo.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/o-nama"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Saznajte vise
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const destinations = [
  { name: "Boka Kotorska", image: "/images/dest-kotor.jpg", tours: 8 },
  { name: "Sveti Stefan", image: "/images/dest-sveti-stefan.jpg", tours: 5 },
  { name: "Santorini", image: "/images/dest-santorini.jpg", tours: 12 },
  { name: "Dubrovnik", image: "/images/dest-dubrovnik.jpg", tours: 6 },
];

export function FeaturedDestinations() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <AnimatedSection>
            <div>
              <p className="mb-2 font-serif text-lg italic text-primary">
                Popularne destinacije
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Istrazite omiljene destinacije
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Otkrijte najljepsa mjesta na svijetu uz Pun Kofer Putovanja.
              Biramo samo provjerene i najatraktivnije destinacije.
            </p>
          </AnimatedSection>
        </div>
        <StaggerChildren
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.15}
        >
          {destinations.map((dest) => (
            <StaggerItem key={dest.name}>
              <Link
                href="/destinacije"
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <p className="text-xs text-primary font-medium mb-1">
                    {dest.tours} tura
                  </p>
                  <h3 className="text-lg font-bold text-white">{dest.name}</h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// AwesomeTrips — prima podatke iz Supabase
// ─────────────────────────────────────────────
type Aranžman = {
  id: string;
  naslov: string;
  slika_url: string;
  trajanje: string | null;
  cijena: number;
  opis: string | null;
};

export function AwesomeTrips({ aranzmani = [] }: { aranzmani?: Aranžman[] }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <p className="mb-2 font-serif text-lg italic text-primary">
            Istrazite svijet
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Nevjerovatna putovanja sa nama
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Odaberite jedno od nasih pazljivo kreiranih putovanja i uzivajte u
            svakom trenutku. Sve je organizovano do detalja.
          </p>
        </AnimatedSection>

        {aranzmani.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Trenutno nema dostupnih aranžmana.
          </p>
        ) : (
          <StaggerChildren
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.12}
          >
            {aranzmani.map((a) => (
              <StaggerItem key={a.id}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.slika_url}
                      alt={a.naslov}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {a.naslov}
                    </h3>
                    {a.opis && (
                      <p className="mb-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {a.opis}
                      </p>
                    )}
                    {a.trajanje && (
                      <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {a.trajanje}
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-xs text-muted-foreground">
                          Od{" "}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          €{a.cijena}
                        </span>
                      </div>
                      <Link
                        href="/kontakt"
                        className="rounded-lg bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Rezervisi
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}

export function TourPackageSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div>
              <p className="mb-2 font-serif text-lg italic text-primary">
                Zasto mi
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Nevjerovatni turisticki paketi sirom svijeta
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                U agenciji Pun Kofer Putovanja vjerujemo da svako putovanje
                treba biti posebno. Kombinujemo godine iskustva, lokalno znanje
                i strast prema putovanjima kako bismo vam pruzili nezaboravna
                iskustva.
              </p>
              <StaggerChildren
                className="grid gap-4 sm:grid-cols-2"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        Sigurnost na prvom mjestu
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Licencirani smo i osigurani
                      </p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Compass className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        Avantura i istrazivanje
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Jedinstvene rute i iskustva
                      </p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        Vrhunski smjestaj
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Samo provjereni hoteli
                      </p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        Male grupe
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Personalizovani pristup
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerChildren>
              <Link
                href="/destinacije"
                className="mt-8 group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Pogledajte ponude
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/trip-hiking.jpg"
                  alt="Planinarenje avantura"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Marko Petrovic",
    role: "Niksic",
    text: "Fenomenalno iskustvo! Pun Kofer Putovanja su nam organizovali nezaboravno putovanje u Grcku. Svaki detalj je bio savrseno osmisljen.",
  },
  {
    name: "Ana Vukovic",
    role: "Podgorica",
    text: "Vec trecu godinu zaredom putujemo sa ovom agencijom i svaki put smo odusevljeni. Profesionalnost i posvecenost na najvisem nivou.",
  },
  {
    name: "Nikola Djurovic",
    role: "Bar",
    text: "Preporucujem svima! Od prvog kontakta do povratka sa putovanja, sve je proteklo bez problema. Najbolja agencija u Crnoj Gori.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <p className="mb-2 font-serif text-lg italic text-primary">
            Iskustva klijenata
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Sta kazu nasi putnici
          </h2>
        </AnimatedSection>
        <StaggerChildren
          className="grid gap-6 md:grid-cols-3"
          staggerDelay={0.15}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Image
        src="/images/testimonial-bg.jpg"
        alt="Priroda pozadina"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0f172a]/85" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div>
              <p className="mb-2 font-serif text-lg italic text-primary">
                Nasa agencija
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
                Zapocnite svaki dan sa zapanjujucom destinacijom
              </h2>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                U agenciji Pun Kofer Putovanja, nase je poslanstvo da svakom
                putniku pruzimo nezaboravno iskustvo. Sa vise od 15 godina na
                trzistu, postali smo jedan od lidera turisticke industrije u
                Crnoj Gori.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren
            className="grid grid-cols-2 gap-6"
            staggerDelay={0.15}
          >
            <StaggerItem>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10 transition-colors hover:bg-white/15">
                <p className="text-4xl font-bold text-primary">
                  <CountUp end={976} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Srecnih putnika</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10 transition-colors hover:bg-white/15">
                <p className="text-4xl font-bold text-primary">
                  <CountUp end={745} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Nagrada</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10 transition-colors hover:bg-white/15">
                <p className="text-4xl font-bold text-primary">
                  <CountUp end={150} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Destinacija</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10 transition-colors hover:bg-white/15">
                <p className="text-4xl font-bold text-primary">
                  <CountUp end={50} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Zaposlenih</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Nasa prednost
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Zasto putovati sa nama?
          </h2>
        </AnimatedSection>
        <StaggerChildren
          className="grid gap-8 md:grid-cols-3"
          staggerDelay={0.15}
        >
          <StaggerItem>
            <div className="text-center group">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <Shield className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Garancija kvaliteta
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Svako putovanje je pazljivo planirano i provjereno. Garantujemo
                kvalitet smjestaja, prevoza i usluga.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center group">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <MapPin className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Lokalno znanje
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Poznajemo svaku destinaciju iz prve ruke. Nasi vodici su lokalni
                eksperti koji znaju najbolja skrivena mjesta.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center group">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <Users className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Podrska 24/7
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Uvijek smo tu za vas - prije, tokom i nakon putovanja. Nas tim
                za podrsku je dostupan non-stop.
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}

export function ContactCTASection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Image
        src="/images/trip-city.jpg"
        alt="Pozadina kontakt sekcije"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/75 to-[#0f172a]/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div>
              <p className="mb-2 font-serif text-lg italic text-primary">
                Javite nam se
              </p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
                Treba vam pomoc za sljedece putovanje?
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#cbd5e1]">
                U agenciji Pun Kofer Putovanja vjerujemo u transformativnu moc
                putovanja. Kao strastveni istrazivaci, razumijemo zelju za
                otkrivanjem novih iskustava.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Poruka poslata!
                  </h3>
                  <p className="text-sm text-[#cbd5e1]">
                    Javicemo vam se u najkracem moguce roku.
                  </p>
                </motion.div>
              ) : (
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-8">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Vase ime *"
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 pr-10 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-primary focus:bg-white/15"
                      />
                      <User className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email adresa *"
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 pr-10 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-primary focus:bg-white/15"
                      />
                      <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    </div>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/70 outline-none transition-colors focus:border-primary focus:bg-white/15">
                        <option value="" className="text-foreground">
                          Odaberite predmet
                        </option>
                        <option value="putovanje" className="text-foreground">
                          Organizacija putovanja
                        </option>
                        <option value="rezervacija" className="text-foreground">
                          Rezervacija smjestaja
                        </option>
                        <option value="grupno" className="text-foreground">
                          Grupno putovanje
                        </option>
                        <option value="ostalo" className="text-foreground">
                          Ostalo
                        </option>
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-white/40" />
                    </div>
                    <div className="relative">
                      <textarea
                        rows={3}
                        placeholder="Vasa poruka *"
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 pr-10 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-primary focus:bg-white/15 resize-none"
                      />
                      <MessageSquare className="absolute right-3 top-3 h-4 w-4 text-white/40" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(true)}
                      className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
                    >
                      Posaljite poruku
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          <div className="hidden lg:block relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute top-4 right-8"
            >
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-4 border-primary bg-primary/20 backdrop-blur-md shadow-2xl shadow-primary/20">
                <p className="text-3xl font-bold text-primary">
                  <CountUp end={976} suffix="+" />
                </p>
                <p className="text-xs font-medium text-white/80">
                  Srecnih putnika
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute top-44 right-[-10px]"
            >
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-primary bg-primary/20 backdrop-blur-md shadow-2xl shadow-primary/20">
                <p className="text-3xl font-bold text-primary">
                  <CountUp end={745} suffix="+" />
                </p>
                <p className="text-xs font-medium text-white/80">Nagrada</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute bottom-12 right-24"
            >
              <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full border-4 border-primary bg-primary/20 backdrop-blur-md shadow-2xl shadow-primary/20">
                <p className="text-3xl font-bold text-primary">
                  <CountUp end={805} suffix="+" />
                </p>
                <p className="text-xs font-medium text-white/80">
                  Pozitivnih recenzija
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
