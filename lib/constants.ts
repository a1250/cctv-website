/**
 * lib/constants.ts
 *
 * Single source of truth for ALL UI strings, site data, and configuration.
 * No hardcoded text belongs in components — import from here.
 * Designed for future i18n: swap this file per locale.
 */

// ─────────────────────────────────────────────────────────
// Company
// ─────────────────────────────────────────────────────────

export const COMPANY = {
  name: "360 LowVolt",
  tagline: "Precision. Performance. Presence.",
  phone: "+1 (818) 419-3335",
  phoneRaw: "+18184193335",
  email: "projects@360lowvolt.com",
  address: "Beverly Hills, CA 90210",
  logoSrc: "/logo.png",
  logoHeaderSrc: "/images/lowvolt-header.png",
  logoFooterSrc: "/images/logo-footer-final.png",
  logoEmblemSrc: "/logo-emblem.svg",
  social: {
    instagram: "https://instagram.com/360lowvolt",
    linkedin: "https://linkedin.com/company/360lowvolt",
  },
} as const;

// ─────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_CTA = { label: "Start Your Project", href: "/planner" } as const;

// ─────────────────────────────────────────────────────────
// Services (i18n-ready — slugs are URL keys, never translated)
// ─────────────────────────────────────────────────────────

export type ServiceSlug =
  | "cameras"
  | "alarm-systems"
  | "intercom-access"
  | "networks-wifi"
  | "sound-systems"
  | "home-cinema"
  | "led-lighting";

