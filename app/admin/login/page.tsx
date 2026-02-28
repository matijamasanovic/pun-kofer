// app/admin/login/page.tsx
"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogIn, Plane } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }
    router.push("/admin");
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Lijeva strana - forma */}
      <div className="flex flex-col justify-center px-8 py-12 lg:px-16">
        {/* Logo */}
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Plane className="h-5 w-5 text-primary" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Pun Kofer
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Admin panel
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Dobrodošli nazad
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Prijavite se da biste upravljali aranžmanima.
          </p>
        </div>

        {/* Forma */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vasa@email.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Lozinka <span className="text-[#ef4444]">*</span>
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-50 mt-2"
          >
            <LogIn className="h-4 w-4" />
            {loading ? "Prijava..." : "Prijavite se"}
          </button>
        </form>
      </div>

      {/* Desna strana - slika */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/dest-sveti-stefan.jpg"
          alt="Pun Kofer Putovanja"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0f172a]/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm mb-6">
            <Plane className="h-7 w-7 text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Upravljajte aranžmanima
          </h2>
          <p className="text-sm leading-relaxed text-[#cbd5e1] max-w-sm">
            Dodajte, uredite i upravljajte svim putovanjima na jednom mjestu.
          </p>
        </div>
      </div>
    </div>
  );
}
