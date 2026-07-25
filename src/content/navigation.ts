export interface NavLink {
  label: string;
  sectionId: string;
}

export const navLinks: readonly NavLink[] = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Work", sectionId: "work" },
  { label: "Experiments", sectionId: "experiments" },
  { label: "Contact", sectionId: "contact" },
] as const;

export const siteLogo = "KU" as const;
