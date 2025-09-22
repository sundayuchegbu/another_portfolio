const PaystackIcon = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Cerulean blue bars (logomark) */}
    <rect x="3" y="4" width="18" height="2.5" rx="1" fill="#00C3F7" />
    <rect x="3" y="9" width="12" height="2.5" rx="1" fill="#00C3F7" />
    <rect x="3" y="14" width="18" height="2.5" rx="1" fill="#00C3F7" />
    <rect x="3" y="19" width="12" height="2.5" rx="1" fill="#00C3F7" />
    {/* Optional circle background in midnight blue — adds emphasis */}
    {/* Uncomment if desired */}
    {/* <circle cx="12" cy="12" r="12" fill="#011b33" /> */}
  </svg>
);

export default PaystackIcon;
