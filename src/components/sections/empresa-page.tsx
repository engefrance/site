"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Scale,
  Sparkles,
  Layers,
  Building2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/reveal";
import { HomeCTA } from "@/components/sections/home-cta";
import { HomeDifferentials } from "@/components/sections/home-differentials";
import { useSite, CONTACT } from "@/lib/site-store";

const VALUES = [
  { icon: Scale, title: "Ética", description: "Conduta íntegra em todas as relações com clientes, parceiros e colaboradores." },
  { icon: ShieldCheck, title: "Transparência", description: "Informação clara e acessível em todos os processos e etapas da obra." },
  { icon: Heart, title: "Segurança", description: "Vida e saúde em primeiro lugar, com cultura de prevenção em toda a equipe." },
  { icon: Sparkles, title: "Qualidade", description: "Padrão técnico elevado, controle rigoroso e melhoria contínua." },
  { icon: Layers, title: "Inovação", description: "Tecnologias construtivas modernas, BIM e gestão digital aplicadas à obra." },
  { icon: Target, title: "Comprometimento", description: "Cumprimento de prazos, custos e promessas com responsabilidade total." },
];

const STRUCTURE = [
  {
    title: "Equipe Técnica Própria",
    description:
      "Engenheiros civis, elétricos e mecânicos com registro no CREA, mestres e doutores nas disciplinas estratégicas.",
  },
  {
    title: "Parque de Equipamentos",
    description:
      "Maquinário próprio para obras de porte: escavadeiras, retroescavadeiras, guindastes, betoneiras e usina de asfalto.",
  },
  {
    title: "Laboratório de Controle",
    description:
      "Laboratório de tecnologia de materiais para ensaios de concreto, solos e asfalto com rastreabilidade total.",
  },
  {
    title: "Sede em Recife",
    description:
      "Base operacional estratégica em Recife (PE), com atuação em todo o Nordeste e projetos nacionais.",
  },
];

export function EmpresaPage() {
  const { setPage } = useSite();

  return (
    <>
      <PageHero
        eyebrow="Nossa Empresa"
        title={
          <>
            Construímos a <span className="gradient-text">engenharia</span> do
            amanhã
          </>
        }
        subtitle="Há mais de uma década, a ENGEFRANCE entrega obras que combinam excelência técnica, inovação e responsabilidade social e ambiental."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      {/* História */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glow-blue">
                  <Image
                    src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80"
                    alt="História ENGEFRANCE"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </div>
                <div className="absolute -bottom-6 -right-4 sm:-right-8 glass-strong rounded-2xl p-5 max-w-[260px] shadow-2xl">
                  <p className="font-heading font-extrabold text-white text-3xl gradient-text">
                    2014
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    Ano de fundação em Recife, Pernambuco
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1BA9FF]" />
                  <span className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                    Nossa História
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Uma trajetória de{" "}
                  <span className="gradient-text">crescimento sustentável</span>
                </h2>
                <div className="mt-6 space-y-4 text-base text-white/60 leading-relaxed">
                  <p>
                    A ENGEFRANCE nasceu em Recife com a missão de oferecer
                    soluções de engenharia e construção civil com padrão
                    internacional para o mercado brasileiro. Desde o início,
                    investimos em equipe técnica de excelência, tecnologia de
                    ponta e gestão profissional.
                  </p>
                  <p>
                    Ao longo de mais de uma década, expandimos nossa atuação
                    para infraestrutura urbana, obras industriais, instalações
                    especiais e gestão de projetos complexos, atendendo clientes
                    públicos e privados em Pernambuco e em todo o Brasil.
                  </p>
                  <p>
                    Hoje, somos referência regional em engenharia industrial e
                    construção civil, com mais de 100 projetos entregues e uma
                    reputação construída sobre qualidade, segurança e
                    cumprimento de prazos.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Missão / Visão */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-[#070912]">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[#1028B9]/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="premium-card h-full p-8 lg:p-10 rounded-2xl">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1BA9FF]/15 to-[#1028B9]/15 border border-[#1BA9FF]/25 items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-[#1BA9FF]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Missão
                </h3>
                <p className="text-base text-white/60 leading-relaxed">
                  Entregar soluções de engenharia e construção com excelência,
                  inovação e segurança, superando as expectativas dos clientes e
                  contribuindo para o desenvolvimento socioeconômico das
                  comunidades onde atuamos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="premium-card h-full p-8 lg:p-10 rounded-2xl">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1BA9FF]/15 to-[#1028B9]/15 border border-[#1BA9FF]/25 items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-[#1BA9FF]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Visão
                </h3>
                <p className="text-base text-white/60 leading-relaxed">
                  Ser referência nacional em engenharia e infraestrutura,
                  reconhecida pela qualidade técnica, inovação construtiva e
                  responsabilidade socioambiental, ampliando fronteiras e
                  atendendo clientes em todo o Brasil.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Nossos Valores"
            title={
              <>
                Princípios que guiam
                <br className="hidden sm:block" /> cada projeto
              </>
            }
            description="Valores sólidos que orientam nossas decisões, relações e entregas no dia a dia da ENGEFRANCE."
          />

          <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <RevealItem key={v.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="premium-card group h-full p-6 rounded-2xl"
                  >
                    <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-to-br from-[#1BA9FF]/15 to-[#1028B9]/10 border border-[#1BA9FF]/20 items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-[#1BA9FF]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#1BA9FF] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {v.description}
                    </p>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Estrutura Operacional */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-[#070912]">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#1BA9FF]/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Estrutura Operacional"
            title={
              <>
                Infraestrutura que sustenta
                <br className="hidden sm:block" /> grandes obras
              </>
            }
            description="Contamos com equipe técnica, equipamentos e estrutura próprios para garantir excelência em todas as etapas."
          />

          <RevealStagger className="mt-14 grid gap-5 md:grid-cols-2">
            {STRUCTURE.map((s, i) => (
              <RevealItem key={s.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="premium-card group relative h-full p-7 rounded-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 font-heading text-7xl font-extrabold text-white/[0.04] select-none p-4">
                    0{i + 1}
                  </div>
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 rounded-xl glass-light border border-white/10 items-center justify-center mb-5 group-hover:border-[#1BA9FF]/40 transition-colors">
                      <Building2 className="h-5 w-5 text-[#1BA9FF]" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#1BA9FF] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <HomeDifferentials />

      {/* Custom CTA for Empresa */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1028B9] via-[#0B1020] to-[#050505]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1BA9FF]/30 blur-3xl" />

            <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-20 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
                Faça parte da próxima grande obra da ENGEFRANCE
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/65 max-w-2xl mx-auto">
                Entre em contato com nossa equipe e descubra como podemos
                transformar seu projeto em uma entrega de excelência.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setPage("contato")}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[#050505] hover:bg-[#1BA9FF] hover:text-white transition-colors px-7 py-4 rounded-md font-heading font-semibold tracking-wide text-sm"
                >
                  ENTRAR EM CONTATO
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="mt-6 text-xs text-white/45 uppercase tracking-[0.18em] font-heading">
                {CONTACT.city}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
