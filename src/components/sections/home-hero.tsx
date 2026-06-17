"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { useSite, whatsappLink } from "@/lib/site-store";

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { setQuoteOpen } = useSite();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Background video */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/uploads/Hero-Section.png"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/uploads/video2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/55 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-transparent" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />

      {/* Decorative glow */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#1028B9]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[#1BA9FF]/20 blur-3xl pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-light"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1BA9FF] animate-pulse" />
              <span className="text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-white/80">
                Engenharia &middot; Construção &middot; Infraestrutura
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold tracking-[-0.03em] text-white text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.95]"
            >
              Engenharia, Construção
              <br />
              e Infraestrutura com{" "}
              <span className="gradient-text text-glow">Excelência</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base sm:text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              Soluções completas em construção civil, infraestrutura, instalações
              e gerenciamento de obras para clientes públicos e privados em todo
              o Brasil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-primary-premium group px-7 py-4 rounded-md font-heading font-semibold tracking-wide text-sm flex items-center justify-center gap-2"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-premium px-7 py-4 rounded-md font-heading font-semibold tracking-wide text-sm flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                FALAR COM ESPECIALISTA
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/55 text-xs uppercase tracking-[0.15em] font-heading"
            >
              <span>+10 anos de experiência</span>
              <span className="hidden sm:inline h-3 w-px bg-white/20" />
              <span>+100 projetos entregues</span>
              <span className="hidden sm:inline h-3 w-px bg-white/20" />
              <span>Clientes públicos e privados</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-heading">
          Role para descobrir
        </span>
        <div className="relative h-10 w-6 rounded-full border border-white/20 flex justify-center pt-2">
          <span className="h-2 w-1 rounded-full bg-[#1BA9FF] scroll-indicator-dot" />
        </div>
        <ChevronDown className="h-3 w-3 text-white/30 -mt-1" />
      </motion.div>
    </section>
  );
}
