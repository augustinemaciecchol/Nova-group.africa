export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="2" y="20" width="5" height="16" rx="1.5" fill="#15A3B4" />
      <rect x="10" y="14" width="5" height="22" rx="1.5" fill="#1D7C9E" />
      <rect x="18" y="4" width="5" height="32" rx="1.5" fill="#1E4A71" />
      <rect x="26" y="14" width="5" height="22" rx="1.5" fill="#1D7C9E" />
      <rect x="34" y="20" width="5" height="16" rx="1.5" fill="#15A3B4" />
    </svg>
  );
}
