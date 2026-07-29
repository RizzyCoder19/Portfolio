/**
 * Flagship Project Case Study Content — Tabula
 *
 * Tabula: Privacy-First Client-Side CSV Data Inspection & Profiling Workspace.
 *
 * All 12 Sections + "Why I Built This" + 5 Product Naming Proposals.
 */

export const tabulaMetadata = {
  title: "Tabula",
  subtitle: "A privacy-first browser workspace for parsing, profiling, and inspecting CSV datasets completely client-side.",
  role: "Solo Developer & Designer",
  period: "2026",
  githubUrl: "https://github.com/RizzyCoder19/portfolio",
} as const;

/** Proposed names evaluated during project conception. */
export const tabulaNamingProposals = [
  {
    name: "Tabula",
    tagline: "Minimalist Client-Side Data Inspection Workspace",
    status: "Selected",
    reasoning: "Derived from 'tabula rasa' (clean slate). Short, memorable, and sounds like a refined tool rather than a generic project assignment.",
  },
  {
    name: "Parseq",
    tagline: "Client-Side CSV & Data Analysis Engine",
    status: "Evaluated",
    reasoning: "Combines 'parse' and 'sequence'. Technical and sharp, but felt slightly abstract.",
  },
  {
    name: "Datum",
    tagline: "Privacy-First Browser Data Workbench",
    status: "Evaluated",
    reasoning: "Clean singular form of data, but commonly used across existing analytics libraries.",
  },
  {
    name: "Stratos Data",
    tagline: "High-Speed Tabular Exploration Engine",
    status: "Evaluated",
    reasoning: "Evokes high altitude and clean structure, but slightly overly dramatic.",
  },
  {
    name: "Vane",
    tagline: "Lightweight Data Inspection & Profiling Tool",
    status: "Evaluated",
    reasoning: "Minimalist, but does not immediately communicate tabular dataset work.",
  },
] as const;

/** Short "Why I Built This" section near the top. */
export const whyIBuiltThis = {
  title: "Why I Built This",
  content:
    "As a Data Science student learning frontend engineering, I frequently work with CSV datasets. Before diving into model training or complex analysis, I always need to answer basic questions: Are there missing values? What are the min/max ranges? Are there duplicate rows? Uploading sensitive or uncleaned datasets to third-party web converters felt privacy-risky and slow. I built Tabula to solve my own problem: a browser-native tool that profiles and cleans CSV files 100% locally using standard web technologies.",
} as const;

/** The 12 Detailed Case Study Sections (Grounded in Phase 1 Implementation). */
export const tabulaSections = [
  {
    number: "01",
    id: "overview",
    title: "Overview",
    question: "What is Tabula?",
    content:
      "Tabula is an interactive client-side web application built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. It allows users to drag and drop CSV files or load sample telemetry datasets to instantly view dataset summaries, numeric statistics (min, max, mean, median, unique counts), filter rows, inspect simple SVG distributions, and export cleaned subsets back to CSV.",
  },
  {
    number: "02",
    id: "problem",
    title: "The Problem",
    question: "What issue does it solve?",
    content:
      "Most free web-based CSV viewers require uploading files to backend servers, creating privacy risks for sensitive tabular data. Furthermore, many desktop spreadsheet tools lag when attempting simple text searches across medium-sized files. Tabula addresses both problems by running all parsing and state filtering directly inside the user's browser thread.",
  },
  {
    number: "03",
    id: "research",
    title: "Research & Library Selection",
    question: "Why PapaParse over custom regex splitting?",
    content:
      "Initial prototypes tried parsing CSV string content using String.prototype.split(',') or regex patterns. This broke immediately when encountering escaped quotes, fields containing embedded commas (e.g. \"San Francisco, CA\"), or multi-line row values. I integrated PapaParse—a mature, battle-tested JavaScript CSV parser—because it handles complex RFC 4180 CSV edge cases, dynamic type coercion, and delimiter auto-detection out of the box.",
  },
  {
    number: "04",
    id: "design",
    title: "Design Decisions",
    question: "How does the interface maintain focus?",
    content:
      "Following the portfolio's Dark Romance aesthetic, Tabula uses an obsidian surface palette (oklch 0.12), monospaced kickers, 1px signal seam borders, and clean spatial hierarchy. The layout keeps summary metric cards at the top, statistical breakdown in the center, and the searchable data grid below.",
  },
  {
    number: "05",
    id: "system-architecture",
    title: "System Architecture",
    question: "How does data move through the app?",
    content:
      "Data processing follows a unidirectional client-side pipeline: File Drop / Sample Click ➔ FileReader / String Ingestion ➔ PapaParse Execution ➔ Statistical Profiling Engine ➔ React State Store ➔ Synchronized Rendering across Summary Cards, Stats Panel, SVG Chart, and Data Grid ➔ Filtered Blob CSV Exporter.",
  },
  {
    number: "06",
    id: "frontend-architecture",
    title: "Frontend Architecture",
    question: "How are components structured?",
    content:
      "The application is modularized into single-responsibility components: TabulaUploader (drag-and-drop ingestion), TabulaSummaryPanel (overview metrics), TabulaStatsPanel (min/max/mean/median calculations), TabulaChart (SVG trend bar), and TabulaTable (sortable, searchable data grid with pagination).",
  },
  {
    number: "07",
    id: "performance",
    title: "Performance Decisions",
    question: "How are search and sorting kept fast?",
    content:
      "Search filters and column sorting operations are wrapped in React's useMemo hook. This ensures that text filtering across dataset rows only re-computes when the search term or dataset changes, avoiding redundant filtering passes when toggling pagination or column statistics.",
  },
  {
    number: "08",
    id: "accessibility",
    title: "Accessibility Decisions",
    question: "Is the data grid accessible?",
    content:
      "The data grid uses native semantic HTML <table>, <th>, and <td> tags with scope=\"col\" attributes and explicit ARIA labels. Keyboards can focus sorting headers and pagination buttons, with focus-visible rings styled according to our design tokens.",
  },
  {
    number: "09",
    id: "responsive-design",
    title: "Responsive Design",
    question: "How does it handle mobile screens?",
    content:
      "The summary and statistics panels use CSS Grid to stack cleanly from single-column on mobile viewports to 5/6-column grids on desktop. The data table container features sticky header positioning (sticky top-0) and smooth horizontal overflow scrolling.",
  },
  {
    number: "10",
    id: "challenges",
    title: "Challenges Encountered",
    question: "What was difficult during build?",
    content:
      "Accurately detecting numeric vs text columns was challenging because many CSV files contain mixed data types (e.g. numeric IDs mixed with null strings). I built an auto-detection threshold requiring >80% non-null numeric values before treating a column as numeric for min/max/mean/median stats.",
  },
  {
    number: "11",
    id: "mistakes",
    title: "Mistakes Made",
    question: "What went wrong during early iterations?",
    content:
      "In the first iteration, I rendered all dataset rows directly into the DOM without pagination. This caused main-thread layout thrashing on files with over 500 rows. I fixed this by implementing clean 15-row DOM pagination until Phase 2 virtualization is added.",
  },
  {
    number: "12",
    id: "future-improvements",
    title: "Future Improvements",
    question: "What comes next for Tabula?",
    content:
      "Future roadmap iterations will focus on offloading PapaParse execution to a Web Worker thread to keep large file parsing completely off the main thread, adding table virtualization (@tanstack/react-virtual), and supporting multi-column dataset joins.",
  },
] as const;
