import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = Math.min(p + Math.random() * 14 + 2, 100);
        if (next >= 100) clearInterval(interval);
        return next;
      });
    }, 100);
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #062318 0%, #0B3D2E 50%, #062318 100%)' }}>

      {/* Radial ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,107,0.1) 0%, transparent 70%)' }} />

      {/* Rotating ring */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(200,169,107,0.06)',
          animation: 'rotateSlow 20s linear infinite',
        }} />
      <div className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(200,169,107,0.04)',
          animation: 'rotateSlow 14s linear infinite reverse',
        }} />

      {/* Corner brackets */}
      {[
        'top-6 left-6 border-l-2 border-t-2',
        'top-6 right-6 border-r-2 border-t-2',
        'bottom-6 left-6 border-l-2 border-b-2',
        'bottom-6 right-6 border-r-2 border-b-2',
      ].map((c, i) => (
        <div key={i} className={`absolute w-10 h-10 ${c}`}
          style={{ borderColor: 'rgba(200,169,107,0.25)', transition: `opacity 0.5s ease ${i*0.1}s`, opacity: phase >= 1 ? 1 : 0 }} />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center" style={{ gap: '2rem' }}>

        {/* Emblem */}
        <div style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'scale(1)' : 'scale(0.8)', transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)' }}>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full"
              style={{ border: '1px solid rgba(200,169,107,0.35)', boxShadow: '0 0 60px rgba(200,169,107,0.15), inset 0 0 30px rgba(200,169,107,0.05)' }} />
            <div className="absolute w-14 h-14 rounded-full"
              style={{ border: '1px solid rgba(200,169,107,0.15)' }} />
            <div className="w-5 h-5 rounded-full"
              style={{ background: 'radial-gradient(circle, #e8d4a8 0%, #C8A96B 60%, #a8894f 100%)', boxShadow: '0 0 20px rgba(200,169,107,0.6)' }} />
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center" style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.9s ease 0.2s' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'white', letterSpacing: '0.08em', lineHeight: 1 }}>
            Kovu Afrika
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-8" style={{ background: 'rgba(200,169,107,0.5)' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.7)' }}>
              Healing Landscapes · Empowering Lives
            </p>
            <div className="h-px w-8" style={{ background: 'rgba(200,169,107,0.5)' }} />
          </div>
        </div>

        {/* Progress */}
        <div style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 0.6s ease', width: '200px' }}>
          <div className="w-full h-px rounded-full overflow-hidden mb-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all duration-200"
              style={{ width: `${Math.min(progress, 100)}%`, background: 'linear-gradient(90deg, #a8894f, #C8A96B, #e8d4a8)' }} />
          </div>
          <div className="flex justify-between items-center">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
              VistaVoyage CSR
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', color: 'rgba(200,169,107,0.6)' }}>
              {Math.round(Math.min(progress, 100))}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
