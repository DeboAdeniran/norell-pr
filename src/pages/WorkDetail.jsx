import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'

const clients = {
  'beauty-by-ad': {
    name: 'Beauty by aD',
    year: '2025',
    category: 'Brand Launch · Africa',
    tags: ['Brand Launch', 'Media Relations', 'Influencer Strategy'],
    images: [
      '/beautybyAD/PTP08180-Recovered-Recovered.jpg',
      '/beautybyAD/PTP08250.jpg',
      '/beautybyAD/2.jpg',
      '/beautybyAD/1%20(11).jpg',
    ],
    outcomes: [
      'Coverage across 12+ beauty & lifestyle publications',
      '2.3M+ influencer impressions in 30 days',
      'Trended on social media at launch weekend',
      'Influencer partnerships with 8 creators across Nigeria & UK',
    ],
  },
  momdates: {
    name: 'Momdates',
    year: '2026',
    category: 'Platform Launch',
    tags: ['Brand Communications', 'Digital PR', 'Platform Launch'],
    images: ['/momdate/Momdates%20Logo%20(2).png'],
    isLogo: true,
    outcomes: [
      'Pre-launch waitlist exceeded projections by 3×',
      'Featured across 5+ parenting & lifestyle publications',
      '1,200+ community members within 60 days',
      'Organic social growth of 180% in first month',
    ],
  },
}

function frameStyle(pos, isMobile) {
  const base = {
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '10px',
    cursor: pos === 0 ? 'zoom-in' : 'pointer',
    transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
    userSelect: 'none',
  }

  if (isMobile) {
    switch (pos) {
      case 0:
        return {
          ...base,
          width: '88vw', height: '58vw',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          boxShadow: '0 24px 80px rgba(0,0,0,0.92)',
        }
      case -1:
        return {
          ...base,
          width: '58vw', height: '38vw',
          top: '50%', left: '-14vw',
          transform: 'translateY(-50%) perspective(500px) rotateY(32deg)',
          zIndex: 5,
          boxShadow: '0 12px 40px rgba(0,0,0,0.95)',
        }
      default:
        return {
          ...base,
          width: '58vw', height: '38vw',
          top: '50%', left: '-120vw',
          transform: 'translateY(-50%)',
          zIndex: 1,
          opacity: 0,
          pointerEvents: 'none',
        }
    }
  }

  // Desktop
  switch (pos) {
    case 0:
      return {
        ...base,
        width: '56vw', height: '70vh',
        top: '50%', left: '40vw',
        transform: 'translateY(-50%)',
        zIndex: 10,
        boxShadow: '0 48px 140px rgba(0,0,0,0.88), 0 0 0 1px rgba(255,255,255,0.04)',
      }
    case -1:
      return {
        ...base,
        width: '21vw', height: '43vh',
        top: '50%', left: '17vw',
        transform: 'translateY(-50%) perspective(900px) rotateY(28deg)',
        zIndex: 7,
        boxShadow: '0 24px 80px rgba(0,0,0,0.94)',
      }
    case -2:
      return {
        ...base,
        width: '13vw', height: '27vh',
        top: '50%', left: '6.5vw',
        transform: 'translateY(-50%) perspective(900px) rotateY(38deg)',
        zIndex: 4,
        boxShadow: '0 12px 50px rgba(0,0,0,0.96)',
      }
    case -3:
      return {
        ...base,
        width: '7vw', height: '15vh',
        top: '50%', left: '1.5vw',
        transform: 'translateY(-50%) perspective(900px) rotateY(46deg)',
        zIndex: 2,
        boxShadow: '0 6px 24px rgba(0,0,0,0.96)',
      }
    default:
      return {
        ...base,
        width: '56vw', height: '70vh',
        top: '50%', left: '110vw',
        transform: 'translateY(-50%)',
        zIndex: 0,
        opacity: 0,
        pointerEvents: 'none',
      }
  }
}

