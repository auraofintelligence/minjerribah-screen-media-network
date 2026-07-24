export type ProjectStatus = "active" | "proposed" | "horizon" | "official";

export const navigation = [
  { href: "/", label: "Opening night", shortLabel: "Home" },
  { href: "/network", label: "Media network", shortLabel: "Network" },
  { href: "/places", label: "Ballow Road", shortLabel: "Places" },
  { href: "/funding", label: "Rough costs", shortLabel: "Funding" },
  { href: "/join", label: "Have your say", shortLabel: "Join" },
  { href: "/sources", label: "Sources and facts", shortLabel: "Sources" },
] as const;

export const statusLabels: Record<ProjectStatus, string> = {
  active: "Planning page is public",
  proposed: "Idea for discussion",
  horizon: "Future idea only",
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
    text: "People checking the facts, asking permission and being clear about who decides what.",
  },
  {
    number: "05",
    title: "Resilience",
    text: "Everyday local information, with checked official updates during emergencies.",
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
  "Grants",
  "Tenders",
  "Jobs",
  "Fun facts",
] as const;

export const noticeboardLocations = [
  "Community clubs",
  "Cultural venues",
  "Local shops",
  "Transport areas, where permitted",
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
    basis: "No quantities, prices or quotes were used. The placeholder loosely bundled screening rights, program care, access support and event production.",
  },
  {
    id: "training",
    label: "Small media and journalism training trials",
    amount: 24000,
    stage: "Train",
    note: "Small beginner cohorts, mentors, venue hire and learning materials.",
    basis: "No course size, trainer rate, venue price or timetable was calculated. The placeholder loosely bundled mentors, a venue and learning materials.",
  },
  {
    id: "journalism-kit",
    label: "Shared journalism kit",
    amount: 16000,
    stage: "Publish",
    note: "Phones, audio, tripods, lights, storage and captioning workstations.",
    basis: "No equipment list or shop prices were used. The placeholder loosely bundled recording, lighting, storage and captioning gear.",
  },
  {
    id: "noticeboards",
    label: "Small digital noticeboard trial",
    amount: 22000,
    stage: "Distribute",
    note: "A few screens, the gear to run them, remote updates and easy-to-read information.",
    basis: "No screen count, installation quote or service cost was used. The placeholder loosely bundled displays, players, installation and remote updates.",
  },
  {
    id: "led-cinema",
    label: "Modular 6 m × 3 m LED cinema",
    amount: 95000,
    stage: "Screen",
    note: "Planning allowance for modular display, split-screen control, rigging and transport.",
    basis: "No LED supplier, panel specification, freight price, rigging plan or installation quote was used. This was an unsupported round-number guess.",
  },
  {
    id: "broadcast",
    label: "Production + live broadcast kit",
    amount: 38000,
    stage: "Broadcast",
    note: "Cameras, switching, audio, comms, power, encoding and protective cases.",
    basis: "No equipment schedule or supplier prices were used. The placeholder loosely bundled cameras, sound, switching, power, cases and streaming gear.",
  },
  {
    id: "kiosks",
    label: "Resilient kiosk expansion",
    amount: 48000,
    stage: "Resilience",
    note: "More locations, cached content, high-contrast mode and backup-power options.",
    basis: "No number of kiosks, installation price or power design was used. The placeholder loosely bundled extra locations, backup power and software work.",
  },
  {
    id: "traineeships",
    label: "Possible paid trainee program",
    amount: 72000,
    stage: "Employ",
    note: "A planning allowance for supervised paid practice, not a promised wage program.",
    basis: "No trainee count, award rate, hours, supervision load or on-costs were calculated. This was an unsupported round-number guess.",
  },
  {
    id: "mobile-studio",
    label: "Mobile studio or trailer",
    amount: 85000,
    stage: "Travel",
    note: "A flexible island-wide editing, recording and outside-broadcast base.",
    basis: "No vehicle, trailer, fit-out, registration, insurance or equipment quotes were used. This was an unsupported round-number guess.",
  },
  {
    id: "permanent",
    label: "Permanent screens and media facilities",
    amount: 180000,
    stage: "Anchor",
    note: "Concept allowance only; site, engineering, approvals and fit-out are separate.",
    basis: "No site, design, engineering, approval, construction or fit-out scope was calculated. This was an unsupported round-number guess.",
  },
  {
    id: "operations",
    label: "Year-round operating runway",
    amount: 220000,
    stage: "Sustain",
    note: "Coordination, editorial review, training, maintenance and public reporting.",
    basis: "No roles, wages, hours, insurance, rent or annual operating plan were calculated. This was an unsupported round-number guess.",
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
      "A public planning website for stories, screenings and beginner filmmaking. It is an idea page, not an official festival body.",
    url: "https://auraofintelligence.github.io/quandamooka-film-festival/",
    status: "active",
  },
  {
    title: "Ready S.E.T. Co-op Trust Hub",
    description:
      "A public planning website for a community front desk and training space, possibly at 9 Ballow Road.",
    url: "https://auraofintelligence.github.io/ready-set-co-op-trust-hub/",
    status: "active",
  },
  {
    title: "Ready S.E.T. Co-op Hyperlocal Media",
    description:
      "A planning website about teaching media skills, recording useful local work and sharing local stories.",
    url: "https://auraofintelligence.github.io/ready-set-co-op-hyperlocal-media/",
    status: "active",
  },
  {
    title: "Straddie Noticeboard Network",
    description:
      "A planning website showing how checked local notices could be prepared for public screens.",
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
      "A public planning website for possible sand sport, outdoor screens, markets and community gatherings at 10–12 Ballow Road.",
    url: "https://auraofintelligence.github.io/ballow-road-sand-screen-hub/",
    status: "active",
  },
  {
    title: "Sandy Sports community-club builder",
    description:
      "A planning website about how a community-run sand-sports club might work.",
    url: "https://auraofintelligence.github.io/community-club-builder-sandy-sports/",
    status: "active",
  },
  {
    title: "Dunwich (Gumpi) Ferry Terminal Open Data Lab",
    description:
      "A public information website that separates official ferry-upgrade facts from local questions and computer-made scenarios.",
    url: "https://auraofintelligence.github.io/dunwich-gumpi-ferry-terminal-open-data-lab/",
    status: "active",
  },
  {
    title: "Sandworm Subterranean Systems",
    description:
      "A future-ideas website about tunnels, transport, reusing excavated material and community facilities. It is not an engineering plan.",
    url: "https://auraofintelligence.github.io/sandworm-subterranean-systems/",
    status: "horizon",
  },
  {
    title: "Grain by Grain",
    description:
      "A future-ideas website connecting material reuse, community infrastructure and a staged path towards larger underground systems.",
    url: "https://auraofintelligence.github.io/grain-by-grain/",
    status: "horizon",
  },
  {
    title: "Civilisation of Sand",
    description:
      "A cinematic-universe architecture for films, games, music, events, team-building, practical skills, paid creative work and a future subterranean civilisation.",
    url: "https://auraofintelligence.github.io/civilisation-of-sand/",
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
    title: "Quandamooka Festival: official Facebook page",
    description:
      "The festival’s own page launched the 2026 event on 22 July, lists 12–13 September and is calling for stallholders and artists.",
    url: "https://www.facebook.com/quandamookafestival",
    status: "official",
  },
  {
    title: "SeaLink: Quandamooka Festival event listing",
    description:
      "A current event listing confirming 12–13 September 2026 at QUAMPI Arts & Culture Centre. Older government listings still show August dates.",
    url: "https://www.sealink.com.au/north-stradbroke-island/events/quandamooka-festival-2/",
    status: "active",
  },
  {
    title: "Redland City Council: significant events",
    description:
      "This public Council calendar still shows 29–30 August 2026, so its festival dates appear to be older than the organiser’s 22 July launch.",
    url: "https://www.redland.qld.gov.au/Quandamooka-Country/Calendar-of-significant-events",
    status: "official",
  },
];
