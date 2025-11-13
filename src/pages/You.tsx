import React, { useState } from "react";
import {
  User,
  SlidersHorizontal,
  Sparkles,
  Bell,
  Shield,
  Globe2,
  Bookmark,
  Code2,
  Cpu,
  BookOpen,
  Layers,
  Bug,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";

type FeedKey = "software" | "react" | "java" | "spring" | "security";

type FeedPref = {
  key: FeedKey;
  label: string;
  description: string;
};

const FEED_PREFS: FeedPref[] = [
  {
    key: "software",
    label: "Software / Industry",
    description: "Big-picture dev, cloud, and tools.",
  },
  {
    key: "react",
    label: "React",
    description: "Components, patterns, and ecosystem.",
  },
  {
    key: "java",
    label: "Java",
    description: "JDK, JVM, and language news.",
  },
  {
    key: "spring",
    label: "Spring",
    description: "Boot, microservices, and backend.",
  },
  {
    key: "security",
    label: "Security",
    description: "Zero-days, patches, and breaches.",
  },
];

const You: React.FC = () => {
  const [enabledFeeds, setEnabledFeeds] = useState<Record<FeedKey, boolean>>({
    software: true,
    react: true,
    java: true,
    spring: false,
    security: true,
  });

  const [prefMoreTech, setPrefMoreTech] = useState(true);
  const [prefMoreSecurity, setPrefMoreSecurity] = useState(true);
  const [prefLessMarkets, setPrefLessMarkets] = useState(false);

  const [darkMode, setDarkMode] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [securityAlertsOnly, setSecurityAlertsOnly] = useState(false);

  const toggleFeed = (key: FeedKey) => {
    setEnabledFeeds((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderFeedIcon = (key: FeedKey) => {
    switch (key) {
      case "software":
        return <Code2 className="w-4 h-4" />;
      case "react":
        return <Cpu className="w-4 h-4" />;
      case "java":
        return <Layers className="w-4 h-4" />;
      case "spring":
        return <BookOpen className="w-4 h-4" />;
      case "security":
        return <Bug className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      {/* Content */}
      <main
        className="
          flex-1 overflow-y-auto px-4 pb-6 pt-3
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [::-webkit-scrollbar]:hidden
        "
      >
        <div className="mx-auto max-w-md space-y-6">
          {/* Profile summary */}
          <section className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 px-4 py-3.5 shadow-[0_0_40px_rgba(15,23,42,0.7)]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-sky-500 via-emerald-500 to-indigo-500 blur-sm opacity-60" />
                <div className="relative h-11 w-11 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center">
                  <User className="w-5 h-5 text-neutral-100" />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">Your profile</span>
                <span className="text-[11px] text-neutral-400">
                  You&apos;re training an AI news feed around your interests.
                </span>
              </div>
            </div>
          </section>

          {/* Feeds section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Your feeds
              </p>
              <button
                type="button"
                className="text-[11px] text-neutral-400 hover:text-neutral-200 flex items-center gap-1"
              >
                <Globe2 className="w-3 h-3" />
                Manage sources
              </button>
            </div>

            <div className="space-y-2.5">
              {FEED_PREFS.map((feed) => {
                const enabled = enabledFeeds[feed.key];
                return (
                  <button
                    key={feed.key}
                    type="button"
                    onClick={() => toggleFeed(feed.key)}
                    className={`w-full rounded-2xl border px-3.5 py-2.5 text-left flex items-center justify-between gap-3 transition ${
                      enabled
                        ? "border-sky-500/70 bg-neutral-900 shadow-[0_0_18px_rgba(56,189,248,0.3)]"
                        : "border-neutral-800 bg-neutral-950 hover:bg-neutral-900/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-200">
                        {renderFeedIcon(feed.key)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-neutral-50">
                          {feed.label}
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          {feed.description}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`relative flex h-5 w-9 items-center rounded-full transition ${
                        enabled ? "bg-sky-500/80" : "bg-neutral-800"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                          enabled ? "translate-x-4" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* AI tuning */}
          <section className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Tune AI
            </p>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 px-3.5 py-3 space-y-2.5">
              <button
                type="button"
                onClick={() => setPrefMoreTech((v) => !v)}
                className="w-full flex items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-sky-300" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">
                      More deep-dive tech
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Frameworks, backend details, and architecture.
                    </span>
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full flex items-center transition ${
                    prefMoreTech ? "bg-emerald-500/80" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                      prefMoreTech ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPrefMoreSecurity((v) => !v)}
                className="w-full flex items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-rose-300" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">
                      More security & 0-days
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Vulnerabilities, patches, and incidents.
                    </span>
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full flex items-center transition ${
                    prefMoreSecurity ? "bg-rose-500/80" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                      prefMoreSecurity ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPrefLessMarkets((v) => !v)}
                className="w-full flex items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Globe2 className="w-4 h-4 text-amber-200" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">
                      Less markets & macro
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Reduce generic finance / macro headlines.
                    </span>
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full flex items-center transition ${
                    prefLessMarkets ? "bg-amber-400/80" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                      prefLessMarkets ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </section>

          {/* Bookmarks */}
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Saved
              </p>
              <button
                type="button"
                className="text-[11px] text-neutral-400 hover:text-neutral-200 flex items-center gap-1"
              >
                <Bookmark className="w-3 h-3" />
                View all
              </button>
            </div>

            <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/70 px-4 py-5 text-xs text-neutral-400 flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-100 mb-1">
                  No bookmarks yet
                </p>
                <p>
                  Tap the{" "}
                  <span className="inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-900 px-1.5 py-[1px] text-[10px]">
                    <Bookmark className="w-3 h-3" />
                    <span>save</span>
                  </span>{" "}
                  button on any bundle to keep it here.
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </div>
          </section>

          {/* Settings */}
          <section className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Settings
            </p>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 px-3.5 py-3 space-y-2">
              {/* Dark mode (local only for now) */}
              <button
                type="button"
                onClick={() => setDarkMode((v) => !v)}
                className="w-full flex items-center justify-between gap-3 text-left py-1"
              >
                <div className="flex items-center gap-2.5">
                  {darkMode ? (
                    <Moon className="w-4 h-4 text-sky-300" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-300" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">Dark mode</span>
                    <span className="text-[11px] text-neutral-400">
                      Always-on dark theme for comfortable reading.
                    </span>
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full flex items-center transition ${
                    darkMode ? "bg-sky-500/80" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                      darkMode ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>

              {/* Alerts */}
              <button
                type="button"
                onClick={() => setAlertsEnabled((v) => !v)}
                className="w-full flex items-center justify-between gap-3 text-left py-1"
              >
                <div className="flex items-center gap-2.5">
                  <Bell className="w-4 h-4 text-emerald-300" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">Alerts</span>
                    <span className="text-[11px] text-neutral-400">
                      Get push-style notifications for important updates.
                    </span>
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full flex items-center transition ${
                    alertsEnabled ? "bg-emerald-500/80" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                      alertsEnabled ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>

              {/* Security-only alerts */}
              <button
                type="button"
                onClick={() => setSecurityAlertsOnly((v) => !v)}
                className="w-full flex items-center justify-between gap-3 text-left py-1"
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-rose-300" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">
                      Security alerts focus
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Prioritize vulns and patches in your notifications.
                    </span>
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full flex items-center transition ${
                    securityAlertsOnly ? "bg-rose-500/80" : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${
                      securityAlertsOnly ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default You;
