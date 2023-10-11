import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "💻 | Gtifaro - Web Developer | 💻",
  description: "Hi! I'm Gabriel, web developer, nice to meet you 😄",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
