import { useState } from 'react'
import { Link } from 'react-router-dom'

const whatHowWhy = [
  {
    num: '01',
    title: 'What We Do',
    body: 'We build visibility, credibility, and lasting influence for brands. Through strategic communications, media relations, and integrated campaigns, we ensure your story reaches the people who matter most.',
  },
  {
    num: '02',
    title: 'How We Do It',
    body: 'Every strategy starts with insight. We immerse ourselves in your brand, your audience, and your landscape — then craft communications that are intentional, precise, and built to cut through the noise.',
  },
  {
    num: '03',
    title: 'Why We Do It',
    body: "Because visibility is not accidental. We believe that when the right brands are seen and heard, they create real change — in markets, in communities, in culture. That's the work we show up to do.",
  },
]

const services = [
  {
    num: '01',
    title: 'Strategic Communications',
    body: 'Define what your brand says and how it lands across every touchpoint. We build communication frameworks that align with your business goals and resonate with your audience.',
  },
  {
    num: '02',
    title: 'Media Relations',
    body: 'We cultivate relationships with the journalists, editors, and platforms that matter to your industry — securing the coverage that builds lasting credibility.',
  },
  {
    num: '03',
    title: 'Reputation Management',
    body: 'Protect and strengthen how your brand is perceived, online and offline. We monitor, manage, and shape your narrative proactively before it shapes itself.',
  },
  {
    num: '04',
    title: 'Brand Launch & Market Entry',
    body: 'Entering a new market or launching a new brand? We structure the communications that drive awareness, relevance, and momentum from day one.',
  },
  {
    num: '05',
    title: 'Thought Leadership',
    body: 'Position your brand as the voice defining your industry. We build authority through strategic content, speaking opportunities, and targeted media placements.',
  },
  {
    num: '06',
    title: 'Crisis Communications',
    body: 'When things get difficult, clarity matters most. We help brands navigate challenging moments with calm, strategic, and decisive communication that protects what you have built.',
  },
  {
    num: '07',
    title: 'Influencer Partnerships',
    body: 'Connect with the right voices for your brand. We identify, vet, and manage influencer collaborations that feel authentic, drive engagement, and deliver measurable results.',
  },
  {
    num: '08',
    title: 'Integrated Campaigns',
    body: 'Multi-channel campaigns that align your PR, social, content, and media into one cohesive narrative push — coordinated for maximum reach and impact.',
  },
]

const promises = [
  {
    title: 'Insight-Driven',
    body: 'We root every strategy in research and deep understanding of your brand, your audience, and the landscape you operate in.',
  },
  {
    title: 'Purpose-Led',
    body: 'Every campaign has a reason to exist beyond visibility. We build communications that connect to something that matters.',
  },
  {
    title: 'Results-Measured',
    body: 'We track what actually matters to your brand — not just impressions, but the influence that moves the needle.',
  },
]

