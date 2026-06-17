import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ENGEFRANCE | Engenharia Industrial e Construção Civil em Recife",
  description:
    "A ENGEFRANCE é referência em engenharia, construção civil, infraestrutura e gerenciamento de obras em Recife e Pernambuco. Soluções completas para clientes públicos e privados.",
  keywords: [
    "Engenharia em Recife",
    "Construção Civil em Recife",
    "Empresa de Engenharia em Pernambuco",
    "Infraestrutura Industrial",
    "Engenharia Industrial",
    "Administração de Obras",
    "Gerenciamento de Projetos",
    "Construção Comercial",
    "Construção Industrial",
    "Instalações Elétricas",
    "Instalações Hidráulicas",
    "Recuperação Estrutural",
    "ENGEFRANCE",
  ],
  authors: [{ name: "ENGEFRANCE Engenharia Industrial e Construção Civil" }],
  metadataBase: new URL("https://www.engefrance.com.br"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "1024x1024" },
      { url: "/favicon.png", sizes: "1024x1024" },
      { url: "/uploads/logotipo.png", sizes: "1024x1024" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "1024x1024" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: "ENGEFRANCE | Engenharia Industrial e Construção Civil",
    description:
      "Soluções completas em construção civil, infraestrutura, instalações e gerenciamento de obras para clientes públicos e privados.",
    url: "https://www.engefrance.com.br",
    siteName: "ENGEFRANCE",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/uploads/logotipo.png",
        width: 1024,
        height: 1024,
        alt: "ENGEFRANCE Engenharia Industrial e Construção Civil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENGEFRANCE | Engenharia Industrial e Construção Civil",
    description:
      "Soluções completas em construção civil, infraestrutura e gerenciamento de obras em Recife.",
    images: ["/uploads/logotipo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1028B9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
