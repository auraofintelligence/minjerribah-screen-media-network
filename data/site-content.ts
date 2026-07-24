export type ProjectStatus = "active" | "proposed" | "horizon" | "official";

export const navigation = [
  { href: "/", label: "Opening night", shortLabel: "Home" },
  { href: "/network", label: "Media network", shortLabel: "Network" },
  { href: "/places", label: "Ballow Road", shortLabel: "Places" },
  { href: "/funding", label: "Fund the layers", shortLabel: "Funding" },
  { href: "/join", label: "Join the build", shortLabel: "Join" },
  { href: "/sources", label: "Receipts", shortLabel: "Sources" },
] as const;

export const statusLabels: Record<ProjectStatus, string> = {
  active: "Active public work",
  proposed: "Proposal to shape",
  horizon: "Long-term concept",
  official: "Official source",
};

export const systemPetals = [
  {
    number: "01",
    title: "Stories",
    text: "Films, interviews, local news, history, sport, art and useful explainers.",
  },
  {
    number: "02",
    title: "Skills",
    text: "Phone filmmaking, reporting, editing, captioning, presenting and AI literacy.",
  },
  {
    number: "03",
    title: "Screens",
    text: "Festival projection, mobile cinema, venue displays and public noticeboards.",
  },
  {
    number: "04",
    title: "Trust",
    text: "Human review, consent, source trails, clear status and cultural authority.",
  },
  {
    number: "05",
    title: "Resilience",
    text: "A useful everyday network that can repeat verified official updates in a crisis.",
  },
  {
    number: "06",
    title: "Places",
    text: "A practical co-op front desk and spaces for culture, sport, media and gathering.",
  },
] as const;

export const coverageBeats = [
  "Local news",
  "Arts + culture",
  "Sport",
  "Business",
  "Events",
  "Transport",
  "Weather + surf",
  "Wildlife",
  "Council + consultations",
  "Community groups",
  "Emergency information",
  "Visitor guidance",
] as const;

export const noticeboardLocations = [
  "Community clubs",
  "Cultural venues",
  "Local shops",
  "Transport areas — where permitted",
  "Sports venues",
  "Libraries + community facilities",
  "Accommodation + visitor locations",
  "Proposed Ballow Road hubs",
] as const;

export const fundingItems = [
  {
    id: "festival",
    label: "Festival programming kickstart",
    amount: 18000,
    stage: "Make",
    note: "Screening rights, program care, access support and first-night production.",
  },
  {
    id: "training",
    label: "Media + journalism training pilots",
    amount: 24000,
    stage: "Train",
    note: "Small beginner cohorts, mentors, venue hire and learning materials.",
  },
  {
    id: "journalism-kit",
    label: "Shared journalism kit",
    amount: 16000,
    stage: "Publish",
    note: "Phones, audio, tripods, lights, storage and captioning workstations.",
  },
  {
    id: "noticeboards",
    label: "Digital noticeboard pilot",
    amount: 22000,
    stage: "Distribute",
    note: "A small screen cluster, players, mounts, remote updates and accessibility.",
  },
  {
    id: "led-cinema",
    label: "Modular 6 m × 3 m LED cinema",
    amount: 95000,
    stage: "Screen",
    note: "Planning allowance for modular display, split-screen control, rigging and transport.",
  },
  {
    id: "broadcast",
    label: "Production + live broadcast kit",
    amount: 38000,
    stage: "Broadcast",
    note: "Cameras, switching, audio, comms, power, encoding and protective cases.",
  },
  {
    id: "kiosks",
    label: "Resilient kiosk expansion",
    amount: 48000,
    stage: "Resilience",
    note: "More locations, cached content, high-contrast mode and backup-power options.",
  },
  {
    id: "traineeships",
    label: "Paid trainee pathway",
    amount: 72000,
    stage: "Employ",
    note: "A planning allowance for supervised paid practice, not a promised wage program.",
  },
  {
    id: "mobile-studio",
    label: "Mobile studio or trailer",
    amount: 85000,
    stage: "Travel",
    note: "A flexible island-wide editing, recording and outside-broadcast base.",
  },
  {
    id: "permanent",
    label: "Permanent screen + media infrastructure",
    amount: 180000,
    stage: "Anchor",
    note: "Concept allowance only; site, engineering, approvals and fit-out are separate.",
  },
  {
    id: "operations",
    label: "Year-round operating runway",
    amount: 220000,
    stage: "Sustain",
    note: "Coordination, editorial review, training, maintenance and public reporting.",
  },
] as const;

