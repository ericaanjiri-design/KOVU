import React, { useState } from 'react';
import useInView from './useInView';

const ecosystems = [
  {
    id: 'jamii', swahili: 'Jamii Stawi', title: 'Social Inclusion',
    subtitle: 'Community Well-being & Inclusive Livelihoods',
    desc: 'Strengthening communities within tourism ecosystems through education, health equity, economic empowerment, and dignified opportunities for all.',
    tags: ['Education', 'Women Empowerment', 'Sanitary Initiatives', 'Local Livelihoods', 'Cultural Preservation'],
    img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=900&q=85',
    number: '01',
  },
  {
    id: 'uhifadhi', swahili: 'Uhifadhi Action', title: 'Climate Resilience',
    subtitle: 'Conservation & Climate Futures',
    desc: 'Protecting Africa\'s ecosystems through community-driven conservation, regenerative tourism, and climate innovation that secures biodiversity for generations.',
    tags: ['Reforestation', 'Biodiversity', 'Eco-Tourism', 'Wildlife Protection', 'Climate Innovation'],
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=85',
    number: '02',
  },
  {
    id: 'mvuto', swahili: 'Mvuto Network', title: 'Mentorship',
    subtitle: 'Leadership & African Futures',
    desc: 'Nurturing Africa\'s next generation of ethical leaders, conservationists, tourism innovators, creatives, and entrepreneurs through structured mentorship.',
    tags: ['Mentorship', 'Innovation', 'Leadership', 'Entrepreneurship', 'Youth Empowerment'],
    img: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=85',
    number: '03',
  },
];

const ImpactEcosystems = () => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="impact" className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#FAF7F2' }}>
      <div className="absolute inset-0 african-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>

        <div className="grid md:grid-cols-2 gap-8 items-end mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.9s ease' }}>
          <div>
            <span className="section-label block mb-4">Our Three Pillars</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 300, color: '#0B3D2E', lineHeight: 0.95 }}>
              Impact<br /><em className="gold-text">Ecosystem</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(11,61,46,0.55)', lineHeight: 1.8, maxWidth: '400px', marginLeft: 'auto' }}>
            Three interconnected frameworks driving measurable change across Africa's communities, landscapes, and futures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ecosystems.map((e, i) => (
            <div key={e.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-3xl overflow-hidden cursor-default"
              style={{
                height: '640px',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(60px)',
                transition: `opacity 0.9s ease ${i * 0.15 + 0.2}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.15 + 0.2}s, box-shadow 0.6s ease`,
                boxShadow: hovered === i ? '0 60px 120px rgba(6,35,24,0.5), 0 0 0 1px rgba(200,169,107,0.3)' : '0 20px 60px rgba(6,35,24,0.15)',
              }}>

              <div className="absolute inset-0">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover"
                  style={{ transform: hovered === i ? 'scale(1.1)' : 'scale(1.02)', transition: 'transform 1.2s cubic-bezier(0.22,1,0.36,1)', filter: hovered === i ? 'brightness(0.5) saturate(0.9)' : 'brightness(0.65) saturate(1)' }} />
              </div>

              <div className="absolute inset-0 transition-all duration-700"
                style={{ background: hovered === i ? 'linear-gradient(to top, rgba(6,35,24,0.98) 0%, rgba(6,35,24,0.75) 45%, rgba(6,35,24,0.2) 100%)' : 'linear-gradient(to top, rgba(6,35,24,0.95) 0%, rgba(6,35,24,0.5) 55%, rgba(6,35,24,0.1) 100%)' }} />

              <div className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, #C8A96B, transparent)', opacity: hovered === i ? 1 : 0 }} />

              <div className="absolute top-6 right-6"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem', fontWeight: 300, color: 'rgba(200,169,107,0.12)', lineHeight: 1, transition: 'opacity 0.5s ease', opacity: hovered === i ? 0 : 1 }}>
                {e.number}
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="section-label block mb-2">{e.swahili}</span>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 300, color: 'white', lineHeight: 1.1, marginBottom: '0.4rem' }}>
                  {e.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {e.subtitle}
                </p>
                <div style={{ maxHeight: hovered === i ? '120px' : '0', overflow: 'hidden', opacity: hovered === i ? 1 : 0, transition: 'max-height 0.6s ease, opacity 0.5s ease', marginBottom: hovered === i ? '1.25rem' : '0' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>{e.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t, j) => (
                    <span key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '0.35rem 0.85rem', borderRadius: '100px', background: hovered === i ? 'rgba(200,169,107,0.15)' : 'rgba(255,255,255,0.06)', border: `1px solid ${hovered === i ? 'rgba(200,169,107,0.4)' : 'rgba(255,255,255,0.1)'}`, color: hovered === i ? '#C8A96B' : 'rgba(255,255,255,0.4)', transition: 'all 0.4s ease' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactEcosystems;
