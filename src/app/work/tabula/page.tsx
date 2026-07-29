import type { Metadata } from "next";
import Link from "next/link";
import { TabulaExplorer } from "@/components/tabula/TabulaExplorer";
import {
  tabulaMetadata,
  tabulaNamingProposals,
  whyIBuiltThis,
  tabulaSections,
} from "@/content/tabula-case-study";

export const metadata: Metadata = {
  title: `${tabulaMetadata.title} — Flagship Case Study`,
  description: tabulaMetadata.subtitle,
};

export default function TabulaCaseStudyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground py-16 sm:py-24 selection:bg-primary/20">
      <div className="mx-auto max-w-5xl px-page">
        {/* ── Breadcrumb & Back Link ── */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
          </Link>
        </div>

        {/* ── Header & Title ── */}
        <div className="mb-12 border-b border-border/30 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3 font-mono text-xs text-primary">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 uppercase tracking-wider">
              Flagship Project
            </span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-muted-foreground">{tabulaMetadata.period}</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-muted-foreground">{tabulaMetadata.role}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-pretty mb-4">
            {tabulaMetadata.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
            {tabulaMetadata.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={tabulaMetadata.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-surface/50 px-4 py-2 text-xs font-mono text-foreground hover:border-foreground/40 hover:bg-surface transition-colors"
            >
              <span>View Source on GitHub</span>
              <span className="text-muted-foreground">↗</span>
            </a>
          </div>
        </div>

        {/* ── "Why I Built This" Section ── */}
        <section className="mb-16 rounded-2xl border border-primary/25 bg-surface-sunken/80 p-6 sm:p-8 relative overflow-hidden shadow-elevation-2">
          <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-2">
            Motivation {"//"} Data Science & Frontend
          </span>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            {whyIBuiltThis.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {whyIBuiltThis.content}
          </p>
        </section>

        {/* ── LIVE INTERACTIVE APP SPECIMEN ── */}
        <section className="mb-24 rounded-2xl border border-border/40 bg-surface/20 p-6 sm:p-8 shadow-elevation-3">
          <TabulaExplorer />
        </section>

        {/* ── Product Naming & Brand Strategy Section ── */}
        <section className="mb-24 rounded-2xl border border-border/30 bg-surface/30 p-6 sm:p-8">
          <div className="mb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-1">
              Product Naming Strategy
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              Evaluating Product Identity
            </h2>
            <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
              To ensure the project sounds like a real tool rather than a generic assignment, 5 distinct product names were evaluated before choosing Tabula.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tabulaNamingProposals.map((p) => (
              <div
                key={p.name}
                className={`rounded-xl border p-4 flex flex-col justify-between ${
                  p.status === "Selected"
                    ? "border-primary/40 bg-primary/[0.06]"
                    : "border-border/20 bg-surface/20 opacity-70"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {p.name}
                    </span>
                    <span
                      className={`font-mono text-[0.625rem] px-2 py-0.5 rounded-full ${
                        p.status === "Selected"
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-surface-raised text-muted-foreground border border-border/30"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <span className="font-mono text-[0.6875rem] text-primary/80 block mb-2">
                    {p.tagline}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.reasoning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 12-SECTION DEEP ENGINEERING CASE STUDY ── */}
        <div className="space-y-16 border-t border-border/30 pt-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-1">
              Engineering Walkthrough
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              12-Section Architecture Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {tabulaSections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="rounded-2xl border border-border/30 bg-surface/30 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-2 font-mono text-xs text-muted-foreground/60 uppercase">
                  <span>{sec.number}</span>
                  <span>{"//"}</span>
                  <span>{sec.question}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
                  {sec.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
                  {sec.content}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── Footer Signal Axis & Link ── */}
        <div className="mt-24 border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Portfolio Case Study Overview
          </Link>
          <a
            href={tabulaMetadata.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-primary hover:underline"
          >
            View Source Code on GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}
