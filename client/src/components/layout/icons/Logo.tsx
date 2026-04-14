import React from "react";

const MindFlowLogo = ({
  width = 440,
  height = 130,
  className = "",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 440 130"
      width={width}
      height={height}
      className={className}
      style={style}
      aria-label="MindFlow - Productivity Apps"
      role="img"
    >
      <defs>
        {/* Icon gradient: Purple → Cyan */}
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Wordmark gradient */}
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#3730A3" />
        </linearGradient>

        {/* Glow shadow on icon */}
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="12"
            floodColor="#7C3AED"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      {/* ░░ ICON MARK ░░ */}

      {/* Rounded square background */}
      <rect
        x="15"
        y="15"
        width="100"
        height="100"
        rx="24"
        fill="url(#iconGrad)"
        filter="url(#glow)"
      />

      {/* Top glass highlight for depth */}
      <rect
        x="15"
        y="15"
        width="100"
        height="52"
        rx="24"
        fill="white"
        opacity="0.09"
      />

      {/* Lightning bolt (productivity / energy symbol) */}
      <path
        d="M72,30 L44,68 L63,68 L56,100 L86,62 L67,62 Z"
        fill="white"
        opacity="0.97"
      />

      {/* ░░ WORDMARK ░░ */}

      {/* App name */}
      <text
        x="138"
        y="77"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="47"
        letterSpacing="-1.5"
        fill="url(#textGrad)"
      >
        MindFlow
      </text>

      {/* Accent line under tagline */}
      <rect
        x="140"
        y="106"
        width="40"
        height="2.5"
        rx="2"
        fill="url(#iconGrad)"
        opacity="0.8"
      />

      {/* Tagline */}
      <text
        x="140"
        y="101"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize="11.5"
        letterSpacing="5"
        fill="#7C3AED"
        opacity="0.85"
      >
        PRODUCTIVITY APPS
      </text>
    </svg>
  );
};

export default MindFlowLogo;
