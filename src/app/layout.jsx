import Script from "next/script";

export const metadata = {
  title: "Kedung Susu",
  description: "Kedung Susu - Fresh Milk Shop",
  keywords: "Kedung Susu, susu murni, fresh milk",
  authors: [{ name: "Wildan" }],
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/libs/owl.carousel/dist/assets/owl.carousel.min.css"
        />
        <link id="themeColors" rel="stylesheet" href="/css/style.min.css" />
      </head>
      <body>
        {children}

        {/* Scripts at bottom for better performance */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/libs/jquery/dist/jquery.min.js"></Script>
        <Script src="/libs/simplebar/dist/simplebar.min.js"></Script>
        <Script src="/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/app.min.js"></Script>
        <Script src="/js/app.init.js"></Script>
        <Script src="/js/app-style-switcher.js"></Script>
        <Script src="/js/sidebarmenu.js"></Script>
        <Script src="/js/custom.js"></Script>
        <Script src="/libs/owl.carousel/dist/owl.carousel.min.js"></Script>
        <Script src="/libs/apexcharts/dist/apexcharts.min.js"></Script>
        <Script src="/js/dashboard.js"></Script>
      </body>
    </html>
  );
}
