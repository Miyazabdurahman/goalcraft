import { useState, useId } from "react";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Clock,
  Users,
  Tent,
  TreePine,
  Calendar,
  ChevronDown,
  Check,
} from "lucide-react";


/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface CampInfoItem {
  icon: LucideIcon;
  label: string;
  mapLink?: string;
}

interface CampTheme {
  headerGradient: string;
  border: string;
  iconColor: string;
  footerBorder: string;
  footerBg: string;
  footerText: string;
  linkColor: string;
}

type CampId = "explorer" | "escape";

interface CampData {
  id: CampId;
  order?: string;
  badge: string;
  title: string;
  subtitle: string;
  infoItems: CampInfoItem[];
  features: string[];
  footerLabel: string;
  footerValue: string;
  theme: CampTheme;
}
/* -------------------------------------------------------------------------- */
/*  Static data                                                                */
/* -------------------------------------------------------------------------- */

const REGISTER_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScbH7G_lcFmmPRVUI4lPYEX4UExkSX788heTPX6LAdFV5an0A/viewform";

const skyTheme: CampTheme = {
  headerGradient: "bg-gradient-to-r from-sky-400 to-blue-500",
  border: "border-sky-100",
  iconColor: "text-sky-600",
  footerBorder: "border-sky-100",
  footerBg: "bg-sky-50/50",
  footerText: "text-sky-700",
  linkColor: "text-indigo-600 hover:text-indigo-800",
};

const indigoTheme: CampTheme = {
  headerGradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
  border: "border-indigo-100",
  iconColor: "text-indigo-600",
  footerBorder: "border-indigo-100",
  footerBg: "bg-indigo-50/50",
  footerText: "text-indigo-700",
  linkColor: "text-indigo-600 hover:text-indigo-800",
};

const CAMPS: CampData[] = [
  {
    id: "explorer",
    order: "order-2",
    badge: "Camp 02",
    title: "Rain Explorer",
    subtitle: "One-Day Monsoon Adventure",
    infoItems: [
      { icon: Calendar, label: "30 August 2026 (Sunday)" },
      { icon: Users, label: "Grades 1–4 (Boys & Girls)" },
      {
        icon: MapPin,
        label: "Noor Lake, Tirur",
        mapLink: "https://maps.app.goo.gl/6DQWNZN39gPjB1RZ8",
      },
      { icon: Clock, label: "9:30 AM – 4:30 PM" },
    ],
    features: [
      "Rain Games",
      "Pottery & Clay Making",
      "Group Activities",
      "Nature Exploration",
      "Creative Workshops",
      "Team Challenges",
      "Fun & Surprises",
    ],
    footerLabel: "Only",
    footerValue: "50 seats",
    theme: skyTheme,
  },
  {
    id: "escape",
    badge: "Camp 01 • Premium",
    title: "Rain Escape",
    subtitle: "Residential Monsoon Camp",
    infoItems: [
      { icon: Calendar, label: "2026 August 22, 23" },
      { icon: Tent, label: "1 Night • 2 Days" },
      {
        icon: MapPin,
        label: "Era Nature, Perinthalmanna",
        mapLink: "https://maps.app.goo.gl/3yHHrGB7mGjTzQia6",
      },
      { icon: TreePine, label: "Nature trails, campfire & more" },
    ],
    features: [
      "Rain Adventure Games",
      "Fishing",
      "Boating",
      "Pottery & Clay Making",
      "Traditional Mud Bath",
      "Nature Trails",
      "Team Building Activities",
      "Campfire*",
    ],
    footerLabel: "Limited to",
    footerValue: "35 participants",
    theme: indigoTheme,
  },
];

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function CampInfoRow({
  icon: Icon,
  label,
  mapLink,
  iconColor,
}: CampInfoItem & { iconColor: string }) {
  return (
    <div>
      <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
        <Icon className={`${iconColor} shrink-0 mt-0.5`} size={18} aria-hidden="true" />
        <span>{label}</span>
      </div>
      {mapLink ? (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline transition-colors ml-7 inline-block"
        >
          View on Google Maps →
        </a>
      ) : null}
    </div>
  );
}

function CampCard({
    camp,
    isOpen,
    onToggle,
}: {
    camp: CampData;
    isOpen: boolean;
    onToggle: () => void;
}) {
  const contentId = useId();
  const theme = camp.theme;

  return (
    <div
      className={`relative ${camp.order ?? ""} flex flex-col bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border ${theme.border} overflow-hidden`}
    >
      {/* Header */}
      <div className={`px-6 py-4 ${theme.headerGradient} text-white`}>
        <div className="text-xs font-semibold tracking-wide uppercase opacity-90">
          {camp.badge}
        </div>
        <div className="text-xl sm:text-2xl font-bold">{camp.title}</div>
        <div className="text-sm opacity-90">{camp.subtitle}</div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex-1 flex flex-col">
        <div className="space-y-3">
          {camp.infoItems.map((item) => (
            <CampInfoRow key={item.label} {...item} iconColor={theme.iconColor} />
          ))}
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800 transition self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
        >
          {isOpen ? "Hide Details" : "View Details"}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          id={contentId}
          role="region"
          aria-hidden={!isOpen}
          className={`grid transition-all duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 mb-4">
              {camp.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check size={16} className="text-indigo-600 shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="italic text-gray-500 text-sm">
              "Not just a camp… a monsoon childhood brought back to life."
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`px-6 py-3 border-t ${theme.footerBorder} ${theme.footerBg} text-xs sm:text-sm font-medium ${theme.footerText}`}
      >
        {camp.footerLabel} <span className="font-bold">{camp.footerValue}</span> available
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  const [openCamp, setOpenCamp] =
  useState<'explorer' | 'escape' | null>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-0 min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <div className="space-y-2 sm:space-y-8 animate-fade-in-up">
          {/* Title */}
          <div className="flex justify-center">
            <img
              src="/logo4.png"
              alt="Knowify Mazha Camp logo"
              className="h-72 sm:h-96 lg:h-[30rem] w-auto"
            />
          </div>
          <br />

          <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-gray-700 max-w-4xl mx-auto px-2">
            Play in the Rain • Learn from Nature <br />• Create Memories Forever
          </p>

          {/* Camp Cards */}
          <h2 className="pt-8 sm:pt-10 text-xl sm:text-2xl font-bold text-gray-900">
            Two Ways to Experience the Monsoon
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 pt-2 text-left max-w-5xl mx-auto items-stretch">
           {CAMPS.map((camp) => (
    <CampCard
        key={camp.id}
        camp={camp}
        isOpen={openCamp === camp.id}
        onToggle={() =>
            setOpenCamp(openCamp === camp.id ? null : camp.id)
        }
    />
))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-8 sm:pt-10">
            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Register Now
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("previous-programmes")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
            >
              Previous Programmes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
