"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { RevealStagger, RevealItem } from "@/components/site/reveal";
import { DIFFERENTIALS } from "@/lib/site-data";

export function HomeDifferentials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070912]" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-[#1028B9]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nossos Diferenciais"
          title={
            <>
              Por que escolher a <span className="gradient-text">ENGEFRANCE</span>
            </>
          }
          description="Combinamos expertise técnica, gestão profissional e compromisso com resultados para entregar obras que superam expectativas."
        />

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d) => {
            const Icon = d.icon;
            return (
              <RevealItem key={d.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="premium-card group relative h-full p-7 rounded-2xl overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#1BA9FF]/0 group-hover:bg-[#1BA9FF]/15 blur-2xl transition-all duration-500" />

                  <div className="relative">
                    <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-to-br from-[#1BA9FF]/15 to-[#1028B9]/10 border border-[#1BA9FF]/20 items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-[#1BA9FF]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#1BA9FF] transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
