// app/admin/ToggleAktivan.tsx
"use client";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function ToggleAktivan({
  id,
  aktivan,
}: {
  id: string;
  aktivan: boolean;
}) {
  const router = useRouter();

  async function handleToggle() {
    await supabase.from("aranzmani").update({ aktivan: !aktivan }).eq("id", id);

    router.refresh();
  }

  return (
    <button
      onClick={handleToggle}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        aktivan
          ? "bg-green-100 text-green-700 hover:bg-green-200"
          : "bg-red-100 text-red-600 hover:bg-red-200"
      }`}
    >
      {aktivan ? "Deaktiviraj" : "Aktiviraj"}
    </button>
  );
}
