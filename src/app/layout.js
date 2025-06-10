export const metadata = {
  title: "Kedung Susu",
  description: "Kedung Susu - Fresh Milk Shop",
  keywords: "Kedung Susu, susu murni, fresh milk",
  authors: [{ name: "Wildan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="/libs/owl.carousel/dist/assets/owl.carousel.min.css"
        />
        <link id="themeColors" rel="stylesheet" href="/css/style.min.css" />
      </head>
      <body>
        {children}

        {/* Scripts at bottom for better performance */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/libs/jquery/dist/jquery.min.js"></script>
        <script src="/libs/simplebar/dist/simplebar.min.js"></script>
        <script src="/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/js/app.min.js"></script>
        <script src="/js/app.init.js"></script>
        <script src="/js/app-style-switcher.js"></script>
        <script src="/js/sidebarmenu.js"></script>
        <script src="/js/custom.js"></script>
        <script src="/libs/owl.carousel/dist/owl.carousel.min.js"></script>
        <script src="/libs/apexcharts/dist/apexcharts.min.js"></script>
        <script src="/js/dashboard.js"></script>
      </body>
    </html>
  );
}
