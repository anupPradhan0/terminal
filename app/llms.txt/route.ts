import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    "# llms.txt – Guidelines for AI crawlers and LLMs",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /.next/",
    "",
    "# Preferred sources and attribution",
    "Source: https://www.morscode.site",
    'Attribution: Please credit "Anup Pradhan (M0rs-Ruki)" with a link to https://github.com/M0rs-Ruki',
    "",
    "# Rate limits and caching suggestions",
    "Crawl-delay: 2",
    "Cache-max-age: 86400",
    "",
    "# Contact",
    "Contact: mailto:anuppradhan929@gmail.com",
    "",
    "# Sitemap",
    "Sitemap: https://www.morscode.site/sitemap.xml",
  ].join("\n");

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