export const SERVICES = [
  {
    slug: "cameras" as ServiceSlug,
    name: "Security Cameras",
    shortDescription: "Discreet camera systems with AI-driven event detection and forensic-grade recording — engineered to disappear into the architecture.",
    description:
      "We design and install enterprise-grade camera systems that go far beyond passive recording. Our solutions leverage AI analytics, license plate recognition, facial detection, and behavioral monitoring to give you a proactive security layer — not just a record of what happened.",
    features: [
      "4K & thermal camera systems",
      "AI-powered behavioral analytics",
      "License plate recognition (LPR)",
      "Remote access & live monitoring",
      "Cloud & on-premise NVR options",
      "Concealed & aesthetic mounting",
    ],
    icon: "Camera",
    unsplashId: "/images/surveillance-analytics.png",
    heroUnsplashId: "/images/surveillance-analytics.png",
  },
  {
    slug: "alarm-systems" as ServiceSlug,
    name: "Access Control",
    shortDescription: "Multi-zone perimeter protection and intelligent entry management woven seamlessly into the residence, with mobile alerting and silent escalation paths.",
    description:
      "From perimeter detection to keyless entry, our access control systems are engineered to be nearly invisible and completely intelligent. Integration with smart home platforms means arming, disarming, and alert routing happen automatically — without you lifting a finger.",
    features: [
      "Keyless & mobile credential entry",
      "Multi-zone perimeter protection",
      "24/7 professional monitoring",
      "Geo-fence auto arm/disarm",
      "Tamper-proof control panels",
      "Smart home & voice integration",
    ],
    icon: "Shield",
    unsplashId: "/images/smart-intrusion-alarms.png",
    heroUnsplashId: "/images/smart-intrusion-alarms.png",
  },
  {
    slug: "intercom-access" as ServiceSlug,
    name: "Intercom",
    shortDescription: "Architectural door stations, HD video intercom, and biometric entry delivered over private, hardened networks.",
    description:
      "We replace outdated keys and buzzers with sophisticated, touchless access control. Video intercoms with facial recognition, mobile-credential readers, and enterprise-grade audit trails — all managed from a single dashboard accessible from anywhere in the world.",
    features: [
      "Facial & fingerprint recognition",
      "Mobile credential (BLE/NFC)",
      "Video intercom with HD display",
      "Multi-site access management",
      "Visitor management portal",
      "Full audit trail & reporting",
    ],
    icon: "Fingerprint",
    unsplashId: "/images/access-control-intercom.png",
    heroUnsplashId: "/images/access-control-intercom.png",
  },
  {
    slug: "networks-wifi" as ServiceSlug,
    name: "Network",
    shortDescription: "Carrier-class Wi-Fi, structured cabling, and SD-WAN built for whole-estate reliability and absolute privacy.",
    description:
      "Your smart home is only as smart as its network. We design and deploy carrier-grade Wi-Fi 7 mesh networks with wired backbone infrastructure, VLAN segmentation for security, and zero-lag coverage across every square foot — indoors, outdoors, and underground.",
    features: [
      "Wi-Fi 7 (802.11be) access points",
      "Structured CAT6A/Fiber cabling",
      "VLAN segmentation & firewall",
      "4G/5G failover redundancy",
      "Whole-property outdoor coverage",
      "Network monitoring & SLA",
    ],
    icon: "Wifi",
    unsplashId: "/images/enterprise-networking-integration.png",
    heroUnsplashId: "/images/enterprise-networking-integration.png",
  },
  {
    slug: "sound-systems" as ServiceSlug,
    name: "Audio",
    shortDescription: "Invisible in-wall and in-ceiling speakers, tuned per room by certified acousticians for reference performance.",
    description:
      "We integrate premium distributed audio systems from Sonos, Bowers & Wilkins, and KEF that deliver concert-hall clarity in every room. Whether you want room-by-room control, synchronized whole-home audio, or a dedicated dedicated listening room, we design it to disappear into the architecture.",
    features: [
      "Sonos & B&W system integration",
      "In-ceiling & in-wall speakers",
      "Outdoor weatherproof audio",
      "Multi-zone independent control",
      "Voice & app control",
      "Acoustic room calibration",
    ],
    icon: "Music",
    unsplashId: "/images/bespoke-architectural-audio.png",
    heroUnsplashId: "/images/bespoke-architectural-audio.png",
  },
  {
    slug: "home-cinema" as ServiceSlug,
    name: "Theater Rooms",
    shortDescription: "Design and calibration of elite private theater rooms featuring completely flush-mounted in-wall speakers, high-performance sound isolation, and architectural fabric acoustic paneling for an uncompromised residential viewing experience.",
    description:
      "Design and calibration of elite private theater rooms featuring completely flush-mounted in-wall speakers, high-performance sound isolation, and architectural fabric acoustic paneling for an uncompromised residential viewing experience.",
    features: [
      "4K laser projector & 170″ screen",
      "Dolby Atmos 9.2.6 audio design",
      "Acoustic room treatment",
      "Room-within-a-room soundproofing",
      "Motorized seating & drapery",
      "Full lighting scene control",
    ],
    icon: "Tv",
    unsplashId: "/images/bespoke-theater-rooms.png",
    heroUnsplashId: "/images/bespoke-theater-rooms.png",
  },
  {
    slug: "led-lighting" as ServiceSlug,
    name: "LED / Lighting",
    shortDescription: "Architectural LED linear lighting, intelligent dimming systems, and automated scene controls engineered to elevate interior spaces and luxury landscapes.",
    description:
      "Architectural LED linear lighting, intelligent dimming systems, and automated scene controls engineered to elevate interior spaces and luxury landscapes. Every fixture is precision-selected and tuned to complement the architecture — disappearing into coves, millwork, and facades while delivering flawless, programmable ambience at a single touch.",
    features: [
      "Architectural LED linear & cove systems",
      "Intelligent DALI & DMX dimming",
      "Circadian-tuned scene scheduling",
      "Landscape & low-voltage outdoor lighting",
      "Motorized blackout & solar shading integration",
      "Single-app & voice control",
    ],
    icon: "Lightbulb",
    unsplashId: "/images/bespoke-theater-rooms.png",
    heroUnsplashId: "/images/bespoke-theater-rooms.png",
  },
] as const;

