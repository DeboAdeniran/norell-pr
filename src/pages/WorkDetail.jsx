import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'

const clients = {
  'beauty-by-ad': {
    name: 'Beauty by aD',
    heading: 'BeautybyAD – Luxe Matte Wear Foundation Launch',
    images: [
      '/beautybyAD/PTP08180-Recovered-Recovered.jpg',
      '/beautybyAD/PTP08250.jpg',
    ],
    description: [
      'The Luxe Matte Wear Foundation launch was a comprehensive beauty campaign designed to introduce BeautybyAD\'s newest complexion product to the market through high-impact visual storytelling, strategic influencer engagement, and widespread product seeding. The campaign combined a large-scale production shoot with an extensive earned media strategy to position the foundation as a must-have beauty product across key markets.',
      'The campaign began with an intensive model casting and shade-matching process. Over 80 models participated in the selection phase, allowing the brand to showcase the foundation\'s inclusivity and extensive shade range. Following the casting process, 24 models were selected for the official launch shoot, which served as the foundation for all campaign assets. The production delivered a comprehensive library of high-quality photography and video content that captured the versatility, performance, and broad shade spectrum of the product.',
      'Following the shoot, the campaign transitioned into a strategic influencer and makeup artist seeding phase. A carefully curated list of beauty creators, industry professionals, and makeup artists was developed to ensure the product reached credible voices within the beauty community. Seeding kits containing either 20-product collections or 3-product sets were distributed to recipients across multiple markets, including Nigeria, the United Kingdom, Canada, the United States, South Africa, and Ghana.',
      'The campaign generated significant earned media and organic social visibility, with influencers and beauty professionals voluntarily sharing their experiences with the product across digital platforms. Notably, all coverage was achieved without paid partnerships, resulting in authentic product advocacy and widespread organic conversations within the beauty industry. The combination of strategic seeding, creator engagement, and compelling launch assets successfully amplified awareness, strengthened product credibility, and drove extensive visibility for the Luxe Matte Wear Foundation across local and international markets.',
    ],
    meta: [
      { label: 'Client', value: 'BeautybyAD' },
      { label: 'Campaign', value: 'Luxe Matte Wear Foundation Launch' },
      { label: 'Year', value: '2026' },
    ],
  },
  momdates: {
    name: 'Momdates',
    heading: 'MomDates – Scents & Stories',
    images: [
      '/momdate/momdate_campaign%20(1).jpeg',
      '/momdate/momdate_campaign%20(2).jpeg',
      '/momdate/momdate_campaign%20(3).jpeg',
      '/momdate/momdate_campaign%20(4).jpeg',
      '/momdate/momdate_campaign%20(5).jpeg',
      '/momdate/momdate_campaign%20(6).jpeg',
    ],
    description: [
      'Scents & Stories was an intimate MomDates experience created to celebrate mothers through a thoughtfully curated afternoon of connection, self-care, and indulgence. Designed as a rare opportunity for mothers to step away from the demands of everyday life, the event provided a dedicated space where they could simply be cared for, connect with other women, and enjoy a moment that was entirely their own.',
      'Norell PR led the sponsorship strategy and curation for the event, taking a deliberate quality-over-quantity approach to brand partnerships. Rather than pursuing sponsorship for visibility alone, the team carefully selected five brands whose products and values naturally aligned with the needs and interests of the audience: Arami Essentials, Bolden Skincare, Besense, Bekiri, and Roel Beauty.',
      'The sponsorship strategy was built around relevance and experience. Each partner was chosen for its ability to contribute meaningfully to the event, ensuring that every touchpoint felt intentional and enhanced the overall experience for attendees. The result was a seamless integration of brands that complemented the event\'s core themes of wellness, beauty, self-care, and appreciation for mothers.',
      'The event exceeded attendance expectations and delivered a highly positive experience for guests. Mothers responded enthusiastically to the carefully curated gifting experience, with many attendees organically sharing their goody bags and event moments across social media. These authentic expressions of appreciation generated valuable earned content, reinforcing the event\'s impact and creating genuine social proof around both the MomDates platform and its sponsoring brands.',
      'Ultimately, Scents & Stories demonstrated the power of thoughtful sponsorship curation, proving that when brands are aligned with audience needs and event purpose, partnerships can create meaningful experiences that resonate far beyond the event itself.',
    ],
    meta: [
      { label: 'Client', value: 'MomDates' },
      { label: 'Year', value: '2026' },
    ],
  },
}