export default function WorkDetail() {
  const { slug } = useParams()
  const client = clients[slug]
  const [current, setCurrent] = useState(0)
  const [focused, setFocused] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const images = useMemo(() => client?.images ?? [], [client])

  // Preload the next image so navigation feels instant
  useEffect(() => {
    const next = images[current + 1]
    if (!next) return
    const img = new window.Image()
    img.src = next
  }, [current, images])

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { setFocused(false); return }
      if (focused) return
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, images.length - 1))
      if (e.key === 'ArrowLeft') setCurrent(c => Math.max(c - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [focused, images.length])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (focused) {
      if (dy > 60) setFocused(false)
      return
    }
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) setCurrent(c => Math.min(c + 1, images.length - 1))
      else setCurrent(c => Math.max(c - 1, 0))
    }
  }

  if (!client) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center">
        <Link to="/work" className="text-cream/60 hover:text-cream text-sm no-underline">← Back to Work</Link>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-dark overflow-hidden font-inter"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── 3D GALLERY STAGE ── */}
      <div
        className="absolute inset-0"
        style={{ perspective: '1200px', zIndex: 1, position: 'absolute' }}
      >
        {images.map((img, i) => {
          const pos = i - current
          if (pos > 0 || pos < -3) return null
          const s = frameStyle(pos, isMobile)
          const darkOverlay = pos < 0 ? Math.min(0.78, Math.abs(pos) * 0.32) : 0

          return (
            <div
              key={i}
              style={s}
              onClick={() => pos === 0 ? setFocused(true) : setCurrent(i)}
            >
              <img
                src={img}
                alt={client.name}
                decoding="async"
                fetchPriority={pos === 0 ? 'high' : 'low'}
                style={{
                  display: 'block',
                  width: '100%', height: '100%',
                  objectFit: client.isLogo ? 'contain' : 'cover',
                  objectPosition: 'center 20%',
                  background: client.isLogo ? '#eadfc4' : 'transparent',
                  padding: client.isLogo ? '12%' : '0',
                }}
              />
              {darkOverlay > 0 && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `rgba(11,9,9,${darkOverlay})`,
                  pointerEvents: 'none',
                }} />
              )}
            </div>
          )
        })}
      </div>

      {/* ── ROOM SHADOW VIGNETTE ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Floor */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%', background: 'linear-gradient(to top, rgba(11,9,9,0.88) 0%, transparent 100%)' }} />
        {/* Ceiling */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '22%', background: 'linear-gradient(to bottom, rgba(11,9,9,0.72) 0%, transparent 100%)' }} />
        {/* Left wall */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '22%', background: 'linear-gradient(to right, rgba(11,9,9,0.85) 0%, transparent 100%)' }} />
        {/* Right edge */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '8%', background: 'linear-gradient(to left, rgba(11,9,9,0.55) 0%, transparent 100%)' }} />
        {/* Corner accent shadows — top-left and bottom-left */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '35%', height: '35%', background: 'radial-gradient(ellipse at top left, rgba(11,9,9,0.6) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '35%', height: '35%', background: 'radial-gradient(ellipse at bottom left, rgba(11,9,9,0.7) 0%, transparent 70%)' }} />
      </div>

      {/* ── TOP BAR ── */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-7 py-6 max-md:px-4 max-md:py-5" style={{ zIndex: 3 }}>
        <Link
          to="/work"
          className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cream/45 hover:text-cream transition-colors no-underline"
        >
          ← Work
        </Link>
        {images.length > 1 && (
          <span className="font-syne text-[11px] tracking-widest text-cream/25">
            {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* ── BOTTOM LEFT: project info ── */}
      <div className="absolute bottom-7 left-7 max-md:bottom-5 max-md:left-4" style={{ zIndex: 3 }}>
        <p className="font-syne font-extrabold text-cream uppercase leading-none tracking-[-0.01em]" style={{ fontSize: 'clamp(14px, 1.8vw, 24px)' }}>
          {client.name}
        </p>
        <p className="text-cream/35 text-[10px] tracking-widest uppercase mt-1.5">{client.category}</p>
        <div className="mt-4 flex flex-col gap-1 max-md:mt-2.5">
          {client.outcomes.slice(0, 2).map((o, i) => (
            <p key={i} className="text-cream/50 text-[11px] leading-[1.65] max-md:text-[10px]">→ {o}</p>
          ))}
        </div>
      </div>

      {/* ── BOTTOM RIGHT: prev/next ── */}
      {images.length > 1 && (
        <div className="absolute bottom-7 right-7 max-md:bottom-5 max-md:right-4 flex items-center gap-2.5" style={{ zIndex: 3 }}>
          <button
            onClick={() => setCurrent(c => Math.max(c - 1, 0))}
            disabled={current === 0}
            className="w-8 h-8 rounded-full border border-cream/15 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/35 transition-all disabled:opacity-20 disabled:cursor-not-allowed text-base"
          >‹</button>
          <button
            onClick={() => setCurrent(c => Math.min(c + 1, images.length - 1))}
            disabled={current === images.length - 1}
            className="w-8 h-8 rounded-full border border-cream/15 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/35 transition-all disabled:opacity-20 disabled:cursor-not-allowed text-base"
          >›</button>
        </div>
      )}

      {/* ── ZOOM OVERLAY ── */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          zIndex: 50,
          background: focused ? 'rgba(11,9,9,0.95)' : 'rgba(11,9,9,0)',
          opacity: focused ? 1 : 0,
          pointerEvents: focused ? 'auto' : 'none',
          transition: 'background 0.35s, opacity 0.35s',
        }}
        onClick={() => setFocused(false)}
      >
        <img
          src={images[current]}
          alt={client.name}
          onClick={e => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 48px 140px rgba(0,0,0,0.85)',
            transform: focused ? 'scale(1)' : 'scale(0.88)',
            transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
            background: client.isLogo ? '#eadfc4' : 'transparent',
            padding: client.isLogo ? '5%' : '0',
          }}
        />
      </div>

      {/* ── X CLOSE BUTTON (drops from top when focused) ── */}
      <button
        onClick={() => setFocused(false)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          zIndex: 60,
          transform: focused
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(-72px)',
          opacity: focused ? 1 : 0,
          pointerEvents: focused ? 'auto' : 'none',
          transition: focused
            ? 'transform 0.48s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s'
            : 'transform 0.22s ease-in, opacity 0.2s',
        }}
        className="w-11 h-11 rounded-full bg-cream text-dark font-bold text-xl flex items-center justify-center hover:bg-wine hover:text-cream transition-colors"
      >
        ×
      </button>
    </div>
  )
}
