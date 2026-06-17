"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useSite, whatsappLink, CONTACT } from "@/lib/site-store";

export function HomeCTA() {
  const { setQuoteOpen } = useSite();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1028B9] via-[#0B1020] to-[#050505]" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1BA9FF]/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#1028B9]/40 blur-3xl" />

          {/* Content */}
          <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full glass-light"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1BA9FF] animate-pulse" />
              <span className="text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-white/85">
                Pronto para começar?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]"
            >
              Vamos transformar seu projeto em uma obra de excelência
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-white/65 max-w-2xl mx-auto"
            >
              Fale com um especialista da ENGEFRANCE e receba uma proposta
              personalizada para o seu empreendimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button
                onClick={() => setQuoteOpen(true)}
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#050505] hover:bg-[#1BA9FF] hover:text-white transition-colors px-7 py-4 rounded-md font-heading font-semibold tracking-wide text-sm"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-outline-premium px-7 py-4 rounded-md font-heading font-semibold tracking-wide text-sm"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.whatsappDisplay}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
