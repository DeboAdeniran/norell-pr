import { useState } from 'react'

const SERVICES = [
  'Strategic Communications',
  'Media Relations',
  'Reputation Management',
  'Brand Launch & Market Entry',
  'Thought Leadership',
  'Crisis Communications',
  'Influencer Partnerships',
  'Integrated Campaigns',
  "I'm not sure yet",
]

// ─── Replace this with your Formspree form ID ───────────────────────────────
// 1. Go to formspree.io → sign up with admin@norellpr.com
// 2. Create a new form, copy the ID (looks like: xpzgkdqb)
// 3. Paste it below replacing YOUR_FORM_ID
const FORMSPREE_ID = 'YOUR_FORM_ID'
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL = { name: '', email: '', company: '', service: '', details: '' }

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-dark/35">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputCls = 'bg-transparent border-0 border-b border-dark/15 py-3 text-dark text-[15px] leading-none focus:outline-none focus:border-wine placeholder:text-dark/20 transition-colors duration-200 w-full'

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          'Company / Brand': form.company,
          'Service Needed': form.service,
          'Additional Details': form.details,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <div className="relative h-screen bg-cream border border-dark/8 rounded-[20px] flex flex-col justify-between pt-21.5 pb-10 px-[clamp(28px,4vw,64px)] max-md:h-[78vh] max-md:justify-end max-md:pb-[10vh] overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          <svg width="560" height="560" viewBox="0 0 100 100" fill="none" className="max-md:w-64 max-md:h-64">
            <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#510113" />
            <path d="M22 22 L46 47 L22 72" stroke="#510113" strokeWidth="3" fill="none" />
            <path d="M78 22 L54 47 L78 72" stroke="#510113" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/35 relative z-10 max-md:hidden">
          Let's work together
        </div>

        <div className="relative z-10">
          <div className="hidden max-md:block text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/35 mb-4">
            Let's work together
          </div>
          <div
            className="font-syne font-extrabold leading-[0.88] uppercase tracking-[-0.03em] text-dark"
            style={{ fontSize: 'clamp(32px, 7vw, 100px)' }}
          >
            Contact
          </div>
          <div
            className="font-syne font-extrabold leading-[0.88] uppercase tracking-[-0.03em] text-wine"
            style={{ fontSize: 'clamp(44px, 11vw, 160px)' }}
          >
            Norell PR
          </div>
          <p className="text-dark/40 text-[13px] tracking-[0.04em] mt-6 leading-[1.7] max-w-90">
            Tell us about your brand and what you're looking to achieve.
          </p>
        </div>
      </div>

      {/* ── MAIN: INFO + FORM ── */}
      <div className="section grid grid-cols-[1fr_1.8fr] gap-2.5 items-start max-md:grid-cols-1">

        {/* Left — contact info */}
        <div className="bg-cream border border-dark/8 rounded-[20px] p-[clamp(28px,4vw,52px)] flex flex-col justify-between gap-12 max-md:gap-8 sticky top-[88px]">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-6">Get in touch</div>
            <a
              href="mailto:admin@norellpr.com"
              className="block font-syne font-extrabold text-[clamp(16px,2vw,26px)] text-dark uppercase tracking-[-0.01em] leading-[1.3] hover:text-wine transition-colors no-underline break-all"
            >
              admin@norellpr.com
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-dark/30 mb-2">Based in</div>
              <div className="text-[14px] text-dark/65 leading-[1.7]">Lagos, Nigeria</div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-dark/30 mb-2">Services</div>
              <div className="text-[14px] text-dark/65 leading-[1.7]">
                PR · Communications<br />Brand Strategy · Media
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-dark/8">
            <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-dark/30 mb-3">Follow</div>
            <div className="flex gap-4">
              <a href="#" className="text-[12px] text-dark/50 hover:text-wine transition-colors no-underline tracking-widest uppercase">IG</a>
              <a href="#" className="text-[12px] text-dark/50 hover:text-wine transition-colors no-underline tracking-widest uppercase">LI</a>
              <a href="#" className="text-[12px] text-dark/50 hover:text-wine transition-colors no-underline tracking-widest uppercase">TW</a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-cream border border-dark/8 rounded-[20px] p-[clamp(28px,4vw,52px)]">
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-dark/30 mb-10">Tell us about your project</div>

          {status === 'success' ? (
            <div className="flex flex-col items-start gap-5 py-16">
              <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center">
                <svg className="w-5 h-5 stroke-cream" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="font-syne font-extrabold text-dark uppercase text-[clamp(20px,3vw,36px)] tracking-[-0.02em] leading-[1.1]">
                Message received.
              </div>
              <p className="text-dark/50 text-[14px] leading-[1.75] max-w-96">
                Thank you for reaching out. We'll be in touch within 48 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-wine border-b border-wine/40 pb-0.5 hover:border-wine transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-9">
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <Field label="Name">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your full name"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="your@email.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Company / Brand Name">
                <input
                  type="text"
                  value={form.company}
                  onChange={set('company')}
                  placeholder="Your company or brand"
                  className={inputCls}
                />
              </Field>

              <Field label="What services do you need?">
                <div className="relative">
                  <select
                    required
                    value={form.service}
                    onChange={set('service')}
                    className={`${inputCls} appearance-none pr-8 cursor-pointer ${form.service === '' ? 'text-dark/20' : 'text-dark'}`}
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 stroke-dark/30 pointer-events-none" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </Field>

              <Field label="Additional Details">
                <textarea
                  rows={5}
                  value={form.details}
                  onChange={set('details')}
                  placeholder="Tell us more about your goals, timeline, or anything else relevant..."
                  className={`${inputCls} resize-none leading-[1.7]`}
                />
              </Field>

              {status === 'error' && (
                <p className="text-[12px] text-wine/80">Something went wrong. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="self-start inline-flex items-center gap-3 bg-dark text-cream text-[12px] font-semibold tracking-[0.08em] uppercase py-4 px-9 rounded-full hover:bg-wine transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── BOTTOM: large email CTA ── */}
      <div className="section bg-wine rounded-[20px] py-[clamp(48px,7vh,88px)] px-[clamp(28px,4vw,56px)] flex flex-col gap-4 overflow-hidden relative">
        <div className="absolute -bottom-16 -right-12 opacity-[0.05] pointer-events-none">
          <svg width="320" height="320" viewBox="0 0 100 100" fill="none">
            <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#eadfc4" />
          </svg>
        </div>
        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-cream/35 relative z-10">Or just say hello</div>
        <a
          href="mailto:admin@norellpr.com"
          className="font-syne font-extrabold text-cream uppercase tracking-[-0.03em] leading-[0.9] hover:text-cream/75 transition-colors no-underline relative z-10"
          style={{ fontSize: 'clamp(28px, 5.5vw, 88px)' }}
        >
          admin@norellpr.com
        </a>
      </div>
    </>
  )
}
