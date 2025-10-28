"use client";

import { useState } from "react";
import Script from "next/script";
import IdentityComp from "@/components/IdentityComp";
import TerminalComp from "@/components/TerminalComp";

export default function Home() {
  const [firstCommandExecuted, setFirstCommandExecuted] =
    useState<boolean>(false);

  const handleFirstCommand = (): void => {
    setFirstCommandExecuted(true);
  };

  const structuredData = {
    "@context": "https://morscode.site/",
    "@type": "Person",
    name: "Anup Pradhan (Mors)",
    jobTitle: "Full Stack Developer",
    description:
      "Full-stack developer specializing in MERN stack and Next.js with backend focus and machine learning exploration",
    knowsAbout: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "Machine Learning",
      "TensorFlow",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Amity University",
    },
    url: "https://morscode.site/",
    sameAs: [
      "https://www.linkedin.com/in/anup-pradhan77",
      "https://github.com/M0rs-Ruki",
      "https://x.com/AnupPradhan0",
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="app-shell">
        <div className="main-content-area">
          <section
            className={`identity-pane border-2 border-green-400 ${
              firstCommandExecuted ? "hide-on-mobile" : ""
            }`}
            aria-label="Developer Identity Card"
          >
            <IdentityComp />
          </section>
          <section className="terminal-pane" aria-label="Interactive Terminal">
            <TerminalComp onFirstCommand={handleFirstCommand} />
          </section>
        </div>
      </main>
    </>
  );
}
