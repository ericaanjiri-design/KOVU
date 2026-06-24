import React, { useEffect, useState } from 'react';
import useInView from './useInView';
import { TreeIcon, GraduationIcon, HomeIcon, ShieldIcon, UserIcon, AccessibilityIcon } from './Icons';

const stats = [
  { value: 12000, suffix: '+', label: 'Trees Planted',          Icon: TreeIcon,          desc: 'Across degraded ecosystems in East Africa' },
  { value: 850,   suffix: '+', label: 'Youth Mentored',         Icon: GraduationIcon,    desc: 'Young African leaders in our network' },
  { value: 40,    suffix: '+', label: 'Communities Supported',  Icon: HomeIcon,          desc: 'Local communities benefiting from tourism' },
  { value: 6,     suffix: '',  label: 'Conservation Projects',  Icon: ShieldIcon,        desc: 'Active wildlife corridor protection projects' },
  { value: 320,   suffix: '+', label: 'Women Empowered',        Icon: UserIcon,          desc: 'Women-led enterprises and cooperatives funded' },
  { value: 15,    suffix: '+', label: 'Accessible Initiatives', Icon: AccessibilityIcon, desc: 'Inclusive tourism infrastructure built' },
];

const Counter = ({ value, suffix, inView }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const steps = 65, dur = 2000, inc = value / steps;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) { setN(value); clearInterval(t); } else setN(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(t);
  }, [inView, value]);
  return <>{n.toLocaleString()}{suffix}</>;
};

const StatCard = ({ s, i, inView }) => {
  const [hovered, setHovered] = useState(false);
  const col = i % 3;
  const row = Math.floor(i / 3);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(2rem,4vw,3.2rem) clamp(1.5rem,3vw,2.5rem)',
        borderRight: col < 2 ? '1px solid rgba(200,169,107,0.1)' : 'none',
        borderBottom: row < 1 ? '1px solid rgba(200,169,107,0.1)' : 'none',
        background: hovered ? 'rgba(200,169,107,0.04)' : 'transparent',
        transition: `opacity 0.75s ease ${i * 0.08 + 0.1}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.08 + 0.1}s, background 0.4s ease`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(35px)',
        cursor: 'default',
      }}
    >
      <div style={{ color: 'rgba(200,169,107,0.55)', marginBottom: '1.4rem', display: 'flex' }}>
        <s.Icon size={20} />
      </div>

      <div className="gold-text" style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.8rem,5vw,4.5rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>
        <Counter value={s.value} suffix={s.suffix} inView={inView} />
      </div>

      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0.7rem 0 0.5rem' }}>
        {s.label}
      </p>

      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.7, margin: 0 }}>
        {s.desc}
      </p>

      <div style={{ marginTop: '1.4rem', height: 1, width: hovered ? '4rem' : '2rem', background: 'linear-gradient(90deg,rgba(200,169,107,0.6),transparent)', transition: 'width 0.5s ease' }} />
    </div>
  );
};

const ImpactNumbers = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="numbers"
      ref={ref}
      style={{
        background: 'linear-gradient(160deg,#061c14 0%,#0a3326 40%,#0d4535 70%,#061c14 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '20%', width: '60vw', height: '60vw', maxWidth: 700, maxHeight: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,169,107,0.07) 0%,transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '10%', width: '40vw', height: '40vw', maxWidth: 500, maxHeight: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,169,107,0.05) 0%,transparent 65%)', filter: 'blur(50px)' }} />
      </div>

      <div className="african-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,6rem)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem,7vw,6rem)', opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '1.2rem' }}>Measurable Change</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(3rem,6vw,6rem)', fontWeight: 300, color: '#fff', lineHeight: 0.92, letterSpacing: '-0.02em', margin: 0 }}>
            Our <em className="gold-text">Impact</em><br />in Numbers
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.8rem' }}>
            <div style={{ height: 1, width: 48, background: 'rgba(200,169,107,0.25)' }} />
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.14em', margin: 0 }}>Every journey. Every booking. Every impact.</p>
            <div style={{ height: 1, width: 48, background: 'rgba(200,169,107,0.25)' }} />
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', maxWidth: 1100, margin: '0 auto' }}>
          {stats.map((s, i) => <StatCard key={i} s={s} i={i} inView={inView} />)}
        </div>

        {/* Quote */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(4rem,7vw,6rem)', opacity: inView ? 1 : 0, transition: 'opacity 1s ease 0.9s' }}>
          <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(200,169,107,0.2),transparent)', marginBottom: 'clamp(2.5rem,4vw,3.5rem)' }} />
          <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.6rem,3vw,2.6rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            "Every journey funds a future."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.4rem' }}>
            <div style={{ height: 1, width: 40, background: 'rgba(200,169,107,0.35)' }} />
            <span className="section-label">Kovu Afrika Promise</span>
            <div style={{ height: 1, width: 40, background: 'rgba(200,169,107,0.35)' }} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactNumbers;
