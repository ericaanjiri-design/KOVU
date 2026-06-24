import React from 'react';
import useInView from './useInView';
import { AccessibilityIcon, BrainIcon, GlobeIcon, ShieldIcon, HeartIcon, HandsIcon } from './Icons';

const features = [
  { Icon: AccessibilityIcon, title: 'Accessible Experiences', desc: 'Curated journeys for differently-abled travelers with full dignity and comfort.' },
  { Icon: BrainIcon, title: 'Psychological Safety', desc: 'Safe, affirming environments where every guest feels seen and valued.' },
  { Icon: GlobeIcon, title: 'Universal Hospitality', desc: 'Inclusive service standards across every VistaVoyage partner property.' },
  { Icon: ShieldIcon, title: 'Safe Environments', desc: 'Vetted destinations with trained staff committed to inclusive excellence.' },
  { Icon: HeartIcon, title: 'Dignity First', desc: 'Every itinerary built on the principle that exploration is a universal right.' },
  { Icon: HandsIcon, title: 'Community Inclusion', desc: 'Ensuring local communities benefit equitably from every tourism dollar.' },
];

const InclusiveTravel = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="inclusion" className="relative overflow-hidden"
      style={{ background: '#FAF7F2' }}>

      {/* Top wave */}
      <div className="w-full overflow-hidden" style={{ marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,0 L0,0 Z" fill="#FAF7F2"/>
        </svg>
      </div>

      {/* Main dark section */}
      <div className="relative py-24 md:py-36 noise"
        style={{ background: 'linear-gradient(135deg, #062318 0%, #0B3D2E 60%, #0d4d39 100%)' }}>

        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 80% 50%, rgba(200,169,107,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 african-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-20 md:py-32" ref={ref}>
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left */}
            <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(-50px)', transition: 'all 1s cubic-bezier(0.22,1,0.36,1)' }}>
              <span className="section-label block mb-4">Inclusive Travel</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 300, color: 'white', lineHeight: 0.95, marginBottom: '1.5rem' }}>
                Exploration<br />
                <em className="gold-text">Without Barriers</em>
              </h2>
              <div className="h-px w-14 mb-8" style={{ background: '#C8A96B' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                True luxury is not just comfort — it is <em style={{ color: 'rgba(200,169,107,0.8)' }}>belonging</em>. VistaVoyage is committed to building
                a travel ecosystem where every person, regardless of ability, background, or identity,
                can experience the transformative power of Africa's landscapes.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                From wheelchair-accessible safari vehicles to sensory-friendly lodges and
                psychologically safe group experiences — we are redefining inclusive luxury.
              </p>

              {/* Stats row */}
              <div className="flex gap-8 mb-10">
                {[['100%', 'Dignity-first design'], ['50+', 'Accessible properties'], ['24/7', 'Inclusive support']].map(([val, lbl], i) => (
                  <div key={i}>
                    <div className="gold-text mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300 }}>{val}</div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{lbl}</p>
                  </div>
                ))}
              </div>

              <button className="btn-gold">Learn About Accessible Travel</button>
            </div>

            {/* Right — feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="group rounded-2xl p-6 cursor-default transition-all duration-500"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(200,169,107,0.1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'none' : 'translateY(30px)',
                    transition: `opacity 0.8s ease ${i * 0.1 + 0.3}s, transform 0.8s ease ${i * 0.1 + 0.3}s, background 0.4s ease, border-color 0.4s ease`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,169,107,0.07)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.1)'; }}>
                  <div className="mb-3" style={{ color: 'rgba(200,169,107,0.7)' }}><f.Icon size={22} /></div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: 'white', fontWeight: 400, marginBottom: '0.5rem' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                  <div className="mt-4 h-px w-6 group-hover:w-full transition-all duration-500"
                    style={{ background: 'linear-gradient(90deg, #C8A96B, transparent)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusiveTravel;
