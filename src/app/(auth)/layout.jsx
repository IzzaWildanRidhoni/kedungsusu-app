import Script from "next/script";

export const metadata = {
  title: {
    default: "Kedung Susu",
    template: "%s | Kedung Susu",
  },
  description: "Halaman login dan register Kedung Susu",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function AuthLayout({ children }) {
  return (
    <div>
      {/* Halaman anak */}
      {children}

      {/* Scripts */}
      <Script
        src="/libs/jquery/dist/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/libs/simplebar/dist/simplebar.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/libs/bootstrap/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/app.min.js" strategy="afterInteractive" />
      <Script src="/js/app.init.js" strategy="afterInteractive" />
      <Script src="/js/app-style-switcher.js" strategy="afterInteractive" />
      <Script src="/js/sidebarmenu.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </div>
  );
}
