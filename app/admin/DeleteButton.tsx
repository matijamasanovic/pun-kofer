// app/admin/DeleteButton.tsx
"use client";
import { supabase } from "@/lib/supabase/client";
import { deleteSlika } from "@/lib/upload";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Jesi li siguran da želiš obrisati ovaj aranžman?")) return;

    const { data } = await supabase
      .from("aranzmani")
      .select("slika_url")
      .eq("id", id)
      .single();

    if (data?.slika_url) await deleteSlika(data.slika_url);

    await supabase.from("aranzmani").delete().eq("id", id);
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="border border-red-500 text-red-500 px-3 py-1 rounded text-sm hover:bg-red-50"
    >
      Obriši
    </button>
  );
}
