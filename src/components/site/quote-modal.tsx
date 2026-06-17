"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useSite } from "@/lib/site-store";

const SERVICES = [
  "Construção Civil",
  "Infraestrutura",
  "Instalações",
  "Reformas e Acabamentos",
  "Administração de Obras",
  "Engenharia e Projetos",
  "Outro",
];

export function QuoteModal() {
  const { quoteOpen, setQuoteOpen } = useSite();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulação de envio do formulário.
    // Em produção, substituir por chamada à API / serviço de e-mail real.
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setQuoteOpen(false);
        setStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 2400);
    }, 1400);
  };

  return (
    <AnimatePresence>
      {quoteOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-[#050505]/85 backdrop-blur-md"
            onClick={() => setQuoteOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl glass-strong rounded-2xl overflow-hidden max-h-[92vh] overflow-y-auto scrollbar-premium"
          >
            {/* Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#0B1020] via-[#0B1020] to-[#1028B9]/40 border-b border-white/10">
              <button
                onClick={() => setQuoteOpen(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.2em]">
                Solicitar Orçamento
              </p>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Vamos transformar seu projeto em realidade
              </h2>
              <p className="mt-2 text-sm text-white/60 max-w-md">
                Preencha o formulário e nossa equipe de engenharia entrará em
                contato em até 24 horas úteis.
              </p>
            </div>

            {/* Body */}
            {status === "sent" ? (
              <div className="p-10 sm:p-14 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#1BA9FF]/15 border border-[#1BA9FF]/30 flex items-center justify-center glow-blue">
                  <CheckCircle2 className="h-8 w-8 text-[#1BA9FF]" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-white">
                  Solicitação enviada com sucesso!
                </h3>
                <p className="mt-2 text-sm text-white/60 max-w-sm">
                  Recebemos seu pedido de orçamento. Um especialista da
                  ENGEFRANCE entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome completo" name="nome" required />
                  <Field label="Empresa" name="empresa" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Telefone / WhatsApp" name="telefone" required />
                  <Field label="E-mail" name="email" type="email" required />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white/70 mb-1.5">
                    Tipo de Serviço
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
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    required
                    placeholder="Descreva seu projeto, prazo estimado e localização..."
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
                <p className="text-center text-[11px] text-white/40">
                  Ao enviar, você concorda em ser contatado pela equipe
                  ENGEFRANCE.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
