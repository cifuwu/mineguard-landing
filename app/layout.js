import { Inter } from 'next/font/google'
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';
import Redes from '@/components/Redes';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "MineGuard",
  description: "Desarrollo de software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={inter.className}
      >
        <NavBar />
        {children}
        <Footer />
        <Redes />
      </body>
    </html>
  );
}
