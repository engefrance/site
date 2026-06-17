"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { RevealStagger, RevealItem } from "@/components/site/reveal";
import { PROJECTS } from "@/lib/site-data";
import { useSite } from "@/lib/site-store";

export function HomePortfolio() {
  const { setPage, setSelectedProject } = useSite();
  const featured = PROJECTS.slice(0, 6);

  const open = (slug: string) => {
    setSelectedProject(slug);
    setPage("portfolio");
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070912] via-[#050505] to-[#070912]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Portfólio Selecionado"
            title={
              <>
                Projetos que entregamos
                <br className="hidden sm:block" /> com{" "}
                <span className="gradient-text">excelência</span>
              </>
            }
            description="Uma amostra de obras civis, industriais e de infraestrutura executadas com padrão internacional."
            className="lg:max-w-2xl"
          />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setPage("portfolio")}
            className="btn-outline-premium group self-start lg:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-md font-heading font-semibold tracking-wide text-sm"
          >
            VER TODOS OS PROJETOS
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <RevealItem key={p.slug}>
              <motion.button
                whileHover={{ y: -6 }}
                onClick={() => open(p.slug)}
                className="group relative block w-full text-left rounded-2xl overflow-hidden glass-light border border-white/10 hover:border-[#1BA9FF]/40 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass-strong text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4 text-[#1BA9FF]" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#1BA9FF] transition-colors mb-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-white/55">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#1BA9FF]" />
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#1BA9FF]" />
                      {p.year}
                    </span>
                  </div>
                </div>
              </motion.button>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
