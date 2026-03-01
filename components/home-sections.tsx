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

// ─────────────────────────────────────────────
// Responsive motion wrapper — disables transform
// animations on screens narrower than 640 px so
// that off-screen initial positions never cause
// horizontal scroll or clipping issues.
// ─────────────────────────────────────────────
function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 640;
}

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

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center">
      <Image
        src="/images/hero-beach.jpg"
        alt="Tropska plaza - Pun Kofer Putovanja"
        fill
        className="object-cover object-center"
        priority
      />
      {/* stronger overlay on mobile so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/50 sm:from-[#0f172a]/80 sm:via-[#0f172a]/50 sm:to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm border border-primary/30"
        >
          Otkrijte nezaboravne destinacije
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance"
        >
          Gdje Pocinje Vasa
          <span className="text-primary"> Avantura</span> Snova
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 max-w-lg text-sm leading-relaxed text-[#cbd5e1] sm:text-base md:text-lg"
        >
          Dobrodosli u Pun Kofer Putovanja! Mi smo profesionalna turisticka
          agencija posvecena kreiranju savrsenih putovanja za svakoga.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/destinacije"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
          >
            Pogledajte destinacije
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 w-full sm:w-auto"
          >
            Kontaktirajte nas
          </Link>
        </motion.div>
      </div>
      <CloudSeparator />
    </section>
  );
}

// ─────────────────────────────────────────────
// ABOUT PREVIEW
// ─────────────────────────────────────────────
export function AboutPreview() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          {/* Image — shown AFTER text on mobile */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
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
                /* visible on mobile too — just smaller and repositioned */
                className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 rounded-xl sm:rounded-2xl bg-primary p-4 sm:p-6 text-primary-foreground shadow-xl"
              >
                <p className="text-2xl sm:text-3xl font-bold">15+</p>
                <p className="text-xs sm:text-sm">Godina iskustva</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection
            direction="right"
            delay={0.2}
            className="order-1 lg:order-2"
          >
            <div>
              <p className="mb-2 font-serif text-base sm:text-lg italic text-primary">
                O nama
              </p>
              <h2 className="mb-5 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
                Premijer turisticka agencija u Crnoj Gori
              </h2>
              <div className="mb-6 sm:mb-8 flex flex-col gap-4">
                {[
                  {
                    icon: Shield,
                    title: "Ekskluzivna putovanja",
                    desc: "Nudimo pazljivo birana putovanja za svaki ukus i budzet.",
                  },
                  {
                    icon: Users,
                    title: "Profesionalni vodici",
                    desc: "Nas tim iskusnih vodica osigurava nezaboravno iskustvo.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-0.5 text-sm sm:text-base font-semibold text-foreground">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/o-nama"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
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

// ─────────────────────────────────────────────
// FEATURED DESTINATIONS
// ─────────────────────────────────────────────
const destinations = [
  { name: "Boka Kotorska", image: "/images/dest-kotor.jpg", tours: 8 },
  { name: "Sveti Stefan", image: "/images/dest-sveti-stefan.jpg", tours: 5 },
  { name: "Santorini", image: "/images/dest-santorini.jpg", tours: 12 },
  { name: "Dubrovnik", image: "/images/dest-dubrovnik.jpg", tours: 6 },
];

export function FeaturedDestinations() {
  return (
    <section className="bg-muted py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <AnimatedSection>
            <div>
              <p className="mb-1 font-serif text-base sm:text-lg italic text-primary">
                Popularne destinacije
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
                Istrazite omiljene destinacije
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Otkrijte najljepsa mjesta na svijetu uz Pun Kofer Putovanja.
              Biramo samo provjerene i najatraktivnije destinacije.
            </p>
          </AnimatedSection>
        </div>

        {/* 2-col on mobile, 4-col on desktop */}
        <StaggerChildren
          className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.15}
        >
          {destinations.map((dest) => (
            <StaggerItem key={dest.name}>
              <Link
                href="/destinacije"
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4] block"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <p className="text-[10px] sm:text-xs text-primary font-medium mb-0.5 sm:mb-1">
                    {dest.tours} tura
                  </p>
                  <h3 className="text-sm sm:text-lg font-bold text-white leading-tight">
                    {dest.name}
                  </h3>
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
// AWESOME TRIPS
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
    <section className="py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 sm:mb-12 text-center">
          <p className="mb-2 font-serif text-base sm:text-lg italic text-primary">
            Istrazite svijet
          </p>
          <h2 className="mb-3 sm:mb-4 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nevjerovatna putovanja sa nama
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
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
            className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.12}
          >
            {aranzmani.map((a) => (
              <StaggerItem key={a.id}>
                <div className="group overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.slika_url}
                      alt={a.naslov}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {a.naslov}
                    </h3>
                    {a.opis && (
                      <p className="mb-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {a.opis}
                      </p>
                    )}
                    {a.trajanje && (
                      <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        {a.trajanje}
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-xs text-muted-foreground">
                          Od{" "}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-primary">
                          €{a.cijena}
                        </span>
                      </div>
                      <Link
                        href="/kontakt"
                        className="rounded-lg bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
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

// ─────────────────────────────────────────────
// TOUR PACKAGE
// ─────────────────────────────────────────────
const features = [
  {
    icon: Shield,
    title: "Sigurnost na prvom mjestu",
    desc: "Licencirani smo i osigurani",
  },
  {
    icon: Compass,
    title: "Avantura i istrazivanje",
    desc: "Jedinstvene rute i iskustva",
  },
  {
    icon: Star,
    title: "Vrhunski smjestaj",
    desc: "Samo provjereni hoteli",
  },
  {
    icon: Users,
    title: "Male grupe",
    desc: "Personalizovani pristup",
  },
];

export function TourPackageSection() {
  return (
    <section className="bg-muted py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          {/* Text */}
          <AnimatedSection direction="left">
            <div>
              <p className="mb-2 font-serif text-base sm:text-lg italic text-primary">
                Zasto mi
              </p>
              <h2 className="mb-4 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
                Nevjerovatni turisticki paketi sirom svijeta
              </h2>
              <p className="mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                U agenciji Pun Kofer Putovanja vjerujemo da svako putovanje
                treba biti posebno. Kombinujemo godine iskustva, lokalno znanje
                i strast prema putovanjima kako bismo vam pruzili nezaboravna
                iskustva.
              </p>

              <StaggerChildren
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                staggerDelay={0.1}
              >
                {features.map(({ icon: Icon, title, desc }) => (
                  <StaggerItem key={title}>
                    <div className="flex items-start gap-3 rounded-xl bg-card p-3 sm:p-4 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                          {title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <Link
                href="/destinacije"
                className="mt-6 sm:mt-8 group inline-flex items-center gap-2 rounded-lg bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Pogledajte ponude
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/trip-hiking.jpg"
                alt="Planinarenje avantura"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
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
    <section className="py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 sm:mb-12 text-center">
          <p className="mb-2 font-serif text-base sm:text-lg italic text-primary">
            Iskustva klijenata
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Sta kazu nasi putnici
          </h2>
        </AnimatedSection>

        {/* Scrollable row on mobile, 3-col grid on md+ */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-72 shrink-0 rounded-xl border border-border bg-card p-6"
              >
                <Quote className="mb-3 h-6 w-6 text-primary/30" />
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                  {`"${t.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
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
            ))}
          </div>
        </div>

        {/* Grid for md+ */}
        <StaggerChildren
          className="hidden md:grid gap-6 md:grid-cols-3"
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

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────
const stats = [
  { end: 976, label: "Srecnih putnika" },
  { end: 745, label: "Nagrada" },
  { end: 150, label: "Destinacija" },
  { end: 50, label: "Zaposlenih" },
];

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Image
        src="/images/testimonial-bg.jpg"
        alt="Priroda pozadina"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0f172a]/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          {/* Text */}
          <AnimatedSection direction="left">
            <div>
              <p className="mb-2 font-serif text-base sm:text-lg italic text-primary">
                Nasa agencija
              </p>
              <h2 className="mb-4 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance">
                Zapocnite svaki dan sa zapanjujucom destinacijom
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-[#cbd5e1]">
                U agenciji Pun Kofer Putovanja, nase je poslanstvo da svakom
                putniku pruzimo nezaboravno iskustvo. Sa vise od 15 godina na
                trzistu, postali smo jedan od lidera turisticke industrije u
                Crnoj Gori.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats grid — 2×2 always */}
          <StaggerChildren
            className="grid grid-cols-2 gap-3 sm:gap-4 sm:gap-6"
            staggerDelay={0.15}
          >
            {stats.map(({ end, label }) => (
              <StaggerItem key={label}>
                <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 text-center border border-white/10 transition-colors hover:bg-white/15">
                  <p className="text-2xl sm:text-4xl font-bold text-primary">
                    <CountUp end={end} suffix="+" />
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm text-[#cbd5e1]">
                    {label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// WHY US
// ─────────────────────────────────────────────
const whyUs = [
  {
    icon: Shield,
    title: "Garancija kvaliteta",
    desc: "Svako putovanje je pazljivo planirano i provjereno. Garantujemo kvalitet smjestaja, prevoza i usluga.",
  },
  {
    icon: MapPin,
    title: "Lokalno znanje",
    desc: "Poznajemo svaku destinaciju iz prve ruke. Nasi vodici su lokalni eksperti koji znaju najbolja skrivena mjesta.",
  },
  {
    icon: Users,
    title: "Podrska 24/7",
    desc: "Uvijek smo tu za vas - prije, tokom i nakon putovanja. Nas tim za podrsku je dostupan non-stop.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-muted py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 sm:mb-12 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Nasa prednost
          </p>
          <h2 className="mb-3 sm:mb-4 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Zasto putovati sa nama?
          </h2>
        </AnimatedSection>

        <StaggerChildren
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3"
          staggerDelay={0.15}
        >
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="text-center group">
                <div className="mx-auto mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto">
                  {desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CONTACT CTA
// ─────────────────────────────────────────────
const contactStats = [
  {
    end: 976,
    label: "Srecnih putnika",
    size: "h-36 w-36 sm:h-40 sm:w-40",
    pos: "top-4 right-8",
  },
  {
    end: 745,
    label: "Nagrada",
    size: "h-32 w-32 sm:h-36 sm:w-36",
    pos: "top-40 sm:top-44 right-[-10px]",
  },
  {
    end: 805,
    label: "Pozitivnih recenzija",
    size: "h-40 w-40 sm:h-44 sm:w-44",
    pos: "bottom-12 right-20 sm:right-24",
  },
];

export function ContactCTASection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Image
        src="/images/trip-city.jpg"
        alt="Pozadina kontakt sekcije"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/60 sm:from-[#0f172a]/90 sm:via-[#0f172a]/75 sm:to-[#0f172a]/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          {/* Form side */}
          <AnimatedSection direction="left">
            <div>
              <p className="mb-2 font-serif text-base sm:text-lg italic text-primary">
                Javite nam se
              </p>
              <h2 className="mb-3 sm:mb-4 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance">
                Treba vam pomoc za sljedece putovanje?
              </h2>
              <p className="mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed text-[#cbd5e1]">
                U agenciji Pun Kofer Putovanja vjerujemo u transformativnu moc
                putovanja. Kao strastveni istrazivaci, razumijemo zelju za
                otkrivanjem novih iskustava.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/20">
                    <Send className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-white">
                    Poruka poslata!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbd5e1]">
                    Javicemo vam se u najkracem moguce roku.
                  </p>
                </motion.div>
              ) : (
                <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-3 sm:gap-4">
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
                      <ChevronRight className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-white/40 pointer-events-none" />
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
                      className="group mt-1 sm:mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
                    >
                      Posaljite poruku
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Floating circles — hidden on mobile to avoid overflow */}
          <div className="hidden lg:block relative h-[500px]">
            {contactStats.map(({ end, label, size, pos }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className={`absolute ${pos}`}
              >
                <div
                  className={`${size} flex flex-col items-center justify-center rounded-full border-4 border-primary bg-primary/20 backdrop-blur-md shadow-2xl shadow-primary/20`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    <CountUp end={end} suffix="+" />
                  </p>
                  <p className="text-[10px] sm:text-xs font-medium text-white/80 text-center px-3">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact stats row shown on mobile instead of circles */}
          <div className="lg:hidden grid grid-cols-3 gap-3">
            {contactStats.map(({ end, label }) => (
              <div
                key={label}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-3 text-center"
              >
                <p className="text-lg font-bold text-primary">
                  <CountUp end={end} suffix="+" />
                </p>
                <p className="text-[10px] text-white/70 leading-tight mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
