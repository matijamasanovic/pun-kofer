// app/admin/edit/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { uploadSlika, deleteSlika } from "@/lib/upload";
import { useRouter, useParams } from "next/navigation";

export default function EditAranžman() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naslov: "",
    opis: "",
    cijena: "",
    destinacija: "",
    trajanje: "",
  });
  const [trenutnaSlika, setTrenutnaSlika] = useState<string | null>(null);
  const [novaSlika, setNovaSlika] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    async function ucitaj() {
      const { data } = await supabase
        .from("aranzmani")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setForm({
          naslov: data.naslov,
          opis: data.opis || "",
          cijena: data.cijena?.toString() || "",
          destinacija: data.destinacija || "",
          trajanje: data.trajanje || "",
        });
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
        .from("aranzmani")
        .update({
          ...form,
          cijena: parseFloat(form.cijena),
          slika_url,
        })
        .eq("id", id);

      if (error) throw error;
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Jesi li siguran da želiš obrisati ovaj aranžman?")) return;
    setLoading(true);

    try {
      if (trenutnaSlika) await deleteSlika(trenutnaSlika);
      const { error } = await supabase.from("aranzmani").delete().eq("id", id);

      if (error) throw error;
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edit aranžman</h1>
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50 disabled:opacity-50"
        >
          Obriši
        </button>
      </div>

      <input
        required
        placeholder="Naslov"
        value={form.naslov}
        onChange={(e) => setForm({ ...form, naslov: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        placeholder="Destinacija"
        value={form.destinacija}
        onChange={(e) => setForm({ ...form, destinacija: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Cijena (€)"
        value={form.cijena}
        onChange={(e) => setForm({ ...form, cijena: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        placeholder="Trajanje (npr. 3-5 dana)"
        value={form.trajanje}
        onChange={(e) => setForm({ ...form, trajanje: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Opis"
        value={form.opis}
        onChange={(e) => setForm({ ...form, opis: e.target.value })}
        className="w-full border p-2 rounded h-28"
      />

      <div className="border-2 border-dashed rounded p-4 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="slika-upload"
        />
        <label htmlFor="slika-upload" className="cursor-pointer text-blue-600">
          Promijeni sliku
        </label>
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-3 w-full h-48 object-cover rounded"
          />
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
      >
        {loading ? "Čuvanje..." : "Sačuvaj izmjene"}
      </button>
    </form>
  );
}
