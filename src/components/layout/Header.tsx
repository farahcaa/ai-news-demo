import { Dot, SlidersHorizontal, Sparkles, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500 blur-sm opacity-70" />
            <div className="relative h-9 w-9 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center">
              <User className="w-4 h-4 text-sky-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">You</span>
            <span className="text-[11px] text-neutral-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-sky-300" />
              Your feeds & preferences
            </span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800 transition"
        >
          <SlidersHorizontal className="w-3 h-3" />
          <span>Tune AI</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
