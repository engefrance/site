"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { RevealStagger, RevealItem } from "@/components/site/reveal";

const STATS = [
  { prefix: "+", to: 10, suffix: "", label: "Anos de Experiência" },
  { prefix: "+", to: 100, suffix: "", label: "Projetos Entregues" },
  { prefix: "+", to: 50, suffix: "", label: "Clientes Atendidos" },
  { prefix: "", to: 100, suffix: "%", label: "Compromisso com Qualidade" },
];

export function HomeNumbers() {
  return (
    <section className="relative py-20 lg:py-24 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070912] via-[#050505] to-[#070912]" />
      <div className="absolute inset-0 bg-aurora opacity-60" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <RevealStagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((s, i) => (
            <RevealItem key={s.label}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative text-center lg:text-left group"
              >
                <div className="absolute -top-2 left-0 h-12 w-12 rounded-full bg-[#1BA9FF]/10 blur-2xl group-hover:bg-[#1BA9FF]/20 transition-all" />
                <div className="relative">
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                    <span className="gradient-text">
                      <AnimatedCounter
                        to={s.to}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </span>
                  </div>
                  <div className="mt-2 h-px w-12 bg-gradient-to-r from-[#1BA9FF] to-transparent mx-auto lg:mx-0" />
                  <p className="mt-3 text-xs sm:text-sm text-white/55 uppercase tracking-[0.15em] font-heading">
                    {s.label}
                  </p>
                </div>
                <span className="absolute top-0 right-0 lg:right-auto lg:left-0 text-6xl font-heading font-extrabold text-white/[0.03] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
