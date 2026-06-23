import { useState } from 'react'
import { Link } from 'react-router-dom'

const beauty = {
  name: 'Beauty by aD',
  year: '2025',
  tags: ['Brand Launch', 'Media Relations', 'Influencer Strategy'],
  headline: 'Launching Luxe Skin to a continent.',
  sub: "A luxury product launch that made Africa's beauty industry take notice.",
  context:
    'Beauty by aD entered the market with their Luxe Skin Matte Wear Foundation — a premium product built to celebrate diverse skin tones across Africa and beyond. In a crowded category, they needed a debut that felt inevitable.',
  approach:
    'We built a 360° launch campaign anchored in inclusivity and luxury — seeding product to key beauty influencers, securing editorial coverage, and engineering a launch moment that drove both earned media and organic cultural conversation.',
  outcomes: [
    'Coverage secured across 12+ beauty & lifestyle publications',
    '2.3M+ influencer impressions within 30 days of launch',
    'Trended locally on social media at launch weekend',
    'Influencer partnerships with 8 creators across Nigeria and the UK',
  ],
  img: '/beautybyAD/PTP08250.jpg',
  imgCampaign: '/beautybyAD/PTP08180-Recovered-Recovered.jpg',
}

const moms = {
  name: 'Momdates',
  year: '2026',
  tags: ['Brand Communications', 'Digital PR', 'Platform Launch'],
  headline: 'Where moms find their people.',
  sub: 'A community platform launch built on authentic connection over noise.',
  context:
    'Momdates is a community platform connecting mothers through shared experiences, social events, and meaningful conversation. As a new entrant in the community app space, they needed a voice that felt human — not corporate.',
  approach:
    'We crafted a brand narrative rooted in authentic connection, positioning Momdates as the antidote to mom isolation. Through targeted digital PR, community activations, and strategic media outreach, we built waitlist momentum before the platform even launched.',
  outcomes: [
    'Pre-launch waitlist exceeded projections by 3×',
    'Featured across 5+ parenting and lifestyle publications',
    '1,200+ community members within the first 60 days',
    'Organic social growth of 180% in the first month',
  ],
  logo: '/momdate/Momdates%20Logo%20(2).png',
}

function Arrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function Tag({ label, light }) {
  return (
    <span className={`text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-[0.1em] border ${light ? 'text-cream/55 border-cream/18' : 'text-dark/50 border-dark/15'}`}>
      {label}
    </span>
  )
}

