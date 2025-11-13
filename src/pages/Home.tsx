import React, { useState } from "react";
import {
  Heart,
  ThumbsDown,
  EyeOff,
  Sparkles,
  SlidersHorizontal,
  Home,
  Bell,
  User,
  Dot,
  BookOpen,
  Layers,
  Cpu,
  Code2,
  Globe2,
} from "lucide-react";

type ReactionType = "like" | "dislike" | "hide" | "more" | "less" | null;

type NewsUpdate = {
  id: number;
  time: string;
  source: string;
  headline: string;
  summary: string;
  tag: string;
};

type FeedKey = "software" | "react" | "spring" | "java" | "security";

type FeedDefinition = {
  key: FeedKey;
  label: string;
  accent: string;
  description: string;
};
const FEEDS: FeedDefinition[] = [
  {
    key: "software",
    label: "Software News",
    accent: "text-sky-400",
    description: "Big-picture dev & industry",
  },
  {
    key: "react",
    label: "React",
    accent: "text-emerald-400",
    description: "Framework & ecosystem",
  },
  {
    key: "spring",
    label: "Spring",
    accent: "text-amber-300",
    description: "Backend & microservices",
  },
  {
    key: "java",
    label: "Java",
    accent: "text-purple-300",
    description: "Language & tooling",
  },
  {
    key: "security",
    label: "Security",
    accent: "text-rose-400",
    description: "Vulns & patches",
  },
];
const MOCK_UPDATES: NewsUpdate[] = [
  {
    id: 1,
    time: "8:05 AM",
    source: "ABC News",
    headline: "Overnight markets react to new Fed comments",
    summary:
      "Global markets opened mixed as investors weighed fresh guidance from the Federal Reserve on interest rates and inflation expectations.",
    tag: "Markets • Morning Brief",
  },
  {
    id: 2,
    time: "11:30 AM",
    source: "CNN",
    headline: "New AI safety guidelines released",
    summary:
      "A coalition of major tech companies and researchers released a shared set of principles aimed at improving transparency and safety in AI systems.",
    tag: "Tech • Policy",
  },
  {
    id: 3,
    time: "3:15 PM",
    source: "Reuters",
    headline: "Severe weather alerts in multiple states",
    summary:
      "Forecasters warn of heavy storms and potential flooding across several regions this evening. Travel delays are expected in affected areas.",
    tag: "Weather • Live Update",
  },
];

const reactionLabel: Record<Exclude<ReactionType, null>, string> = {
  like: "You liked this",
  dislike: "You disliked this",
  hide: "We’ll show less like this",
  more: "More like this",
  less: "Less of this topic",
};

