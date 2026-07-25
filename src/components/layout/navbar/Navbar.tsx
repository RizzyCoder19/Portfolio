"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/utils/scroll";

import { NavbarItem } from "./NavbarItem";

interface NavLink {
  label: string;
  sectionId: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Work", sectionId: "work" },
  { label: "Experiments", sectionId: "experiments" },
  { label: "Contact", sectionId: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();

  /* ── IntersectionObserver for active section ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(id);
          return;
        }
      }
    };

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(handleIntersect(id), {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, []);

  /* ── Close mobile menu on Escape ── */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  /* ── Trap focus inside mobile menu ── */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      scrollTo(`#${sectionId}`, { offset: 80 });
    },
    [scrollTo],
  );

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2" role="banner">
      <nav
        className={cn(
          "flex items-center gap-6 rounded-full border border-border/60 bg-background/80 px-4 py-2",
          "shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-lg",
          "dark:border-border/40 dark:bg-background/50",
          "dark:shadow-[0_4px_24px_rgba(0,0,0,0.12)]",
        )}
        aria-label="Main navigation"
      >
        {/* ── Left: Logo ── */}
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="shrink-0 text-sm font-semibold text-foreground"
        >
          KU
        </button>

        {/* ── Center: Desktop links ── */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <NavbarItem
              key={link.sectionId}
              label={link.label}
              sectionId={link.sectionId}
              isActive={activeSection === link.sectionId}
            />
          ))}
        </ul>

        {/* ── Right: Theme toggle + mobile hamburger ── */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className={cn(
              "flex size-9 items-center justify-center rounded-full md:hidden",
              "text-muted-foreground hover:bg-secondary hover:text-foreground",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
            )}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <line
                    x1="3"
                    y1="3"
                    x2="15"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="3"
                    x2="3"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="2"
                    y1="5"
                    x2="16"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="9"
                    x2="16"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="13"
                    x2="16"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="menu"
          className={cn(
            "absolute top-full right-4 left-4 mt-2",
            "rounded-2xl border border-border/60 bg-background/95 px-4 py-3",
            "shadow-lg backdrop-blur-lg",
            "dark:border-border/40 dark:bg-background/90",
          )}
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <NavbarItem
                key={link.sectionId}
                label={link.label}
                sectionId={link.sectionId}
                isActive={activeSection === link.sectionId}
                onItemClick={closeMobile}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
