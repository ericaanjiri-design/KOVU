import React from 'react';

const Icon = ({ d, size = 22, stroke = 'currentColor', fill = 'none', strokeWidth = 1.5, viewBox = '0 0 24 24', style = {}, className = '' }) => (
  <svg width={size} height={size} viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    {Array.isArray(d) ? d.map((path, i) => <path key={i} d={path} />) : <path d={d} />}
  </svg>
);

// ── Nature & Environment ──
export const TreeIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M12 22V12','M12 12C12 12 7 9 7 5a5 5 0 0110 0c0 4-5 7-5 7z','M9 17c-2 1-4 2-4 4h14c0-2-2-3-4-4']} />
);

export const LeafIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d="M11 20A7 7 0 0118 13c0-5-4-9-9-9a9 9 0 000 18c1.5 0 3-.4 4.3-1.1M11 20c0-4.4 3.6-8 8-8" />
);

export const GlobeIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M12 2a10 10 0 100 20A10 10 0 0012 2z','M2 12h20','M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z']} />
);

export const RecycleIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M7 19H4.815a1.83 1.83 0 01-1.57-2.763L7.196 9.5','M11 19h8.203a1.83 1.83 0 001.556-2.769l-6.21-10.56A1.83 1.83 0 0012.977 5h-.954a1.83 1.83 0 00-1.581.91l-2.114 3.6','M5 5l2 2-2 2']} />
);

export const SunIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M12 17a5 5 0 100-10 5 5 0 000 10z','M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42']} />
);

// ── People & Community ──
export const UsersIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2','M9 11a4 4 0 100-8 4 4 0 000 8z','M23 21v-2a4 4 0 00-3-3.87','M16 3.13a4 4 0 010 7.75']} />
);

export const UserIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2','M12 11a4 4 0 100-8 4 4 0 000 8z']} />
);

export const HeartIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
);

export const HandshakeIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l1.06 1.06L12 21.23l7.77-7.77 1.06-1.06a5.4 5.4 0 000-7.65v-.03z']} />
);

export const HandsIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0','M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2','M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8','M6 14v0a6 6 0 006 6h2a6 6 0 006-6v-5a2 2 0 00-2-2v0a2 2 0 00-2 2v1']} />
);

// ── Education & Growth ──
export const GraduationIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M22 10v6M2 10l10-5 10 5-10 5z','M6 12v5c3 3 9 3 12 0v-5']} />
);

export const StarIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
);

export const RocketIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z','M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z','M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0','M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5']} />
);

export const LightbulbIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M9 21h6','M12 3a6 6 0 016 6c0 2.22-1.2 4.16-3 5.2V17a1 1 0 01-1 1H10a1 1 0 01-1-1v-2.8A6 6 0 0112 3z']} />
);

// ── Health & Wellness ──
export const WindIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2']} />
);

export const ActivityIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d="M22 12h-4l-3 9L9 3l-3 9H2" />
);

export const BrainIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M9.5 2A2.5 2.5 0 017 4.5v0A2.5 2.5 0 014.5 7v0A2.5 2.5 0 012 9.5v5A2.5 2.5 0 004.5 17v0A2.5 2.5 0 007 19.5v0A2.5 2.5 0 009.5 22h5a2.5 2.5 0 002.5-2.5v0a2.5 2.5 0 002.5-2.5v0a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0019.5 7v0A2.5 2.5 0 0017 4.5v0A2.5 2.5 0 0014.5 2h-5z','M12 6v12','M6 12h12']} />
);

export const MoonIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
);

// ── Location & Contact ──
export const MapPinIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z','M12 10a2 2 0 100-4 2 2 0 000 4z']} />
);

export const WebIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M12 2a10 10 0 100 20A10 10 0 0012 2z','M2 12h20','M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z']} />
);

export const CameraIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z','M12 17a4 4 0 100-8 4 4 0 000 8z']} />
);

// ── Accessibility & Inclusion ──
export const AccessibilityIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M16 4a1 1 0 100-2 1 1 0 000 2z','M12 9h4l-1 5-3 3-1 4','M8 9l4 0','M9 14l-2 7']} />
);

export const ShieldIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
);

// ── Misc ──
export const HomeIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z','M9 22V12h6v10']} />
);

export const ArrowUpIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M12 19V5','M5 12l7-7 7 7']} />
);

export const SparkleIcon = ({ size, style, className }) => (
  <Icon size={size} style={style} className={className}
    d={['M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z','M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z','M5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75z']} />
);

export default Icon;
