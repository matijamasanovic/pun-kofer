// app/admin/blog/edit/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { uploadSlika, deleteSlika } from "@/lib/upload";
import { useRouter, useParams } from "next/navigation";
import TiptapEditor from "@/components/TiptapEditor";
import { ArrowLeft, ImagePlus } from "lucide-react";
import Link from "next/link";

export default function EditBlogPost() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ naslov: "", sadrzaj: "" });
  const [trenutnaSlika, setTrenutnaSlika] = useState<string | null>(null);
  const [novaSlika, setNovaSlika] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    async function ucitaj() {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setForm({ naslov: data.naslov, sadrzaj: data.sadrzaj || "" });
        setTrenutnaSlika(data.slika_url);
        setPreview(data.slika_url);
      }
    }
    ucitaj();
  }, [id]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setNovaSlika(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      let slika_url = trenutnaSlika;

      if (novaSlika) {
        if (trenutnaSlika) await deleteSlika(trenutnaSlika);
        slika_url = await uploadSlika(novaSlika);
      }

      const { error } = await supabase
        .from("blog_posts")
        .update({ ...form, slika_url })
        .eq("id", id);

      if (error) throw error;
      router.push("/admin/blog");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Jesi li siguran da želiš obrisati ovaj post?")) return;
    setLoading(true);

    try {
      if (trenutnaSlika) await deleteSlika(trenutnaSlika);
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
      router.push("/admin/blog");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/blog"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Admin
              </p>
              <h1 className="font-serif text-2xl font-bold text-foreground">
                Edit blog post
              </h1>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50"
          >
            Obriši post
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Naslov */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Naslov
            </label>
            <input
              required
              placeholder="Unesite naslov posta..."
              value={form.naslov}
              onChange={(e) => setForm({ ...form, naslov: e.target.value })}
              className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Sadržaj */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Sadržaj
            </label>
            <TiptapEditor
              key={form.sadrzaj ? "loaded" : "empty"}
              value={form.sadrzaj}
              onChange={(val) => setForm({ ...form, sadrzaj: val })}
            />
          </div>

          {/* Slika */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Naslovna slika
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="slika-upload"
            />
            <label
              htmlFor="slika-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-56 object-cover rounded-lg"
                />
              ) : (
                <>
                  <ImagePlus className="h-8 w-8" />
                  <span>Klikni za upload slike</span>
                </>
              )}
            </label>
          </div>

          {/* Dugmad */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.push("/admin/blog")}
              className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Odustani
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? "Čuvanje..." : "Sačuvaj izmjene"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