function ImageGrid({ images, name, onZoom, onMouseMove, onMouseLeave }) {
  const handlers = (src) => ({ onClick: () => onZoom(src), onMouseMove, onMouseLeave })

  return (
    <div
      style={{
        columns: 2,
        columnGap: '10px',
      }}
      className="max-md:columns-1"
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{ breakInside: 'avoid', marginBottom: '10px' }}
          className="rounded-[20px] overflow-hidden cursor-none"
          {...handlers(src)}
        >
          <img
            src={src}
            alt={name}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'auto'}
            loading={i < 2 ? 'eager' : 'lazy'}
            className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const client = clients[slug]
  const [zoomed, setZoomed] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })
  const touchStartY = useRef(0)

  const handleImgMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY, visible: true })
  const handleImgMouseLeave = () => setCursor(c => ({ ...c, visible: false }))

  // Close on Escape
  useEffect(() => {
    if (!zoomed) return
    const handler = (e) => { if (e.key === 'Escape') setZoomed(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [zoomed])

  // Prevent body scroll while zoomed
  useEffect(() => {
    document.body.style.overflow = zoomed ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [zoomed])

  if (!client) {
    return (
      <div className="mt-21.5 max-md:mt-18.5 flex items-center justify-center h-64">
        <Link to="/work" className="text-dark/50 hover:text-dark text-sm no-underline">← Back to Work</Link>
      </div>
    )
  }

  return (
    <div className="mt-21.5 max-md:mt-18.5">

      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-3 mb-5 max-md:mb-4">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-dark/40 hover:text-dark transition-colors no-underline"
        >
          <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Work
        </Link>
        <span className="text-dark/20 text-[10px]">/</span>
        <span className="text-[11px] text-dark/30 tracking-[0.08em] uppercase truncate">{client.name}</span>
      </div>

      {/* ── IMAGE GRID ── */}
      <ImageGrid
        images={client.images}
        name={client.name}
        onZoom={setZoomed}
        onMouseMove={handleImgMouseMove}
        onMouseLeave={handleImgMouseLeave}
      />

      {/* ── CUSTOM CURSOR LABEL ── */}
      <div
        className="fixed pointer-events-none z-50 select-none"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: 'translate(-50%, -50%)',
          opacity: cursor.visible ? 1 : 0,
          transition: 'opacity 0.15s',
        }}
      >
        <span className="bg-dark text-cream text-[10px] font-semibold tracking-[0.14em] uppercase px-3.5 py-2 rounded-full">
          Click to view
        </span>
      </div>

      {/* ── CAMPAIGN TEXT ── */}
      <div className="section bg-cream border border-dark/8 rounded-[20px] px-[clamp(28px,4vw,64px)] py-[clamp(40px,6vh,72px)]">
        <h1
          className="font-syne font-extrabold text-dark uppercase tracking-[-0.03em] leading-[1.0] mb-10 max-md:mb-8"
          style={{ fontSize: 'clamp(20px, 3vw, 44px)' }}
        >
          {client.heading}
        </h1>

        <div className="flex gap-16 items-start max-md:flex-col max-md:gap-10">
          {/* Description */}
          <div className="flex-1 flex flex-col gap-5">
            {client.description.map((p, i) => (
              <p key={i} className="text-dark/60 text-[14px] leading-[1.85] max-md:text-[13px]">
                {p}
              </p>
            ))}
          </div>

          {/* Metadata sidebar */}
          <div className="shrink-0 w-52 max-md:w-full flex flex-col gap-6 max-md:flex-row max-md:flex-wrap max-md:gap-x-10 max-md:gap-y-5 pt-1">
            {client.meta.map(({ label, value }) => (
              <div key={label}>
                <div className="text-[9px] font-bold tracking-[0.16em] uppercase text-dark/50 mb-1.5">{label}</div>
                <div className="text-[14px] text-dark font-bold leading-normal">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {zoomed && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.96)', animation: 'lbFadeIn 0.2s ease' }}
          onClick={() => setZoomed(null)}
          onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY }}
          onTouchEnd={(e) => { if (e.changedTouches[0].clientY - touchStartY.current > 60) setZoomed(null) }}
        >
          <img
            src={zoomed}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '88vh',
              objectFit: 'contain',
              borderRadius: '10px',
              animation: 'lbZoomIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          />
          <button
            onClick={() => setZoomed(null)}
            className="fixed top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white text-xl leading-none"
          >
            ×
          </button>
        </div>
      )}

      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbZoomIn { from { transform: scale(0.88); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </div>
  )
}
