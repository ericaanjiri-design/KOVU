import React from 'react';

const navLinks = [
  { label: 'About Kovu', id: 'about' },
  { label: 'Impact Ecosystems', id: 'impact' },
  { label: 'Impact Numbers', id: 'numbers' },
  { label: 'Inclusive Travel', id: 'inclusion' },
  { label: 'Wellness Journeys', id: 'wellness' },
  { label: 'Why It Matters', id: 'why' },
  { label: 'Partnership', id: 'partnership' },
  { label: 'Contact', id: 'contact' },
];

const values = ['Sustainability', 'Conservation', 'Inclusion', 'Empowerment', 'Regeneration', 'Community', 'Dignity', 'Legacy'];

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden noise"
      style={{ background: 'linear-gradient(160deg, #040f0a 0%, #062318 40%, #0B3D2E 70%, #040f0a 100%)' }}>

      {/* African pattern */}
      <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,107,0.06) 0%, transparent 70%)' }} />

      {/* Gold top line */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #C8A96B 30%, #e8d4a8 50%, #C8A96B 70%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">

        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start mb-6">
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3vw,3.8rem)', fontWeight: 300, color: 'white', letterSpacing: '0.04em', lineHeight: 1 }}>
                Kovu Afrika
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.6)', marginTop: '0.35rem' }}>
                VistaVoyage CSR Foundation
              </span>
            </button>

            <div className="h-px w-10 mb-6" style={{ background: 'rgba(200,169,107,0.3)' }} />

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.9, marginBottom: '2rem' }}>
              Healing Landscapes. Empowering Lives. The CSR Foundation of VistaVoyage Travel Group,
              committed to leaving Africa better than we found it — one journey at a time.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'IG', href: 'https://instagram.com/VistaVoyage', title: 'Instagram' },
                { label: 'TW', href: '#', title: 'Twitter/X' },
                { label: 'LI', href: '#', title: 'LinkedIn' },
                { label: 'YT', href: '#', title: 'YouTube' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(200,169,107,0.15)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,169,107,0.12)'; e.currentTarget.style.color = '#C8A96B'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.15)'; e.currentTarget.style.transform = 'none'; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — 3 cols */}
          <div className="md:col-span-3">
            <p className="section-label mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((l, i) => (
                <button key={i} onClick={() => scrollTo(l.id)}
                  className="text-left transition-all duration-300 group flex items-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C8A96B'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
                  <span className="w-3 h-px inline-block transition-all duration-300 group-hover:w-5"
                    style={{ background: 'rgba(200,169,107,0.4)' }} />
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Values + Address — 5 cols */}
          <div className="md:col-span-5">
            <p className="section-label mb-6">Our Values</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {values.map((v, i) => (
                <span key={i}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.52rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    background: 'rgba(200,169,107,0.06)',
                    border: '1px solid rgba(200,169,107,0.15)',
                    color: 'rgba(200,169,107,0.6)',
                  }}>
                  {v}
                </span>
              ))}
            </div>

            <div className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,169,107,0.1)' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.5)', marginBottom: '0.75rem' }}>
                Our Location
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}>
                Applewood Adams, Ngong Road<br />
                Nairobi — 9th Floor, Office 904B
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(200,169,107,0.45)', marginTop: '0.75rem' }}>
                vistavoyagetravel.group
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: 'rgba(255,255,255,0.04)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} VistaVoyage Travel Group. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(200,169,107,0.35)', letterSpacing: '0.05em' }}>
            "Navigating Dreams, Endless Vistas"
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'CSR Report'].map((l, i) => (
              <button key={i}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C8A96B'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.18)'}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
