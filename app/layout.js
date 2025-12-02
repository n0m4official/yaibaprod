import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yaiba Productions",
  description: "Independent film studio and creative collective.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
