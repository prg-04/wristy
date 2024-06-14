import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "Time Crafted Perfection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0A1929] ${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
