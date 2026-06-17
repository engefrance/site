import {
  Building2,
  Network,
  Cable,
  PaintBucket,
  ClipboardList,
  DraftingCompass,
  ShieldCheck,
  Target,
  Users,
  HardHat,
  Award,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  benefits: string[];
  differentials: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: "construcao-civil",
    title: "Construção Civil",
    icon: Building2,
    short:
      "Execução de obras comerciais, industriais e institucionais com padrão de excelência.",
    description:
      "Atuamos na execução completa de obras civis — comerciais, industriais, institucionais e residenciais — desde a fundação até a entrega final. Aplicamos metodologias construtivas modernas, controle de qualidade rigoroso e gestão integrada de obra para garantir prazos, custos e padrão técnico superior.",
    benefits: [
      "Equipe técnica especializada em todas as etapas construtivas",
      "Controle de qualidade em conformidade com a NBR 15575",
      "Gestão integrada de cronograma, custos e suprimentos",
      "Materiais certificados com rastreabilidade completa",
    ],
    differentials: [
      "Engenheiros civis com registro no CREA responsáveis por obra",
      "Acompanhamento digital de obra em tempo real",
      "Segurança do trabalho em conformidade com NR-18",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "infraestrutura",
    title: "Infraestrutura",
    icon: Network,
    short:
      "Pavimentação, drenagem, saneamento e obras de infraestrutura urbana e industrial.",
    description:
      "Projetos e execução de obras de infraestrutura urbana e industrial: pavimentação asfáltica e concreta, sistemas de drenagem pluvial, redes de abastecimento de água, esgotamento sanitário e obras de contenção. Atendemos órgãos públicos e clientes privados com rigor técnico e cumprimento de prazos.",
    benefits: [
      "Execução de obras de grande porte com equipamentos próprios",
      "Atendimento às normas DNIT, ABNT e especificações de concessionárias",
      "Equipe experiente em obras lineares e urbanas",
      "Logística e canteiro otimizados para minimizar impactos",
    ],
    differentials: [
      "Experiência com licitações públicas e convênios",
      "Controle topográfico e laboratório de tecnologia de materiais",
      "Compromisso ambiental e social em todas as frentes",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "instalacoes",
    title: "Instalações",
    icon: Cable,
    short:
      "Instalações elétricas, hidráulicas, SP e sistemas especiais para edifícios e indústrias.",
    description:
      "Projetos e instalações elétricas, hidráulicas, sanitárias, de gases medicinais, combate a incêndio, ar-condicionado e automação predial. Atendemos edifícios comerciais, industriais, hospitais e centros de dados com mão de obra qualificada e certificações específicas de cada sistema.",
    benefits: [
      "Equipes certificadas para sistemas de baixa, média e alta tensão",
      "Atendimento à NBR 5410, NBR 13532 e normas específicas",
      "Integração com sistemas de automação e BMS",
      "Comissionamento e medições elétricas de precisão",
    ],
    differentials: [
      "Instalações SPDA certificadas e laudos técnicos",
      "Manutenção preditiva, preventiva e corretiva após entrega",
      "Suporte técnico 24/7 para sistemas críticos",
    ],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "reformas-acabamentos",
    title: "Reformas e Acabamentos",
    icon: PaintBucket,
    short:
      "Reformas corporativas, industriais e residenciais com acabamento premium.",
    description:
      "Executamos reformas completas e serviços de acabamento premium para escritórios, indústrias, lojas e imóveis residenciais. Trabalhamos com marcenaria, gesso, pintura especial, revestimentos, pisos técnicos e mobiliário corporativo, sempre com foco em prazo, limpeza e zero interferência na operação do cliente.",
    benefits: [
      "Equipe própria de acabamento com supervisão em tempo integral",
      "Atendimento noturno e em fins de semana para ambientes em operação",
      "Acabamentos premium com fornecedores certificados",
      "Gerenciamento de resíduos e limpeza diária de obra",
    ],
    differentials: [
      "Projetos de interiores integrados à execução",
      "Controle de qualidade visual com checklist fotográfico",
      "Garantia estendida de serviços de acabamento",
    ],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "administracao-obras",
    title: "Administração de Obras",
    icon: ClipboardList,
    short:
      "Gestão integrada de cronograma, custos, suprimentos e qualidade da obra.",
    description:
      "Assumimos a administração técnica, financeira e contratual da sua obra, com equipe de gestão experiente, metodologias consagradas (PMI) e ferramentas digitais de controle. Garantimos previsibilidade de prazo e custo, conformidade contratual e transparência total em relatórios periódicos para o cliente.",
    benefits: [
      "Gestão baseada em PMBOK com KPIs de prazo, custo e qualidade",
      "Painel digital de obra com acesso 24/7 para o cliente",
      "Controle de suprimentos, contratos e medições",
      "Relatórios fotográficos e financeiros quinzenais",
    ],
    differentials: [
      "Comitê de gestão de riscos em todas as fases da obra",
      "Equipe de planejamento com experiência em obras complexas",
      "Integração com BIM e modelagem 4D para cronograma",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "engenharia-projetos",
    title: "Engenharia e Projetos",
    icon: DraftingCompass,
    short:
      "Projetos estruturais, arquitetônicos, elétricos, hidráulicos e de fundações.",
    description:
      "Desenvolvemos projetos completos de engenharia — arquitetônicos, estruturais (concreto, metálica e mista), fundações, instalações elétricas e hidrossanitárias, combate a incêndio e eficiência energética. Trabalhamos com BIM, modelagem paramétrica e compatibilização multidisciplinar para garantir excelência construtiva.",
    benefits: [
      "Equipe multidisciplinar com ENG, MSc e doutores",
      "Modelagem BIM (Revit, Navisworks) com compatibilização total",
      "Análises estruturais avançadas (elementos finitos)",
      "Aprovação em órgãos públicos e concessionárias",
    ],
    differentials: [
      "Memoriais de cálculo e especificações técnicas detalhadas",
      "Consultoria em eficiência energética e sustentabilidade",
      "Pós-entrega com acompanhamento de desempenho da edificação",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
];

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  scope: string[];
  services: string[];
  results: string;
}

export type ProjectCategory =
  | "Construção Civil"
  | "Infraestrutura"
  | "Industrial"
  | "Instalações"
  | "Engenharia";

export const PROJECTS: Project[] = [
  {
    slug: "torre-corporativa-recife",
    name: "Torre Corporativa Boa Viagem",
    category: "Construção Civil",
    location: "Recife – PE",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Construção de torre corporativa de 22 pavimentos com 38.000 m² de área construída, contemplando lajes inteligentes, fachada curtain-wall, automação predial e certificação LEED Gold.",
    scope: [
      "Fundações profundas em estacas escavadas",
      "Estrutura em concreto armado com lajes cogumelo",
      "Fachada curtain-wall com desempenho termoacústico",
      "Instalações elétricas, hidráulicas e SPDA",
      "Sistemas de automação predial (BMS)",
    ],
    services: [
      "Construção Civil",
      "Engenharia e Projetos",
      "Administração de Obras",
    ],
    results:
      "Entrega em 28 meses, 12% abaixo do orçamento, certificação LEED Gold e zero acidente com afastamento registrado.",
  },
  {
    slug: "parque-industrial-cabo",
    name: "Parque Industrial Cabo de Santo Agostinho",
    category: "Industrial",
    location: "Cabo de Santo Agostinho – PE",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Implantação de galpão industrial de 14.500 m² para indústria automotiva, incluindo fundações, estrutura metálica, piso de alto desempenho e instalações elétricas de média tensão.",
    scope: [
      "Fundações em estacas pré-moldadas",
      "Estrutura metálica com 24m de vão livre",
      "Piso industrial com 8.000 psi e planicidade FF/FL 60",
      "Subestação de 2 MVA e rede de média tensão",
      "Sistema de combate a incêndio (sprinklers e hidrantes)",
    ],
    services: [
      "Construção Civil",
      "Infraestrutura",
      "Instalações",
      "Engenharia e Projetos",
    ],
    results:
      "Prazo de execução em 11 meses, ampliação futura prevista e cliente operando com 100% de capacidade prevista.",
  },
  {
    slug: "pavimentacao-br-101",
    name: "Duplicação BR-101 – Trecho PE",
    category: "Infraestrutura",
    location: "Pernambuco – BR",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1597392582469-a697322d5c16?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Duplicação de 18 km de rodovia federal com recapeamento asfáltico, obras de arte correntes, drenagem profunda, sinalização vertical e horizontal e dispositivos de segurança.",
    scope: [
      "Movimentação de 240.000 m³ de terra",
      "Recapagem CBUQ 5 cm em 36 km de pistas",
      "12 obras de arte correntes (bueiros metálicos e celulares)",
      "Drenagem profunda com 8 km de canais revestidos",
      "Sinalização viária horizontal e vertical",
    ],
    services: ["Infraestrutura", "Administração de Obras"],
    results:
      "Conclusão antecipada em 45 dias, índice de acidente zero e nota máxima na fiscalização do DNIT.",
  },
  {
    slug: "hospital-regional-caruaru",
    name: "Hospital Regional Caruaru",
    category: "Construção Civil",
    location: "Caruaru – PE",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Construção de hospital regional de 120 leitos com 18.000 m², contemplando centro cirúrgico, UTI, imagem, laboratório e infraestrutura completa de gases medicinais e climatização.",
    scope: [
      "Estrutura em concreto armado com lajes maciças",
      "Fachada com painéis sandwich e esquadrias de alumínio",
      "Instalações de gases medicinais (oxigênio, vácuo, ar)",
      "Climatização com sistema VRF e UMA 100%",
      "Automação predial e cabeamento estruturado",
    ],
    services: [
      "Construção Civil",
      "Instalações",
      "Reformas e Acabamentos",
      "Engenharia e Projetos",
    ],
    results:
      "Entrega em 24 meses, atendimento 100% às resoluções da ANVISA e capacidade para 5.000 atendimentos mensais.",
  },
  {
    slug: "subestacao-industrial-suape",
    name: "Subestação Industrial Suape",
    category: "Instalações",
    location: "Ipojuca – PE",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Implantação de subestação industrial 138 kV / 13.8 kV com 25 MVA, suprindo parque industrial do Complexo de Suape com redundância e supervisão digital.",
    scope: [
      "Proteção e controle com IEDs de última geração",
      "Pátio de 138 kV com 4 seções de barra",
      "Transformador 25 MVA com comutação sob carga",
      "Cubículos de média tensão a gás SF6",
      "Sistema SCADA integrado à sala de operações",
    ],
    services: ["Instalações", "Engenharia e Projetos", "Administração de Obras"],
    results:
      "Energização em 9 meses, disponibilidade 99,98% no primeiro ano e conformidade total com os procedimentos de rede da ONS.",
  },
  {
    slug: "ponte-rio-capibaribe",
    name: "Ponte Rio Capibaribe",
    category: "Engenharia",
    location: "Recife – PE",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Projeto e execução de ponte estaiada de 320 m sobre o Rio Capibaribe, com torre de 65 m de altura e vão central de 180 m, integrando mobilidade urbana ao entorno metropolitano.",
    scope: [
      "Estudos de traçado e análise de alternativas",
      "Projeto estrutural de ponte estaiada com torre em concreto",
      "Fundações profundas em estacas escavadas de 1.500 mm",
      "Execução das obras civis e instalação dos estais",
      "Sistema de monitoramento estrutural (SHM)",
    ],
    services: ["Engenharia e Projetos", "Infraestrutura", "Construção Civil"],
    results:
      "Obra premiada pelo IAB-PE, fluxo de 35 mil veículos/dia previstos e monitoramento contínuo em tempo real da integridade estrutural.",
  },
  {
    slug: "centro-logistico-olinda",
    name: "Centro Logístico Olinda",
    category: "Construção Civil",
    location: "Olinda – PE",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Construção de centro logístico com 22.000 m² de área coberta, docas automatizadas, escritórios e pátio para 80 carretas, atendendo operação de e-commerce regional.",
    scope: [
      "Galpão com estrutura metálica pré-fabricada",
      "Piso de alto desempenho para tráfego de empilhadeiras",
      "50 docas com níveladores hidráulicos",
      "Sistema de combate a incêndio por ESFR",
      "Subestação e grupo gerador 800 kVA",
    ],
    services: [
      "Construção Civil",
      "Instalações",
      "Infraestrutura",
      "Administração de Obras",
    ],
    results:
      "Entrega em 10 meses, taxa de ocupação de 100% em 60 dias e operação logística 24/7.",
  },
  {
    slug: "tratamento-esgoto-jaboatao",
    name: "ETE Jaboatão dos Guararapes",
    category: "Infraestrutura",
    location: "Jaboatão dos Guararapes – PE",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Construção de Estação de Tratamento de Esgoto com capacidade para 600 L/s, incluindo tratamento secundário por lodos ativados, desidratação de lodo e lançamento controlado.",
    scope: [
      "Obras civis de reatores, decantadores e tanques",
      "Sistemas de aeração e recirculação",
      "Sistema elétrico com redundância e grupo gerador",
      "Automação e telemetria completa",
      "Lançamento em corpo hídrico com monitoramento",
    ],
    services: ["Infraestrutura", "Instalações", "Engenharia e Projetos"],
    results:
      "População beneficiada de 280 mil habitantes, atendimento 100% aos padrões de lançamento do CONAMA 357.",
  },
  {
    slug: "reforma-banco-sede",
    name: "Reforma Sede Bancária Recife",
    category: "Instalações",
    location: "Recife – PE",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Reforma completa de 8 andares de sede bancária em operação, com substituição de instalações, modernização de espaços de trabalho e adequação às normas de acessibilidade.",
    scope: [
      "Demolição seletiva e gestão de resíduos classe A",
      "Substituição de instalações elétricas e hidráulicas",
      "Climatização VRF e dutos em silencioso",
      "Revestimentos, marcenaria e mobiliário corporativo",
      "Atendimento às normas de acessibilidade (ABNT NBR 9050)",
    ],
    services: [
      "Reformas e Acabamentos",
      "Instalações",
      "Administração de Obras",
    ],
    results:
      "Execução em ambiente operante, zero impacto na operação bancária e entrega antecipada em 15 dias.",
  },
];

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    icon: Target,
    title: "Experiência Técnica",
    description:
      "Mais de uma década entregando obras complexas com engenheiros especialistas em cada disciplina.",
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos",
    description:
      "Metodologia PMBOK, KPIs claros e painel digital 24/7 para total previsibilidade de prazo e custo.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais certificados, com registro no CREA e formação contínua em tecnologias construtivas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Operacional",
    description:
      "Programa de segurança em conformidade com NR-18, com taxa de acidentabilidade próxima de zero.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description:
      "Controle de qualidade em todas as etapas, com laboratório próprio e rastreabilidade de materiais.",
  },
  {
    icon: Clock,
    title: "Cumprimento de Prazos",
    description:
      "Cronograma detalhado, planejamento 4D e equipe dedicada à antecipação de gargalos construtivos.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Levantamento de necessidades técnicas, restrições e objetivos do cliente para definir o escopo.",
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Cronograma físico-financeiro, plano de suprimentos, plano de segurança e equipe técnica.",
  },
  {
    step: "03",
    title: "Projeto",
    description:
      "Projetos executivos multidisciplinares compatibilizados em BIM com memória de cálculo completa.",
  },
  {
    step: "04",
    title: "Execução",
    description:
      "Construção com equipe própria, supervisão diária e gestão integrada de qualidade e segurança.",
  },
  {
    step: "05",
    title: "Controle de Qualidade",
    description:
      "Ensaios laboratoriais, checklist fotográfico e inspeções de recebimento em todas as etapas.",
  },
  {
    step: "06",
    title: "Entrega",
    description:
      "Manual do proprietário, AS-BUILT, treinamento de operação e suporte técnico pós-entrega.",
  },
];
