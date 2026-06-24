import React from 'react';
import useInView from './useInView';
import { LeafIcon, ShieldIcon, StarIcon, HomeIcon, RecycleIcon, GlobeIcon } from './Icons';

const pillars = [
  { Icon: LeafIcon, title: 'Sustainable Tourism', desc: 'Journeys that protect ecosystems and fund conservation at every touchpoint.' },
  { Icon: ShieldIcon, title: 'Conservation', desc: 'Protecting Africa\'s wildlife corridors and biodiversity with communities.' },
  { Icon: StarIcon, title: 'Youth Empowerment', desc: 'Investing in Africa\'s next generation through mentorship and opportunity.' },
  { Icon: HomeIcon, title: 'Community Resilience', desc: 'Strengthening local economies so tourism creates lasting dignity.' },
  { Icon: RecycleIcon, title: 'Regenerative Travel', desc: 'Leaving destinations measurably better than we found them.' },
];

const AboutKovu = () => {
  const [ref, inView] = useInView(0.1);

  const fade = (delay = 0, dir = 'up') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : dir === 'left' ? 'translateX(-50px)' : dir === 'right' ? 'translateX(50px)' : 'translateY(40px)',
    transition: `opacity 1s ease ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-0" ref={ref}>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20" style={fade(0)}>
          <div>
            <span className="section-label block mb-4">Our Foundation</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 300, color: '#0B3D2E', lineHeight: 0.95 }}>
              Kovu<br /><em className="gold-text">Afrika</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(11,61,46,0.55)', lineHeight: 1.8, maxWidth: '420px' }}>
            Meaning <em>"The Scar"</em> or <em>"The Mark"</em> in Swahili — a commitment to leaving
            a positive, healing mark on the African continent.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-0">
          <div className="lg:col-span-5 flex flex-col justify-center" style={fade(0.2, 'left')}>
            <div className="h-px w-12 mb-8" style={{ background: '#C8A96B' }} />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: '#0B3D2E', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Healing Landscapes, Empowering Lives"
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(11,61,46,0.6)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Every scar tells a story of survival, resilience, and transformation.
              Kovu Afrika is our story — a continent healing through intentional,
              purposeful travel that gives back more than it takes.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(11,61,46,0.6)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Through sustainable tourism, conservation, youth empowerment, and
              regenerative travel, we are building an Africa that thrives for
              generations to come.
            </p>
            <button className="btn-gold self-start"
              onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}>
              See Our Impact
            </button>
          </div>

          <div className="lg:col-span-4 relative" style={fade(0.35)}>
            <div className="img-zoom rounded-3xl overflow-hidden" style={{ height: '580px' }}>
              <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=85"
                alt="African community" className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(6,35,24,0.5) 0%, transparent 50%)' }} />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl p-6 hidden lg:block"
              style={{ background: 'linear-gradient(135deg, #0B3D2E, #062318)', border: '1px solid rgba(200,169,107,0.2)', maxWidth: '260px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "Travel should leave places better than we found them."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="h-px w-5" style={{ background: '#C8A96B' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A96B' }}>
                  VistaVoyage Ethos
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4" style={fade(0.5, 'right')}>
            <div className="img-zoom rounded-2xl overflow-hidden flex-1" style={{ minHeight: '260px' }}>
              <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80"
                alt="African landscape" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl p-6 flex-1"
              style={{ background: 'linear-gradient(135deg, #0B3D2E, #0d4d39)', border: '1px solid rgba(200,169,107,0.15)', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ color: 'rgba(200,169,107,0.8)', marginBottom: '1rem' }}><GlobeIcon size={32} /></div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'white', fontWeight: 300, lineHeight: 1.4 }}>
                Regenerative travel for a thriving Africa
              </p>
              <div className="h-px mt-4" style={{ background: 'linear-gradient(90deg, #C8A96B, transparent)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #062318 0%, #0B3D2E 50%, #062318 100%)' }}>
        <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="group cursor-default p-6 rounded-2xl transition-all duration-500"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(200,169,107,0.1)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(30px)',
                  transition: `opacity 0.8s ease ${i * 0.1 + 0.6}s, transform 0.8s ease ${i * 0.1 + 0.6}s, background 0.4s ease, border-color 0.4s ease`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,169,107,0.07)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(200,169,107,0.1)'; }}>
                <div className="mb-4" style={{ color: 'rgba(200,169,107,0.8)' }}><p.Icon size={24} /></div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: 'white', fontWeight: 400, marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
                <div className="mt-4 h-px w-6 group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #C8A96B, transparent)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKovu;
