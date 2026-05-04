export const DiagonalPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" preserveAspectRatio="none">
    <defs>
      <pattern id="diagonal" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="40" y2="40" stroke="#32486C" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#diagonal)"/>
  </svg>
)

export const DotsPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-3 pointer-events-none" preserveAspectRatio="none">
    <defs>
      <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="2" fill="#D1A649"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)"/>
  </svg>
)

export const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-3 pointer-events-none" preserveAspectRatio="none">
    <defs>
      <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#32486C" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
  </svg>
)

export const GoldenDivider = () => (
  <svg className="w-full h-auto" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#D1A649', stopOpacity: 0 }} />
        <stop offset="50%" style={{ stopColor: '#D1A649', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D1A649', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <line x1="0" y1="30" x2="1200" y2="30" stroke="url(#goldenGradient)" strokeWidth="2"/>
  </svg>
)

export const LogoAnimated = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={`animate-float ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .logo-letter {
        fill: #D1A649;
        transition: all 0.3s ease;
      }
      .logo-letter:hover {
        filter: drop-shadow(0 0 10px #D1A649);
      }
    `}</style>
    
    {/* B with vertical lines */}
    <g className="logo-letter">
      <path d="M 40 40 L 40 160 M 40 40 L 80 40 Q 90 40 90 50 L 90 90 Q 90 100 80 100 L 40 100 M 40 100 L 85 100 Q 100 100 100 115 L 100 150 Q 100 160 85 160 L 40 160" stroke="#D1A649" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Vertical decorative lines on B */}
      <line x1="52" y1="40" x2="52" y2="160" stroke="#D1A649" strokeWidth="1" opacity="0.6"/>
      <line x1="64" y1="40" x2="64" y2="160" stroke="#D1A649" strokeWidth="1" opacity="0.4"/>
    </g>

    {/* Balance symbol */}
    <g opacity="0.8">
      <circle cx="140" cy="100" r="40" stroke="#D1A649" strokeWidth="2" fill="none"/>
      <circle cx="140" cy="100" r="3" fill="#D1A649"/>
      <line x1="105" y1="100" x2="175" y2="100" stroke="#D1A649" strokeWidth="2"/>
    </g>
  </svg>
)