export default function About() {
  const [servicesBg, setServicesBg] = useState('cream')
  const isDark = servicesBg === 'dark'

  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────── */}
      {/* Watermark in its own clipping div so text never overflows */}
      <div className="relative h-screen bg-cream border border-dark/8 rounded-[20px] flex flex-col justify-between pt-21.5 pb-10 px-[clamp(28px,4vw,64px)] max-md:h-[78vh] max-md:justify-end max-md:pb-[10vh]">
        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
            <svg width="620" height="620" viewBox="0 0 100 100" fill="none" className="max-md:w-72 max-md:h-72">
              <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#510113" />
              <path d="M22 22 L46 47 L22 72" stroke="#510113" strokeWidth="3" fill="none" />
              <path d="M78 22 L54 47 L78 72" stroke="#510113" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>

        {/* Desktop-only eyebrow at top */}
        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/35 relative z-10 max-md:hidden">
          Strategic PR & Communications
        </div>

        <div className="relative z-10">
          {/* Mobile-only eyebrow above the heading */}
          <div className="hidden max-md:block text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/35 mb-4">
            Strategic PR & Communications
          </div>
          <div
            className="font-syne font-extrabold leading-[0.88] uppercase tracking-[-0.03em] text-dark"
            style={{ fontSize: 'clamp(44px, 11vw, 160px)' }}
          >
            About
          </div>
          <div
            className="font-syne font-extrabold leading-[0.88] uppercase tracking-[-0.03em] text-wine"
            style={{ fontSize: 'clamp(44px, 11vw, 160px)' }}
          >
            Norell PR
          </div>
          <p className="text-dark/40 text-[13px] tracking-[0.04em] mt-6 leading-[1.7] max-w-90">
            Visibility is not accidental. Influence is built.
          </p>
        </div>
      </div>

      {/* ── SECTION 2: STATEMENT — cream ────────────────────── */}
      <div className="section bg-cream border border-dark/8 rounded-[20px] py-[clamp(48px,7vh,88px)] px-[clamp(28px,4vw,64px)] grid grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:gap-10">
        <div className="border-r border-dark/10 pr-16 max-md:border-r-0 max-md:pr-0 max-md:pb-10 max-md:border-b max-md:border-dark/10">
          <div className="font-syne text-[clamp(20px,2.6vw,34px)] font-bold text-dark leading-[1.3] tracking-[-0.02em]">
            "We partner with brands to define their voice and cut through the noise."
          </div>
        </div>
        <div>
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-5">
            About Norell PR
          </div>
          <p className="text-[clamp(14px,1.2vw,16px)] text-dark/60 leading-[1.9] mb-5">
            Norell PR is a strategic PR and communications firm that helps brands build visibility, credibility, and lasting influence.
          </p>
          <p className="text-[clamp(14px,1.2vw,16px)] text-dark/60 leading-[1.9]">
            We partner with brands to define their voice and cut through the noise with intentional, insight-driven strategy.
          </p>
        </div>
      </div>

      {/* ── SECTION 3: WHAT / HOW / WHY — wine ──────────────── */}
      <div className="section relative bg-wine rounded-[20px] py-[clamp(48px,6vh,80px)] overflow-hidden">
        <div className="absolute left-[clamp(20px,3.5vw,52px)] top-0 bottom-0 w-6 pointer-events-none max-md:hidden">
          <svg width="24" height="100%" viewBox="0 0 24 700" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path
              d="M12 0 C12 80, 3 130, 12 200 C21 270, 21 320, 12 390 C3 460, 3 510, 12 580 C18 630, 12 700, 12 700"
              stroke="#eadfc4" strokeWidth="1.2" strokeDasharray="4 7" opacity="0.22" fill="none"
            />
          </svg>
        </div>

        <div className="pl-[clamp(28px,6vw,96px)] pr-[clamp(28px,4vw,64px)] max-md:px-[clamp(20px,4vw,40px)]">
          {whatHowWhy.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[40px_1fr_1.4fr] gap-8 py-[clamp(28px,4.5vh,48px)] items-start max-md:grid-cols-1 max-md:gap-2 ${
                i < 2 ? 'border-b border-cream/10' : ''
              }`}
            >
              <span className="font-syne text-[11px] text-cream/25 tracking-widest pt-1.5 max-md:mb-1">{item.num}</span>
              <div className="font-syne text-[clamp(18px,2vw,28px)] font-extrabold text-cream uppercase leading-[1.1] tracking-[-0.02em] max-md:mb-2">
                {item.title}
              </div>
              <p className="text-[clamp(13px,1.05vw,15px)] text-cream/55 leading-[1.85]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 4: STATS BENTO ──────────────────────────── */}
      <div className="section grid grid-cols-3 gap-2.5 max-md:grid-cols-1 max-md:gap-2">
        <div className="rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3 bg-cream border border-dark/10">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">2026</div>
          <div className="text-[11px] tracking-widest uppercase text-dark/50">Est. This Year</div>
        </div>
        <div className="rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3 bg-wine">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-cream leading-none tracking-[-0.03em]">100%</div>
          <div className="text-[11px] tracking-widest uppercase text-cream/50">Intentional. Every campaign.</div>
        </div>
        <div className="rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3 bg-cream border border-dark/10">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">Africa</div>
          <div className="text-[11px] tracking-widest uppercase text-dark/50">Focused & Built for</div>
        </div>
      </div>

      {/* ── SECTION 5: SERVICES ──────────────────────────────── */}
      <div className={`section rounded-[20px] py-[clamp(48px,6vh,80px)] px-[clamp(28px,4vw,56px)] transition-colors duration-300 ${isDark ? 'bg-dark' : 'bg-cream border border-dark/8'}`}>
        <div className="flex items-center justify-between mb-10 max-md:flex-col max-md:items-start max-md:gap-4">
          <div>
            <div className={`text-[10px] font-semibold tracking-[0.16em] uppercase mb-3 transition-colors duration-300 ${isDark ? 'text-cream/30' : 'text-dark/30'}`}>What we offer</div>
            <div className={`font-syne text-[clamp(22px,3vw,42px)] font-extrabold uppercase tracking-[-0.02em] transition-colors duration-300 ${isDark ? 'text-cream' : 'text-dark'}`}>
              Our Services
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`text-[11px] tracking-[0.06em] uppercase border-b pb-0.5 transition-colors duration-300 max-md:hidden ${isDark ? 'text-cream/35 border-cream/20' : 'text-dark/35 border-dark/20'}`}>
              8 Core Services
            </div>
            <div className={`flex gap-px p-0.5 rounded-full border transition-colors duration-300 ${isDark ? 'border-cream/15' : 'border-dark/15'}`}>
              <button
                onClick={() => setServicesBg('cream')}
                className={`text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full transition-all duration-200 ${!isDark ? 'bg-dark text-cream' : isDark ? 'text-cream/40 hover:text-cream/70' : ''}`}
              >
                Light
              </button>
              <button
                onClick={() => setServicesBg('dark')}
                className={`text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full transition-all duration-200 ${isDark ? 'bg-cream text-dark' : 'text-dark/40 hover:text-dark/70'}`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group flex items-start gap-6 py-[clamp(20px,3vh,28px)] border-b first:border-t cursor-pointer max-md:gap-4 transition-colors duration-300 ${isDark ? 'border-cream/7' : 'border-dark/7'}`}
            >
              <span className={`font-syne text-[11px] tracking-[0.06em] min-w-9 pt-1.25 shrink-0 transition-colors duration-300 ${isDark ? 'text-cream/20' : 'text-dark/20'}`}>
                {s.num}
              </span>
              <div className="flex-1 grid grid-cols-[1fr_1.4fr] gap-8 items-start max-md:grid-cols-1 max-md:gap-1">
                <div className={`font-syne text-[clamp(14px,1.6vw,20px)] font-bold uppercase tracking-[-0.01em] transition-all duration-300 group-hover:opacity-50 ${isDark ? 'text-cream' : 'text-dark'}`}>
                  {s.title}
                </div>
                <p className={`text-[clamp(12px,1vw,14px)] leading-[1.75] max-md:mt-1 transition-colors duration-300 ${isDark ? 'text-cream/45' : 'text-dark/45'}`}>
                  {s.body}
                </p>
              </div>
              <div className={`w-7 h-7 border rounded-full flex items-center justify-center shrink-0 mt-0.5 max-md:hidden transition-colors duration-300 ${isDark ? 'border-cream/18' : 'border-dark/18'}`}>
                <svg className={`w-3 h-3 opacity-45 transition-colors duration-300 ${isDark ? 'stroke-cream' : 'stroke-dark'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 6: THE NORELL PROMISE — cream ───────────── */}
      <div className="section bg-cream border border-dark/8 rounded-[20px] py-[clamp(48px,6vh,72px)] px-[clamp(28px,4vw,56px)]">
        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-3">Our Values</div>
        <div className="font-syne text-[clamp(22px,3vw,42px)] font-extrabold text-dark uppercase tracking-[-0.02em] mb-12 max-md:mb-8">
          The Norell Promise
        </div>
        <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
          {promises.map((p, i) => (
            <div key={i} className="border border-dark/10 rounded-2xl p-8 flex flex-col gap-5 max-md:p-6">
              <div className="w-1.25 h-1.25 rounded-full bg-wine" />
              <div className="font-syne text-[clamp(15px,1.5vw,19px)] font-bold text-dark uppercase tracking-[-0.01em]">
                {p.title}
              </div>
              <p className="text-[clamp(12px,1vw,14px)] text-dark/50 leading-[1.75]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 7: CTA — wine ───────────────────────────── */}
      <div className="section bg-wine rounded-[20px] py-[clamp(56px,8vh,96px)] px-[clamp(28px,4vw,56px)] flex flex-col items-center text-center gap-6 relative overflow-hidden">
        <div className="absolute -bottom-15 -right-12.5 opacity-[0.05] pointer-events-none">
          <svg width="320" height="320" viewBox="0 0 100 100" fill="none">
            <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#eadfc4" />
          </svg>
        </div>
        <div className="font-syne text-[clamp(22px,3.5vw,48px)] font-extrabold text-cream uppercase tracking-[-0.02em] leading-[1.1] max-w-140 relative z-10">
          Ready to build your influence?
        </div>
        <p className="text-cream/50 text-[13px] leading-[1.75] max-w-95 relative z-10">
          Let's define your voice, shape your narrative, and put your brand in front of the people who matter.
        </p>
        <Link
          to="/contact"
          className="relative z-10 inline-flex items-center gap-2 mt-2 text-[12px] font-semibold tracking-[0.08em] uppercase no-underline bg-cream text-dark py-3.5 px-8 rounded-full transition-all duration-300 hover:bg-dark hover:text-cream"
        >
          Get in Touch →
        </Link>
      </div>
    </>
  )
}
