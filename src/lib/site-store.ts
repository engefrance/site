import { create } from "zustand";

export type PageKey =
  | "inicio"
  | "empresa"
  | "servicos"
  | "portfolio"
  | "galeria"
  | "contato";

interface SiteState {
  page: PageKey;
  setPage: (p: PageKey) => void;
  // For sub-navigation (e.g., open specific service / portfolio detail)
  selectedService: string | null;
  setSelectedService: (s: string | null) => void;
  selectedProject: string | null;
  setSelectedProject: (s: string | null) => void;
  // open quote modal
  quoteOpen: boolean;
  setQuoteOpen: (b: boolean) => void;
}

export const useSite = create<SiteState>((set) => ({
  page: "inicio",
  setPage: (p) => {
    set({ page: p });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  },
  selectedService: null,
  setSelectedService: (s) => set({ selectedService: s }),
  selectedProject: null,
  setSelectedProject: (s) => set({ selectedProject: s }),
  quoteOpen: false,
  setQuoteOpen: (b) => set({ quoteOpen: b }),
}));

// Contact constants
export const CONTACT = {
  email: "servicos@engefrance.com.br",
  whatsappDisplay: "(81) 99828-4948",
  whatsappNumber: "5581998284948",
  site: "www.engefrance.com.br",
  city: "Recife – Pernambuco – Brasil",
  cnpj: "21.211.907/0001-70",
  companyName: "ENGEFRANCE Engenharia Industrial e Construção Civil",
  whatsappMessage:
    "Olá, gostaria de solicitar um orçamento para um projeto com a ENGEFRANCE.",
  // Telefones adicionais da empresa (CNPJ)
  phone1Display: "(81) 9953-4849",
  phone2Display: "(81) 9118-8540",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? CONTACT.whatsappMessage
  );
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

