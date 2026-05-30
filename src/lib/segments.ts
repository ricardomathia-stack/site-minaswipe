export type SegmentIcon =
  | "meat"
  | "factory"
  | "hospital"
  | "hotel"
  | "utensils"
  | "chef"
  | "bread"
  | "shirt";

export type Segment = {
  slug: string;
  name: string;
  shortName: string;
  pain: string;
  benefit: string;
  overview: string;
  icon: SegmentIcon;
  challenges: string[];
  howWeHelp: string[];
  relevantSolutions: string[]; // slugs from SOLUTIONS
  seo: { title: string; description: string };
};

export const SEGMENTS: Segment[] = [
  {
    slug: "frigorificos",
    name: "Frigoríficos",
    shortName: "Frigoríficos",
    pain: "Riscos sanitários e fiscalização rigorosa",
    benefit:
      "Diminua riscos sanitários e mantenha padrões rigorosos de higiene com soluções profissionais para ambientes regulados.",
    overview:
      "Operações frigoríficas vivem sob auditoria constante. A Minas Wipe entrega soluções de higienização, sanitização e neutralização de odores compatíveis com os protocolos de inspeção sanitária e os requisitos de auditoria interna e externa.",
    icon: "meat",
    challenges: [
      "Auditoria sanitária frequente",
      "Resíduo orgânico em alta quantidade",
      "Odores característicos de processamento",
      "Padronização entre turnos diferentes",
    ],
    howWeHelp: [
      "Protocolos de sanitização adequados a SIF / SISBI",
      "Neutralizadores técnicos para áreas com matéria orgânica",
      "Detergentes alcalinos e ácidos para limpeza pesada",
      "Treinamento técnico da equipe de higienização",
    ],
    relevantSolutions: [
      "higienizacao-e-sanitizacao",
      "neutralizacao-de-odores",
      "produtos-de-limpeza-profissional",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Soluções de Higiene Profissional para Frigoríficos",
      description:
        "Sanitização, neutralização de odores e limpeza pesada adequadas a SIF / SISBI. Atendimento técnico para frigoríficos e abatedouros.",
    },
  },
  {
    slug: "industrias-de-alimentos",
    name: "Indústrias de alimentos",
    shortName: "Indústria de alimentos",
    pain: "Controle sanitário em larga escala",
    benefit:
      "Processos padronizados e produtos adequados para BPF, APPCC e auditorias de qualidade.",
    overview:
      "Indústrias de alimentos precisam de processos auditáveis, produtos com registro adequado e padrão de execução constante entre turnos e linhas. A Minas Wipe entrega o stack técnico completo — química, equipamento e protocolo.",
    icon: "factory",
    challenges: [
      "Adequação a BPF / APPCC / ISO 22000",
      "Padronização entre linhas e turnos",
      "Volume alto de limpeza diária",
      "Treinamento contínuo de equipe",
    ],
    howWeHelp: [
      "Química profissional com registros adequados",
      "Protocolos auditáveis por área de processo",
      "Equipamentos para padronização e redução de desperdício",
      "Consultoria técnica para implementação e ajustes",
    ],
    relevantSolutions: [
      "higienizacao-e-sanitizacao",
      "produtos-de-limpeza-profissional",
      "equipamentos-e-acessorios",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Higiene Profissional para Indústrias de Alimentos",
      description:
        "Soluções de limpeza e sanitização adequadas a BPF, APPCC e ISO 22000. Padrão auditável e custo otimizado.",
    },
  },
  {
    slug: "hospitais-e-clinicas",
    name: "Hospitais e clínicas",
    shortName: "Hospitais e clínicas",
    pain: "Segurança de pacientes e equipes",
    benefit:
      "Eleve a segurança de pacientes, equipes e visitantes com produtos e processos adequados para ambientes de saúde.",
    overview:
      "Ambientes de saúde exigem controle rigoroso de microrganismos, protocolos validados e produtos com registros adequados. A Minas Wipe entrega higienização hospitalar com produtos, equipamentos e treinamento alinhados ao padrão de segurança.",
    icon: "hospital",
    challenges: [
      "Controle de infecções hospitalares",
      "Padronização entre áreas críticas e não-críticas",
      "Produtos com registros Anvisa adequados",
      "Treinamento de equipes terceirizadas",
    ],
    howWeHelp: [
      "Sanitizantes com registro Anvisa e ação comprovada",
      "Protocolos de limpeza terminal e concorrente",
      "Linha completa de lavanderia hospitalar",
      "Consultoria técnica para SCIH",
    ],
    relevantSolutions: [
      "higienizacao-e-sanitizacao",
      "lavanderias",
      "produtos-de-limpeza-profissional",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Higiene Profissional para Hospitais e Clínicas",
      description:
        "Sanitização hospitalar, lavanderia hospitalar e protocolos de limpeza para áreas críticas. Atendimento consultivo para SCIH.",
    },
  },
  {
    slug: "hoteis-e-moteis",
    name: "Hotéis e motéis",
    shortName: "Hotelaria",
    pain: "Experiência do hóspede em jogo",
    benefit:
      "Garanta ambientes limpos, perfumados e bem cuidados para melhorar a experiência dos hóspedes.",
    overview:
      "Limpeza em hotelaria é parte da experiência percebida — afeta avaliação, recompra e reputação. A Minas Wipe entrega linha completa: limpeza de UH, lavanderia hoteleira, neutralização de odores e aromatização técnica.",
    icon: "hotel",
    challenges: [
      "Padrão de limpeza percebido pelo hóspede",
      "Velocidade de turnover de UH",
      "Lavanderia em volume alto",
      "Aromatização e odores em áreas comuns",
    ],
    howWeHelp: [
      "Linha completa de UH, banheiros e áreas comuns",
      "Lavanderia hoteleira otimizada por kg",
      "Neutralização técnica de odores",
      "Aromatização profissional",
    ],
    relevantSolutions: [
      "produtos-de-limpeza-profissional",
      "lavanderias",
      "neutralizacao-de-odores",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Higiene Profissional para Hotéis e Motéis",
      description:
        "Limpeza de UH, lavanderia hoteleira e neutralização de odores. Padrão profissional para elevar a experiência do hóspede.",
    },
  },
  {
    slug: "restaurantes-e-delivery",
    name: "Restaurantes e delivery",
    shortName: "Restaurantes",
    pain: "Cozinha, salão e operação em paralelo",
    benefit:
      "Otimize a limpeza da cozinha, salão e áreas de atendimento com produtos eficientes e seguros.",
    overview:
      "Restaurantes e operações de delivery precisam de limpeza pesada em horário curto, sem comprometer segurança alimentar. Linha técnica para cozinha, salão, banheiros, fritadeira, coifa e área de produção.",
    icon: "utensils",
    challenges: [
      "Janela curta de limpeza entre serviços",
      "Gordura e resíduo orgânico em volume",
      "Segurança alimentar e fiscalização",
      "Padrão consistente entre turnos",
    ],
    howWeHelp: [
      "Desengordurantes profissionais de alta performance",
      "Sanitizantes para áreas de manipulação de alimentos",
      "Protocolos de limpeza pesada e rotineira",
      "Consultoria técnica para BPF",
    ],
    relevantSolutions: [
      "produtos-de-limpeza-profissional",
      "higienizacao-e-sanitizacao",
      "equipamentos-e-acessorios",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Higiene Profissional para Restaurantes e Delivery",
      description:
        "Desengordurantes, sanitizantes e protocolos para cozinha, salão e áreas críticas. Padrão BPF e fiscalização.",
    },
  },
  {
    slug: "cozinhas-industriais",
    name: "Cozinhas industriais",
    shortName: "Cozinhas industriais",
    pain: "Volume alto, pouco tempo, alta exigência",
    benefit:
      "Limpeza pesada com performance, segurança e padronização profissional.",
    overview:
      "Cozinhas industriais — refeitórios, food service, escolas, empresas — operam em volume elevado e com auditoria sanitária. Stack técnico completo da Minas Wipe: química, equipamento, processo, treinamento.",
    icon: "chef",
    challenges: [
      "Volume diário muito alto",
      "Auditoria sanitária constante",
      "Diversidade de áreas: produção, distribuição, salão, banheiros",
      "Padrão entre turnos e equipes",
    ],
    howWeHelp: [
      "Linha completa para cozinha de larga escala",
      "Desengordurantes industriais de alta performance",
      "Equipamentos para reduzir consumo de químico",
      "Treinamento de equipe e padronização",
    ],
    relevantSolutions: [
      "produtos-de-limpeza-profissional",
      "higienizacao-e-sanitizacao",
      "equipamentos-e-acessorios",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Higiene Profissional para Cozinhas Industriais",
      description:
        "Solução técnica completa para cozinhas industriais — química, equipamento, processo e treinamento. Padrão BPF auditável.",
    },
  },
  {
    slug: "panificadoras",
    name: "Panificadoras",
    shortName: "Panificadoras",
    pain: "Resíduos, gorduras e farinha no dia a dia",
    benefit:
      "Soluções específicas para limpeza de fornos, masseiras e áreas de produção.",
    overview:
      "Panificadoras enfrentam combinação específica de resíduos: farinha aérea, gordura, resíduos orgânicos e calor constante. Linha técnica para fornos, masseiras, divisoras e áreas de produção.",
    icon: "bread",
    challenges: [
      "Resíduo de farinha em ambiente e equipamentos",
      "Gordura acumulada em fornos e equipamentos",
      "Áreas de produção e atendimento separadas",
      "Segurança alimentar e padrão sanitário",
    ],
    howWeHelp: [
      "Desengordurantes para fornos e equipamentos quentes",
      "Sanitizantes para áreas de produção",
      "Linha completa de limpeza geral",
      "Consultoria técnica para BPF",
    ],
    relevantSolutions: [
      "produtos-de-limpeza-profissional",
      "higienizacao-e-sanitizacao",
      "consultoria-tecnica",
      "equipamentos-e-acessorios",
    ],
    seo: {
      title: "Higiene Profissional para Panificadoras",
      description:
        "Soluções específicas para limpeza de fornos, masseiras e áreas de produção. Padrão BPF e segurança alimentar.",
    },
  },
  {
    slug: "lavanderias",
    name: "Lavanderias",
    shortName: "Lavanderias",
    pain: "Eficiência, custo por quilo e qualidade do tecido",
    benefit:
      "Linha completa para lavanderias profissionais, hospitalares e hoteleiras.",
    overview:
      "Lavanderias profissionais buscam o equilíbrio entre custo por kg, durabilidade do tecido e padrão de limpeza. A Minas Wipe entrega química completa, pré-tratamento, alvejante, amaciante e suporte técnico.",
    icon: "shirt",
    challenges: [
      "Custo por quilo competitivo",
      "Preservação da durabilidade do tecido",
      "Remoção de manchas críticas",
      "Padrão entre lotes e equipes",
    ],
    howWeHelp: [
      "Linha completa: pré + lavagem + acabamento",
      "Detergentes e alvejantes de alta performance",
      "Pré-tratamento técnico para manchas críticas",
      "Consultoria de processo e dosagem",
    ],
    relevantSolutions: [
      "lavanderias",
      "produtos-de-limpeza-profissional",
      "consultoria-tecnica",
    ],
    seo: {
      title: "Soluções para Lavanderias Profissionais",
      description:
        "Química completa para lavanderias profissionais, hospitalares e hoteleiras. Custo por kg otimizado e qualidade do tecido preservada.",
    },
  },
];

export function getSegment(slug: string): Segment | undefined {
  return SEGMENTS.find((s) => s.slug === slug);
}
