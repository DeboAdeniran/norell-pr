const ServiceItem = ({ num, name }) => (
  <div className="group flex items-center justify-between py-[22px] border-b border-cream/7 first:border-t first:border-t-cream/7 cursor-pointer">
    <span className="text-[11px] text-cream/20 tracking-[0.06em] min-w-[36px]">
      {num}
    </span>
    <span className="font-syne text-[clamp(15px,1.8vw,24px)] font-bold text-cream uppercase tracking-[-0.01em] flex-1 px-5 transition-opacity group-hover:opacity-60">
      {name}
    </span>
    <div className="w-7 h-7 border border-cream/18 rounded-full flex items-center justify-center shrink-0">
      <svg
        className="w-3 h-3 stroke-cream opacity-45"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  </div>
);

const MarqueeItem = ({ label }) => (
  <span className="font-syne text-[clamp(11px,1.1vw,14px)] font-bold text-cream tracking-[0.1em] uppercase px-7">
    {label}
    <span className="text-wine mx-1">✦</span>
  </span>
);

const marqueeItems = [
  "Strategic Communications",
  "Media Relations",
  "Reputation Management",
  "Brand Launch",
  "Thought Leadership",
  "Crisis Communications",
  "Influencer Partnerships",
  "Integrated Campaigns",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-[1fr_150px] grid-rows-[110px_1fr] gap-[10px] h-[95vh] pt-[86px] max-md:grid-cols-1 max-md:grid-rows-[1fr_68px] max-md:h-auto max-md:min-h-[85vh]">
        <div className="[grid-column:1] [grid-row:1/3] relative max-md:[grid-row:1] max-md:min-h-[300px]">
          <div className="absolute inset-0 bg-cream rounded-[20px] hero-clip" />
          <div className="absolute bottom-0 right-0 w-[52px] h-[52px] overflow-hidden z-[5] pointer-events-none hero-cut max-md:w-9 max-md:h-9" />
          <div className="relative z-[3] h-full py-[clamp(28px,4.5vh,60px)] px-[clamp(28px,3.5vw,64px)] flex flex-col justify-center gap-[18px] max-md:py-[22px] max-md:px-5 max-md:pb-7">
            <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-wine">
              Strategic PR & Communications
            </div>
            <h1 className="font-syne text-[clamp(30px,5.2vw,78px)] font-extrabold text-dark leading-[1.02] uppercase tracking-[-0.03em] max-md:text-[clamp(26px,7.5vw,40px)]">
              Visibility is
              <br />
              not accidental.
              <br />
              Influence is built.
            </h1>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div className="section bg-dark rounded-[14px] py-[17px] overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <MarqueeItem key={i} label={item} />
          ))}
        </div>
      </div>

      {/* ── APPROACH ─────────────────────────────────────────── */}
      <div className="section">
        <div className="bg-wine rounded-[20px] py-[clamp(36px,5.5vh,64px)] px-[clamp(28px,4vw,60px)] grid grid-cols-2 gap-12 items-start relative overflow-hidden max-md:grid-cols-1 max-md:gap-6">
          {/* Left: headline */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z"
                  fill="#eadfc4"
                />
              </svg>
              <span className="font-syne text-[11px] font-bold text-cream/40 tracking-[0.1em] uppercase">
                Norell PR
              </span>
            </div>
            <div className="text-[10px] tracking-[0.14em] uppercase text-cream/45 mb-3">
              The Norell Approach
            </div>
            <div className="font-syne text-[clamp(18px,2.2vw,32px)] font-extrabold text-cream leading-[1.2] uppercase">
              Built on insight.
              <br />
              Driven by purpose.
              <br />
              Measured by impact.
            </div>
            <div className="w-9 h-[1.5px] bg-cream/20 my-5" />
            <div className="text-[13px] text-cream/40 leading-[1.7] max-w-[320px]">
              Every strategy we craft is intentional — rooted in insight, guided
              by purpose, and designed to cut through the noise.
            </div>
          </div>

          {/* Right: bullet list */}
          <div>
            {[
              "Strategic Communications — Define what brands say and how it lands across every touchpoint.",
              "Integrated Campaigns — Coordinated narratives that drive visibility and engagement.",
              "Brand Launch & Market Entry — Structured communications that drive awareness and market relevance.",
            ].map((text, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 py-4 ${i < 2 ? "border-b border-cream/10" : ""}`}
              >
                <div className="w-1 h-1 bg-cream/45 rounded-full shrink-0 mt-[9px]" />
                <div className="text-[clamp(12px,1.05vw,14px)] text-cream/65 leading-[1.65]">
                  {text}
                </div>
              </div>
            ))}
          </div>

          {/* Star watermark */}
          <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.04] pointer-events-none max-md:hidden">
            <svg width="320" height="320" viewBox="0 0 100 100" fill="none">
              <path
                d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z"
                fill="#eadfc4"
              />
              <path
                d="M22 22 L46 47 L22 72"
                stroke="#eadfc4"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M78 22 L54 47 L78 72"
                stroke="#eadfc4"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <div className="section">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-wine/60">
            Featured Work
          </div>
          <a
            href="#"
            className="text-[11px] font-semibold text-wine no-underline tracking-[0.08em] uppercase border-b border-wine/30 pb-[2px] transition-opacity hover:opacity-60"
          >
            View all work →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1 max-md:gap-2">
          {/* Card 1 — BeautybyAD */}
          <div className="group relative rounded-[20px] overflow-hidden bg-dark aspect-[4/3] cursor-pointer">
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
              style={{ background: "linear-gradient(135deg, #3d0010 0%, #510113 40%, #1a0008 100%)" }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="gp1" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#eadfc4" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#gp1)" />
              <circle cx="200" cy="150" r="80" fill="none" stroke="#eadfc4" strokeWidth="0.6" />
              <circle cx="200" cy="150" r="50" fill="none" stroke="#eadfc4" strokeWidth="0.4" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-syne text-[clamp(32px,5vw,64px)] font-extrabold text-cream/6 uppercase tracking-[-0.02em]">Beauty</span>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-wine/95 via-wine/40 to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 flex flex-col justify-end p-7">
              <div className="text-[9px] font-semibold tracking-[0.14em] uppercase text-cream/60 mb-[6px] translate-y-3 transition-transform duration-[400ms] group-hover:translate-y-0">
                Brand PR · 2025
              </div>
              <div className="font-syne text-[clamp(18px,2.2vw,28px)] font-extrabold text-cream uppercase tracking-[-0.01em] translate-y-3 transition-transform duration-[400ms] delay-[50ms] group-hover:translate-y-0">
                BeautybyAD
              </div>
              <div className="inline-flex items-center gap-[6px] mt-[10px] text-[11px] font-semibold text-cream/70 tracking-[0.06em] uppercase translate-y-3 transition-transform duration-[400ms] delay-100 group-hover:translate-y-0">
                View Work
                <svg
                  className="w-[14px] h-[14px] stroke-cream"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 — MomDates */}
          <div className="group relative rounded-[20px] overflow-hidden bg-dark aspect-[4/3] cursor-pointer">
            <img
              src="/momdate/momdate_campaign%20(5).jpeg"
              alt="MomDates"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-dark/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/95 via-wine/40 to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 flex flex-col justify-end p-7">
              <div className="text-[9px] font-semibold tracking-[0.14em] uppercase text-cream/60 mb-[6px] translate-y-3 transition-transform duration-[400ms] group-hover:translate-y-0">
                Campaign · 2025
              </div>
              <div className="font-syne text-[clamp(18px,2.2vw,28px)] font-extrabold text-cream uppercase tracking-[-0.01em] translate-y-3 transition-transform duration-[400ms] delay-[50ms] group-hover:translate-y-0">
                MomDates
              </div>
              <div className="inline-flex items-center gap-[6px] mt-[10px] text-[11px] font-semibold text-cream/70 tracking-[0.06em] uppercase translate-y-3 transition-transform duration-[400ms] delay-100 group-hover:translate-y-0">
                View Work
                <svg
                  className="w-[14px] h-[14px] stroke-cream"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="section grid grid-cols-3 gap-[10px] max-md:grid-cols-1 max-md:gap-2">
        <div className="bg-cream border border-dark/10 rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">
            8+
          </div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-dark/50">
            Core Services
          </div>
        </div>
        <div className="bg-wine rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-cream leading-none tracking-[-0.03em]">
            100%
          </div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-cream/50">
            Intentional. Every campaign.
          </div>
        </div>
        <div className="bg-cream border border-dark/10 rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">
            Africa
          </div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-dark/50">
            Focused & Built for
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <div className="section bg-dark border border-cream/10 rounded-[20px] py-[clamp(32px,5vh,56px)] px-[clamp(28px,4vw,56px)]">
        <div className="flex items-end justify-between mb-9 max-md:flex-col max-md:items-start max-md:gap-[14px]">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-cream/35 mb-[9px]">
              What we do
            </div>
            <div className="font-syne text-[clamp(22px,3vw,40px)] font-extrabold text-cream leading-[1.1] uppercase tracking-[-0.02em]">
              Services
            </div>
          </div>
          <a
            href="#"
            className="text-[11px] font-medium text-cream/45 no-underline tracking-[0.06em] uppercase border-b border-cream/20 pb-[2px] transition-opacity hover:opacity-100 whitespace-nowrap self-end"
          >
            View all services →
          </a>
        </div>
        <div className="flex flex-col">
          <ServiceItem num="01" name="Strategic Communications" />
          <ServiceItem num="02" name="Media Relations" />
          <ServiceItem num="03" name="Reputation Management" />
          <ServiceItem num="04" name="Brand Launch & Market Entry" />
        </div>
      </div>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      <div className="section bg-wine rounded-[20px] py-[clamp(48px,7vh,88px)] px-[clamp(28px,4vw,80px)] flex flex-col items-center text-center gap-7 relative overflow-hidden">
        <div className="opacity-[0.05] absolute top-[-60px] left-1/2 -translate-x-1/2 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z"
              fill="#eadfc4"
            />
          </svg>
        </div>
        <div className="font-syne text-[80px] text-cream/[0.12] leading-[0.8] self-start">
          "
        </div>
        <div className="font-syne text-[clamp(17px,2.3vw,32px)] font-bold text-cream leading-[1.35] tracking-[-0.01em] max-w-[660px] relative z-[2]">
          Working with Norell PR gave our brand the clarity and visibility we
          had been missing. They don't just tell your story — they make sure the
          right people hear it.
        </div>
        <div className="flex flex-col gap-[5px] relative z-[2]">
          <span className="text-[12px] font-semibold text-cream tracking-[0.08em] uppercase">
            Adaeze
          </span>
          <span className="text-[11px] text-cream/40 tracking-[0.08em] uppercase">
            BeautybyAD
          </span>
        </div>
      </div>
    </>
  );
}
