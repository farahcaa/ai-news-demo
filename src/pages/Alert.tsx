import React, { useState } from "react";
import {
  Bell,
  Shield,
  AlertTriangle,
  Info,
  Code2,
  Cpu,
  Bookmark,
  BookmarkCheck,
  Filter,
  Clock,
  CheckCircle2,
} from "lucide-react";

type AlertType = "security" | "release" | "feed" | "system";

type AlertFilter = "all" | "security" | "release" | "feed";

type AlertItem = {
  id: number;
  type: AlertType;
  title: string;
  summary: string;
  time: string;
  dateGroup: "Today" | "Yesterday";
  feed?: string;
  critical?: boolean;
  source?: string;
};

const ALERTS: AlertItem[] = [
  {
    id: 1,
    type: "security",
    title: "Critical Spring Boot vuln patched (CVE-2025-1234)",
    summary:
      "A remote code execution vulnerability was discovered in certain Spring Boot configurations. Upgrade to the latest patch release as soon as possible.",
    time: "10:21 AM",
    dateGroup: "Today",
    feed: "Security",
    critical: true,
    source: "Spring Blog • NVD",
  },
  {
    id: 2,
    type: "release",
    title: "React 19 stable released",
    summary:
      "The new version includes improvements to server components, actions, and performance. Consider planning a staged upgrade in your main projects.",
    time: "9:03 AM",
    dateGroup: "Today",
    feed: "React",
    source: "React Blog",
  },
  {
    id: 3,
    type: "feed",
    title: "Your Java feed has 4 new bundles",
    summary:
      "New stories about JDK performance, GC tuning, and long-running service optimizations are available in your Java feed.",
    time: "7:45 AM",
    dateGroup: "Today",
    feed: "Java",
  },
  {
    id: 4,
    type: "security",
    title: "npm package flagged for malicious behavior",
    summary:
      "A popular helper package was found exfiltrating environment variables in some versions. Check your lockfile and dependency tree.",
    time: "11:57 PM",
    dateGroup: "Yesterday",
    feed: "Security",
    critical: true,
    source: "GitHub Advisories",
  },
  {
    id: 5,
    type: "release",
    title: "Spring Boot 3.x bugfix release",
    summary:
      "Minor patch release addressing regressions and improving startup time in native images.",
    time: "4:18 PM",
    dateGroup: "Yesterday",
    feed: "Spring",
    source: "Spring Blog",
  },
  {
    id: 6,
    type: "system",
    title: "AI tuning updated from your reactions",
    summary:
      "Your recent likes and hides shifted your feed toward more security news and less generic market headlines.",
    time: "1:09 PM",
    dateGroup: "Yesterday",
  },
];

