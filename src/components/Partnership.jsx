import React from 'react';
import useInView from './useInView';
import { HandshakeIcon, HeartIcon, RocketIcon } from './Icons';

const options = [
  {
    Icon: HandshakeIcon,
    title: 'Partner With Us',
    desc: 'Align your brand with Africa\'s most purposeful travel movement. Co-create impact at scale across communities and landscapes.',
    cta: 'Become a Partner',
    featured: true,
  },
  {
    Icon: HeartIcon,
    title: 'Support Kovu Afrika',
    desc: 'Fund conservation, youth mentorship, and women empowerment initiatives directly. Every contribution creates lasting change.',
    cta: 'Support Now',
    featured: false,
  },
  {
    Icon: RocketIcon,
    title: 'Start an Initiative',
    desc: 'Have an idea that aligns with our mission? Let\'s build it together across Africa\'s most impactful communities.',
    cta: 'Start an Initiative',
    featured: false,
  },
];

const Partnership = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="partnership" className="relative overflow-hidden noise"
      style={{ background: 'linear-gradient(160deg, #062318 0%, #0B3D2E 40%, #0d4d39 70%, #062318 100%)' }}>

      {/* Animated gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(200,169,107,0.1) 0%, transparent 70%)',
          animation: 'pulseGold 5s ease-in-out infinite',
        }} />

      {/* Pattern */}
      <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />

      {/* Corner brackets */}
      {[
        'top-8 left-8 border-l-2 border-t-2',
        'top-8 right-8 border-r-2 border-t-2',
        'bottom-8 left-8 border-l-2 border-b-2',
        'bottom-8 right-8 border-r-2 border-b-2',
      ].map((c, i) => (
        <div key={i} className={`absolute w-14 h-14 ${c} hidden md:block`}
          style={{ borderColor: 'rgba(200,169,107,0.2)' }} />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 relative z-10" ref={ref}>


        {/* Header */}
        <div className="text-center mb-20"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.9s ease' }}>
          <span className="section-label block mb-5">Join the Movement</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 300, color: 'white', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Become Part of<br />
            <em className="gold-text">the Legacy</em>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.875rem,1.2vw,1rem)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, maxWidth: '500px', margin: '0 auto' }}>
            The most powerful journeys are those taken together. Join VistaVoyage in building
            an Africa that thrives — for travellers, communities, and wildlife alike.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {options.map((o, i) => (
            <div key={i} className="group rounded-3xl p-10 text-center relative overflow-hidden cursor-default"
              style={{
                background: o.featured
                  ? 'linear-gradient(145deg, rgba(200,169,107,0.12), rgba(200,169,107,0.05))'
                  : 'rgba(255,255,255,0.04)',
                border: o.featured
                  ? '1px solid rgba(200,169,107,0.4)'
                  : '1px solid rgba(200,169,107,0.15)',
                boxShadow: o.featured
                  ? '0 0 60px rgba(200,169,107,0.1), inset 0 0 40px rgba(200,169,107,0.03)'
                  : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(50px)',
                transition: `opacity 0.9s ease ${i * 0.15 + 0.2}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.15 + 0.2}s, box-shadow 0.5s ease`,
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.3), 0 0 60px rgba(200,169,107,0.12)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = o.featured ? '0 0 60px rgba(200,169,107,0.1), inset 0 0 40px rgba(200,169,107,0.03)' : 'none'}>

              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: o.featured ? 'linear-gradient(90deg, transparent, #C8A96B, transparent)' : 'transparent' }} />

              {o.featured && (
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full"
                  style={{ background: 'rgba(200,169,107,0.15)', border: '1px solid rgba(200,169,107,0.3)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A96B' }}>
                    Featured
                  </span>
                </div>
              )}

              <div className="flex justify-center mb-6" style={{ color: 'rgba(200,169,107,0.8)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: o.featured ? 'rgba(200,169,107,0.15)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(200,169,107,0.2)' }}>
                  <o.Icon size={26} />
                </div>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: 'white', marginBottom: '1rem' }}>
                {o.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {o.desc}
              </p>
              <button className={o.featured ? 'btn-gold' : 'btn-outline-gold'}>
                {o.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom motto */}
        <div className="text-center"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s ease 0.9s' }}>
          <div className="flex items-center justify-center gap-5">
            <div className="h-px w-16" style={{ background: 'rgba(200,169,107,0.2)' }} />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
              "Navigating Dreams, Endless Vistas"
            </p>
            <div className="h-px w-16" style={{ background: 'rgba(200,169,107,0.2)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
