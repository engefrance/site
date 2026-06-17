"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import { useSite, type PageKey } from "@/lib/site-store";
import { cn } from "@/lib/utils";

const NAV: { key: PageKey; label: string }[] = [
  { key: "inicio", label: "Início" },
  { key: "empresa", label: "Empresa" },
  { key: "servicos", label: "Serviços" },
  { key: "portfolio", label: "Portfólio" },
  { key: "contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { page, setPage, setQuoteOpen } = useSite();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (key: PageKey) => {
    setPage(key);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] py-2.5"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-6">
            <button
              onClick={() => handleNav("inicio")}
              className="transition-opacity hover:opacity-90"
              aria-label="ENGEFRANCE - Início"
            >
              <Logo />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const active = page === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNav(item.key)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      active
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#1BA9FF] to-[#1028B9] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-primary-premium group relative overflow-hidden px-5 py-2.5 rounded-md font-heading font-semibold text-sm tracking-wide"
              >
                <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
                <span className="absolute inset-0 shimmer opacity-60" />
              </button>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between px-5 py-4">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-white"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-6 gap-1">
                {NAV.map((item, idx) => {
                  const active = page === item.key;
                  return (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.06, duration: 0.4 }}
                      onClick={() => handleNav(item.key)}
                      className={cn(
                        "group flex items-center justify-between py-4 border-b border-white/10 text-left",
                        active ? "text-white" : "text-white/70"
                      )}
                    >
                      <span className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">
                        {item.label}
                      </span>
                      <ChevronRight
                        className={cn(
                          "h-6 w-6 transition-transform group-hover:translate-x-1",
                          active ? "text-[#1BA9FF]" : "text-white/40"
                        )}
                      />
                    </motion.button>
                  );
                })}
              </div>
              <div className="px-6 pb-10">
                <button
                  onClick={() => {
                    setQuoteOpen(true);
                    setMobileOpen(false);
                  }}
                  className="btn-primary-premium w-full py-4 rounded-md font-heading font-semibold tracking-wide text-sm"
                >
                  SOLICITAR ORÇAMENTO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
