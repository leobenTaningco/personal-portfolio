"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "front-page", label: "Front page" },
  { id: "profile", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "extras", label: "Extras" },
  { id: "about-site", label: "About this website" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("front-page");

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.28;
      const current = targets
        .map((section) => ({ id: section.id, top: section.getBoundingClientRect().top }))
        .filter(({ top }) => top <= marker)
        .at(-1);

      if (current) {
        setActiveSection((activeSection) => activeSection === current.id ? activeSection : current.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="section-nav" aria-label="Sections">
      {sections.map(({ id, label }) => (
        <a
          aria-current={activeSection === id ? "page" : undefined}
          className={activeSection === id ? "is-active" : undefined}
          href={`#${id}`}
          key={id}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}