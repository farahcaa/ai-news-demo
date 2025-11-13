import { Bell, Home, Sparkles, User } from "lucide-react";

import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-8 py-2.5 text-[11px]">
        <button
          className="flex flex-col items-center gap-0.5 text-neutral-100"
          onClick={() => navigate("/ai")}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-sky-500/20 blur-md" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-neutral-950 shadow-lg shadow-sky-500/40">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
          <span className="mt-1 font-medium">AI Feed</span>
        </button>

        <button
          className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-100 transition"
          onClick={() => navigate("/alert")}
        >
          <Bell className="w-5 h-5" />
          <span>Alerts</span>
        </button>

        <button
          className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-100 transition"
          onClick={() => navigate("/you")}
        >
          <User className="w-5 h-5" />
          <span>You</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
