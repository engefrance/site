"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/reveal";
import { SERVICES } from "@/lib/site-data";
import { useSite, whatsappLink } from "@/lib/site-store";

export function ServicosPage() {
  const { selectedService, setSelectedService, setQuoteOpen } = useSite();
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (selectedService) {
      // Smooth scroll into the selected service after render
      const t = setTimeout(() => {
        const el = refs.current[selectedService];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: "smooth" });
        }
        setSelectedService(null);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [selectedService, setSelectedService]);

  return (
    <>
      <PageHero
        eyebrow="Nossos Serviços"
        title={
          <>
            Soluções integradas em{" "}
            <span className="gradient-text">engenharia</span> e construção
          </>
        }
        subtitle="Da fundação à entrega das chaves, atuamos em todas as disciplinas da construção civil, infraestrutura e instalações com padrão de excelência."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Service list */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <RevealStagger className="space-y-16 lg:space-y-24">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              const reversed = idx % 2 === 1;
              return (
                <RevealItem key={service.slug}>
                  <div
                    ref={(el) => {
                      refs.current[service.slug] = el;
                    }}
                    id={`servico-${service.slug}`}
                    className="scroll-mt-24"
                  >
                    <div
                      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                        reversed ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image */}
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-light border border-white/10 group"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width:1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 inline-flex h-12 w-12 rounded-xl glass-strong border border-white/10 items-center justify-center">
                          <Icon className="h-6 w-6 text-[#1BA9FF]" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-white/70">
                            Serviço 0{idx + 1} / 0{SERVICES.length}
                          </span>
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1BA9FF]" />
                          <span className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                            {service.title}
                          </span>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                          {service.short}
                        </h2>
                        <p className="text-base text-white/60 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Benefits */}
                        <div className="mb-6">
                          <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
                            Benefícios
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-2.5">
                            {service.benefits.map((b) => (
                              <li
                                key={b}
                                className="flex items-start gap-2 text-sm text-white/65"
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#1BA9FF] shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Differentials */}
                        <div className="mb-7 p-4 rounded-xl glass-light border border-white/10">
                          <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
                            Diferenciais
                          </h4>
                          <ul className="space-y-2">
                            {service.differentials.map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-2 text-sm text-white/65"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#1BA9FF] to-[#1028B9]" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => setQuoteOpen(true)}
                            className="btn-primary-premium group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-heading font-semibold tracking-wide text-sm"
                          >
                            SOLICITAR ORÇAMENTO
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
                          <a
                            href={whatsappLink(
                              `Olá, gostaria de falar sobre o serviço de ${service.title} com a ENGEFRANCE.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-premium inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-heading font-semibold tracking-wide text-sm"
                          >
                            <Phone className="h-4 w-4" />
                            FALAR COM ESPECIALISTA
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1028B9] via-[#0B1020] to-[#050505]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1BA9FF]/30 blur-3xl" />

            <div className="relative px-6 py-14 sm:px-12 sm:py-20 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
                Não encontrou o serviço que procura?
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/65 max-w-2xl mx-auto">
                Atendemos demandas especiais e personalizadas. Fale com nossa
                equipe técnica e encontre a solução ideal para o seu projeto.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[#050505] hover:bg-[#1BA9FF] hover:text-white transition-colors px-7 py-4 rounded-md font-heading font-semibold tracking-wide text-sm"
                >
                  SOLICITAR PROPOSTA
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
