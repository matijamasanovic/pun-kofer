// lib/upload.ts
import { supabase } from "./supabase/client";

export async function uploadSlika(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const path = `${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from("aranzmani")
    .upload(path, file, { upsert: false });

  if (error) throw error;

  const { data } = supabase.storage.from("aranzmani").getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteSlika(url: string) {
  const path = url.split("/aranzmani/")[1];
  await supabase.storage.from("aranzmani").remove([path]);
}