export const sourceProjects: Array<{
  title: string;
  description: string;
  url: string;
  status: ProjectStatus;
}> = [
  {
    title: "Quandamooka Film Festival toolkit",
    description:
      "An existing public prototype for human-led story planning, screenings and beginner film builders. It is not an official festival authority.",
    url: "https://auraofintelligence.github.io/quandamooka-film-festival/",
    status: "active",
  },
  {
    title: "Ready S.E.T. Co-op Trust Hub",
    description:
      "The existing public proposal for a trust-and-training front desk, including the possible 9 Ballow Road base.",
    url: "https://auraofintelligence.github.io/ready-set-co-op-trust-hub/",
    status: "active",
  },
  {
    title: "Ready S.E.T. Hyperlocal Media",
    description:
      "A companion prototype for training people, documenting useful work and publishing local stories.",
    url: "https://auraofintelligence.github.io/ready-set-co-op-hyperlocal-media/",
    status: "active",
  },
  {
    title: "Straddie Noticeboard Network",
    description:
      "A public-source workflow for turning human-approved Markdown into public notices and screen-ready information.",
    url: "https://auraofintelligence.github.io/straddie-noticeboard-network/",
    status: "active",
  },
  {
    title: "Film Club Documentary Builders",
    description:
      "Practical builders for source trails, interview planning, film profiles, screening runsheets and festival preparation.",
    url: "https://auraofintelligence.github.io/film-club-documentary-builders/",
    status: "active",
  },
  {
    title: "Ballow Road Sand & Screen Hub",
    description:
      "The existing 10–12 Ballow Road public concept for sand sport, screen culture, markets and community gathering.",
    url: "https://auraofintelligence.github.io/ballow-road-sand-screen-hub/",
    status: "active",
  },
  {
    title: "Sandy Sports community-club builder",
    description:
      "A public workbench for shaping a legitimate, community-led sand-sports club and operating pathway.",
    url: "https://auraofintelligence.github.io/community-club-builder-sandy-sports/",
    status: "active",
  },
  {
    title: "Dunwich (Gumpi) Ferry Terminal Open Data Lab",
    description:
      "A community prototype that keeps official ferry-upgrade facts separate from simulations and local questions.",
    url: "https://auraofintelligence.github.io/dunwich-gumpi-ferry-terminal-open-data-lab/",
    status: "active",
  },
  {
    title: "Sandworm Subterranean Systems",
    description:
      "A question-led long-horizon workbench for tunnels, transport, spoil reuse and community assets. It is not an engineering plan.",
    url: "https://auraofintelligence.github.io/sandworm-subterranean-systems/",
    status: "horizon",
  },
  {
    title: "TMR: Dunwich (Gumpi) Ferry Terminal Upgrade",
    description:
      "The official Queensland Government project page. It is the authority for the upgrade’s current status, scope and timing.",
    url: "https://www.tmr.qld.gov.au/projects/dunwich-gumpi-ferry-terminal-upgrade",
    status: "official",
  },
  {
    title: "Redland City Council: significant events",
    description:
      "A current public listing that confirms the 2026 Quandamooka Festival dates. Festival authority remains with its organisers.",
    url: "https://www.redland.qld.gov.au/Quandamooka-Country/Calendar-of-significant-events",
    status: "official",
  },
];
