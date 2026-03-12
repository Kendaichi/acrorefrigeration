import { createClient } from "@/lib/supabase/server";
import { getAllPricingTiers } from "@/lib/supabase/content";
import PricingClient from "./PricingClient";

export const dynamic = "force-dynamic";

export default async function PricingAdminPage() {
  const supabase = await createClient();
  const tiers = await getAllPricingTiers(supabase);
  return <PricingClient initialTiers={tiers} />;
}
