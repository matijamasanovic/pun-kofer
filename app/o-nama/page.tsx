import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Shield, Users, Star, MapPin, Award, Heart, Globe, ChevronRight, Target, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nama | Pun Kofer Putovanja",
  description: "Saznajte vise o agenciji Pun Kofer Putovanja - vasem pouzdanom partneru za nezaboravna putovanja.",
}

const team = [
  { name: "Milena Popovic", role: "Direktorka", initials: "MP" },
  { name: "Stefan Jovanovic", role: "Menadzer prodaje", initials: "SJ" },
  { name: "Tamara Radovic", role: "Konsultantkinja za destinacije", initials: "TR" },
  { name: "Luka Markovic", role: "Vodic i organizator", initials: "LM" },
]

const milestones = [
  { year: "2009", text: "Osnivanje agencije u Podgorici" },
  { year: "2012", text: "Prvih 1.000 zadovoljnih putnika" },
  { year: "2015", text: "Prosirenje na medjunarodne destinacije" },
  { year: "2018", text: "Nagrada za najbolju agenciju u CG" },
  { year: "2021", text: "Pokretanje luksuznih tura" },
  { year: "2024", text: "Preko 10.000 zadovoljnih putnika" },
]

export default function ONamaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/about-office.jpg"
            alt="O nama pozadina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0f172a]/75" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm mb-6">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              O nama
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#cbd5e1]">
              Upoznajte Pun Kofer Putovanja - vasu pouzdanu turisticku agenciju u Crnoj Gori sa preko 15 godina iskustva.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Nasa prica</p>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Strast prema putovanjima od 2009. godine
                </h2>
                <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Pun Kofer Putovanja je osnovana 2009. godine u Podgorici sa jasnom vizijom - uciniti putovanja pristupacnim i nezaboravnim za svakoga. Od skromnih pocetaka sa samo dvoje zaposlenih, izrasli smo u jednu od vodecih turistickih agencija u Crnoj Gori.
                  </p>
                  <p>
                    Danas, nas tim od preko 50 posvecenih profesionalaca radi na tome da svako putovanje bude posebno. Sarađujemo sa preko 200 partnera sirom svijeta kako bismo vam ponudili najbolje moguce iskustvo, od smjestaja i prevoza do jedinstvenih izleta i avantura.
                  </p>
                  <p>
                    Nase poslovanje se temelji na povjerenju, kvalitetu i inovativnosti. Ponosni smo na vise od 10.000 zadovoljnih putnika koji su sa nama otkrili ljepote svijeta.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Nas tim"
                    width={600}
                    height={450}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl lg:block">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm">Godina iskustva</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-card p-8 shadow-sm border border-border lg:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Nasa misija</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Nasa misija je da svakom klijentu pruzimo jedinstveno i nezaboravno putovacko iskustvo. Tezimo tome da putovanja ucinimo dostupnim svima, bez kompromisa u kvalitetu usluge. Vjerujemo da svako zasluzuje priliku da istrazi svijet.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-8 shadow-sm border border-border lg:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Nasa vizija</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Zelimo postati vodeca turisticka agencija na Balkanu, poznata po inovativnim putovackim rjesenjima, izuzetnoj usluzi i posvecnosti svakom putniku. Nastojimo da inspirišemo ljude da istrazuju, uce i rastu kroz putovanja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Nase vrijednosti</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Sta nas cini posebnim
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">Povjerenje</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Transparentnost i iskrenost su temelj naseg poslovanja.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">Kvalitet</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Nikad ne pravimo kompromise kada je u pitanju kvalitet usluge.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">Inovativnost</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Stalno unapredjujemo ponudu i pratimo najnovije trendove.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">Strast</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Volimo ono sto radimo i to se ogleda u svakom putovanju.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Nas put</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Kljucni momenti u nasoj istoriji
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-4 rounded-2xl bg-card p-6 border border-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm">
                    {m.year}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground pt-1">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Nas tim</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Upoznajte ljude iza Punog Kofera
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {member.initials}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="relative py-20 overflow-hidden">
          <Image
            src="/images/testimonial-bg.jpg"
            alt="Statistika pozadina"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/85" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">10K+</p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Zadovoljnih putnika</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">150+</p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Destinacija</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Zaposlenih</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="mt-1 text-sm text-[#cbd5e1]">Godina iskustva</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center lg:px-16">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#5b8fd4]" />
              <div className="relative z-10">
                <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                  Zelite da putujete sa nama?
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
                  Kontaktirajte nas danas i zajednickim snagama kreiracemo putovanje iz snova. Besplatna konsultacija za sve destinacije.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:shadow-xl"
                >
                  Kontaktirajte nas
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
