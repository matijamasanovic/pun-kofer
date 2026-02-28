"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("upiti").insert({
      ime: formData.name,
      email: formData.email,
      telefon: formData.phone,
      poruka: formData.message,
      aranzman: formData.destination,
    });
    setLoading(false);
    if (error) {
      alert("Greška pri slanju poruke. Pokušajte ponovo.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Send className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
          Hvala vam!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Vasa poruka je uspjesno poslata. Nas tim ce vas kontaktirati u
          najkracem mogucem roku, obicno u roku od 24 sata.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              destination: "",
              message: "",
            });
          }}
          className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          Posaljite novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Ime i prezime <span className="text-[#ef4444]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Vase ime i prezime"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email adresa <span className="text-[#ef4444]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="vasa@email.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+382 67 123 456"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Predmet <span className="text-[#ef4444]">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <option value="">Izaberite predmet</option>
            <option value="rezervacija">Rezervacija putovanja</option>
            <option value="informacije">Opste informacije</option>
            <option value="grupna">Grupna putovanja</option>
            <option value="reklamacija">Reklamacija</option>
            <option value="saradnja">Poslovna saradnja</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="destination"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Zeljena destinacija
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="npr. Santorini, Pariz, Boka Kotorska..."
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Poruka <span className="text-[#ef4444]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Napisite nam vasu poruku, zelju ili upit..."
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg self-start disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {loading ? "Slanje..." : "Posaljite poruku"}
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
          Kontakt informacije
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Slobodno nas kontaktirajte putem telefona, emaila ili nas posjetite u
          nasoj kancelariji u Podgorici. Radujemo se vasem upitu!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 rounded-xl bg-muted p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Adresa</h4>
            <p className="text-sm text-muted-foreground">
              Ulica Slobode 15, 81000 Podgorica, Crna Gora
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl bg-muted p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Telefon</h4>
            <p className="text-sm text-muted-foreground">
              <a
                href="tel:+38220123456"
                className="hover:text-primary transition-colors"
              >
                +382 20 123 456
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href="tel:+38267987654"
                className="hover:text-primary transition-colors"
              >
                +382 67 987 654
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl bg-muted p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Email</h4>
            <p className="text-sm text-muted-foreground">
              <a
                href="mailto:info@punkofer.me"
                className="hover:text-primary transition-colors"
              >
                info@punkofer.me
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href="mailto:rezervacije@punkofer.me"
                className="hover:text-primary transition-colors"
              >
                rezervacije@punkofer.me
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl bg-muted p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Radno vrijeme
            </h4>
            <p className="text-sm text-muted-foreground">
              Ponedeljak - Petak: 09:00 - 18:00
            </p>
            <p className="text-sm text-muted-foreground">
              Subota: 09:00 - 14:00
            </p>
            <p className="text-sm text-muted-foreground">Nedjelja: Zatvoreno</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          Pratite nas
        </h4>
        <div className="flex gap-3">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/trip-beach-resort.jpg"
            alt="Kontakt pozadina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0f172a]/75" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm mb-6">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              Kontaktirajte nas
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#cbd5e1]">
              Imate pitanje, zelite da rezervisete putovanje ili vam treba
              savjet? Nas tim je tu za vas. Javite nam se!
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
                  <div className="mb-6">
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
                      Posaljite upit
                    </p>
                    <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
                      Pisete nam poruku
                    </h2>
                  </div>
                  <ContactForm />
                </div>
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-8 text-center">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
                Lokacija
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
                Pronadjite nas na mapi
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Pun Kofer Putovanja - Lokacija u Podgorici"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47414.03824988529!2d19.22036565!3d42.44127095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb46b01e1ae5%3A0xac0cc424703e8365!2sPodgorica%2C%20Montenegro!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
                Cesta pitanja
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
                Najcesce postavljana pitanja
              </h2>
            </div>
            <div className="mx-auto max-w-3xl flex flex-col gap-4">
              {[
                {
                  q: "Kako mogu rezervisati putovanje?",
                  a: "Mozete nas kontaktirati putem telefona, emaila ili popunjavanjem kontakt forme na ovoj stranici. Nas tim ce vam odgovoriti u roku od 24 sata sa svim detaljima i ponudom.",
                },
                {
                  q: "Da li je potrebna unaprijed uplata?",
                  a: "Da, za potvrdu rezervacije potrebna je uplata avansa u iznosu od 30% ukupne cijene. Ostatak se uplačuje najkasnije 14 dana prije polaska.",
                },
                {
                  q: "Sta je ukljuceno u cijenu putovanja?",
                  a: "Cijena obicno ukljucuje smjestaj, prevoz, osiguranje i usluge vodica. Tacna specifikacija zavisi od izabranog paketa i destinacije.",
                },
                {
                  q: "Da li nudite grupne popuste?",
                  a: "Da! Za grupe od 10 ili vise osoba nudimo specijalne popuste. Kontaktirajte nas za personalizovanu ponudu.",
                },
                {
                  q: "Kakva je politika otkazivanja?",
                  a: "Besplatno otkazivanje je moguce do 30 dana prije polaska. Za detaljniju politiku otkazivanja, kontaktirajte nas ili pogledajte uslove koriscenja.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-foreground hover:text-primary transition-colors list-none">
                    {faq.q}
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
