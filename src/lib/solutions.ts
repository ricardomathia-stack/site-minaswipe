export type SolutionIcon =
  | "droplet"
  | "sparkle"
  | "cog"
  | "wand"
  | "washing-machine"
  | "headset";

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  icon: SolutionIcon;
  highlights: string[];
  whatIncluded: { title: string; text: string }[];
  bestFor: string[];
  seo: { title: string; description: string };
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "produtos-de-limpeza-profissional",
    title: "Produtos de limpeza profissional",
    shortTitle: "Produtos de limpeza",
    summary:
      "Linha completa de detergentes, desengordurantes e químicos profissionais para limpeza pesada e rotineira.",
    overview:
      "Produtos profissionais de alta concentração para a limpeza pesada do dia a dia. Linhas alinhadas ao perfil real da sua operação — com performance comprovada em ambientes regulados, alto rendimento e padronização garantida em todos os turnos.",
    icon: "droplet",
    highlights: [
      "Alta concentração e rendimento superior",
      "Adequados a ambientes regulados (BPF / APPCC)",
      "Indicação técnica por especialistas",
      "Custo por uso menor que o varejo",
    ],
    whatIncluded: [
      {
        title: "Detergentes e desengordurantes",
        text: "Linhas alcalinas, ácidas e neutras para limpeza de pisos, paredes, equipamentos e áreas técnicas.",
      },
      {
        title: "Limpadores específicos",
        text: "Produtos para cada tipo de superfície — inox, vidro, madeira, plástico técnico e tecidos.",
      },
      {
        title: "Linha sustentável",
        text: "Produtos biodegradáveis e com menor impacto ambiental, sem perda de eficácia técnica.",
      },
    ],
    bestFor: [
      "Operações com volume alto de limpeza diária",
      "Empresas auditadas (BPF, APPCC, ISO)",
      "Negócios que buscam padronização e custo previsível",
    ],
    seo: {
      title: "Produtos de Limpeza Profissional para Empresas",
      description:
        "Linha completa de detergentes, desengordurantes e químicos profissionais. Indicação técnica, alta concentração e custo por uso reduzido.",
    },
  },
  {
    slug: "higienizacao-e-sanitizacao",
    title: "Higienização e sanitização",
    shortTitle: "Higienização e sanitização",
    summary:
      "Protocolos e produtos para eliminar microrganismos em superfícies, ambientes e áreas críticas.",
    overview:
      "Protocolos técnicos de sanitização e produtos com ação comprovada para eliminação de microrganismos em superfícies, ambientes e áreas críticas. Padronização de processo e adequação a normas sanitárias de cada segmento.",
    icon: "sparkle",
    highlights: [
      "Sanitizantes com registro Anvisa",
      "Protocolos sob medida por segmento",
      "Padrão profissional auditável",
      "Reduz risco sanitário e exposição da operação",
    ],
    whatIncluded: [
      {
        title: "Sanitizantes para superfícies",
        text: "Quaternários, peroxigenados e clorados em formulações profissionais.",
      },
      {
        title: "Higienização de ambientes",
        text: "Protocolos completos para áreas de processo, vestiários, banheiros e áreas comuns.",
      },
      {
        title: "Áreas críticas e reguladas",
        text: "Soluções específicas para frigoríficos, hospitais, laboratórios e cozinhas industriais.",
      },
    ],
    bestFor: [
      "Frigoríficos e indústrias de alimentos",
      "Ambientes de saúde",
      "Operações sob auditoria sanitária",
    ],
    seo: {
      title: "Higienização e Sanitização Profissional para Empresas",
      description:
        "Protocolos e produtos para eliminar microrganismos em superfícies e ambientes. Padrão auditável para frigoríficos, hospitais e indústria de alimentos.",
    },
  },
  {
    slug: "equipamentos-e-acessorios",
    title: "Equipamentos e acessórios",
    shortTitle: "Equipamentos",
    summary:
      "Máquinas, dispensadores, panos técnicos e ferramentas que aumentam a eficiência da operação.",
    overview:
      "Equipamentos profissionais que aceleram a rotina e padronizam o resultado. Dispensadores para reduzir desperdício, lavadoras industriais, mops, panos técnicos e acessórios projetados para uso intensivo.",
    icon: "cog",
    highlights: [
      "Equipamentos para uso intensivo",
      "Reduz consumo de químico e água",
      "Suporte técnico para implementação",
      "Padronização da rotina de limpeza",
    ],
    whatIncluded: [
      {
        title: "Equipamentos profissionais",
        text: "Lavadoras de alta pressão, extratoras, enceradeiras e máquinas de limpeza específicas.",
      },
      {
        title: "Dispensadores e diluidores",
        text: "Equipamentos para diluição correta — controla o consumo e padroniza o uso.",
      },
      {
        title: "Acessórios técnicos",
        text: "Mops profissionais, panos de microfibra, baldes funcionais, escovas e rodos técnicos.",
      },
    ],
    bestFor: [
      "Operações grandes com equipes próprias de limpeza",
      "Empresas que querem reduzir consumo de químicos",
      "Negócios buscando padronização de processo",
    ],
    seo: {
      title: "Equipamentos e Acessórios de Limpeza Profissional",
      description:
        "Máquinas, dispensadores, mops e acessórios técnicos para uso intensivo. Reduz desperdício e padroniza a rotina de limpeza.",
    },
  },
  {
    slug: "neutralizacao-de-odores",
    title: "Neutralização de odores",
    shortTitle: "Neutralização de odores",
    summary:
      "Tratamento técnico de odores em ambientes industriais, comerciais e operacionais.",
    overview:
      "Tratamento técnico para neutralização real de odores — sem mascarar com perfume. Soluções específicas para ambientes operacionais, áreas com matéria orgânica, vestiários, sanitários e lixeiras industriais.",
    icon: "wand",
    highlights: [
      "Neutralização técnica, não mascaramento",
      "Soluções para ambientes industriais",
      "Aplicação por nebulização ou contato",
      "Resultado duradouro",
    ],
    whatIncluded: [
      {
        title: "Neutralizadores industriais",
        text: "Tecnologia de captura molecular — atua na origem do odor, não na percepção.",
      },
      {
        title: "Aromatizadores profissionais",
        text: "Complemento técnico para áreas de hospitalidade e atendimento ao público.",
      },
      {
        title: "Aplicação assistida",
        text: "Indicação do método e da concentração mais adequados para cada ambiente.",
      },
    ],
    bestFor: [
      "Frigoríficos e processamento de proteína",
      "Lixeiras e áreas com resíduo orgânico",
      "Hotéis, motéis e ambientes de hospitalidade",
    ],
    seo: {
      title: "Neutralização Profissional de Odores para Empresas",
      description:
        "Tratamento técnico de odores em ambientes industriais e operacionais. Neutralização real, sem mascaramento.",
    },
  },
  {
    slug: "lavanderias",
    title: "Soluções para lavanderias",
    shortTitle: "Lavanderias",
    summary:
      "Linha completa para lavanderias profissionais, hospitalares e hoteleiras com alta performance.",
    overview:
      "Linha completa para lavanderia profissional — química, processo e equipamentos pensados para alto volume, custo por quilo otimizado e preservação do tecido. Atendimento técnico para hospitais, hotéis, indústria e lavanderias comerciais.",
    icon: "washing-machine",
    highlights: [
      "Custo por quilo otimizado",
      "Preserva durabilidade do tecido",
      "Padrão hospitalar / hoteleiro",
      "Linha completa: pré + lavagem + acabamento",
    ],
    whatIncluded: [
      {
        title: "Detergentes e alvejantes profissionais",
        text: "Linha completa para roupa social, industrial e hospitalar.",
      },
      {
        title: "Pré-tratamento e remoção de manchas",
        text: "Produtos específicos para gordura, sangue, tinta, ferrugem e demais manchas críticas.",
      },
      {
        title: "Amaciantes e acabamento",
        text: "Solução para toque, perfume residual e neutralização de cloro.",
      },
    ],
    bestFor: [
      "Lavanderias hospitalares",
      "Lavanderias hoteleiras",
      "Lavanderias industriais e comerciais",
    ],
    seo: {
      title: "Produtos para Lavanderia Profissional, Hospitalar e Hoteleira",
      description:
        "Linha completa para lavanderia profissional com custo por quilo otimizado, padrão hospitalar e preservação do tecido.",
    },
  },
  {
    slug: "consultoria-tecnica",
    title: "Consultoria técnica para empresas",
    shortTitle: "Consultoria técnica",
    summary:
      "Diagnóstico, indicação técnica e acompanhamento para padronizar e elevar a qualidade da limpeza.",
    overview:
      "Diagnóstico real da operação antes da indicação. Acompanhamos a implementação, treinamos a equipe e ajustamos o processo até atingir o padrão técnico desejado. Atendimento consultivo do começo ao fim.",
    icon: "headset",
    highlights: [
      "Diagnóstico em campo, sem custo inicial",
      "Recomendação alinhada ao seu segmento",
      "Treinamento da equipe operacional",
      "Acompanhamento e ajustes",
    ],
    whatIncluded: [
      {
        title: "Diagnóstico técnico",
        text: "Visita à operação, mapeamento de processos, identificação de gargalos e desperdícios.",
      },
      {
        title: "Recomendação personalizada",
        text: "Produtos, equipamentos e protocolos adequados ao seu segmento, volume e perfil de operação.",
      },
      {
        title: "Implementação e acompanhamento",
        text: "Treinamento da equipe, validação dos resultados e ajustes contínuos.",
      },
    ],
    bestFor: [
      "Empresas em adequação a normas",
      "Operações com alta rotatividade de equipe",
      "Negócios que querem padronizar custo e processo",
    ],
    seo: {
      title: "Consultoria Técnica em Higiene e Limpeza para Empresas",
      description:
        "Diagnóstico, recomendação técnica, treinamento e acompanhamento. Atendimento consultivo do início ao fim.",
    },
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
