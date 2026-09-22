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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-12% 0px -62%", threshold: [0.1, 0.25, 0.5] },
    );
    targets.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-nav" aria-label="Sections">
      {sections.map(({ id, label }) => (
        <a className={activeSection === id ? "is-active" : undefined} href={`#${id}`} key={id}>
          {label}
        </a>
      ))}
    </nav>
  );
}