import "./global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";

export const metadata = {
  title: "Rudler | CPA + Advisory",
  description:
    "Independent CPA and advisory professionals helping closely held businesses, families, and nonprofits navigate growth with clarity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-on-surface">
        <Header />
        <main className="pt-28">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}