// ─────────────────────────────────────────────────────────
// Mock Projects (for gallery & case studies)
// ─────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    slug: "obsidian-villa",
    title: "The Obsidian Villa",
    category: "Residential",
    kind: "Smart Automation & CCTV",
    services: ["cameras", "alarm-systems", "networks-wifi", "sound-systems", "led-lighting"] as ServiceSlug[],
    location: "Bel-Air, Los Angeles",
    loc: "COASTAL · PRIVATE",
    meta: "2 SITES · 47 ZONES · 2025",
    year: "2025",
    shortDescription: "Full-estate integration: 47-zone CCTV with AI analytics, multi-zone audio, Wi-Fi 7 mesh, and custom architectural LED lighting controls across 18,000 sq ft.",
    tint: "#0e1626",
    unsplashId: "/projects/obsidian/hero.jpg",
    galleryUnsplashIds: [
      "/projects/obsidian/1.jpg",
      "/projects/obsidian/2.jpg",
      "/projects/obsidian/3.jpg",
      "/projects/obsidian/4.jpg",
      "/projects/obsidian/5.jpg",
    ],
    featured: true,
  },
  {
    slug: "slate-penthouse",
    title: "The Slate Penthouse",
    category: "Residential",
    kind: "Dolby Atmos Home Theater",
    services: ["home-cinema", "sound-systems", "intercom-access"] as ServiceSlug[],
    location: "Santa Monica, CA",
    loc: "METROPOLITAN · 56F",
    meta: "1 SITE · 11.4.6 · 2025",
    year: "2025",
    shortDescription: "Dolby Atmos 11.4.6 screening room and distributed audio for a 56th-floor penthouse.",
    tint: "#1a1410",
    unsplashId: "/projects/slate/hero.jpg",
    galleryUnsplashIds: [
      "/projects/slate/1.jpg",
      "/projects/slate/2.jpg",
      "/projects/slate/3.jpg",
      "/projects/slate/4.jpg",
    ],
    featured: true,
  },
  {
    slug: "beverly-hills-hotel",
    title: "Luxury Boutique Hotel",
    category: "Hospitality",
    kind: "Access Control & Surveillance",
    services: ["cameras", "intercom-access", "networks-wifi"] as ServiceSlug[],
    location: "Beverly Hills, CA",
    loc: "HOSPITALITY · COMMERCIAL",
    meta: "1 SITE · 120 ROOMS · 2023",
    year: "2023",
    shortDescription: "Enterprise access control and surveillance across 120 rooms with guest-facing mobile credentials.",
    tint: "#131018",
    unsplashId: "photo-1566073771259-6a8506099945",
    galleryUnsplashIds: [
      "photo-1542314831-068cd1dbfeeb",
      "photo-1571896349842-33c89424de2d",
      "photo-1590490360182-c33d57733427",
      "photo-1551882547-ff40c63fe5fa",
      "photo-1520250497591-112f2f40a3f4",
    ],
    featured: false,
  },
  {
    slug: "malibu-coastal-estate",
    title: "Malibu Coastal Estate",
    category: "Residential",
    kind: "Architectural Audio & Cinema",
    services: ["home-cinema", "sound-systems", "alarm-systems"] as ServiceSlug[],
    location: "Malibu, CA",
    loc: "COASTAL · PRIVATE",
    meta: "1 SITE · 7500 SQFT · 2024",
    year: "2024",
    shortDescription: "Whole-estate distributed audio and a dedicated Dolby Atmos cinema for a beachfront estate.",
    tint: "#0e1a14",
    unsplashId: "photo-1512917774080-9991f1c4c750",
    galleryUnsplashIds: [
      "photo-1613490493576-7fde63acd811",
      "photo-1564013799919-ab600027ffc6",
      "photo-1613977257363-707ba9348227",
      "photo-1512915922686-57c11dde9b6b",
      "photo-1600585154526-990dced4db0d",
    ],
    featured: false,
  },
  {
    slug: "luminous-estate",
    title: "The Luminous Estate",
    category: "Residential",
    kind: "Architectural LED & Smart Lighting",
    services: ["led-lighting", "networks-wifi", "home-cinema"] as ServiceSlug[],
    location: "Holmby Hills, Los Angeles",
    loc: "RESIDENTIAL · PRIVATE",
    meta: "1 SITE · 340 ZONES · 2025",
    year: "2025",
    shortDescription: "Bespoke architectural LED linear systems, intelligent DALI dimming, and full landscape low-voltage lighting across a 14,000 sq ft private estate — all unified under a single automation grid.",
    tint: "#130e1a",
    unsplashId: "photo-1600585154526-990dced4db0d",
    galleryUnsplashIds: [
      "photo-1600585154526-990dced4db0d",
      "photo-1564013799919-ab600027ffc6",
      "photo-1613977257363-707ba9348227",
      "photo-1512915922686-57c11dde9b6b",
      "photo-1512917774080-9991f1c4c750",
    ],
    featured: true,
  },
] as const;

