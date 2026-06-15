'use client';

interface PeacockMotifProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export default function PeacockMotif({ className = '', opacity = 0.08, size = 120 }: PeacockMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M60 115C60 115 20 80 20 45C20 25 35 10 60 10C85 10 100 25 100 45C100 80 60 115 60 115Z"
        fill="#1a4a2e"
      />
      <path
        d="M60 105C60 105 30 75 30 48C30 32 42 20 60 20C78 20 90 32 90 48C90 75 60 105 60 105Z"
        fill="#b8952a"
        opacity="0.3"
      />
      <circle cx="60" cy="45" r="8" fill="#b8952a" />
      <path
        d="M60 5C60 5 55 15 60 25C65 15 60 5 60 5Z"
        fill="#1a4a2e"
      />
      <path
        d="M60 25C60 25 45 30 35 45"
        stroke="#1a4a2e"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M60 25C60 25 75 30 85 45"
        stroke="#1a4a2e"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M60 35C60 35 48 42 42 55"
        stroke="#1a4a2e"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M60 35C60 35 72 42 78 55"
        stroke="#1a4a2e"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <circle cx="45" cy="50" r="3" fill="#b8952a" opacity="0.6" />
      <circle cx="75" cy="50" r="3" fill="#b8952a" opacity="0.6" />
      <circle cx="38" cy="62" r="2.5" fill="#b8952a" opacity="0.5" />
      <circle cx="82" cy="62" r="2.5" fill="#b8952a" opacity="0.5" />
    </svg>
  );
}
