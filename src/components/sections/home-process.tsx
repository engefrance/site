"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { RevealStagger, RevealItem } from "@/components/site/reveal";
import { PROCESS_STEPS } from "@/lib/site-data";

export function HomeProcess() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070912]" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#1028B9]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Processo de Trabalho"
          title={
            <>
              Do diagnóstico à entrega, com{" "}
              <span className="gradient-text">método</span>
            </>
          }
          description="Um processo estruturado em seis etapas garante previsibilidade, qualidade e total transparência em todas as fases da obra."
        />

        <RevealStagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {PROCESS_STEPS.map((step, idx) => (
            <RevealItem key={step.step}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative premium-card h-full p-6 rounded-2xl overflow-hidden group"
              >
                {/* Connector line (desktop) */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden xl:block absolute top-12 -right-2 h-px w-4 bg-gradient-to-r from-[#1BA9FF]/40 to-transparent z-10" />
                )}

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-extrabold gradient-text">
                      {step.step}
                    </span>
                    <div className="h-8 w-8 rounded-full glass-light border border-white/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1BA9FF]" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-2 group-hover:text-[#1BA9FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