// ─────────────────────────────────────────────────────────
// UI Strings — Homepage
// ─────────────────────────────────────────────────────────

export const HOME_STRINGS = {
  hero: {
    eyebrow: "360 · Est. 2014",
    headline: "Smart Integration.",
    headlineAccent: "Cinematic Luxury.",
    subheadline:
      "Custom low-voltage solutions for luxury homes, including security cameras, smart home automation, network integration, access control, intercom, LED lighting, and theater rooms.",
    primaryCta: "Launch Project Planner",
    secondaryCta: "Explore Solutions",
    telemetry: {
      bl: { dim: "Ch · A", label: "Midnight · AMBIENT" },
      br: { dim: "Dolby · Atmos · Ready", label: "v1.0 — 2026" },
    },
    scrollLabel: "Scroll",
  },
  services: {
    eyebrow: "01 — Capabilities",
    title: "Integrated",
    titleAccent: "solutions.",
    subtitle: "Seven verticals. One seamless ecosystem.",
  },
  whyUs: {
    eyebrow: "02 — The Standard",
    title: "Engineered around",
    titleAccent: "your residence.",
    pillars: [
      {
        num: "01",
        title: "Tailored Engineering",
        description:
          "Systems custom-designed alongside your architects and interior designers — no compromises to the architectural intent, no visible compromises ever.",
      },
      {
        num: "02",
        title: "Flawless Craftsmanship",
        description:
          "Documented, military-grade cable management and equipment racks, photographed and signed off at every stage of installation.",
      },
      {
        num: "03",
        title: "White-Glove Support",
        description:
          "Dedicated 24/7 priority response, proactive system monitoring, and concierge-level account management for the life of the residence.",
      },
    ],
  },
  featuredProjects: {
    eyebrow: "03 — Recent Work",
    title: "Featured",
    titleAccent: "projects.",
    cta: "View All Projects",
  },
  cta: {
    eyebrow: "Begin the conversation",
    titleBefore: "Ready to",
    titleAccent: "elevate",
    titleAfter: "your space?",
    subtitle:
      "A 45-minute discovery call with our design engineering team. No deck, no script — your residence, your ambition.",
    primaryCta: "Launch Project Planner",
  },
} as const;

// ─────────────────────────────────────────────────────────
// UI Strings — Services
// ─────────────────────────────────────────────────────────

export const SERVICES_STRINGS = {
  overview: {
    eyebrow: "Our Services",
    title: "What We Integrate",
    subtitle: "Seven specialized disciplines — each engineered to the highest standard, all working in harmony.",
  },
  serviceHero: {
    breadcrumbRoot: "Services",
    ctaLabel: "Get a Quote",
    plannerLabel: "Use Project Planner",
  },
} as const;

// ─────────────────────────────────────────────────────────
// UI Strings — Projects
// ─────────────────────────────────────────────────────────

export const PROJECTS_STRINGS = {
  eyebrow: "Portfolio",
  title: "Our Work",
  subtitle: "A curated selection of projects across residential, commercial, and hospitality sectors.",
  filterAll: "All",
  filterResidential: "Residential",
  filterCommercial: "Commercial",
  filterHospitality: "Hospitality",
} as const;

// ─────────────────────────────────────────────────────────
// UI Strings — Planner Wizard
// ─────────────────────────────────────────────────────────

