export default function WorkInProgress() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #262A30 0%, #1D2024 55%, #17191C 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        @keyframes figureBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes headTilt {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1.5deg); }
        }
        @keyframes handLeft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(2.5px); }
        }
        @keyframes handRight {
          0%, 100% { transform: translateY(2.5px); }
          50% { transform: translateY(0px); }
        }
        @keyframes screenFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.88; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.8; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      {/* Ambient screen glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "420px",
          height: "420px",
          top: "22%",
          background:
            "radial-gradient(circle, rgba(143,216,232,0.28) 0%, rgba(143,216,232,0.10) 40%, rgba(143,216,232,0) 72%)",
          filter: "blur(6px)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      {/* Central figure */}
      <div
        className="relative"
        style={{ animation: "figureBob 4.4s ease-in-out infinite" }}
      >
        <svg width="240" height="230" viewBox="0 0 240 230" fill="none">
          <defs>
            <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Original skin tone for hands/face/neck */}
            <linearGradient id="clayBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E4DAC5" />
              <stop offset="55%" stopColor="#C9BEA7" />
              <stop offset="100%" stopColor="#A2967D" />
            </linearGradient>

            <linearGradient id="clayLimb" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DED3BC" />
              <stop offset="100%" stopColor="#AFA48C" />
            </linearGradient>

            <radialGradient id="clayHead" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#EEE4CF" />
              <stop offset="60%" stopColor="#CFC3AB" />
              <stop offset="100%" stopColor="#9E9279" />
            </radialGradient>

            {/* New Gradients for the Blue Shirt */}
            <linearGradient
              id="blueShirtBody"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            <linearGradient
              id="blueShirtLimb"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>

            <linearGradient id="desk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C7460" />
              <stop offset="100%" stopColor="#544D3E" />
            </linearGradient>

            <linearGradient
              id="laptopShell"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8A95A5" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          {/* Floor shadow */}
          <ellipse cx="120" cy="216" rx="78" ry="11" fill="url(#floorShadow)" />

          {/* Torso (now a blue shirt, behind the desk) */}
          <path
            d="M92 182 Q88 128 120 118 Q152 128 148 182 Z"
            fill="url(#blueShirtBody)"
          />

          {/* Shirt details (collar and buttons) */}
          <path
            d="M106 120 Q120 135 134 120"
            stroke="#1E3A8A"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="120" cy="140" r="1.5" fill="#1E3A8A" />
          <circle cx="120" cy="155" r="1.5" fill="#1E3A8A" />
          <circle cx="120" cy="170" r="1.5" fill="#1E3A8A" />

          {/* Head, slightly tilted towards the screen */}
          <g
            style={{
              transformOrigin: "120px 96px",
              animation: "headTilt 4.4s ease-in-out infinite",
            }}
          >
            <ellipse cx="120" cy="96" rx="32" ry="30" fill="url(#clayHead)" />
            <path
              d="M107 92 Q112 88 117 92"
              stroke="#8B806B"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
            <path
              d="M124 92 Q129 88 134 92"
              stroke="#8B806B"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
          </g>

          {/* Desk surface */}
          <path
            d="M42 178 Q120 168 198 178 L198 186 Q120 176 42 186 Z"
            fill="url(#desk)"
          />

          {/* Keyboard base */}
          <path d="M96 168 L144 168 L148 180 L92 180 Z" fill="#2A2D31" />

          {/* Left arm with long sleeves (blue shirt limb) */}
          <path
            d="M96 138 Q78 152 90 172"
            stroke="url(#blueShirtLimb)"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right arm with long sleeves (blue shirt limb) */}
          <path
            d="M144 138 Q162 152 150 172"
            stroke="url(#blueShirtLimb)"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />

          {/* Hands (kept with original clayLimb skin tone), animated to simulate typing */}
          <circle
            cx="90"
            cy="172"
            r="7.5"
            fill="url(#clayLimb)"
            style={{
              transformOrigin: "90px 172px",
              animation: "handLeft 0.9s ease-in-out infinite",
            }}
          />
          <circle
            cx="150"
            cy="172"
            r="7.5"
            fill="url(#clayLimb)"
            style={{
              transformOrigin: "150px 172px",
              animation: "handRight 0.9s ease-in-out infinite",
            }}
          />

          {/* Flat laptop lid (back view) rendered LAST to appear on top of everything */}
          <g>
            {/* Outer shell with rounded top corners */}
            <path
              d="M80 120 Q80 116 84 116 L156 116 Q160 116 160 120 L160 165 L80 165 Z"
              fill="url(#laptopShell)"
              stroke="#1A1D20"
              strokeWidth="2.5"
              strokeLinejoin="round"
              transform="translate(1, 17)"
            />

            {/* Minimalist Linux Penguin (Tux) Logo centered on the lid */}
            <g transform="translate(120, 155)">
              {/* Left flipper */}
              <ellipse
                cx="-7"
                cy="5"
                rx="2"
                ry="6"
                transform="rotate(25, -7, 5)"
                fill="#1A1D20"
              />
              {/* Right flipper */}
              <ellipse
                cx="7"
                cy="5"
                rx="2"
                ry="6"
                transform="rotate(-25, 7, 5)"
                fill="#1A1D20"
              />

              {/* Main body */}
              <ellipse cx="0" cy="2" rx="8" ry="11" fill="#1A1D20" />

              {/* White belly */}
              <ellipse cx="0" cy="5" rx="5.5" ry="7" fill="#FFFFFF" />

              {/* Eyes base (white) */}
              <circle cx="-2.5" cy="-5" r="1.5" fill="#FFFFFF" />
              <circle cx="2.5" cy="-5" r="1.5" fill="#FFFFFF" />

              {/* Eyes pupils (black) */}
              <circle cx="-2.5" cy="-5" r="0.5" fill="#1A1D20" />
              <circle cx="2.5" cy="-5" r="0.5" fill="#1A1D20" />

              {/* Orange beak */}
              <polygon points="-2.5,-2.5 2.5,-2.5 0,1" fill="#F59E0B" />

              {/* Left foot */}
              <ellipse cx="-4" cy="13" rx="3.5" ry="1.5" fill="#F59E0B" />
              {/* Right foot */}
              <ellipse cx="4" cy="13" rx="3.5" ry="1.5" fill="#F59E0B" />
            </g>
          </g>
        </svg>
      </div>

      {/* Minimal label */}
      <div className="mt-2 flex items-center gap-2">
        <span
          className="inline-block rounded-full"
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#8FD8E8",
            animation: "dotPulse 1.8s ease-in-out infinite",
          }}
        />
        <span
          className="text-xs uppercase"
          style={{
            color: "#9AA0A6",
            letterSpacing: "0.28em",
          }}
        >
          Work in progress
        </span>
      </div>
    </div>
  );
}
