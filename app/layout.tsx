import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Código Secreto",
  description: "Juego creado con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial",
          background: "#111827",
        }}
      >
        <nav
          style={{
            background: "#1f2937",
            padding: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Juego 
          </Link>

          <Link
            href="/memoria"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Memoria
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}