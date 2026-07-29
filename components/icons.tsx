type IconProps = { className?: string };

const base = "h-4 w-4";

export function ArrowRight({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13m0 0-5.5-5.5M18 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ChevronLeft({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ChevronRight({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Play({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function Pause({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
    </svg>
  );
}

export function Lock({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4.5"
        y="10.5"
        width="15"
        height="10"
        rx="1.5"
        fill="currentColor"
      />
      <path
        d="M8 10.5V8a4 4 0 0 1 8 0v2.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function Search({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

export function User({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8.5" r="4" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M4.5 20.5c1.6-4 4.1-6 7.5-6s5.9 2 7.5 6"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function Menu({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export function Close({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

const SOCIAL_PATHS = {
  youtube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z",
  facebook:
    "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V13h2.3v8h3.9Z",
  x: "M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6.2L5.7 21H2.5l7.4-8.4L2.9 3h5.7l4.1 5.8L17.5 3Zm-1.1 16h1.8L7.7 4.9H5.8L16.4 19Z",
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 3.8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 9.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8Zm7.6-10.2a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z",
  tiktok:
    "M16.5 2h-3.2v13.1a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.4a5.9 5.9 0 1 0 5 5.8V8.7a6.5 6.5 0 0 0 3.8 1.2V6.7a3.7 3.7 0 0 1-3.8-3.6V2Z",
} as const;

export type SocialIconName = keyof typeof SOCIAL_PATHS;

export function SocialIcon({
  name,
  className = "h-5 w-5",
}: {
  name: SocialIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={SOCIAL_PATHS[name]} />
    </svg>
  );
}
