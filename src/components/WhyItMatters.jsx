import React from 'react';
import useInView from './useInView';
import { GraduationIcon, TreeIcon, UserIcon, ShieldIcon, AccessibilityIcon } from './Icons';

const impacts = [
  { Icon: GraduationIcon, label: 'Youth Mentorship', desc: 'Every booking funds a mentorship session for a young African leader.' },
  { Icon: TreeIcon, label: 'Reforestation', desc: 'Each journey plants trees in degraded ecosystems across East Africa.' },
  { Icon: UserIcon, label: 'Women Empowerment', desc: 'A portion of every safari funds women-led enterprises and cooperatives.' },
  { Icon: ShieldIcon, label: 'Conservation', desc: 'Wildlife corridor protection funded directly through tourism revenue.' },
  { Icon: AccessibilityIcon, label: 'Inclusive Tourism', desc: 'Building accessible infrastructure so no one is left behind.' },
];

const WhyItMatters = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="why" className="relative overflow-hidden" style={{ background: '#080808' }}>

      {/* Deep jungle ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(11,61,46,0.35) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)' }} />

      {/* Top curve */}
      <div className="w-full overflow-hidden" style={{ marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,0 L0,0 Z" fill="#FAF7F2"/>
        </svg>
      </div>

      <div className="py-24 md:py-36" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Big cinematic quote */}
          <div className="text-center mb-24 relative"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(50px)', transition: 'all 1.1s cubic-bezier(0.22,1,0.36,1)' }}>
            {/* Decorative quote mark */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18rem', fontWeight: 300, color: 'rgba(200,169,107,0.04)', lineHeight: 1 }}>
              "
            </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, color: 'white', lineHeight: 1.1, maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
              Travel should leave places{' '}
              <em className="gold-text">better than we found them.</em>
            </h2>
            <div className="flex items-center justify-center gap-5 mt-10">
              <div className="h-px w-20" style={{ background: 'rgba(200,169,107,0.25)' }} />
              <span className="section-label">The VistaVoyage Commitment</span>
              <div className="h-px w-20" style={{ background: 'rgba(200,169,107,0.25)' }} />
            </div>
          </div>

          {/* Story + image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(-40px)', transition: 'all 1s ease 0.3s' }}>
              <div className="h-px w-12 mb-8" style={{ background: 'rgba(200,169,107,0.4)' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                At VistaVoyage, we believe that luxury travel and social responsibility are not opposites —
                they are <em style={{ color: 'rgba(200,169,107,0.8)' }}>inseparable</em>. The most meaningful journeys are those that create ripples
                of positive change long after the traveller has returned home.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                Through Kovu Afrika, every VistaVoyage journey — every safari, every retreat,
                every cultural experience — directly funds initiatives that heal landscapes,
                empower communities, and build Africa's future.
              </p>
              <button className="btn-outline-gold"
                onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}>
                Join the Movement
              </button>
            </div>

            <div className="relative" style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(40px)', transition: 'all 1s ease 0.5s' }}>
              <div className="img-zoom rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=85"
                  alt="African landscape" className="w-full h-full object-cover" />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(6,35,24,0.3) 0%, transparent 60%)' }} />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 hidden lg:block"
                style={{ background: 'linear-gradient(135deg, #0B3D2E, #062318)', border: '1px solid rgba(200,169,107,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <div className="gold-text mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300 }}>100%</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                  Of journeys fund impact
                </p>
              </div>
            </div>
          </div>

          {/* Impact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {impacts.map((item, i) => (
              <div key={i} className="group rounded-2xl p-6 text-center cursor-default transition-all duration-500"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(200,169,107,0.1)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(30px)',
                  transition: `opacity 0.8s ease ${i * 0.1 + 0.7}s, transform 0.8s ease ${i * 0.1 + 0.7}s, background 0.4s ease, border-color 0.4s ease`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(11,61,46,0.3)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.1)'; }}>
                <div className="mb-4 flex justify-center" style={{ color: 'rgba(200,169,107,0.7)' }}><item.Icon size={24} /></div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'white', fontWeight: 400, marginBottom: '0.5rem' }}>
                  {item.label}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
                <div className="mt-4 h-px w-6 mx-auto group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, #C8A96B, transparent)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
