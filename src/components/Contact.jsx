import React from 'react';
import useInView from './useInView';
import { MapPinIcon, WebIcon, CameraIcon } from './Icons';

const contactItems = [
  { Icon: MapPinIcon, label: 'Address', value: 'Applewood Adams, Ngong Road\nNairobi — 9th Floor, Office 904B' },
  { Icon: WebIcon, label: 'Website', value: 'vistavoyagetravel.group' },
  { Icon: CameraIcon, label: 'Instagram', value: '@VistaVoyage' },
];

const Contact = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: '#FAF7F2' }}>
      <div className="absolute inset-0 african-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.9s ease' }}>
          <span className="section-label block mb-4">Get In Touch</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 300, color: '#0B3D2E', lineHeight: 0.95 }}>
            Let's Build <em className="gold-text">Africa's Future</em> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left info panel */}
          <div className="lg:col-span-2 rounded-3xl p-10 relative overflow-hidden noise"
            style={{
              background: 'linear-gradient(145deg, #062318 0%, #0B3D2E 60%, #0d4d39 100%)',
              border: '1px solid rgba(200,169,107,0.15)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(-40px)',
              transition: 'all 1s cubic-bezier(0.22,1,0.36,1)',
            }}>

            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #C8A96B, transparent)' }} />

            <div className="absolute inset-0 african-pattern opacity-15 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-10">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: 'white', marginBottom: '0.5rem' }}>
                  Kovu Afrika
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.6)' }}>
                  VistaVoyage CSR Foundation
                </p>
              </div>

              <div className="space-y-8 mb-10">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.2)', color: '#C8A96B' }}>
                      <item.Icon size={16} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A96B', marginBottom: '0.35rem' }}>
                        {item.label}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Motto */}
              <div className="rounded-2xl p-5"
                style={{ background: 'rgba(200,169,107,0.06)', border: '1px solid rgba(200,169,107,0.15)' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                  "Navigating Dreams, Endless Vistas"
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="h-px w-5" style={{ background: '#C8A96B' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(200,169,107,0.6)' }}>
                    VistaVoyage Travel Group
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 rounded-3xl p-10"
            style={{
              background: 'white',
              border: '1px solid rgba(200,169,107,0.12)',
              boxShadow: '0 20px 80px rgba(11,61,46,0.08)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(40px)',
              transition: 'all 1s cubic-bezier(0.22,1,0.36,1) 0.2s',
            }}>

            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: '#0B3D2E', marginBottom: '0.5rem' }}>
              Send Us a Message
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(11,61,46,0.45)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Whether you want to partner, donate, or start an initiative — we'd love to hear from you.
            </p>

            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A96B', marginBottom: '0.5rem' }}>
                      {f.label}
                    </label>
                    <input type={f.type} placeholder={f.placeholder}
                      style={{
                        width: '100%', padding: '0.9rem 1.25rem',
                        borderRadius: '0.75rem',
                        background: '#FAF7F2',
                        border: '1px solid rgba(200,169,107,0.2)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        color: '#0B3D2E',
                        outline: 'none',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      }}
                      onFocus={e => { e.target.style.borderColor = '#C8A96B'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(200,169,107,0.2)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A96B', marginBottom: '0.5rem' }}>
                  Organisation
                </label>
                <input type="text" placeholder="Your organisation (optional)"
                  style={{
                    width: '100%', padding: '0.9rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: '#FAF7F2',
                    border: '1px solid rgba(200,169,107,0.2)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#0B3D2E',
                    outline: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#C8A96B'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(200,169,107,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A96B', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea rows={5} placeholder="Tell us about your interest in Kovu Afrika..."
                  style={{
                    width: '100%', padding: '0.9rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: '#FAF7F2',
                    border: '1px solid rgba(200,169,107,0.2)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#0B3D2E',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#C8A96B'; e.target.style.boxShadow = '0 0 0 3px rgba(200,169,107,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(200,169,107,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <button type="submit" className="btn-gold w-full" style={{ textAlign: 'center' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
