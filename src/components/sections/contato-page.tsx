"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
  Building2,
  Linkedin,
  Instagram,
  Facebook,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { useSite, CONTACT, whatsappLink } from "@/lib/site-store";

const SERVICES = [
  "Construção Civil",
  "Infraestrutura",
  "Instalações",
  "Reformas e Acabamentos",
  "Administração de Obras",
  "Engenharia e Projetos",
  "Outro",
];

export function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulação de envio do formulário.
    // Em produção, substituir por chamada à API / serviço de e-mail real.
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setStatus("idle");
      }, 3500);
    }, 1400);
  };

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Entre em <span className="gradient-text">contato</span>
          </>
        }
        subtitle="Estamos prontos para transformar seu projeto em realidade. Fale com nossa equipe de engenharia e receba uma proposta personalizada."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left: Form */}
            <Reveal className="lg:col-span-7">
              <div className="premium-card p-6 sm:p-8 lg:p-10 rounded-2xl">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1BA9FF]" />
                  <span className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                    Formulário de Orçamento
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  Solicite uma proposta
                </h2>
                <p className="text-sm text-white/55 mb-8">
                  Preencha o formulário e um especialista entrará em contato em
                  até 24 horas úteis.
                </p>

                {status === "sent" ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-[#1BA9FF]/15 border border-[#1BA9FF]/30 flex items-center justify-center glow-blue">
                      <CheckCircle2 className="h-8 w-8 text-[#1BA9FF]" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-white">
                      Solicitação enviada!
                    </h3>
                    <p className="mt-2 text-sm text-white/60 max-w-sm">
                      Recebemos sua mensagem. Nossa equipe entrará em contato em
                      breve. Obrigado pela confiança na ENGEFRANCE.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Nome" name="nome" required />
                      <Field label="Empresa" name="empresa" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field
                        label="Telefone"
                        name="telefone"
                        type="tel"
                        required
                      />
                      <Field
                        label="E-mail"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white/70 mb-1.5">
                        Tipo de Serviço <span className="text-[#1BA9FF]">*</span>
                      </label>
                      <select
                        name="servico"
                        required
                        defaultValue=""
                        className="w-full h-11 rounded-lg bg-white/5 border border-white/15 px-3 text-sm text-white focus:outline-none focus:border-[#1BA9FF] focus:ring-2 focus:ring-[#1BA9FF]/20 transition"
                      >
                        <option value="" disabled className="bg-[#0B1020]">
                          Selecione um serviço
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-[#0B1020]">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white/70 mb-1.5">
                        Mensagem <span className="text-[#1BA9FF]">*</span>
                      </label>
                      <textarea
                        name="mensagem"
                        rows={5}
                        required
                        placeholder="Descreva seu projeto, prazo estimado, localização e principais necessidades técnicas..."
                        className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BA9FF] focus:ring-2 focus:ring-[#1BA9FF]/20 transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary-premium w-full py-4 rounded-lg font-heading font-semibold tracking-wide text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          ENVIANDO...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          SOLICITAR PROPOSTA
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Right: Info */}
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <div className="premium-card p-6 rounded-2xl">
                  <h3 className="font-heading text-lg font-bold text-white mb-5">
                    Informações Corporativas
                  </h3>
                  <ul className="space-y-4">
                    <InfoRow icon={Building2} label="Empresa">
                      {CONTACT.companyName}
                    </InfoRow>
                    <InfoRow icon={Building2} label="CNPJ">
                      {CONTACT.cnpj}
                    </InfoRow>
                    <InfoRow icon={MapPin} label="Localização">
                      {CONTACT.city}
                    </InfoRow>
                    <InfoRow icon={Globe} label="Site">
                      <a
                        href={`https://${CONTACT.site}`}
                        className="hover:text-[#1BA9FF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {CONTACT.site}
                      </a>
                    </InfoRow>
                    <InfoRow icon={Mail} label="E-mail">
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="hover:text-[#1BA9FF] transition-colors break-all"
                      >
                        {CONTACT.email}
                      </a>
                    </InfoRow>
                    <InfoRow icon={Phone} label="WhatsApp">
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1BA9FF] transition-colors"
                      >
                        {CONTACT.whatsappDisplay}
                      </a>
                    </InfoRow>
                    <InfoRow icon={Phone} label="Telefones">
                      {CONTACT.phone1Display} &middot; {CONTACT.phone2Display}
                    </InfoRow>
                    <InfoRow icon={Clock} label="Atendimento">
                      Seg. a Sex. 08h às 18h
                    </InfoRow>
                  </ul>

                  {/* Social */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">
                      Redes Sociais
                    </p>
                    <div className="flex gap-2">
                      {[
                        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                        { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
                        { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/engefrance" },
                      ].map(({ icon: Icon, label, href }) => (
                        <motion.a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          whileHover={{ y: -2 }}
                          className="h-10 w-10 rounded-full glass-light border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#1BA9FF]/50 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block premium-card p-6 rounded-2xl group hover:border-[#25D366]/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white group-hover:text-[#25D366] transition-colors">
                        Atendimento imediato
                      </p>
                      <p className="text-xs text-white/55">
                        Fale agora pelo WhatsApp
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Map */}
          <Reveal delay={0.15} className="mt-10">
            <div className="rounded-2xl overflow-hidden border border-white/10 glass-light">
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Localização
                  </h3>
                  <p className="text-sm text-white/55 mt-1">
                    Recife – Pernambuco – Brasil
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Recife+Pernambuco+Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-premium inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-heading font-semibold tracking-wide text-xs"
                >
                  <MapPin className="h-4 w-4" />
                  ABRIR NO MAPA
                </a>
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#0B1020]">
                <iframe
                  title="Mapa ENGEFRANCE Recife"
                  src="https://www.google.com/maps?q=Recife%2C%20Pernambuco%2C%20Brasil&z=12&output=embed"
                  className="absolute inset-0 h-full w-full grayscale-[40%] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white/70 mb-1.5">
        {label} {required && <span className="text-[#1BA9FF]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full h-11 rounded-lg bg-white/5 border border-white/15 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BA9FF] focus:ring-2 focus:ring-[#1BA9FF]/20 transition"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="h-9 w-9 shrink-0 rounded-lg bg-[#1BA9FF]/10 border border-[#1BA9FF]/20 flex items-center justify-center">
        <Icon className="h-4 w-4 text-[#1BA9FF]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-[0.18em] font-heading text-white/45">
          {label}
        </p>
        <p className="text-sm text-white/80 mt-0.5 break-words">{children}</p>
      </div>
    </li>
  );
}
