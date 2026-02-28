"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { uploadSlika } from "@/lib/upload";
import { useRouter } from "next/navigation";

export default function NoviAranžman() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naslov: "",
    opis: "",
    cijena: "",
    destinacija: "",
    trajanje: "",
  });
  const [slika, setSlika] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSlika(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slika) return alert("Dodaj sliku!");
    setLoading(true);

    try {
      const slika_url = await uploadSlika(slika);

      const { error } = await supabase.from("aranzmani").insert({
        ...form,
        cijena: parseFloat(form.cijena),
        slika_url,
      });

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
      <h1 className="text-2xl font-bold">Novi aranžman</h1>

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
          Klikni za upload slike
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
        {loading ? "Čuvanje..." : "Sačuvaj aranžman"}
      </button>
    </form>
  );
}
