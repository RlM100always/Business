import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const accentColor = variant === 'light' ? '#60A5FA' : '#2563EB';

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={sizeClasses[size]} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer triangle */}
        <path 
          d="M20 2L36 34H4L20 2Z" 
          fill={accentColor}
          fillOpacity="0.1"
          stroke={accentColor}
          strokeWidth="1.5"
        />
        {/* Inner geometric pattern */}
        <path 
          d="M20 8L30 26H10L20 8Z" 
          fill={accentColor}
          fillOpacity="0.8"
        />
        {/* Circuit-like lines */}
        <path 
          d="M20 14L24 20H16L20 14Z" 
          fill="white"
          fillOpacity="0.9"
        />
        {/* Tech dots */}
        <circle cx="15" cy="22" r="1.5" fill={accentColor} />
        <circle cx="25" cy="22" r="1.5" fill={accentColor} />
        <circle cx="20" cy="28" r="1.5" fill={accentColor} />
      </svg>
      <div className="ml-3">
        <span className={`text-xl font-bold ${accentColor}`}>Trivance</span>
        <span className="text-xl font-bold" style={{ color: accentColor }}>Tech</span>
      </div>
    </div>
  );
};

export default Logo;