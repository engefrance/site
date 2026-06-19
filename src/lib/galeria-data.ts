// ╔══════════════════════════════════════════════════════════════════════╗
// ║                  GALERIA DE FOTOS — ENGEFRANCE                       ║
// ║                                                                      ║
// ║  PARA ADICIONAR FOTOS REAIS DA EMPRESA:                              ║
// ║                                                                      ║
// ║  1. Coloque os arquivos de imagem em:  /public/uploads/galeria/      ║
// ║     (ex: obra-recife-01.jpg, equipe-tecnica.jpg, etc.)              ║
// ║                                                                      ║
// ║  2. Edite o array GALLERY_PHOTOS abaixo adicionando objetos com:     ║
// ║     - id: identificador único (ex: "foto-01")                        ║
// ║     - src: caminho da imagem (ex: "/uploads/galeria/minha-foto.jpg") ║
// ║     - title: título curto exibido na legenda                         ║
// ║     - category: uma das categorias em GALLERY_CATEGORIES             ║
// ║     - description: descrição curta (opcional)                        ║
// ║     - year: ano da foto (opcional)                                   ║
// ║                                                                      ║
// ║  3. Os tamanhos ideais são 1600x1200 (4:3) ou 1600x900 (16:9)        ║
// ║     para melhor qualidade no grid e no lightbox.                     ║
// ╚══════════════════════════════════════════════════════════════════════╝

export type GalleryCategory =
  | "Obras"
  | "Equipe"
  | "Equipamentos"
  | "Eventos"
  | "Instalações"
  | "Documentos";

export const GALLERY_CATEGORIES: ("Todas" | GalleryCategory)[] = [
  "Todas",
  "Obras",
  "Equipe",
  "Equipamentos",
  "Instalações",
  "Eventos",
  "Documentos",
];

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: GalleryCategory;
  description?: string;
  year?: string;
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  FOTOS DE EXEMPLO — substitua pelas fotos reais da Engefrance        ║
// ║                                                                      ║
// ║  Atualmente usando imagens do Unsplash para demonstração.            ║
// ║  Troque os valores de "src" pelos caminhos das suas fotos reais      ║
// ║  em /public/uploads/galeria/                                         ║
// ╚══════════════════════════════════════════════════════════════════════╝

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ─── OBRAS ────────────────────────────────────────────────────────────
  {
    id: "obra-01",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    title: "Construção de torre corporativa",
    category: "Obras",
    description: "Estrutura em concreto armado com 22 pavimentos em Recife-PE.",
    year: "2023",
  },
  {
    id: "obra-02",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    title: "Torre corporativa concluída",
    category: "Obras",
    description: "Vista final da edificação com fachada curtain-wall.",
    year: "2023",
  },
  {
    id: "obra-03",
    src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80",
    title: "Galpão industrial em execução",
    category: "Obras",
    description: "Montagem de estrutura metálica com 24m de vão livre.",
    year: "2022",
  },
  {
    id: "obra-04",
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80",
    title: "Construção de hospital regional",
    category: "Obras",
    description: "Estrutura de 18.000 m² com centro cirúrgico e UTI.",
    year: "2023",
  },
  {
    id: "obra-05",
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    title: "Centro logístico em acabamento",
    category: "Obras",
    description: "Galpão com 50 docas e piso de alto desempenho.",
    year: "2023",
  },
  {
    id: "obra-06",
    src: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1600&q=80",
    title: "Ponte estaiada sobre Rio Capibaribe",
    category: "Obras",
    description: "Obra de 320 m com torre de 65 m de altura.",
    year: "2024",
  },

  // ─── EQUIPE ───────────────────────────────────────────────────────────
  {
    id: "equipe-01",
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    title: "Equipe técnica em obra",
    category: "Equipe",
    description: "Engenheiros e técnicos durante vistoria de fundações.",
    year: "2024",
  },
  {
    id: "equipe-02",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
    title: "Reunião de planejamento",
    category: "Equipe",
    description: "Gestão de projetos em andamento com BIM 4D.",
    year: "2024",
  },
  {
    id: "equipe-03",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    title: "Equipe de obra em atividade",
    category: "Equipe",
    description: "Profissionais em conformidade com NR-18.",
    year: "2023",
  },

  // ─── EQUIPAMENTOS ─────────────────────────────────────────────────────
  {
    id: "equip-01",
    src: "https://images.unsplash.com/photo-1545259354-04f6a8f0c825?auto=format&fit=crop&w=1600&q=80",
    title: "Guindaste em operação",
    category: "Equipamentos",
    description: "Maquinário próprio para obras de grande porte.",
    year: "2023",
  },
  {
    id: "equip-02",
    src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1600&q=80",
    title: "Retroescavadeira em serviço",
    category: "Equipamentos",
    description: "Equipe de terraplanagem em obra de urbanização.",
    year: "2023",
  },
  {
    id: "equip-03",
    src: "https://images.unsplash.com/photo-1581094271901-8022df4d6f4a?auto=format&fit=crop&w=1600&q=80",
    title: "Parque de equipamentos",
    category: "Equipamentos",
    description: "Manutenção preventiva em frota própria.",
    year: "2024",
  },

  // ─── INSTALAÇÕES ──────────────────────────────────────────────────────
  {
    id: "inst-01",
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80",
    title: "Instalação elétrica de média tensão",
    category: "Instalações",
    description: "Cubículos SF6 e sistema de proteção integrado.",
    year: "2022",
  },
  {
    id: "inst-02",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    title: "Quadro elétrico industrial",
    category: "Instalações",
    description: "Comissionamento de painel de comando industrial.",
    year: "2023",
  },
  {
    id: "inst-03",
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=80",
    title: "Sistema de combate a incêndio",
    category: "Instalações",
    description: "Rede de hidrantes e sprinklers em edifício comercial.",
    year: "2024",
  },

  // ─── EVENTOS ──────────────────────────────────────────────────────────
  {
    id: "evento-01",
    src: "https://images.unsplash.com/photo-1597392582469-a697322d5c16?auto=format&fit=crop&w=1600&q=80",
    title: "Inauguração de obra",
    category: "Eventos",
    description: "Evento de entrega ao cliente em Recife-PE.",
    year: "2023",
  },
  {
    id: "evento-02",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    title: "Treinamento de segurança",
    category: "Eventos",
    description: "Capacitação da equipe em conformidade com NR-18.",
    year: "2024",
  },

  // ─── DOCUMENTOS ───────────────────────────────────────────────────────
  {
    id: "doc-01",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    title: "Certificações e licenças",
    category: "Documentos",
    description: "Documentação técnica e certificações da empresa.",
    year: "2024",
  },
  {
    id: "doc-02",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    title: "Sede administrativa",
    category: "Documentos",
    description: "Escritório da Engefrance em Recife-PE.",
    year: "2024",
  },
];
