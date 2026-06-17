"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { RevealStagger, RevealItem } from "@/components/site/reveal";
import { SERVICES } from "@/lib/site-data";
import { useSite } from "@/lib/site-store";

export function HomeServices() {
  const { setPage, setSelectedService } = useSite();

  const openService = (slug: string) => {
    setSelectedService(slug);
    setPage("servicos");
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-[#1028B9]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Serviços em Destaque"
          title={
            <>
              Soluções completas para
              <br className="hidden sm:block" /> cada fase da sua obra
            </>
          }
          description="Atuamos de forma integrada em todas as disciplinas da engenharia e construção civil, do projeto à entrega das chaves."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <RevealItem key={service.slug}>
                <motion.button
                  onClick={() => openService(service.slug)}
                  whileHover={{ y: -6 }}
                  className="premium-card group relative w-full h-full text-left p-7 rounded-2xl overflow-hidden"
                >
                  {/* Hover image glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#1BA9FF]/20 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative h-14 w-14 rounded-xl glass-light flex items-center justify-center border border-white/10 group-hover:border-[#1BA9FF]/40 transition-colors">
                        <Icon className="h-6 w-6 text-[#1BA9FF]" />
                        <div className="absolute inset-0 rounded-xl bg-[#1BA9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="font-heading text-xs font-semibold text-white/30 tracking-[0.2em]">
                        0{SERVICES.indexOf(service) + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white tracking-tight mb-2 group-hover:text-[#1BA9FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-5 line-clamp-3">
                      {service.short}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white/70 group-hover:text-[#1BA9FF] transition-colors">
                      Ver serviço
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.button>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
