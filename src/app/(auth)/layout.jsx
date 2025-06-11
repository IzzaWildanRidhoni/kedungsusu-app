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
  return <div>{children}</div>;
}
