function Logo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true">
      <path d="M3 3h20v20H3z" fill="none" stroke="#14b8a6" strokeWidth="2" />
      <path d="M9 8v10M17 8v10M9 13h8" stroke="#e6edf3" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  )
}

export default Logo
