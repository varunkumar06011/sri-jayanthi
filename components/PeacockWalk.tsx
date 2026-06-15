'use client';

import { useEffect, useRef } from 'react';

export default function PeacockWalk() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const colors = ['#1a5235', '#b8952a', '#1a6a45'];
    let intervalId: ReturnType<typeof setInterval>;

    function spawnLeaf() {
      if (!scene) return;
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      const x = Math.random() * 80 + 10;
      const size = Math.random() * 8 + 6;
      const dur = Math.random() * 3 + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      leaf.style.cssText = `position:absolute;left:${x}%;top:30px;width:${size}px;height:${size * 0.6}px;background:${color};border-radius:50% 0 50% 0;animation:floatLeaf ${dur}s linear forwards;pointer-events:none;`;
      scene.appendChild(leaf);
      setTimeout(() => leaf.remove(), dur * 1000);
    }

    intervalId = setInterval(spawnLeaf, 1800);
    spawnLeaf();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={sceneRef}
      className="h-[200px] sm:h-[300px]"
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      <style>{`
        @keyframes walkAcross {
          0%   { left: -200px; }
          100% { left: calc(100% + 20px); }
        }
        @keyframes stepLeft {
          0%   { transform: rotate(-18deg) translateY(0px); }
          100% { transform: rotate(18deg) translateY(-4px); }
        }
        @keyframes stepRight {
          0%   { transform: rotate(18deg) translateY(-4px); }
          100% { transform: rotate(-18deg) translateY(0px); }
        }
        @keyframes footLeft {
          0%   { transform: translateX(-4px); }
          100% { transform: translateX(4px); }
        }
        @keyframes footRight {
          0%   { transform: translateX(4px); }
          100% { transform: translateX(-4px); }
        }
        @keyframes bodyBob {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-3px); }
        }
        @keyframes tailSway {
          0%   { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }
        @keyframes neckBob {
          0%   { transform: rotate(-4deg) translateY(0); }
          100% { transform: rotate(4deg) translateY(-2px); }
        }
        @keyframes floatLeaf {
          0%   { transform: translateY(0) rotate(0deg) translateX(0); opacity: 0.7; }
          50%  { transform: translateY(60px) rotate(180deg) translateX(20px); opacity: 0.5; }
          100% { transform: translateY(130px) rotate(360deg) translateX(-10px); opacity: 0; }
        }
        @media (max-width: 640px) {
          .peacock-scale { transform: scale(0.65); transform-origin: bottom center; }
        }
      `}</style>

      {/* Ground */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to bottom, #c8b89a 0%, #b8a88a 100%)',
          borderTop: '2px solid #a89878',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: 0,
          right: 0,
          height: '12px',
          background:
            'repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.06) 30px, rgba(0,0,0,0.06) 31px)',
        }}
      />

      {/* Peacock */}
      <div
        className="peacock-scale"
        style={{
          position: 'absolute',
          bottom: '55px',
          left: '-180px',
          animation: 'walkAcross 12s linear infinite',
        }}
      >
        <div style={{ position: 'relative', width: '160px', height: '200px' }}>
          {/* Tail */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              left: '-30px',
              animation: 'tailSway 1.2s ease-in-out infinite alternate, bodyBob 0.5s ease-in-out infinite alternate',
              transformOrigin: 'right center',
            }}
          >
            <svg width="120" height="170" viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="featherGrad" cx="50%" cy="80%" r="60%">
                  <stop offset="0%" stopColor="#1a4a2e" />
                  <stop offset="100%" stopColor="#0d2e1a" />
                </radialGradient>
              </defs>
              <g transform="translate(60,160)">
                <ellipse cx="0" cy="-30" rx="42" ry="65" fill="#1a5235" opacity="0.9" />
                <ellipse cx="0" cy="-30" rx="32" ry="55" fill="#1a6040" opacity="0.8" />
                <path d="M0,0 Q-40,-40 -55,-120" stroke="#1a4a2e" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M0,0 Q-25,-50 -30,-130" stroke="#1a4a2e" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M0,0 Q-10,-55 -8,-135" stroke="#1a4a2e" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M0,0 Q10,-55 12,-135" stroke="#1a4a2e" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M0,0 Q25,-50 32,-130" stroke="#1a4a2e" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M0,0 Q40,-40 55,-120" stroke="#1a4a2e" strokeWidth="2" fill="none" opacity="0.7" />

                {[-55, -30, -8, 12, 32, 55].map((cx, i) => (
                  <g key={i}>
                    <ellipse cx={cx} cy={[-120, -130, -135, -135, -130, -120][i]} rx="9" ry="12" fill="#1a4a2e" />
                    <ellipse cx={cx} cy={[-120, -130, -135, -135, -130, -120][i]} rx="5" ry="7" fill="#b8952a" opacity="0.8" />
                    <ellipse cx={cx} cy={[-120, -130, -135, -135, -130, -120][i]} rx="3" ry="4" fill="#1a4a2e" />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Body */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              left: 0,
              animation: 'bodyBob 0.5s ease-in-out infinite alternate',
            }}
          >
            <svg width="110" height="100" viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="70" rx="32" ry="20" fill="#1a5235" />
              <ellipse cx="60" cy="68" rx="28" ry="17" fill="#1a6040" />
              <ellipse cx="62" cy="62" rx="14" ry="10" fill="#1a4a2e" opacity="0.6" />
              <g style={{ animation: 'neckBob 0.5s ease-in-out infinite alternate', transformOrigin: '65px 65px' }}>
                <path d="M65,65 Q60,45 55,30 Q53,22 58,15" stroke="#1a5235" strokeWidth="9" fill="none" strokeLinecap="round" />
                <path d="M65,65 Q62,45 57,30 Q55,22 60,15" stroke="#1a6a45" strokeWidth="5" fill="none" strokeLinecap="round" />
                <ellipse cx="60" cy="12" rx="10" ry="8" fill="#1a5235" />
                <ellipse cx="61" cy="11" rx="7" ry="6" fill="#1a6a45" />
                <ellipse cx="67" cy="10" rx="5" ry="4" fill="#1a5235" />
                <ellipse cx="67" cy="10" rx="3" ry="2.5" fill="#1a6a45" />
                <path d="M60,8 Q60,2 64,1" stroke="#b8952a" strokeWidth="1.5" fill="none" />
                <circle cx="64" cy="0" r="2" fill="#b8952a" />
                <path d="M60,6 Q57,1 59,0" stroke="#b8952a" strokeWidth="1.5" fill="none" />
                <circle cx="59" cy="-1" r="2" fill="#b8952a" />
                <path d="M61,7 Q63,-1 66,-1" stroke="#b8952a" strokeWidth="1.5" fill="none" />
                <circle cx="67" cy="-2" r="2" fill="#b8952a" />
                <ellipse cx="58" cy="11" rx="2" ry="1.5" fill="#b8952a" opacity="0.9" />
                <path d="M63,14 Q69,14 72,12" stroke="#1a3a24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="58" cy="9" r="1.5" fill="#0d0d0d" />
                <circle cx="58.5" cy="8.8" r="0.5" fill="white" />
              </g>
            </svg>
          </div>

          {/* Legs */}
          <div
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: '54px',
              width: '6px',
              height: '22px',
              background: '#5a8a3c',
              borderRadius: '3px',
              transformOrigin: 'top center',
              animation: 'stepLeft 0.5s ease-in-out infinite alternate',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '14px',
                height: '4px',
                background: '#4a7a2c',
                borderRadius: '2px',
                bottom: '-26px',
                left: '-7px',
                animation: 'footLeft 0.5s ease-in-out infinite alternate',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: '68px',
              width: '6px',
              height: '22px',
              background: '#5a8a3c',
              borderRadius: '3px',
              transformOrigin: 'top center',
              animation: 'stepRight 0.5s ease-in-out infinite alternate',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '14px',
                height: '4px',
                background: '#4a7a2c',
                borderRadius: '2px',
                bottom: '-26px',
                left: '-7px',
                animation: 'footRight 0.5s ease-in-out infinite alternate',
              }}
            />
          </div>
        </div>
      </div>

      {/* Ground wave line */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,260 Q100,245 200,255 Q300,265 400,250 Q500,240 600,252 Q700,260 800,250"
          stroke="rgba(139,119,90,0.3)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}