export const PLANNER_STRINGS = {
  pageTitle: "Project Planner",
  pageSubtitle: "Tell us about your project in 5 steps and we'll tailor a solution just for you.",
  steps: {
    services: {
      title: "Which services interest you?",
      subtitle: "Select all that apply.",
    },
    propertyType: {
      title: "What type of property is this for?",
      subtitle: "This helps us recommend the right approach.",
      options: [
        { value: "residential-new", label: "New Residential Build" },
        { value: "residential-existing", label: "Existing Residence" },
        { value: "commercial", label: "Commercial / Office" },
        { value: "hospitality", label: "Hotel / Hospitality" },
        { value: "other", label: "Other" },
      ],
    },
    budget: {
      title: "What's your approximate budget?",
      subtitle: "We work across a wide range — all budgets are welcome.",
      options: [
        { value: "under-25k", label: "Under $25,000" },
        { value: "25k-75k", label: "$25,000 – $75,000" },
        { value: "75k-250k", label: "$75,000 – $250,000" },
        { value: "250k-plus", label: "$250,000+" },
        { value: "unsure", label: "Not sure yet" },
      ],
    },
    timeline: {
      title: "When do you need the project completed?",
      subtitle: "We'll plan resources accordingly.",
      options: [
        { value: "asap", label: "As soon as possible" },
        { value: "1-3-months", label: "Within 1–3 months" },
        { value: "3-6-months", label: "Within 3–6 months" },
        { value: "6-plus-months", label: "6+ months from now" },
        { value: "flexible", label: "Flexible / Not sure" },
      ],
    },
    contact: {
      title: "How should we reach you?",
      subtitle: "A senior specialist will follow up within 24 hours.",
      fields: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        notes: "Additional Notes (optional)",
        notesPlaceholder: "Tell us more about your project, property size, or any specific requirements...",
      },
    },
  },
  navigation: {
    back: "Back",
    next: "Next Step",
    submit: "Submit My Project",
    submitting: "Submitting...",
  },
  summary: {
    title: "Thank You!",
    subtitle: "We've received your project details and will reach out within 24 hours.",
    cta: "Back to Home",
  },
} as const;

// ─────────────────────────────────────────────────────────
// UI Strings — Contact
// ─────────────────────────────────────────────────────────

export const CONTACT_STRINGS = {
  eyebrow: "Get in Touch",
  title: "Let's Start a Conversation",
  subtitle:
    "Whether you have a full brief or just an idea, we'd love to hear from you. Our team will respond within one business day.",
  form: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number (optional)",
    service: "Service of Interest",
    message: "Your Message",
    messagePlaceholder: "Tell us about your project or ask us anything...",
    submit: "Send Message",
    submitting: "Sending...",
    success: "Message sent! We'll be in touch shortly.",
    error: "Something went wrong. Please try again or email us directly.",
  },
} as const;

// ─────────────────────────────────────────────────────────
// UI Strings — About
// ─────────────────────────────────────────────────────────

export const ABOUT_STRINGS = {
  eyebrow: "Our Story",
  title: "We Built This Company Around One Belief:",
  titleAccent: "Technology Should Be Invisible.",
  story:
    "Established internationally for over a decade, 360 LowVolt was born from a frustration with the industry standard — systems that were complicated to use, ugly to look at, and fell apart without constant service calls. We set out to do the opposite: design solutions that disappear into your life, work flawlessly from day one, and are backed by a team that answers the phone.",
  story2:
    "Today, 360 LowVolt delivers pristine engineering across our core sectors, specializing in pre-construction wiring programs, renovation retrofits, and elite residential installations. Every project is led by a senior engineer — not a salesperson.",
  teamTitle: "The Team Behind Every Project",
  valuesTitle: "Our Values",
  values: [
    { icon: "Eye", title: "Invisible by Design", description: "The best technology is the kind you never think about." },
    { icon: "Zap", title: "Engineered First", description: "We design before we install. Every project is a custom blueprint." },
    { icon: "Heart", title: "Long-term Relationships", description: "Most of our clients have been with us for years. We earn that." },
  ],
} as const;

// ─────────────────────────────────────────────────────────
// UI Strings — Footer
// ─────────────────────────────────────────────────────────

export const FOOTER_STRINGS = {
  tagline: "World-class integration for those who expect nothing less.",
  copyright: `© ${new Date().getFullYear()} 360 LowVolt. All rights reserved.`,
  columns: {
    services: "Services",
    company: "Company",
    contact: "Contact",
  },
  companyLinks: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Project Planner", href: "/planner" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

// ─────────────────────────────────────────────────────────
// Shared / Misc
// ─────────────────────────────────────────────────────────

export const SHARED_STRINGS = {
  learnMore: "Learn More",
  viewProject: "View Project",
  backToProjects: "← Back to Projects",
  backToServices: "← Back to Services",
  loading: "Loading...",
  error: "Something went wrong.",
  notFound: "Page not found.",
} as const;
