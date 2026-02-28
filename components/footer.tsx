import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#94a3b8]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">PK</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">Pun Kofer</span>
                <span className="text-xs text-[#94a3b8] -mt-0.5">Putovanja</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Pun Kofer Putovanja je vasa pouzdana turisticka agencija u Crnoj Gori. Kreiramo nezaboravna putovanja po cijelom svijetu.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e293b] text-[#94a3b8] transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e293b] text-[#94a3b8] transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e293b] text-[#94a3b8] transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold text-white">Brzi linkovi</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm transition-colors hover:text-primary">Pocetna</Link></li>
              <li><Link href="/destinacije" className="text-sm transition-colors hover:text-primary">Destinacije</Link></li>
              <li><Link href="/o-nama" className="text-sm transition-colors hover:text-primary">O nama</Link></li>
              <li><Link href="/kontakt" className="text-sm transition-colors hover:text-primary">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold text-white">Popularne destinacije</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/destinacije" className="text-sm transition-colors hover:text-primary">Boka Kotorska</Link></li>
              <li><Link href="/destinacije" className="text-sm transition-colors hover:text-primary">Santorini, Grcka</Link></li>
              <li><Link href="/destinacije" className="text-sm transition-colors hover:text-primary">Pariz, Francuska</Link></li>
              <li><Link href="/destinacije" className="text-sm transition-colors hover:text-primary">Istanbul, Turska</Link></li>
              <li><Link href="/destinacije" className="text-sm transition-colors hover:text-primary">Barcelona, Spanija</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold text-white">Kontakt informacije</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Ulica Slobode 15, 81000 Podgorica, Crna Gora</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+38220123456" className="transition-colors hover:text-primary">+382 20 123 456</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@punkofer.me" className="transition-colors hover:text-primary">info@punkofer.me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e293b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm md:flex-row lg:px-8">
          <p>{"© 2026 Pun Kofer Putovanja. Sva prava zadrzana."}</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">Politika privatnosti</a>
            <a href="#" className="transition-colors hover:text-primary">Uslovi koriscenja</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
