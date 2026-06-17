"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "./logo";
import { useSite, CONTACT, whatsappLink, type PageKey } from "@/lib/site-store";

const SERVICES_LINKS = [
  "Construção Civil",
  "Infraestrutura",
  "Instalações",
  "Reformas e Acabamentos",
  "Administração de Obras",
  "Engenharia e Projetos",
];

export function Footer() {
  const { setPage, setQuoteOpen } = useSite();

  const go = (p: PageKey) => setPage(p);

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#070912]">
      {/* Decorative top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1BA9FF]/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[60%] rounded-full bg-[#1028B9]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">
              Engenharia industrial e construção civil com excelência técnica,
              inovação e segurança. Soluções completas para clientes públicos e
              privados em Recife, Pernambuco e em todo o Brasil.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com" label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="lg:col-span-2">
            <FooterTitle>Navegação</FooterTitle>
            <ul className="space-y-3 mt-4">
              <FooterLink onClick={() => go("inicio")}>Início</FooterLink>
              <FooterLink onClick={() => go("empresa")}>Empresa</FooterLink>
              <FooterLink onClick={() => go("servicos")}>Serviços</FooterLink>
              <FooterLink onClick={() => go("portfolio")}>Portfólio</FooterLink>
              <FooterLink onClick={() => go("contato")}>Contato</FooterLink>
            </ul>
          </div>

          {/* Serviços */}
          <div className="lg:col-span-3">
            <FooterTitle>Serviços</FooterTitle>
            <ul className="space-y-3 mt-4">
              {SERVICES_LINKS.map((s) => (
                <FooterLink key={s} onClick={() => go("servicos")}>
                  {s}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <FooterTitle>Contato</FooterTitle>
            <ul className="space-y-4 mt-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-[#1BA9FF] shrink-0" />
                <span>{CONTACT.city}</span>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#1BA9FF] shrink-0" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-[#1BA9FF] shrink-0" />
                  <span>{CONTACT.whatsappDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Globe className="h-4 w-4 mt-0.5 text-[#1BA9FF] shrink-0" />
                <span>{CONTACT.site}</span>
              </li>
            </ul>

            <button
              onClick={() => setQuoteOpen(true)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-[#1BA9FF] hover:text-white transition-colors"
            >
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/45">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} {CONTACT.companyName}. Todos os direitos
            reservados.
          </p>
          <p className="leading-relaxed">
            CNPJ: {CONTACT.cnpj} &nbsp;&middot;&nbsp; Recife – Pernambuco – Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
      {children}
    </h4>
  );
}

function FooterLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className="text-sm text-white/55 hover:text-[#1BA9FF] transition-colors text-left"
      >
        {children}
      </button>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2 }}
      className="h-9 w-9 rounded-full glass-light flex items-center justify-center text-white/70 hover:text-white hover:border-[#1BA9FF]/50 transition-colors"
    >
      {children}
    </motion.a>
  );
}
