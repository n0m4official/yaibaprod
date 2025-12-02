import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yaiba Productions",
  description: "Independent film studio & digital creative collective.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
