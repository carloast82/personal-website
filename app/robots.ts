import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Opzionale: Se in futuro volessi bloccare crawler specifici
      // ma lasciare attivi solo quelli per la ricerca, potresti elencarli qui.
      // {
      //   userAgent: 'GPTBot',
      //   disallow: '/',
      // }
    ],
    sitemap: "https://carloastolfi.site/sitemap.xml", // Typical sitemap URL structure
  };
}
