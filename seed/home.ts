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
          "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5CE4IAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0._9Zr-mDrM9-PmGIuAnHcHTcDPKfADREoaRTJ-sJEs_u2sW-zxXBwpdA0nDu6-2ELZjRIGOqpkhpu0KaNXKmR6eQ3omKcFCLL_OBU2bpVK9IX9ynIpC_UrQuPPSCuDDTHSX_ZdwQ44BoVI1FXOJFcjWeABLFN8mvJeWTgizSa3CFDdC-MFTE3JlFnJ2MweHHtPL5fZnZ9fnmXe0wo3eOz8HXdVbg3fhyr3x80KN-Ep1MBuL6X100eLlKePUSwHfNOl1v8BJNTGlo91MHDEY_KyqXgy4NsPoSShAvrHCl31gwQjtObsMN-LF90uSZyFpOdhu5m0Ix7nkBIr05_tLLCK68UCfRWTWkUkpu9tZSE1CR4jYiB9oYpEUd3g1Vhxg_vBtPc7uL4O_ZU2oo5-Lmmei1T8O4Vf7iFuXxBsfw_rzVW-l9Ei1jSF_yyZ7S-XiWedTHMw1hzpkWyJ9X6iSvVefbEmgQux1n2INRsMrl58rHzma16_t3Fhh3bh49lYu3J.6QHGNQ_IwBWRcs_C84vMBNBqZp_3p96ogbW5RNpcjmY%26version%3DPublished&cb=63838783772&encodeFailures=1&width=1270&height=847",
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