/* ─────────────────────────────────────────────────────────
   CONCEPT 1 — EDITORIAL  (Dream Beats reference)
   Dark cinematic cards, full-bleed images, type overlay
───────────────────────────────────────────────────────── */
function Editorial() {
  return (
    <div className="section flex flex-col gap-2.5">
      <div className="grid grid-cols-[1.4fr_1fr] gap-2.5 max-md:grid-cols-1">

        {/* Beauty by aD — campaign image full bleed */}
        <div className="relative rounded-[20px] overflow-hidden h-[78vh] max-md:h-[72vw] group cursor-pointer">
          <img
            src={beauty.imgCampaign}
            alt="Beauty by aD"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark/88 via-dark/25 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-wrap gap-1.5">
                {beauty.tags.map((t, i) => <Tag key={i} label={t} light />)}
              </div>
              <div className="w-8 h-8 border border-cream/20 rounded-full flex items-center justify-center shrink-0">
                <Arrow className="w-3 h-3 stroke-cream opacity-70" />
              </div>
            </div>
            <div>
              <div className="text-cream/35 text-[10px] tracking-[0.16em] uppercase mb-3">{beauty.year}</div>
              <div className="font-syne text-[clamp(26px,4vw,56px)] font-extrabold text-cream leading-[0.95] uppercase tracking-[-0.02em]">
                {beauty.name}
              </div>
              <div className="text-cream/50 text-[13px] mt-3 leading-[1.65] italic max-w-80">{beauty.sub}</div>
            </div>
          </div>
        </div>

        {/* Momdates — wine typographic */}
        <div className="relative rounded-[20px] bg-wine h-[78vh] max-md:h-[68vw] group cursor-pointer flex flex-col justify-between p-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
            <img src={moms.logo} alt="" className="w-[85%]" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex flex-wrap gap-1.5">
              {moms.tags.map((t, i) => <Tag key={i} label={t} light />)}
            </div>
            <div className="w-8 h-8 border border-cream/20 rounded-full flex items-center justify-center shrink-0">
              <Arrow className="w-3 h-3 stroke-cream opacity-50" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="text-cream/30 text-[10px] tracking-[0.16em] uppercase mb-3">{moms.year}</div>
            <div className="font-syne text-[clamp(26px,4vw,56px)] font-extrabold text-cream leading-[0.95] uppercase tracking-[-0.02em]">
              {moms.name}
            </div>
            <div className="text-cream/45 text-[13px] mt-3 leading-[1.65] italic">{moms.sub}</div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
        <div className="col-span-2 max-md:col-span-1 relative rounded-[20px] overflow-hidden h-52 group cursor-pointer">
          <img src={beauty.img} alt="Beauty by aD" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: 'center 25%' }} />
          <div className="absolute inset-0 bg-linear-to-r from-dark/78 to-transparent" />
          <div className="absolute inset-0 p-7 flex flex-col justify-end">
            <div className="text-[10px] text-cream/40 tracking-[0.14em] uppercase mb-1.5">Portrait · Beauty by aD</div>
            <div className="font-syne text-cream font-extrabold text-[clamp(14px,2vw,24px)] uppercase leading-tight">{beauty.headline}</div>
          </div>
        </div>
        <div className="bg-wine rounded-[20px] h-52 p-7 flex flex-col justify-between">
          <div className="text-cream/35 text-[10px] tracking-[0.16em] uppercase">In Progress</div>
          <div>
            <div className="font-syne text-cream font-extrabold text-[clamp(15px,2vw,22px)] uppercase leading-[1.15]">
              More work<br />on the way.
            </div>
            <div className="text-cream/40 text-[12px] mt-2 leading-[1.6]">We're just getting started.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   CONCEPT 2 — CASE STUDY  (Adidas reference)
   Split layout: bold headline + Context/Approach/Outcomes
