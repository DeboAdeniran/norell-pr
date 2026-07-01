import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { heroContainer, heroItem, viewContainer, up, left, vp } from '../anim'
import LogoMark, { LogoFull } from '../components/LogoMark'

const MotionLink = motion.create(Link)

const ServiceItem = ({ num, name }) => (
  <motion.div variants={left} className="group flex items-center justify-between py-5.5 border-b border-cream/7 first:border-t first:border-t-cream/7 cursor-pointer">
    <span className="text-[11px] text-cream/20 tracking-[0.06em] min-w-[36px]">
      {num}
    </span>
    <span className="font-syne text-[clamp(15px,1.8vw,24px)] font-bold text-cream uppercase tracking-[-0.01em] flex-1 px-5 transition-opacity group-hover:opacity-60">
      {name}
    </span>
    <div className="w-7 h-7 border border-cream/18 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
      <svg className="w-3 h-3 stroke-cream opacity-45" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  </motion.div>
)

const MarqueeItem = ({ label }) => (
  <span className="font-syne text-[clamp(11px,1.1vw,14px)] font-bold text-cream tracking-[0.1em] uppercase px-7">
    {label}
    <span className="text-wine mx-1">✦</span>
  </span>
)

const marqueeItems = [
  "Strategic Communications",
  "Media Relations",
  "Reputation Management",
  "Brand Launch",
  "Thought Leadership",
  "Crisis Communications",
  "Influencer Partnerships",
  "Integrated Campaigns",
]

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-[1fr_150px] grid-rows-[110px_1fr] gap-2.5 h-[95vh] pt-30 max-md:pt-29 max-md:grid-cols-1 max-md:grid-rows-[1fr_68px] max-md:h-auto max-md:min-h-[85vh]">
        <div className="[grid-column:1] [grid-row:1/3] relative overflow-hidden rounded-[20px] max-md:[grid-row:1] max-md:min-h-[300px]">
          <div className="absolute inset-0 bg-cream hero-clip" />
          <LogoMark variant="light" size={480} opacity={0.05} className="absolute -bottom-20 -right-20 pointer-events-none z-2 max-md:size-60 max-md:-bottom-10 max-md:-right-10" />
          <div className="absolute bottom-0 right-0 w-[52px] h-[52px] overflow-hidden z-[5] pointer-events-none hero-cut max-md:w-9 max-md:h-9" />
          <motion.div
            className="relative z-3 h-full py-[clamp(28px,4.5vh,60px)] px-[clamp(28px,3.5vw,64px)] flex flex-col justify-center gap-4.5 max-md:py-5.5 max-md:px-5 max-md:pb-7"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={heroItem} className="text-[10px] font-semibold tracking-[0.16em] uppercase text-wine">
              Strategic PR & Communications
            </motion.div>
            <h1 className="font-syne text-[clamp(30px,5.2vw,78px)] font-extrabold text-dark leading-[1.02] uppercase tracking-[-0.03em] max-md:text-[clamp(26px,7.5vw,40px)]">
              <motion.span variants={heroItem} className="block">Visibility is</motion.span>
              <motion.span variants={heroItem} className="block">not accidental.</motion.span>
              <motion.span variants={heroItem} className="block">Influence is built.</motion.span>
            </h1>
          </motion.div>
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
      <motion.div className="section" variants={up} initial="hidden" whileInView="show" viewport={vp}>
        <div className="bg-wine rounded-[20px] py-[clamp(36px,5.5vh,64px)] px-[clamp(28px,4vw,60px)] grid grid-cols-2 gap-12 items-start relative overflow-hidden max-md:grid-cols-1 max-md:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <LogoMark variant="dark" size={14} opacity={0.6} />
              <span className="font-syne text-[11px] font-bold text-cream/40 tracking-[0.1em] uppercase">Norell PR</span>
            </div>
            <div className="text-[10px] tracking-[0.14em] uppercase text-cream/45 mb-3">The Norell Approach</div>
            <div className="font-syne text-[clamp(18px,2.2vw,32px)] font-extrabold text-cream leading-[1.2] uppercase">
              Built on insight.<br />Driven by purpose.<br />Measured by impact.
            </div>
            <div className="w-9 h-[1.5px] bg-cream/20 my-5" />
            <div className="text-[13px] text-cream/40 leading-[1.7] max-w-[320px]">
              Every strategy we craft is intentional — rooted in insight, guided by purpose, and designed to cut through the noise.
            </div>
          </div>
          <div>
            {[
              "Strategic Communications — Define what brands say and how it lands across every touchpoint.",
              "Integrated Campaigns — Coordinated narratives that drive visibility and engagement.",
              "Brand Launch & Market Entry — Structured communications that drive awareness and market relevance.",
            ].map((text, i) => (
              <div key={i} className={`flex items-start gap-3 py-4 ${i < 2 ? "border-b border-cream/10" : ""}`}>
                <div className="w-1 h-1 bg-cream/45 rounded-full shrink-0 mt-[9px]" />
                <div className="text-[clamp(12px,1.05vw,14px)] text-cream/65 leading-[1.65]">{text}</div>
              </div>
            ))}
          </div>
          <LogoMark variant="dark" size={320} opacity={0.04} className="absolute -bottom-12.5 -right-12.5 pointer-events-none max-md:hidden" />
        </div>
      </motion.div>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <div className="section">
        <motion.div
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4 }}
        >
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-wine/60">Featured Work</div>
          <Link to="/work" className="text-[11px] font-semibold text-wine no-underline tracking-[0.08em] uppercase border-b border-wine/30 pb-0.5 transition-opacity hover:opacity-60">
            View all work →
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-2.5 max-md:grid-cols-1 max-md:gap-2"
          variants={viewContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {/* Card 1 — BeautybyAD */}
          <MotionLink to="/work/beauty-by-ad" variants={up} className="group relative rounded-[20px] overflow-hidden bg-dark aspect-4/3 no-underline block">
            <img src="/beautybyAD/PTP08180-Recovered-Recovered.jpg" alt="BeautybyAD" fetchPriority="high" decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-dark/50" />
            <div className="absolute inset-0 bg-linear-to-t from-wine/95 via-wine/40 to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 flex flex-col justify-end p-7">
              <div className="text-[9px] font-semibold tracking-[0.14em] uppercase text-cream/60 mb-[6px] translate-y-3 transition-transform duration-[400ms] group-hover:translate-y-0">Brand PR · 2025</div>
              <div className="font-syne text-[clamp(18px,2.2vw,28px)] font-extrabold text-cream uppercase tracking-[-0.01em] translate-y-3 transition-transform duration-[400ms] delay-[50ms] group-hover:translate-y-0">BeautybyAD</div>
              <div className="inline-flex items-center gap-[6px] mt-[10px] text-[11px] font-semibold text-cream/70 tracking-[0.06em] uppercase translate-y-3 transition-transform duration-[400ms] delay-100 group-hover:translate-y-0">
                View Work
                <svg className="w-3.5 h-3.5 stroke-cream" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </MotionLink>

          {/* Card 2 — MomDates */}
          <MotionLink to="/work/momdates" variants={up} className="group relative rounded-[20px] overflow-hidden bg-dark aspect-4/3 no-underline block">
            <img src="/momdate/momdate_campaign%20(3).jpeg" alt="MomDates" loading="lazy" decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-dark/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/95 via-wine/40 to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 flex flex-col justify-end p-7">
              <div className="text-[9px] font-semibold tracking-[0.14em] uppercase text-cream/60 mb-[6px] translate-y-3 transition-transform duration-[400ms] group-hover:translate-y-0">Campaign · 2025</div>
              <div className="font-syne text-[clamp(18px,2.2vw,28px)] font-extrabold text-cream uppercase tracking-[-0.01em] translate-y-3 transition-transform duration-[400ms] delay-[50ms] group-hover:translate-y-0">MomDates</div>
              <div className="inline-flex items-center gap-[6px] mt-[10px] text-[11px] font-semibold text-cream/70 tracking-[0.06em] uppercase translate-y-3 transition-transform duration-[400ms] delay-100 group-hover:translate-y-0">
                View Work
                <svg className="w-3.5 h-3.5 stroke-cream" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </MotionLink>
        </motion.div>
      </div>

      {/* ── STATS ────────────────────────────────────────────── */}
      <motion.div
        className="section grid grid-cols-3 gap-2.5 max-md:grid-cols-1 max-md:gap-2"
        variants={viewContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <motion.div variants={up} className="bg-cream border border-dark/10 rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">8+</div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-dark/50">Core Services</div>
        </motion.div>
        <motion.div variants={up} className="bg-wine rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-cream leading-none tracking-[-0.03em]">100%</div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-cream/50">Intentional. Every campaign.</div>
        </motion.div>
        <motion.div variants={up} className="bg-cream border border-dark/10 rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">Africa</div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-dark/50">Focused & Built for</div>
        </motion.div>
      </motion.div>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <div className="section bg-dark border border-cream/10 rounded-[20px] py-[clamp(32px,5vh,56px)] px-[clamp(28px,4vw,56px)]">
        <motion.div
          className="flex items-end justify-between mb-9 max-md:flex-col max-md:items-start max-md:gap-3.5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-cream/35 mb-[9px]">What we do</div>
            <div className="font-syne text-[clamp(22px,3vw,40px)] font-extrabold text-cream leading-[1.1] uppercase tracking-[-0.02em]">Services</div>
          </div>
          <Link to="/about" className="text-[11px] font-medium text-cream/45 no-underline tracking-[0.06em] uppercase border-b border-cream/20 pb-0.5 transition-opacity hover:opacity-100 whitespace-nowrap self-end">
            View all services →
          </Link>
        </motion.div>
        <motion.div className="flex flex-col" variants={viewContainer(0.07)} initial="hidden" whileInView="show" viewport={vp}>
          <ServiceItem num="01" name="Strategic Communications" />
          <ServiceItem num="02" name="Media Relations" />
          <ServiceItem num="03" name="Reputation Management" />
          <ServiceItem num="04" name="Brand Launch & Market Entry" />
        </motion.div>
      </div>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      <motion.div
        className="section bg-wine rounded-[20px] py-[clamp(48px,7vh,88px)] px-[clamp(28px,4vw,80px)] flex flex-col items-center text-center gap-7 relative overflow-hidden"
        variants={up}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <LogoMark variant="dark" size={400} opacity={0.05} className="absolute -top-15 left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="font-syne text-[80px] text-cream/[0.12] leading-[0.8] self-start">"</div>
        <div className="font-syne text-[clamp(17px,2.3vw,32px)] font-bold text-cream leading-[1.35] tracking-[-0.01em] max-w-[660px] relative z-[2]">
          Working with Norell PR gave our brand the clarity and visibility we had been missing. They don't just tell your story — they make sure the right people hear it.
        </div>
        <div className="flex flex-col gap-[5px] relative z-[2]">
          <span className="text-[12px] font-semibold text-cream tracking-[0.08em] uppercase">Adaeze</span>
          <span className="text-[11px] text-cream/40 tracking-[0.08em] uppercase">BeautybyAD</span>
        </div>
      </motion.div>
    </>
  )
}
