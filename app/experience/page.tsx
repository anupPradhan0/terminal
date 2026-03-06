import { Metadata } from "next";

// SEO Metadata for Experience page
export const metadata: Metadata = {
  metadataBase: new URL("https://www.anuppradhan.in"),
  title: "Experience | Software Developer Roles",
  description:
    "Professional experience of Anup Pradhan as a Software Developer at Prominds Digital and CHATI, building full‑stack SaaS products, AI meeting assistants, large-scale data pipelines, and high-performance web applications.",
  keywords: [
    "Software Developer Experience",
    "Prominds Digital",
    "CHATI",
    "Full Stack Developer",
    "Backend Developer",
    "AI Meeting Assistant",
    "SaaS Developer",
    "Bhubaneswar Software Developer",
  ],
  authors: [{ name: "Anup Pradhan", url: "https://www.anuppradhan.in" }],
  creator: "Anup Pradhan",
  publisher: "Anup Pradhan",
  openGraph: {
    title: "Experience | Software Developer Roles",
    description:
      "Experience at Prominds Digital and CHATI, including SaaS visitor management, AI meeting assistant, CMS platform, and large-scale data migration.",
    type: "profile",
    url: "https://www.anuppradhan.in/experience",
    siteName: "Anup Pradhan - Developer Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "https://www.anuppradhan.in/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Anup Pradhan - Software Developer Experience",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnupPradhan0",
    creator: "@AnupPradhan0",
    title: "Experience | Software Developer Roles",
    description:
      "Professional experience as a Software Developer at Prominds Digital and CHATI, building scalable web apps and AI-driven systems.",
    images: ["https://www.anuppradhan.in/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.anuppradhan.in/experience",
    languages: {
      en: "https://www.anuppradhan.in/experience",
    },
  },
  category: "Technology",
  classification: "Professional Experience",
};

// Structured data for experience roles
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anup Pradhan",
  url: "https://www.anuppradhan.in",
  jobTitle: "Software Developer",
  worksFor: [
    {
      "@type": "Organization",
      name: "Prominds Digital",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      employee: {
        "@type": "Person",
        name: "Anup Pradhan",
        jobTitle: "Software Developer",
      },
    },
    {
      "@type": "Organization",
      name: "CHATI",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      employee: {
        "@type": "Person",
        name: "Anup Pradhan",
        jobTitle: "Software Developer (Internship)",
      },
    },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.anuppradhan.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Experience",
      item: "https://www.anuppradhan.in/experience",
    },
  ],
};

export default function Experience() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <section
        id="experience-section"
        aria-labelledby="experience-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div lang="en">
          {/* Header */}
          <header>
            <h1 id="experience-heading" itemProp="name">
              Experience
            </h1>
            <p>
              A snapshot of my recent professional roles as a Software
              Developer, building real-world products and systems used by
              businesses and teams every day.
            </p>
          </header>

          <div>
            {/* CHATI Experience */}
            <article
              aria-labelledby="chati-heading"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <header>
                <h2 id="chati-heading" itemProp="name">
                  CHATI
                </h2>
                <p>
                  <strong>Software Developer · Internship</strong> · Oct 2025 —
                  Present · Bhubaneswar, Odisha, India · On-site
                </p>
              </header>

              <ul itemProp="description">
                <li>
                  Developed an AI meeting assistant that joins virtual calls,
                  records meetings, generates live transcriptions, and produces
                  automated summaries.
                </li>
                <li>
                  Scaled the platform with integrations for Zoom, Microsoft
                  Teams, and Google Meet, serving 500+ active users.
                </li>
                <li>
                  Architected a custom CMS platform to manage internal content
                  and operational workflows.
                </li>
                <li>
                  Engineered a high‑performance data pipeline to process, clean,
                  and migrate 1.2M+ records into production databases.
                </li>
                <li>
                  Implemented chunked and batch‑processing with strict
                  validation to ensure only high‑quality data is promoted to
                  production.
                </li>
                <li>
                  Achieved high‑speed validation, filtering, and migration for
                  hundreds of thousands of records in minutes.
                </li>
              </ul>
            </article>

            {/* Prominds Digital Experience */}
            <article
              aria-labelledby="prominds-heading"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <header>
                <h2 id="prominds-heading" itemProp="name">
                  Prominds Digital
                </h2>
                <p>
                  <strong>Software Developer · Part-time</strong> · Jul 2024 —
                  Present · Bhubaneswar, Odisha, India · On-site
                </p>
              </header>

              <ul itemProp="description">
                <li>
                  Architected a scalable SaaS showroom visitor management system
                  from the ground up for automotive dealerships.
                </li>
                <li>
                  Deployed the platform across 5+ dealerships, processing over
                  5,000 visitor entries monthly with reliable performance.
                </li>
                <li>
                  Integrated features like automated WhatsApp follow-ups, digital
                  enquiry tracking, and end-to-end lead management pipelines.
                </li>
                <li>
                  Delivered multiple full‑stack web applications tailored to
                  diverse business requirements.
                </li>
                <li>
                  Led web performance tuning efforts that significantly improved
                  core performance scores.
                </li>
                <li>
                  Contributed to the modernization of legacy systems into a
                  streamlined CRM‑driven workflow.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

