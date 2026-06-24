import React, { useState } from 'react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Impact', id: 'impact' },
  { label: 'Conservation', id: 'numbers' },
  { label: 'Wellness', id: 'wellness' },
  { label: 'Inclusion', id: 'inclusion' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = ({ scrollY }) => {
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 80;

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700"
      style={{
        background: scrolled
          ? 'rgba(6,35,24,0.96)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,107,0.12)' : 'none',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.3)' : 'none',
      }}>

      {/* Gold progress line */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 h-px"
          style={{
            width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
            background: 'linear-gradient(90deg, #C8A96B, #e8d4a8)',
            transition: 'width 0.1s linear',
          }} />
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button className="flex flex-col items-start gap-0.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color: 'white', letterSpacing: '0.06em', lineHeight: 1 }}>
            Kovu Afrika
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.48rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.7)' }}>
            VistaVoyage · CSR Foundation
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="relative px-4 py-2 group"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: '#C8A96B' }} />
            </button>
          ))}
          <div className="w-px h-5 mx-3" style={{ background: 'rgba(200,169,107,0.2)' }} />
          <button onClick={() => scrollTo('partnership')} className="btn-gold"
            style={{ padding: '0.7rem 1.8rem', fontSize: '0.55rem' }}>
            Partner With Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}>
          {[0, 1, 2].map(i => (
            <span key={i} className="block rounded-full transition-all duration-300"
              style={{
                width: i === 1 ? (open ? '0' : '20px') : '24px',
                height: '1.5px',
                background: 'white',
                opacity: i === 1 && open ? 0 : 1,
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'none'
                  : 'none',
              }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? '500px' : '0',
          background: 'rgba(6,35,24,0.98)',
          backdropFilter: 'blur(24px)',
          borderTop: open ? '1px solid rgba(200,169,107,0.1)' : 'none',
        }}>
        <div className="flex flex-col items-center gap-5 py-10 px-6">
          {links.map((l, i) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.6rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8A96B'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              {l.label}
            </button>
          ))}
          <div className="h-px w-16 my-2" style={{ background: 'rgba(200,169,107,0.2)' }} />
          <button onClick={() => scrollTo('partnership')} className="btn-gold">
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
