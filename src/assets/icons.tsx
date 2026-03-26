interface IconProps {
  className?: string;
  fill?: string;
  stroke?: string;
}

export function TriangleIcon({ className, stroke = "#223DAE" }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L2 22H22L12 2Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className, stroke = "#F87171" }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

export function UnderlineStrike({ className, stroke = "#3B82F6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 318 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9c31.111-3.333 93.333-5 156-5s124.889 1.667 156 5"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ProgressCircle({
  className,
  progress = 75,
}: {
  className?: string;
  progress?: number;
}) {
  const dashArray = 283;
  const dashOffset = (1 - progress / 100) * dashArray;

  return (
    <svg className={className} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="8"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="8"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
    </svg>
  );
}
