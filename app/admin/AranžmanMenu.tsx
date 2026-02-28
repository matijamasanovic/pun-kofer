// app/admin/AranžmanMenu.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { deleteSlika } from "@/lib/upload";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MoreVertical, Pencil, Trash2, EyeOff, Eye } from "lucide-react";

export default function AranžmanMenu({
  id,
  aktivan,
  slikaUrl,
}: {
  id: string;
  aktivan: boolean;
  slikaUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleToggle() {
    await supabase.from("aranzmani").update({ aktivan: !aktivan }).eq("id", id);
    setOpen(false);
    router.refresh();
  }

  async function handleDelete() {
    if (!confirm("Jesi li siguran da želiš obrisati ovaj aranžman?")) return;
    if (slikaUrl) await deleteSlika(slikaUrl);
    await supabase.from("aranzmani").delete().eq("id", id);
    setOpen(false);
    router.refresh();
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-48 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          <Link
            href={`/admin/edit/${id}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
          >
            <Pencil className="h-4 w-4 text-primary" />
            Edit
          </Link>

          <button
            onClick={handleToggle}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
          >
            {aktivan ? (
              <>
                <EyeOff className="h-4 w-4 text-orange-500" />
                Deaktiviraj
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 text-green-600" />
                Aktiviraj
              </>
            )}
          </button>

          <div className="border-t border-border" />

          <button
            onClick={handleDelete}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Obriši
          </button>
        </div>
      )}
    </div>
  );
}
