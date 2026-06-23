import { Link } from 'react-router-dom'

const beauty = {
  name: 'Beauty by aD',
  year: '2025',
  tags: ['Brand Launch', 'Media Relations', 'Influencer Strategy'],
  sub: "A luxury product launch that made Africa's beauty industry take notice.",
  img: '/beautybyAD/PTP08250.jpg',
  imgCampaign: '/beautybyAD/PTP08180-Recovered-Recovered.jpg',
}

const moms = {
  name: 'Momdates',
  year: '2026',
  tags: ['Brand Communications', 'Digital PR', 'Platform Launch'],
  sub: 'A community platform launch built on authentic connection over noise.',
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

export default function Work() {
  return (
    <div className="mt-21.5 max-md:mt-18.5 flex flex-col gap-2.5">

      {/* ── HEADER ── */}
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

      {/* ── MAIN GRID ── */}
      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">

        {/* Momdates — col-span-2, wine card */}
        <Link to="/work/momdates" className="col-span-2 max-md:col-span-1 rounded-[20px] bg-wine h-[62vh] max-md:h-[68vw] relative overflow-hidden group flex flex-col justify-between p-8 no-underline">
          {/* Logo — natural, with dark overlay on top */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src={moms.logo} alt="" className="w-64 max-md:w-44 block rounded-[14px]" style={{ opacity: 0.75 }} />
          </div>
          <div className="absolute inset-0 bg-dark/45 pointer-events-none" />
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
            <div className="font-syne text-[clamp(26px,3.5vw,52px)] font-extrabold text-cream uppercase tracking-[-0.02em] leading-none">{moms.name}</div>
            <div className="text-cream/50 text-[13px] mt-3 leading-[1.65] italic">{moms.sub}</div>
          </div>
        </Link>

        {/* Beauty by aD — col-span-1, photo card */}
        <Link to="/work/beauty-by-ad" className="relative rounded-[20px] overflow-hidden h-[62vh] max-md:h-[65vw] group no-underline">
          <img
            src={beauty.imgCampaign}
            alt="Beauty by aD"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark/85 via-dark/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-dark/55 to-transparent" />
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
              <div className="font-syne text-[clamp(18px,2.5vw,36px)] font-extrabold text-cream uppercase tracking-[-0.02em] leading-none">{beauty.name}</div>
              <div className="text-[11px] text-cream/40 tracking-widest uppercase mt-2">Brand Launch · Africa</div>
            </div>
          </div>
        </Link>

        {/* Portrait — col-span-1 */}
        <div className="relative rounded-[20px] overflow-hidden h-64 group cursor-pointer">
          <img
            src={beauty.img}
            alt="Beauty by aD portrait"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="absolute inset-0 bg-dark/40" />
          <div className="absolute bottom-5 left-5">
            <div className="font-syne text-cream font-bold text-sm uppercase">Campaign Portrait</div>
            <div className="text-[10px] text-cream/40 tracking-widest uppercase">Beauty by aD</div>
          </div>
        </div>

        {/* Coming soon — col-span-2 */}
        <div className="col-span-2 max-md:col-span-1 bg-wine rounded-[20px] h-64 px-8 py-7 flex flex-col justify-between">
          <div className="text-cream/35 text-[10px] tracking-[0.16em] uppercase">In Progress</div>
          <div className="font-syne text-cream font-extrabold text-[clamp(18px,3vw,38px)] uppercase leading-[1.05] tracking-[-0.02em]">
            More work coming.<br />We're just getting started.
          </div>
        </div>

      </div>
    </div>
  )
}
