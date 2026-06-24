import React, { useEffect, useState } from 'react';
import { TreeIcon, GraduationIcon, HomeIcon, ShieldIcon } from './Icons';

const stats = [
  { value: '12K+', label: 'Trees Planted', Icon: TreeIcon },
  { value: '850+', label: 'Youth Mentored', Icon: GraduationIcon },
  { value: '40+', label: 'Communities', Icon: HomeIcon },
  { value: '6', label: 'Conservation Projects', Icon: ShieldIcon },
];

const Hero = () => {
  const [v, setV] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setV(true), 150);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay = 0, extra = {}) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'none' : 'translateY(40px)',
    transition: `opacity 1s ease ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    ...extra,
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=85"
          alt="African savanna at golden hour"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) saturate(1.15)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,35,24,0.45) 0%, rgba(11,61,46,0.1) 30%, rgba(6,35,24,0.96) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,35,24,0.5) 0%, transparent 25%, transparent 75%, rgba(6,35,24,0.5) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 70%, rgba(200,169,107,0.07) 0%, transparent 70%)' }} />
      </div>

      <div className="absolute top-28 left-8 w-20 h-20 hidden md:block"
        style={{ borderLeft: '1px solid rgba(200,169,107,0.25)', borderTop: '1px solid rgba(200,169,107,0.25)' }} />
      <div className="absolute top-28 right-8 w-20 h-20 hidden md:block"
        style={{ borderRight: '1px solid rgba(200,169,107,0.25)', borderTop: '1px solid rgba(200,169,107,0.25)' }} />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
        style={{ ...anim(1.4) }}>
        <div className="h-16 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(200,169,107,0.5))' }} />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.5)', writingMode: 'vertical-rl' }}>
          Kovu Afrika · CSR Foundation
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">

        <div className="flex items-center gap-4 mb-8" style={anim(0.3)}>
          <div className="h-px w-10" style={{ background: '#C8A96B' }} />
          <span className="section-label">The CSR Foundation of VistaVoyage Travel Group</span>
        </div>

        <div className="mb-10 overflow-hidden">
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 3.8rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: '0 0.5em',
            ...anim(0.5),
          }}>
            <span>Healing <span style={{ fontStyle: 'italic' }}>Landscapes.</span></span>
            <span className="gold-text">Empowering Lives.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
          <div className="max-w-lg" style={anim(0.85)}>
            <div className="h-px w-12 mb-6" style={{ background: 'rgba(200,169,107,0.4)' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
              Through conservation, community empowerment, and regenerative travel,
              every VistaVoyage journey leaves Africa measurably better than we found it.
            </p>
          </div>
          <div className="flex flex-wrap gap-4" style={anim(1.0)}>
            <button className="btn-gold"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Impact
            </button>
            <button className="btn-outline-white"
              onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}>
              Partner With Us
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" style={anim(1.2)}>
          {stats.map((s, i) => (
            <div key={i} className="hover-lift rounded-2xl p-5 md:p-6 group cursor-default"
              style={{
                background: 'rgba(6,35,24,0.7)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(200,169,107,0.18)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,107,0.45)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,169,107,0.18)'}>
              <div className="mb-3" style={{ color: 'rgba(200,169,107,0.8)' }}><s.Icon size={22} /></div>
              <div className="gold-text mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-10 flex flex-col items-center gap-3" style={anim(1.6)}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.48rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', writingMode: 'vertical-rl' }}>
          Scroll to explore
        </p>
        <div className="w-px h-14 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="w-full rounded-full" style={{ height: '50%', background: 'linear-gradient(180deg, #C8A96B, transparent)', animation: 'float 2.5s ease-in-out infinite' }} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#FAF7F2"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
