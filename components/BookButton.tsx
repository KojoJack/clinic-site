"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/hearandnowbradford?hide_gdpr_banner=1";

export function openCalendly() {
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

interface BookButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function BookButton({
  children = "Book Appointment",
  className = "",
  style,
  onClick,
}: BookButtonProps) {
  const handleClick = () => {
    onClick?.();
    openCalendly();
  };

  return (
    <button type="button" onClick={handleClick} className={className} style={style}>
      {children}
    </button>
  );
}
