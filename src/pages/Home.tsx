import {
  Megaphone,
  Target,
  BarChart3,
  Coins,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import HatHouseBlack from "@/components/ui/HatHouseBlack";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white text-slate-900 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 z-20">
        <div
          className="flex items-center text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="mr-2 flex items-center">
            <HatHouseBlack />
          </span>
          ads.campuscribs.org
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#overview" className="hover:text-slate-900">
            Overview
          </a>
          <a href="#how-it-works" className="hover:text-slate-900">
            How it works
          </a>
          <a href="#campaigns" className="hover:text-slate-900">
            Campaigns
          </a>
          <a href="#pricing" className="hover:text-slate-900">
            Pricing
          </a>
          <a href="#faq" className="hover:text-slate-900">
            FAQ
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero / Overview */}
        <section
          id="overview"
          className="relative overflow-hidden border-b border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                <Megaphone className="h-4 w-4" aria-hidden />
                Student-targeted ads for CampusCribs
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                Promote your listings with{" "}
                <span className="text-slate-900">smart student campaigns</span>
              </h1>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                ads.campuscribs.org lets you run Google-style campaigns for your
                student housing listings. Group your ads into campaigns, set
                your budget, and reach the right students at the right moment.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/campaigns/new")}
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition shadow-md"
                >
                  Create your first campaign
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-slate-900 border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 transition"
                >
                  View performance
                </button>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                  Designed for short-term student housing & CampusCribs
                  listings.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                  Campaigns with one or multiple ads, just like Google Ads.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                  Clear pricing and simple packages that fit student budgets.
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200 bg-white shadow-xl p-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-indigo-600" aria-hidden />
                  <p className="text-sm font-medium text-slate-700">
                    Live campaign performance
                  </p>
                </div>
                <div className="mt-4 aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex flex-col justify-between p-4">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Impressions</span>
                    <span>Clicks</span>
                    <span>CTR</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center text-center text-sm text-slate-500">
                    Analytics chart placeholder — this is where your campaign
                    graphs will appear.
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Spend</span>
                    <span>Conversions</span>
                  </div>
                </div>
                <ul className="mt-5 text-sm text-slate-600 space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2
                      className="h-5 w-5 text-emerald-600"
                      aria-hidden
                    />
                    View aggregated stats per campaign and per ad.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2
                      className="h-5 w-5 text-emerald-600"
                      aria-hidden
                    />
                    Track clicks to your listings and contact buttons.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2
                      className="h-5 w-5 text-emerald-600"
                      aria-hidden
                    />
                    Optimize creatives like headlines and images over time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content explainer */}
        <section
          id="content-explainer"
          className="py-10 border-b border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              What this page covers
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base">
              Use this page to explain how ads.campuscribs.org works in your own
              words. For example, you can briefly describe who this ad platform
              is for, how campaigns and ads are structured, how billing is
              handled, and what kind of results advertisers should expect.
              Replace this paragraph with your own content that outlines the
              story behind the product, any policies or guidelines, and where to
              go next to start advertising.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="py-12 md:py-16 bg-slate-50 border-b border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-indigo-600" aria-hidden />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                How campaigns & ads work
              </h2>
            </div>
            <p className="mt-3 text-slate-600 max-w-3xl">
              We follow the structure you’re used to from Google Ads: campaigns
              hold one or more ads, share a budget, and target a specific
              audience or goal. You control how much you spend and what you
              promote.
            </p>

            <div className="mt-8 grid md:grid-cols-4 gap-6">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Step 1</div>
                <p className="mt-1 text-lg font-semibold">Choose your goal</p>
                <p className="mt-2 text-slate-600 text-sm">
                  Pick what you care about most: more listing views, more
                  messages, or more link clicks to your external site.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Step 2</div>
                <p className="mt-1 text-lg font-semibold">Create a campaign</p>
                <p className="mt-2 text-slate-600 text-sm">
                  Name your campaign, set your daily or total budget, choose
                  dates, and decide which campuses or locations you want to
                  reach.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Step 3</div>
                <p className="mt-1 text-lg font-semibold">Add your ads</p>
                <p className="mt-2 text-slate-600 text-sm">
                  Add one or multiple ads per campaign: images, headlines,
                  descriptions, and call-to-action buttons promoting your
                  listings or brand.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Step 4</div>
                <p className="mt-1 text-lg font-semibold">Launch & optimize</p>
                <p className="mt-2 text-slate-600 text-sm">
                  Launch your campaign, track results in the dashboard, and
                  pause, edit, or duplicate campaigns whenever you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign structure */}
        <section
          id="campaigns"
          className="py-12 md:py-16 border-b border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Campaigns, ads, and placements
              </h2>
              <p className="mt-3 text-slate-600">
                Each campaign groups one or more ads that share the same
                objective and budget. This makes it easy to test creatives while
                keeping control over spend.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                  Campaign-level budget and dates with ad-level performance
                  reporting.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                  Show ads across CampusCribs placements (listing pages, search
                  results, and other student-facing surfaces).
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                  Pause or edit campaigns at any time without long-term
                  contracts.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-indigo-600" aria-hidden />
                <p className="font-semibold text-slate-800">
                  Example campaign setup
                </p>
              </div>
              <div className="mt-4 text-sm text-slate-600 space-y-2">
                <p>
                  <span className="font-semibold">Campaign:</span> Spring
                  Sublease Leads – UC Campus
                </p>
                <p>
                  <span className="font-semibold">Goal:</span> More messages
                  &amp; listing views
                </p>
                <p>
                  <span className="font-semibold">Budget:</span> $10/day for 30
                  days
                </p>
                <p>
                  <span className="font-semibold">Ads:</span>
                </p>
                <ul className="list-disc list-inside pl-1 space-y-1">
                  <li>Ad 1 – Image + headline for your main property.</li>
                  <li>Ad 2 – “Last-minute co-op subleases” highlight.</li>
                  <li>Ad 3 – Brand-focused ad for your housing company.</li>
                </ul>
                <p className="pt-3 text-xs text-slate-500">
                  Values shown here are examples only — you&apos;ll configure
                  the exact goals, budgets, and placements inside your
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="py-12 md:py-16 bg-slate-50 border-b border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3">
              <Coins className="h-6 w-6 text-indigo-600" aria-hidden />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Simple pricing & example packages
              </h2>
            </div>
            <p className="mt-3 text-slate-600 max-w-3xl">
              You control your spend with a flexible budget. Below are example
              packages you can use as a starting point. Final pricing and
              billing logic live in your dashboard.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
                <p className="text-sm font-semibold text-slate-500">Starter</p>
                <p className="mt-2 text-3xl font-bold">$50+</p>
                <p className="text-xs text-slate-500 mb-2">
                  suggested monthly budget
                </p>
                <p className="text-sm text-slate-600 flex-1">
                  Ideal for individual landlords or a single property with a few
                  listings.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>Up to 2 active campaigns</li>
                  <li>Basic performance metrics</li>
                  <li>Email support</li>
                </ul>
              </div>

              {/* Growth */}
              <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-md flex flex-col">
                <p className="text-sm font-semibold text-emerald-600">Growth</p>
                <p className="mt-2 text-3xl font-bold">$150+</p>
                <p className="text-xs text-slate-500 mb-2">
                  suggested monthly budget
                </p>
                <p className="text-sm text-slate-600 flex-1">
                  Best for property managers or student housing brands looking
                  for consistent visibility.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>Up to 5 active campaigns</li>
                  <li>Enhanced analytics & breakdowns</li>
                  <li>Basic A/B testing for ads</li>
                </ul>
              </div>

              {/* Campus Takeover */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
                <p className="text-sm font-semibold text-slate-500">
                  Campus Takeover
                </p>
                <p className="mt-2 text-3xl font-bold">$500+</p>
                <p className="text-xs text-slate-500 mb-2">
                  suggested monthly budget
                </p>
                <p className="text-sm text-slate-600 flex-1">
                  For large campaigns, multiple properties, or seasonal pushes
                  around move-in and co-op rotations.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>Custom number of campaigns</li>
                  <li>Deeper reporting & exports</li>
                  <li>Priority placements & strategy support</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              These are example packages to help you frame your pricing. Use
              your own numbers and logic in production.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-6 text-sm text-slate-700">
              <div>
                <p className="font-semibold">
                  How do you charge for ads — per click or per view?
                </p>
                <p className="mt-1 text-slate-600">
                  You can explain your billing model here (for example,
                  cost-per-click, cost-per-impression, or a hybrid). Update this
                  copy to match your real pricing once your backend is ready.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Can I pause or edit my campaigns?
                </p>
                <p className="mt-1 text-slate-600">
                  Yes. Campaigns are fully under your control. You can pause,
                  adjust budgets, update ads, or change targets directly in your
                  dashboard.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Do I need a CampusCribs account to advertise?
                </p>
                <p className="mt-1 text-slate-600">
                  Typically yes, since ads are designed to send students to your
                  CampusCribs listings or profile. Clarify your exact
                  requirements and signup flow here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="py-16 bg-slate-900 text-white border-t border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Ready to reach more students?
              </h2>
              <p className="mt-4 text-slate-300 text-lg">
                Launch a campaign in a few minutes, experiment with creatives,
                and drive more views and leads to your CampusCribs listings.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/campaigns/new")}
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition"
                >
                  Start a campaign
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </button>
                <a
                  href="mailto:ads@campuscribs.org"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-500 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 transition text-sm"
                >
                  Talk to our team
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 text-sm text-slate-200">
              <p className="font-semibold">What to include here</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Your preferred contact email or form link.</li>
                <li>
                  Any requirements for advertisers (e.g., student housing only).
                </li>
                <li>
                  A short note about review/moderation of ad creatives if you do
                  that.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} ads.campuscribs.org. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/ads-privacy-policy.pdf" className="hover:text-slate-900">
              Privacy
            </a>
            <a
              href="/ads-terms-and-conditions.pdf"
              className="hover:text-slate-900"
            >
              Terms
            </a>
            <a
              href="mailto:ads@campuscribs.org"
              className="hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
