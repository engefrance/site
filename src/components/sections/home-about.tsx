"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/reveal";
import { useSite } from "@/lib/site-store";

const HIGHLIGHTS = [
  "Equipe técnica própria com engenheiros diplomados",
  "Atendimento a clientes públicos e privados",
  "Compromisso com segurança e sustentabilidade",
];

export function HomeAbout() {
  const { setPage } = useSite();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070912] to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[5/5] rounded-2xl overflow-hidden glow-blue">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Obra de engenharia executada pela ENGEFRANCE"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 glass-strong rounded-2xl p-5 max-w-[240px] shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1BA9FF] to-[#1028B9] flex items-center justify-center">
                    <span className="font-heading font-extrabold text-white text-lg">
                      10+
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm">
                      Anos de mercado
                    </p>
                    <p className="text-xs text-white/55">
                      Tradição em engenharia
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative blob */}
              <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-[#1BA9FF]/15 blur-3xl pointer-events-none -z-10" />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1BA9FF]" />
                <span className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                  Sobre a ENGEFRANCE
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Engenharia de alto nível a serviço do
                <span className="gradient-text"> desenvolvimento</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed">
                A ENGEFRANCE atua nos segmentos de engenharia, construção civil
                e infraestrutura, oferecendo soluções completas para clientes
                públicos e privados. Nosso compromisso é entregar qualidade,
                segurança, inovação e eficiência em cada projeto, com equipe
                técnica altamente capacitada e gestão profissional em todas as
                etapas da obra.
              </p>

              <RevealStagger className="mt-8 space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <RevealItem key={h}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#1BA9FF] shrink-0" />
                      <span className="text-sm text-white/75">{h}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>

              <div className="mt-9">
                <button
                  onClick={() => setPage("empresa")}
                  className="btn-outline-premium group inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-heading font-semibold tracking-wide text-sm"
                >
                  CONHEÇA NOSSA HISTÓRIA
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
