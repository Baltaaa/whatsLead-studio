import React from 'react';

export const FaroIcon = ({ size = 100, color = "white", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Cuerpo del Faro (Proporciones mejoradas) */}
    <path 
      d="M30 85 L 38 35 H 62 L 70 85" 
      stroke={color} 
      strokeWidth="6" 
      strokeLinejoin="round"
    />
    
    {/* Estructura de la linterna */}
    <path d="M35 35 H 65 M 38 22 H 62" stroke={color} strokeWidth="6" />
    
    {/* Cúpula superior */}
    <path 
      d="M40 22 C 40 8, 60 8, 60 22" 
      stroke={color} 
      strokeWidth="6" 
      fill="none" 
    />

    {/* Haz de luz dual (Simétrico) */}
    <path 
      d="M72 25 L 90 18 M 72 40 L 90 48" 
      stroke={color} 
      strokeWidth="5" 
      strokeLinecap="round" 
    />
    <path 
      d="M28 25 L 10 18 M 28 40 L 10 48" 
      stroke={color} 
      strokeWidth="5" 
      strokeLinecap="round" 
    />
  </svg>
);