import type { NextConfig } from "next";
import { createClient } from "@supabase/supabase-js";

async function getOldSiteRedirects() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) return [];

  const supabase = createClient(supabaseUrl, supabaseKey);
  const redirects: { source: string; destination: string; permanent: boolean }[] = [];

  // Redirect old blog URLs: /blog-slug → /resources/blog-slug
  const { data: posts } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);

  if (posts) {
    for (const post of posts) {
      redirects.push({
        source: `/${post.slug}`,
        destination: `/resources/${post.slug}`,
        permanent: true,
      });
    }
  }

  // Redirect old service URLs: /service-slug → /services/service-slug
  const { data: services } = await supabase
    .from("services")
    .select("slug")
    .not("slug", "is", null);

  if (services) {
    for (const service of services) {
      redirects.push({
        source: `/${service.slug}`,
        destination: `/services/${service.slug}`,
        permanent: true,
      });
    }
  }

  return redirects;
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-tooltip"],
  },
  async redirects() {
    const oldSiteRedirects = await getOldSiteRedirects();

    return [
      // Manual redirects for renamed pages
      {
        source: "/process",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      // Auto-generated redirects from old site URLs
      ...oldSiteRedirects,
    ];
  },
};

export default nextConfig;
