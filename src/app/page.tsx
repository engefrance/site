"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { QuoteModal } from "@/components/site/quote-modal";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { BackToTop } from "@/components/site/back-to-top";
import { HomePage } from "@/components/sections/home-page";
import { EmpresaPage } from "@/components/sections/empresa-page";
import { ServicosPage } from "@/components/sections/servicos-page";
import { PortfolioPage } from "@/components/sections/portfolio-page";
import { ContatoPage } from "@/components/sections/contato-page";
import { useSite } from "@/lib/site-store";

export default function Home() {
  const { page } = useSite();

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050505] text-white overflow-x-hidden">
      {/* Global ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,40,185,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[60vh] w-[60vw] rounded-full bg-[#1BA9FF]/5 blur-3xl" />
      </div>

      {/* Barra de progresso de scroll no topo */}
      <ScrollProgress />

      <Header />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {page === "inicio" && <HomePage />}
            {page === "empresa" && <EmpresaPage />}
            {page === "servicos" && <ServicosPage />}
            {page === "portfolio" && <PortfolioPage />}
            {page === "contato" && <ContatoPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Botão voltar ao topo */}
      <BackToTop />

      <QuoteModal />
    </div>
  );
}
