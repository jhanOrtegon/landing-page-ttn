export type Vacante = {
  id: string;
  titulo: string;
  descripcion: string;
  salario: string;
  ubicacion: string;
  estado_id: string;
  estado: string;
  tecnologias: string[];
};

export interface VacantesResponse {
  status: "ok";
  data: Vacante[];
}

export const fetchVacantes = async (): Promise<Vacante[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/vacantes");

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }

    const result = (await response.json()) as { data: Vacante[] };

    if (!Array.isArray(result.data)) {
      throw new Error("La respuesta no contiene un array válido en 'data'");
    }

    return result.data;
  } catch (error) {
    console.error("❌ Error en fetchVacancies:", error);
    return [];
  }
};

export const career = {
  layout: {
    title: "Trabaja con nosotros - TTN Company",
    description: "Queremos que hagas parte de nuestro equipo",
  },
  heroSection: {
    img: "/banner-careers.jpg",
    title: "Trabaja con nosotros",
    description: "Queremos que hagas parte de nuestro equipo",
  },

  whatWeDo: {
    title: "¿Por qué trabajar con nosotros?",
    data: [
      {
        title: "Tecnología de vanguardia",
        description:
          "Trabaje con las últimas tecnologías y herramientas para resolver problemas desafiantes.",
        icon: "💻",
        color: "primary",
      },
      {
        title: "Equipo diverso e inclusivo",
        description:
          "Únase a un equipo global con diversos antecedentes, perspectivas y experiencias.",
        icon: "💻",
        color: "primary",
      },
      {
        title: "Beneficios competitivos",
        description:
          "Disfrute de un salario competitivo, beneficios de salud, opciones sobre acciones y oportunidades de desarrollo profesional.",
        icon: "💻",
        color: "primary",
      },
      {
        title: "Beneficios competitivos",
        description:
          "Disfrute de un salario competitivo, beneficios de salud, opciones sobre acciones y oportunidades de desarrollo profesional.",
        icon: "💻",
        color: "primary",
      },
    ],
  },

  openPositions: {
    title: "¿Quieres trabajar con nosotros?",
    data: [] as Vacante[],
    //  [
    //   {
    //     title: "Desarrollador frontend",
    //     description:
    //       "Estamos buscando un desarrollador frontend experimentado que nos ayude a crear interfaces de usuario hermosas, receptivas y accesibles para nuestra plataforma SaaS.",
    //     techs: [
    //       "React",
    //       "TypeScript",
    //       "Tailwind CSS",
    //       "5+ años de experiencia",
    //     ],
    //     status: "Remoto",
    //   },
    //   {
    //     title: "Ingeniero backend",
    //     description:
    //       "Únase a nuestro equipo de backend para crear API y servicios escalables, confiables y seguros que impulsen nuestra plataforma SaaS.",
    //     techs: ["Node.js", "PostgreSQL", "AWS", "3+ Years Experience"],
    //     status: "Remoto",
    //   },
    //   {
    //     title: "Diseñador de productos",
    //     description:
    //       "Buscamos un diseñador de productos talentoso para crear experiencias de usuario intuitivas y agradables para nuestros clientes.",
    //     techs: ["UI/UX", "Figma", "User Research", "4+ Years Experience"],
    //     status: "Remoto",
    //   },
    // ],
  },
};