const Alerts: React.FC = () => {
  const [filter, setFilter] = useState<AlertFilter>("all");
  const [criticalOnly, setCriticalOnly] = useState(false);
  const [unreadOnly, setUnreadOnly] = useState(false);

  const [readMap, setReadMap] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: true,
    5: false,
    6: true,
  });

  const [savedMap, setSavedMap] = useState<Record<number, boolean>>({});

  const toggleRead = (id: number) => {
    setReadMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSaved = (id: number) => {
    setSavedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAlerts = ALERTS.filter((alert) => {
    if (filter === "security" && alert.type !== "security") return false;
    if (filter === "release" && alert.type !== "release") return false;
    if (filter === "feed" && alert.type !== "feed") return false;
    if (criticalOnly && !alert.critical) return false;
    if (unreadOnly && readMap[alert.id]) return false;
    return true;
  });

  const grouped = filteredAlerts.reduce<Record<string, AlertItem[]>>(
    (acc, alert) => {
      if (!acc[alert.dateGroup]) acc[alert.dateGroup] = [];
      acc[alert.dateGroup].push(alert);
      return acc;
    },
    {}
  );

  const renderTypeIcon = (type: AlertType, critical?: boolean) => {
    if (type === "security") {
      return critical ? (
        <AlertTriangle className="w-4 h-4 text-rose-300" />
      ) : (
        <Shield className="w-4 h-4 text-rose-300" />
      );
    }
    if (type === "release") {
      return <Code2 className="w-4 h-4 text-sky-300" />;
    }
    if (type === "feed") {
      return <Cpu className="w-4 h-4 text-emerald-300" />;
    }
    return <Info className="w-4 h-4 text-neutral-300" />;
  };

  const renderTypeLabel = (alert: AlertItem) => {
    if (alert.type === "security") return "Security";
    if (alert.type === "release") return "Release";
    if (alert.type === "feed") return "Feed update";
    return "System";
  };

  return (
    // Content-only container; wrap this inside your page/layout
    <div
      className="
        flex-1 overflow-y-auto px-4 pb-6 pt-3
        bg-neutral-950 text-neutral-50
        [scrollbar-width:none]
        [-ms-overflow-style:none]
        [::-webkit-scrollbar]:hidden
      "
    >
      <div className="mx-auto max-w-md space-y-6">
        {/* Filters row */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Alerts
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-neutral-400">
              <Filter className="w-3 h-3" />
              <span>Filter &amp; focus</span>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {[
              { key: "all" as AlertFilter, label: "All" },
              { key: "security" as AlertFilter, label: "Security" },
              { key: "release" as AlertFilter, label: "Releases" },
              { key: "feed" as AlertFilter, label: "Feed updates" },
            ].map((f) => {
              const isActive = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] transition ${
                    isActive
                      ? "border-sky-500/80 bg-neutral-900 shadow-[0_0_18px_rgba(56,189,248,0.4)] text-neutral-100"
                      : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:bg-neutral-900/80"
                  }`}
                >
                  {f.key === "all" && <Bell className="w-3 h-3" />}
                  {f.key === "security" && (
                    <Shield className="w-3 h-3 text-rose-300" />
                  )}
                  {f.key === "release" && (
                    <Code2 className="w-3 h-3 text-sky-300" />
                  )}
                  {f.key === "feed" && (
                    <Cpu className="w-3 h-3 text-emerald-300" />
                  )}
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick toggles */}
          <div className="flex items-center gap-2 text-[11px]">
            <button
              type="button"
              onClick={() => setCriticalOnly((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 transition ${
                criticalOnly
                  ? "border-rose-500/80 bg-rose-500/15 text-rose-100"
                  : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:bg-neutral-900/80"
              }`}
            >
              <AlertTriangle className="w-3 h-3" />
              <span>Critical only</span>
            </button>

            <button
              type="button"
              onClick={() => setUnreadOnly((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 transition ${
                unreadOnly
                  ? "border-emerald-500/80 bg-emerald-500/15 text-emerald-100"
                  : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:bg-neutral-900/80"
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>Unread only</span>
            </button>
          </div>
        </section>

        {/* Alerts list */}
        <section className="space-y-4">
          {Object.keys(grouped).length === 0 && (
            <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/70 px-4 py-6 text-center text-xs text-neutral-400">
              No alerts match these filters right now. You&apos;re all caught up
              🎉
            </div>
          )}

          {(["Today", "Yesterday"] as const)
            .filter((groupKey) => grouped[groupKey]?.length)
            .map((groupKey) => (
              <div key={groupKey} className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-neutral-800" />
                  <span className="text-[11px] text-neutral-500">
                    {groupKey}
                  </span>
                  <div className="h-px flex-1 bg-neutral-800" />
                </div>

                <div className="space-y-2.5">
                  {grouped[groupKey].map((alert) => {
                    const read = !!readMap[alert.id];
                    const saved = !!savedMap[alert.id];

                    return (
                      <article
                        key={alert.id}
                        className={`rounded-2xl border px-3.5 py-3.5 transition shadow-[0_0_20px_rgba(0,0,0,0.5)] ${
                          alert.critical
                            ? "border-rose-500/70 bg-neutral-950/90"
                            : "border-neutral-800 bg-neutral-950/85"
                        } ${read ? "opacity-80" : ""} hover:bg-neutral-900/80`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5">
                            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
                              {renderTypeIcon(alert.type, alert.critical)}
                            </div>

                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-500">
                                <span className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-1.5 py-[2px] border border-neutral-800">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                  <span>{renderTypeLabel(alert)}</span>
                                </span>
                                {alert.feed && (
                                  <>
                                    <span className="text-neutral-700">•</span>
                                    <span>{alert.feed}</span>
                                  </>
                                )}
                                <span className="text-neutral-700">•</span>
                                <span>{alert.time}</span>
                                {alert.critical && (
                                  <span className="rounded-full bg-rose-500/10 border border-rose-500/60 px-1.5 py-[1px] text-[10px] text-rose-200">
                                    Critical
                                  </span>
                                )}
                                {!read && (
                                  <span className="rounded-full bg-sky-500/15 border border-sky-500/60 px-1.5 py-[1px] text-[10px] text-sky-200">
                                    New
                                  </span>
                                )}
                              </div>

                              <h2 className="text-xs font-semibold text-neutral-50">
                                {alert.title}
                              </h2>
                              <p className="text-[11px] text-neutral-300 leading-relaxed">
                                {alert.summary}
                              </p>

                              {alert.source && (
                                <p className="text-[10px] text-neutral-500 mt-1">
                                  Sources:{" "}
                                  <span className="text-neutral-300">
                                    {alert.source}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            {/* Save button */}
                            <button
                              type="button"
                              onClick={() => toggleSaved(alert.id)}
                              className={`rounded-full border p-1.5 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600 transition ${
                                saved
                                  ? "border-amber-400/80 bg-amber-500/10 text-amber-200"
                                  : "border-neutral-800 bg-neutral-900"
                              }`}
                            >
                              {saved ? (
                                <BookmarkCheck className="w-3.5 h-3.5" />
                              ) : (
                                <Bookmark className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {/* Mark as read */}
                            <button
                              type="button"
                              onClick={() => toggleRead(alert.id)}
                              className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[10px] text-neutral-300 hover:bg-neutral-800 transition"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              <span>{read ? "Mark unread" : "Mark read"}</span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Alerts;
