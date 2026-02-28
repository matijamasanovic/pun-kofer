// components/awesome-trips-server.tsx
import { createClient } from "@/lib/supabase/server";
import { AwesomeTrips } from "./home-sections";

export default async function AwesomeTripsServer() {
  const supabase = await createClient();
  const { data: aranzmani, error } = await supabase
    .from("aranzmani")
    .select("*")
    .eq("aktivan", true)
    .order("created_at", { ascending: false })
    .limit(4);

  console.log("ARANZMANI:", aranzmani);
  console.log("ERROR:", error);

  return <AwesomeTrips aranzmani={aranzmani ?? []} />;
}
