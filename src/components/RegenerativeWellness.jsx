import React from 'react';
import useInView from './useInView';

const offerings = [
  { title: 'Breathwork Retreats', desc: 'Guided breathwork in Africa\'s most sacred landscapes, reconnecting breath with earth.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85', tall: true },
  { title: 'Somatic Healing', desc: 'Body-centred healing journeys that release stored tension through movement and nature.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85', tall: false },
  { title: 'Digital Detox Safaris', desc: 'Immersive wilderness experiences designed to restore presence and mental clarity.', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=85', tall: false },
  { title: 'Nature Healing', desc: 'Ecotherapy walks, forest bathing, and sunrise meditations in pristine African wilderness.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=85', tall: true },
  { title: 'Mental Restoration', desc: 'Structured rest, silence, and reflection programmes for burnout recovery and renewal.', img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=85', tall: false },
  { title: 'Wellness Safaris', desc: 'Luxury safari experiences woven with daily wellness rituals, spa, and holistic therapies.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85', tall: false },
];

const WellnessCard = ({ o, i, inView }) => (
  <div className="relative rounded-3xl overflow-hidden group cursor-default"
    style={{
      height: o.tall ? '480px' : '220px',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(40px)',
      transition: `opacity 0.8s ease ${i * 0.1 + 0.2}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.2}s, box-shadow 0.5s ease`,
      boxShadow: '0 10px 40px rgba(6,35,24,0.12)',
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 40px 80px rgba(6,35,24,0.25)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 10px 40px rgba(6,35,24,0.12)'}>

    {/* Image */}
    <img src={o.img} alt={o.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      style={{ filter: 'brightness(0.7) saturate(0.9)' }} />

    {/* Gradient */}
    <div className="absolute inset-0 transition-all duration-500"
      style={{ background: 'linear-gradient(to top, rgba(6,35,24,0.92) 0%, rgba(6,35,24,0.3) 60%, transparent 100%)' }} />

    {/* Gold top accent on hover */}
    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'linear-gradient(90deg, transparent, #C8A96B, transparent)' }} />

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: o.tall ? '1.8rem' : '1.3rem', fontWeight: 300, color: 'white', lineHeight: 1.2, marginBottom: '0.5rem' }}>
        {o.title}
      </h3>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.7,
        maxHeight: '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease, opacity 0.4s ease',
        opacity: 0,
      }}
        ref={el => {
          if (el) {
            el.parentElement.parentElement.addEventListener('mouseenter', () => {
              el.style.maxHeight = '80px'; el.style.opacity = '1';
            });
            el.parentElement.parentElement.addEventListener('mouseleave', () => {
              el.style.maxHeight = '0'; el.style.opacity = '0';
            });
          }
        }}>
        {o.desc}
      </p>
      <div className="flex items-center gap-2 mt-3">
        <div className="h-px w-5 group-hover:w-10 transition-all duration-500" style={{ background: '#C8A96B' }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.7)' }}>
          Explore
        </span>
      </div>
    </div>
  </div>
);

const RegenerativeWellness = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="wellness" className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: '#FAF7F2' }}>
      <div className="absolute inset-0 african-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.9s ease' }}>
          <div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.6rem,0.7vw,0.85rem)', fontWeight: 700, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C8A96B', display: 'block', marginBottom: 'clamp(1rem,1.5vw,1.8rem)' }}>Wellness &amp; Healing</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem,6vw,8rem)', fontWeight: 300, color: '#0B3D2E', lineHeight: 0.92, letterSpacing: '-0.02em' }}>
              Regenerative<br />
              <em className="gold-text">Wellness Journeys</em>
            </h2>
          </div>
          <div>
            <div className="h-px w-12 mb-6" style={{ background: '#C8A96B' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem,1.05vw,1.2rem)', color: 'rgba(11,61,46,0.55)', lineHeight: 1.85 }}>
              Africa has always been a place of profound healing. We design journeys that restore
              the mind, body, and spirit through the continent's ancient wisdom and breathtaking landscapes.
            </p>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <WellnessCard o={offerings[0]} i={0} inView={inView} />
            <WellnessCard o={offerings[1]} i={1} inView={inView} />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <WellnessCard o={offerings[2]} i={2} inView={inView} />
            <WellnessCard o={offerings[3]} i={3} inView={inView} />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            <WellnessCard o={offerings[4]} i={4} inView={inView} />
            <WellnessCard o={offerings[5]} i={5} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegenerativeWellness;