const News: React.FC = () => {
  const [reactions, setReactions] = useState<Record<number, ReactionType>>({});

  const handleReaction = (id: number, reaction: ReactionType) => {
    setReactions((prev) => ({
      ...prev,
      [id]: prev[id] === reaction ? null : reaction,
    }));
  };

  const [activeFeed, setActiveFeed] = useState<FeedKey>("software");
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      {/* Top bar / header */}
      <header className="sticky top-0 z-20 h-14 flex items-center justify-between px-4 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-500 flex items-center justify-center text-xs font-semibold">
            AI
          </div>
          <div>
            <div className="text-sm font-semibold flex items-center gap-1">
              AI News Feed
              <Dot className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-normal text-emerald-400">
                Online
              </span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Smart updates throughout your day
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800 transition">
            <Sparkles className="w-3 h-3" />
            Tune feed
          </button>
          <button
            className="h-8 w-8 rounded-full border border-neutral-800 bg-neutral-900/80 flex items-center justify-center hover:bg-neutral-800 transition"
            aria-label="Preferences"
          >
            <SlidersHorizontal className="w-4 h-4 text-neutral-300" />
          </button>
        </div>
      </header>
      <section className="flex px-4 pb-3pt-3 space-y-4 items-center justify-center  ">
        <div className="max-w-md">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Feeds
            </p>
            <button
              type="button"
              className="text-[11px] text-neutral-400 hover:text-neutral-200 flex items-center gap-1"
            >
              <Globe2 className="w-3 h-3" />
              Manage sources
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [::-webkit-scrollbar]:hidden pb-1 -mx-1 px-1">
            {FEEDS.map((feed) => {
              const isActive = feed.key === activeFeed;
              return (
                <button
                  key={feed.key}
                  type="button"
                  onClick={() => setActiveFeed(feed.key)}
                  className={`flex flex-col items-start min-w-[140px] rounded-2xl border px-3 py-2.5 text-left transition ${
                    isActive
                      ? "border-sky-500/70 bg-neutral-900 shadow-[0_0_25px_rgba(56,189,248,0.35)]"
                      : "border-neutral-800 bg-neutral-950 hover:bg-neutral-900/80"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-0.5">
                    {feed.key === "software" && <Code2 className="w-3 h-3" />}
                    {feed.key === "react" && <Cpu className="w-3 h-3" />}
                    {feed.key === "spring" && <BookOpen className="w-3 h-3" />}
                    {feed.key === "java" && <Layers className="w-3 h-3" />}
                    {feed.key === "security" && (
                      <Sparkles className="w-3 h-3" />
                    )}
                    <span className={feed.accent}>{feed.label}</span>
                  </div>
                  <p className="text-[10px] text-neutral-400 line-clamp-2">
                    {feed.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content / chat-style feed */}
      <main className="flex-1 overflow-y-auto px-4 pb-20 pt-3 space-y-4">
        <div className="mx-auto max-w-md space-y-4">
          {MOCK_UPDATES.map((update) => {
            const reaction = reactions[update.id] ?? null;
            return (
              <div key={update.id} className="flex flex-col gap-2">
                {/* Timestamp separator */}
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-neutral-400">
                      {update.time} • {update.source}
                    </span>
                  </div>
                </div>

                {/* “Message” bubble from AI */}
                <div className="flex justify-start">
                  <div className="relative max-w-[90%] rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-900/80 border border-neutral-800 px-4 py-3 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
                    <p className="text-[11px] uppercase tracking-wide text-sky-400 mb-1">
                      {update.tag}
                    </p>
                    <h2 className="text-sm font-semibold text-neutral-50 mb-1.5">
                      {update.headline}
                    </h2>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {update.summary}
                    </p>
                    <p className="mt-2 text-[11px] text-neutral-500">
                      Tap a reaction so I can learn what matters to you.
                    </p>
                  </div>
                </div>

                {/* Reactions row */}
                <div className="flex justify-start">
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <button
                      onClick={() => handleReaction(update.id, "like")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 border text-xs transition ${
                        reaction === "like"
                          ? "border-rose-500/80 bg-rose-500/10 text-rose-300"
                          : "border-neutral-800 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          reaction === "like" ? "fill-current" : ""
                        }`}
                      />
                      <span>Love this</span>
                    </button>

                    <button
                      onClick={() => handleReaction(update.id, "dislike")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 border text-xs transition ${
                        reaction === "dislike"
                          ? "border-amber-500/80 bg-amber-500/10 text-amber-200"
                          : "border-neutral-800 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <ThumbsDown className="w-3.5 h-3.5" />
                      <span>Not into it</span>
                    </button>

                    <button
                      onClick={() => handleReaction(update.id, "hide")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 border text-xs transition ${
                        reaction === "hide"
                          ? "border-red-500/80 bg-red-500/10 text-red-200"
                          : "border-neutral-800 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Don&apos;t show this</span>
                    </button>

                    <button
                      onClick={() => handleReaction(update.id, "more")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 border text-xs transition ${
                        reaction === "more"
                          ? "border-emerald-500/80 bg-emerald-500/10 text-emerald-200"
                          : "border-neutral-800 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>More like this</span>
                    </button>

                    <button
                      onClick={() => handleReaction(update.id, "less")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 border text-xs transition ${
                        reaction === "less"
                          ? "border-sky-500/80 bg-sky-500/10 text-sky-200"
                          : "border-neutral-800 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Less of this</span>
                    </button>
                  </div>
                </div>

                {/* Feedback label */}
                {reaction && (
                  <p className="pl-1 text-[11px] text-neutral-500">
                    {reactionLabel[reaction as Exclude<ReactionType, null>]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Bottom bar / tab bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between px-8 py-2.5 text-[11px]">
          <button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-100 transition">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>

          <button className="flex flex-col items-center gap-0.5 text-neutral-100">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-sky-500/20 blur-md" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-neutral-950 shadow-lg shadow-sky-500/40">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <span className="mt-1 font-medium">AI Feed</span>
          </button>

          <button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-100 transition">
            <Bell className="w-5 h-5" />
            <span>Alerts</span>
          </button>

          <button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-100 transition">
            <User className="w-5 h-5" />
            <span>You</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default News;
