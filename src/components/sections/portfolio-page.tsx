"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, ArrowUpRight, X, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { RevealStagger, RevealItem } from "@/components/site/reveal";
import {
  PROJECTS,
  type ProjectCategory,
  type Project,
} from "@/lib/site-data";
import { useSite } from "@/lib/site-store";
import { cn } from "@/lib/utils";

const FILTERS: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Construção Civil",
  "Infraestrutura",
  "Industrial",
  "Instalações",
  "Engenharia",
];

export function PortfolioPage() {
  const { selectedProject, setSelectedProject, setQuoteOpen } = useSite();
  const [filter, setFilter] = useState<"Todos" | ProjectCategory>("Todos");
  const [active, setActive] = useState<Project | null>(null);

  // If a project was preselected (from home page), open the modal directly.
  useEffect(() => {
    if (!selectedProject) return;
    const found = PROJECTS.find((p) => p.slug === selectedProject);
    if (!found) return;
    // Defer setState calls to break out of the synchronous effect body and
    // avoid cascading renders.
    const t = setTimeout(() => {
      setActive(found);
      setFilter((cur) => (cur === found.category ? cur : found.category));
      setSelectedProject(null);
    }, 50);
    return () => clearTimeout(t);
  }, [selectedProject, setSelectedProject]);

  const visible =
    filter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title={
          <>
            Obras que falam por
            <br className="hidden sm:block" /> nossa{" "}
            <span className="gradient-text">excelência</span>
          </>
        }
        subtitle="Conheça projetos representativos executados pela ENGEFRANCE em construção civil, infraestrutura, indústria, instalações e engenharia."
        image="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Filters + grid */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full text-sm font-heading font-semibold tracking-wide transition-all",
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white glass-light border border-white/10 hover:border-white/20"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1BA9FF] to-[#1028B9] shadow-[0_8px_24px_-8px_rgba(16,40,185,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.button
                  layout
                  key={p.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActive(p)}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full glass-strong text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-white">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4 text-[#1BA9FF]" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-lg font-bold text-white mb-1.5 group-hover:text-[#1BA9FF] transition-colors">
                        {p.name}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-white/60">
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
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-white/55 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white/70 group-hover:text-[#1BA9FF] transition-colors">
                      Ver projeto
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project detail modal */}
      <ProjectModal
        project={active}
        onClose={() => setActive(null)}
        onRequestQuote={() => {
          setActive(null);
          setQuoteOpen(true);
        }}
      />
    </>
  );
}

function ProjectModal({
  project,
  onClose,
  onRequestQuote,
}: {
  project: Project | null;
  onClose: () => void;
  onRequestQuote: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-start sm:items-center justify-center p-0 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl max-h-[100svh] sm:max-h-[92svh] overflow-y-auto scrollbar-premium bg-[#0B1020] sm:rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Banner */}
            <div className="relative h-[260px] sm:h-[340px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/40 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center text-white/80 hover:text-white"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full glass-strong text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-white">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/60 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#1BA9FF]" />
                    {project.year}
                  </span>
                  <span className="text-xs text-white/60 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#1BA9FF]" />
                    {project.location}
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Description */}
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1BA9FF] mb-3">
                  Descrição
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1BA9FF] mb-3">
                  Galeria
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.gallery.map((g, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group"
                    >
                      <Image
                        src={g}
                        alt={`${project.name} - imagem ${i + 1}`}
                        fill
                        sizes="(max-width:768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Escopo + Serviços */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1BA9FF] mb-3">
                    Escopo
                  </h3>
                  <ul className="space-y-2.5">
                    {project.scope.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#1BA9FF] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1BA9FF] mb-3">
                    Serviços Executados
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full glass-light border border-white/10 text-xs text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resultados */}
              <div className="p-5 rounded-2xl glass-light border border-[#1BA9FF]/20 bg-gradient-to-br from-[#1BA9FF]/8 to-transparent">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1BA9FF] mb-2">
                  Resultados
                </h3>
                <p className="text-base text-white/80 leading-relaxed">
                  {project.results}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onRequestQuote}
                  className="btn-primary-premium group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-heading font-semibold tracking-wide text-sm flex-1"
                >
                  SOLICITAR PROPOSTA SIMILAR
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={onClose}
                  className="btn-outline-premium inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-heading font-semibold tracking-wide text-sm"
                >
                  FECHAR
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
