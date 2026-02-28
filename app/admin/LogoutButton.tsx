"use client";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50"
    >
      Odjava
    </button>
  );
}