───────────────────────────────────────────────────────── */
function CaseStudy() {
  function Block({ client, isLogo }) {
    return (
      <div className="bg-cream border border-dark/8 rounded-[20px] overflow-hidden">
        <div className="px-[clamp(28px,4vw,56px)] pt-[clamp(32px,5vh,52px)] pb-7 border-b border-dark/7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/35">{client.year}</span>
            {client.tags.map((t, i) => <Tag key={i} label={t} />)}
          </div>
          <div className="font-syne text-[clamp(22px,4vw,60px)] font-extrabold text-dark uppercase tracking-[-0.02em] leading-[0.95]">
            {client.headline}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr] max-md:grid-cols-1">
          <div className="px-[clamp(28px,4vw,56px)] py-10 border-r border-dark/7 max-md:border-r-0 max-md:border-b max-md:border-dark/7 flex flex-col gap-8">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-2.5">Context</div>
              <p className="text-[14px] text-dark/60 leading-[1.85]">{client.context}</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-2.5">Approach</div>
              <p className="text-[14px] text-dark/60 leading-[1.85]">{client.approach}</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-2.5">Outcomes</div>
              <ul className="flex flex-col gap-2.5">
                {client.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-dark/60 leading-[1.6]">
                    <span className="text-wine mt-1 shrink-0">→</span>{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isLogo ? (
            <div className="h-[480px] max-md:h-52 flex items-center justify-center bg-wine">
              <img src={client.logo} alt={client.name} className="w-52 max-md:w-36" style={{ filter: 'brightness(0) invert(1)', opacity: 0.65 }} />
            </div>
          ) : (
            <div className="h-[480px] max-md:h-64 overflow-hidden">
              <img src={client.img} alt={client.name} className="w-full h-full object-cover object-top" />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="section flex flex-col gap-2.5">
      <Block client={beauty} isLogo={false} />
      <Block client={moms} isLogo={true} />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   CONCEPT 3 — GRID  (Ockham reference)
   Oversized "Our Work" header + mixed bento grid
───────────────────────────────────────────────────────── */
function Grid() {
  return (
    <div className="section flex flex-col gap-2.5">
      <div className="bg-cream border border-dark/8 rounded-[20px] py-[clamp(32px,5vh,52px)] px-[clamp(28px,4vw,56px)] flex items-end justify-between overflow-hidden">
        <div className="font-syne font-extrabold uppercase leading-[0.88] tracking-[-0.03em]">
          <div className="text-[clamp(52px,9vw,136px)] text-dark">Our</div>
          <div className="text-[clamp(52px,9vw,136px)] text-wine">Work</div>
        </div>
        <div className="text-right max-md:hidden">
          <div className="font-syne text-[clamp(40px,6vw,96px)] font-extrabold text-dark/10 leading-none">02</div>
          <div className="text-[10px] text-dark/35 tracking-widest uppercase">Projects</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
        {/* Momdates — col-span-2 left */}
        <div className="col-span-2 max-md:col-span-1 rounded-[20px] bg-wine h-[62vh] max-md:h-[68vw] relative overflow-hidden group cursor-pointer flex flex-col justify-between p-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src={moms.logo} alt="" style={{ filter: 'brightness(0) invert(1)', opacity: 0.3 }} className="w-2/3 max-w-72" />
          </div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex flex-wrap gap-1.5">
              {moms.tags.map((t, i) => <Tag key={i} label={t} light />)}
            </div>
            <div className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center shrink-0">
              <Arrow className="w-3 h-3 stroke-cream opacity-60" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="text-cream/30 text-[10px] tracking-widest uppercase mb-2">{moms.year}</div>
            <div className="font-syne text-[clamp(26px,3.5vw,52px)] font-extrabold text-cream uppercase tracking-[-0.02em] leading-[1]">{moms.name}</div>
            <div className="text-cream/50 text-[13px] mt-3 leading-[1.65] italic">{moms.sub}</div>
          </div>
        </div>

        {/* Beauty by aD — col-span-1 right */}
        <div className="relative rounded-[20px] overflow-hidden h-[62vh] max-md:h-[65vw] group cursor-pointer">
          <img src={beauty.imgCampaign} alt="Beauty by aD" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-linear-to-t from-dark/85 via-dark/20 to-transparent" />
          <div className="absolute inset-0 p-7 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-wrap gap-1.5">
                {beauty.tags.slice(0, 2).map((t, i) => <Tag key={i} label={t} light />)}
              </div>
              <div className="w-8 h-8 rounded-full border border-cream/25 flex items-center justify-center shrink-0">
                <Arrow className="w-3 h-3 stroke-cream" />
              </div>
            </div>
            <div>
              <div className="text-cream/30 text-[10px] tracking-widest uppercase mb-2">{beauty.year}</div>
              <div className="font-syne text-[clamp(18px,2.5vw,36px)] font-extrabold text-cream uppercase tracking-[-0.02em] leading-[1]">{beauty.name}</div>
              <div className="text-[11px] text-cream/40 tracking-widest uppercase mt-2">Brand Launch · Africa</div>
            </div>
          </div>
        </div>

        {/* Portrait secondary */}
        <div className="relative rounded-[20px] overflow-hidden h-64 group cursor-pointer">
          <img
            src={beauty.img}
            alt="Beauty by aD portrait"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="absolute inset-0 bg-dark/40" />
          <div className="absolute bottom-5 left-5">
            <div className="font-syne text-cream font-bold text-sm uppercase">Campaign Portrait</div>
            <div className="text-[10px] text-cream/40 tracking-widest uppercase">Beauty by aD</div>
          </div>
        </div>

        {/* Coming soon */}
        <div className="col-span-2 max-md:col-span-1 bg-wine rounded-[20px] h-52 px-8 py-7 flex flex-col justify-between">
          <div className="text-cream/35 text-[10px] tracking-[0.16em] uppercase">In Progress</div>
          <div className="font-syne text-cream font-extrabold text-[clamp(18px,3vw,38px)] uppercase leading-[1.05] tracking-[-0.02em]">
            More work coming.<br />We're just getting started.
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   CONCEPT 4 — CLASSIC  (Peace's taste)
   Redrick headline + Unearth tabs + closing statement
───────────────────────────────────────────────────────── */
function Classic() {
  const [activeClient, setActiveClient] = useState('beauty')
  const client = activeClient === 'beauty' ? beauty : moms
  const isLogo = activeClient === 'momdates'

  return (
    <div className="section flex flex-col gap-2.5">
      {/* Redrick-style stacked headline */}
      <div className="bg-cream border border-dark/8 rounded-[20px] py-[clamp(28px,5vh,52px)] px-[clamp(28px,4vw,56px)] overflow-hidden">
        <div className="font-syne font-extrabold uppercase tracking-[-0.03em] leading-[0.88]">
          <div className="text-[clamp(44px,10vw,152px)] text-dark">Case</div>
          <div
            className="text-[clamp(44px,10vw,152px)]"
            style={{ WebkitTextStroke: '2px #0b0909', color: 'transparent' }}
          >
            Studies
          </div>
        </div>
      </div>

      {/* Client tab selector — Unearth style */}
      <div className="bg-wine rounded-[20px] p-1.5 flex gap-1.5">
        {[{ id: 'beauty', label: 'Beauty by aD' }, { id: 'momdates', label: 'Momdates' }].map(c => (
          <button
            key={c.id}
            onClick={() => setActiveClient(c.id)}
            className={`flex-1 py-3.5 px-4 rounded-[14px] text-[12px] font-semibold tracking-[0.04em] transition-all duration-200 ${activeClient === c.id ? 'bg-cream text-dark' : 'text-cream/40 hover:text-cream/70'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Case study */}
      <div className="bg-cream border border-dark/8 rounded-[20px] overflow-hidden">
        <div className="px-[clamp(28px,4vw,56px)] pt-[clamp(28px,4vh,48px)] pb-7 border-b border-dark/7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/35">{client.year}</span>
            {client.tags.map((t, i) => <Tag key={i} label={t} />)}
          </div>
          <div className="font-syne text-[clamp(20px,3.5vw,54px)] font-extrabold text-dark uppercase tracking-[-0.02em] leading-[0.95]">
            {client.headline}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr] max-md:grid-cols-1">
          <div className="px-[clamp(28px,4vw,56px)] py-10 border-r border-dark/7 max-md:border-r-0 max-md:border-b max-md:border-dark/7 flex flex-col gap-8">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-2.5">Context</div>
              <p className="text-[14px] text-dark/60 leading-[1.85]">{client.context}</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-2.5">Approach</div>
              <p className="text-[14px] text-dark/60 leading-[1.85]">{client.approach}</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-2.5">Outcomes</div>
              <ul className="flex flex-col gap-2.5">
                {client.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-dark/60 leading-[1.6]">
                    <span className="text-wine mt-1 shrink-0">→</span>{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isLogo ? (
            <div className="h-[500px] max-md:h-52 flex items-center justify-center bg-dark">
              <img src={moms.logo} alt="Momdates" className="w-52 max-md:w-36" style={{ filter: 'brightness(0) invert(1)', opacity: 0.75 }} />
            </div>
          ) : (
            <div className="h-[500px] max-md:h-64 overflow-hidden">
              <img src={beauty.img} alt="Beauty by aD" className="w-full h-full object-cover object-top" />
            </div>
          )}
        </div>
      </div>

      {/* Redrick closing statement */}
      <div className="bg-wine rounded-[20px] py-[clamp(36px,5vh,56px)] px-[clamp(28px,4vw,56px)] flex flex-col gap-7">
        <div className="font-syne font-extrabold uppercase text-cream leading-[1] tracking-[-0.02em] text-[clamp(22px,4.5vw,64px)]">
          Attention is earned.<br />Results are built.
        </div>
        <Link
          to="/contact"
          className="self-start inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] uppercase text-dark bg-cream py-3 px-7 rounded-full hover:bg-wine hover:text-cream transition-all duration-300 no-underline"
        >
          Work with us →
        </Link>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
const tabs = [
  { id: 'editorial', label: '01 Editorial' },
  { id: 'casestudy', label: '02 Case Study' },
  { id: 'grid', label: '03 Grid' },
  { id: 'classic', label: '04 Classic' },
]

export default function Work() {
  const [active, setActive] = useState('editorial')

  return (
    <>
      <div className="mt-21.5 max-md:mt-18.5 bg-cream border border-dark/8 rounded-[20px] p-1.5 grid grid-cols-4 gap-1 max-md:grid-cols-2">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`py-3 px-3 rounded-[14px] text-[11px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 ${active === t.id ? 'bg-dark text-cream' : 'text-dark/40 hover:text-dark/70'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === 'editorial' && <Editorial />}
      {active === 'casestudy' && <CaseStudy />}
      {active === 'grid' && <Grid />}
      {active === 'classic' && <Classic />}
    </>
  )
}
