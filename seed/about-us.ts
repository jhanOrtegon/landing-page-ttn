import { API_URL } from "../lib/constant";

// Tipo para un miembro del equipo
export type Equipo = {
  id: string;
  nombre: string;
  cargo: string;
  lang: "ES" | "EN";
  url_image: string;
  descripcion: string;
};

// Respuesta de la API
export interface EquipoResponse {
  status: "ok";
  data: Equipo[];
}

// Función para obtener todos los miembros del equipo
export const fetchEquipo = async (
  lang: "ES" | "EN" = "ES"
): Promise<Equipo[]> => {
  try {
    const response = await fetch(`${API_URL}/equipo?lang=${lang}`);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }

    const result = (await response.json()) as { data: Equipo[] };

    if (!Array.isArray(result.data)) {
      throw new Error("La respuesta no contiene un array válido en 'data'");
    }
    console.log(lang, "xxxxxxx");
    return result.data.filter((item) => item.lang === lang);
  } catch (error) {
    console.error("❌ Error en fetchEquipo:", error);
    return [];
  }
};

const defaultImage =
  "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png";

export const aboutUs = {
  layout: {
    title: "Sobre Nosotros - TTN Company",
    description:
      "Nuestra misión es empoderar a las empresas con soluciones SaaS innovadoras.",
  },
  heroSection: {
    title: "Somos TTN Company",
    img: "/bannerAbout.png",
    description:
      "Nuestra misión es empoderar a las empresas con soluciones SaaS innovadoras.",
  },

  history: {
    badge: "Nuestra historia",
    title: "Referente en innovación clínica",
    image: "/innovacion.jpg",
    imageAlt: "Team",
    initialDescription:
      "Fundada en 2020 con el respaldo de la Clínica Oftalmológica del Caribe, TTN Company nació con una visión clara: desarrollar soluciones tecnológicas innovadoras para responder a las necesidades reales del sector salud. Lo que comenzó como una startup impulsada por una idea ambiciosa, hoy se proyecta como un actor clave en la transformación digital de los servicios clínicos.",
    endDescription:
      "Nuestro camino ha estado lleno de aprendizajes, pero nuestro compromiso con la innovación, la calidad y el impacto en la atención médica se ha mantenido firme. Nos enorgullece ver cómo nuestras soluciones han contribuido a optimizar procesos, facilitar el trabajo de los profesionales de la salud y mejorar la experiencia de los pacientes.",
  },

  values: {
    badge: "Nuestros valores",
    title: "Lo que representamos",
    description:
      "Nuestros valores guían todo lo que hacemos, desde cómo construimos nuestros productos hasta cómo interactuamos con nuestros clientes y entre nosotros.",
    data: [
      {
        title: "Innovación y Excelencia",
        description:
          "Nuestro compromiso con la innovación, la calidad y el impacto en la atención médica se ha mantenido firme. Nos enorgullece ver cómo nuestras soluciones han contribuido a optimizar procesos, facilitar el trabajo de los profesionales de la salud y mejorar la experiencia de los pacientes.",
      },
      {
        title: "Confianza y transparencia",
        description:
          "Creemos en generar confianza a través de la transparencia. Somos abiertos con nuestros procesos y políticas, y siempre nos esforzamos por hacer lo mejor para nuestros clientes.",
      },
      {
        title: "Juventud y Emprendedores",
        description:
          "Nuestro equipo de líderes aporta una amplia experiencia y una pasión compartida por la innovación. Somos un equipo de personas activas y comprometidos con el desarrollo de soluciones tecnológicas que ayuden a mejorar la experiencia de los pacientes.",
      },
    ],
  },

  liderTeam: {
    badge: "Equipo de Líderazgo",
    title: "Conozca a nuestros líderes",
    description:
      "Nuestro diverso equipo de líderes aporta una amplia experiencia y una pasión compartida por la innovación.",
    data: [] as Equipo[],
  },
};
