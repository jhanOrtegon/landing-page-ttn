import LogoSvg from "../src/components/LogoSvg.astro";

export const home = {
  layout: {
    title: "TTN Company",
    description:
      "Nuestra misión es empoderar a las empresas con soluciones SaaS innovadoras.",
  },

  header: {
    btn: {
      text: "Contáctanos",
      url: "/contact",
    },
    logo: LogoSvg,
    nav: [
      { text: "Inicio", url: "/" },
      { text: "Nosotros", url: "/about-us" },
      { text: "Servicios", url: "/services" },
      { text: "Productos", url: "/products" },
      { text: "Trabaja con nosotros", url: "/career" },
    ],
  },

  features: {
    articles: [
      {
        badge: "Software a la medida",
        title: "Impulsa tus proyectos al futuro",
        description:
          "Transformamos ideas en productos digitales con impacto real. Diseñamos el software que lleva tus proyectos al siguiente nivel.",
      },
    ],

    extraArticle: [
      {
        imageAlt: "referente",
        title: "Referente mundial",
        image:
          "https://img.freepik.com/foto-gratis/persona-que-trabaja-tarde-noche-casa_23-2150062723.jpg",
        badge: "Te entendemos mejor que nadie",
        initialDescription: "TTN Company fue creada por la",
        strongDescription: "Clínica Oftalmológica del Caribe",
        finalDescription:
          ", un referente en toda Latinoamérica que nos brinda un entendimiento profundo de las necesidades de las empresas de salud, y también ofrece su apoyo conjunto, funcionando como un avanzado laboratorio de pruebas para nuestra tecnología.",
      },
    ],
    data: [
      {
        title: "Software que construye futuro",
        description:
          "Creamos soluciones digitales a medida, con arquitectura sólida, moderna y enfocada en resultados sostenibles.",
        icon: "M3 21h18M9 8h6v13H9V8zM4 21V3h4v18M16 21V10h4v11",
        color: "primary",
      },
      {
        title: "Ejecutamos tu visión",
        description:
          "Desde la ideación hasta el despliegue, somos tus aliados estratégicos en innovación, producto y escalabilidad.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "primary",
      },
      {
        title: "Productos que conectan",
        description:
          "Desarrollamos plataformas modulares y adaptables, listas para transformar la experiencia de usuarios y equipos.",
        icon: "M3 3h18v18H3z M9 9h6v6H9z",
        color: "primary",
      },
      {
        title: "Procesos que evolucionan",
        description:
          "Automatizamos tareas críticas y optimizamos flujos para liberar el verdadero potencial de tu operación.",
        icon: "M17 1l4 4-4 4M7 23l-4-4 4-4M14 4H3v7M10 20h11v-7",
        color: "primary",
      },
      {
        title: "Tecnología que se integra",
        description:
          "Unificamos tus herramientas y sistemas con integraciones limpias, estables y pensadas para escalar.",
        icon: "M8 6v12M16 6v12M12 18v-6M12 6V3",
        color: "primary",
      },
      {
        title: "Enfoque en salud digital",
        description:
          "Diseñamos soluciones con sensibilidad clínica y precisión técnica, centradas en pacientes y equipos médicos.",
        icon: "M12 6v6l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        color: "primary",
      },
    ],
  },

  proccess: {
    data: [
      {
        title: "Contabilidad",
        description:
          "Creamos una estructura de contabilidad integral para gestionar los gastos y los ingresos de tu empresa.",
        icon: "💰",
      },
      {
        title: "Asistencia",
        description:
          "Ofrecemos un servicio de asistencia para mejorar la eficiencia y la productividad de tu equipo.",
        icon: "💊",
      },
      {
        title: "Calidad",
        description:
          "Desarrollamos un sistema de calidad para garantizar la calidad de tus productos y servicios.",
        icon: "🛡️",
      },
      {
        title: "Registro",
        description:
          "Creamos un sistema de registro eficiente para gestionar todos los datos relevantes de tu empresa.",
        icon: "📄",
      },
    ],
  },

  testimonials: {
    badge: "Historias de clientes",
    title: "Lo que dicen nuestros clientes",
    description:
      "No somos nosotros quienes lo decimos. Son nuestros clientes quienes comparten cómo la tecnología de TTN transformó sus procesos.",
    data: [
      {
        content:
          "Esta plataforma ha transformado por completo la forma en que gestionamos nuestros proyectos. Su interfaz intuitiva y potentes funciones aumentaron nuestra productividad en más de un 40%.",
        author: "Sarah Johnson",
        position: "Gerente de Producto",
        company: "TechCorp",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      {
        content:
          "He probado muchas soluciones SaaS, pero esta destaca por su facilidad de uso y su conjunto de funciones tan completo. Además, el soporte al cliente es excepcional.",
        author: "Michael Chen",
        position: "CTO",
        company: "Innovate Inc.",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        content:
          "Solo las capacidades de análisis ya valen la inversión. Hemos obtenido información valiosa que nos ha permitido optimizar operaciones y reducir costos.",
        author: "Emily Rodriguez",
        position: "Directora de Operaciones",
        company: "Global Solutions",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ],
  },
};
