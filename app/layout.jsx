import "./globals.css";
import { Coda as fontStyle } from "next/font/google";
import Navbar from '../components/Navbar'

const inter = fontStyle({style: "normal", subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "💻 | Gtifaro - Frontend Developer | 💻",
  description: "Hi! I'm Gabriel, frontend developer, nice to meet you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
