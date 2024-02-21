import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import AuthProvider from "./_providers/auth";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Barber",
  description:
    "FSW Barber é um aplicativo de barbearia que oferece serviços de corte, barba e cuidados masculinos com estilo moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          <div className="flex-1">{children}</div>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
