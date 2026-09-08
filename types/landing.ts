export interface NavItem {
  label: string;
  href: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  sublabel: string;
}

export interface TechFeature {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconName: string;
  specs: string[];
}

export interface EraHighlight {
  year: string;
  eraName: string;
  tagline: string;
  details: string;
}

export interface MonumentExhibit {
  id: string;
  name: string;
  indigenousName: string;
  location: string;
  status: string;
  classification: string;
  architect: string;
  commissioned: string;
  summary: string;
  eras: EraHighlight[];
}

export interface ValuePillar {
  title: string;
  headline: string;
  description: string;
  iconName: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
