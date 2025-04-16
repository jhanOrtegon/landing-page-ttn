export type TProducto = {
  id: number;
  nombre: string;
  slug: string;
  titulo: string;
  categoría: string;
  descripción: string;
  imagen_principal: string;
  imagen_nombre_principal: string;
  carasteristicas: string[];
  estado_id: number;
  estado: string;
  fecha_creacion: string;
};

export interface ProductoResponse {
  status: "ok";
  data: ProductoDetalle[];
}

export interface ProductoDetalle {
  id: string;
  product_id: string;
  slug: string;
  producto_nombre: string;
  fecha_creacion: string;

  banner: Banner;
  primer_bloque: PrimerBloque;
  segundo_bloque: SegundoBloque;
  tercer_bloque: TercerBloque;
  cuarto_bloque: BloqueConTabs;
  quinto_bloque: BloqueConTabs;
  preguntas: Preguntas;
  apoyo: Apoyo;
}

export interface Banner {
  id: string;
  texto: string;
  nombre: string;
  url_imagen: string;
  url_logotipo: string;
  carasteristicas: string[];
}

export interface PrimerBloque {
  id: string;
  texto: string;
  nombre: string;
  primera_url_imagen: string;
  segunda_url_imagen: string;
}

export interface SegundoBloque {
  id: string;
  nombre: string;
  categoria: string;
  artículos: Articulo[];
}

export interface Articulo {
  id: string;
  texto: string;
  nombre: string;
  url_imagen: string;
}

export interface TercerBloque {
  id: string;
  nombre: string;
  categoria: string;
  url_imagen: string;
  carasteristicas: string[];
}

export interface BloqueConTabs {
  id: string;
  nombre: string;
  categoria: string;
  texto: string;
  url_imagen: string;
  tabs: Tab[];
}

export interface Tab {
  id: string;
  titulo: string;
  texto: string;
  carasteristicas: string[];
}

export interface Preguntas {
  id: string;
  nombre: string;
  categoria: string;
  tabs: PreguntaTab[];
}

export interface PreguntaTab {
  id: string;
  titulo: string;
  texto: string;
}

export interface Apoyo {
  id: string;
  nombre: string;
  categoria: string;
  urls: string[];
}
export interface TProductoConSlug extends TProducto {
  slug: string;
}

export const fetchProducts = async (): Promise<TProductoConSlug[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/productos");

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }

    const result = (await response.json()) as { data: TProducto[] };

    if (!Array.isArray(result.data)) {
      throw new Error("La respuesta no contiene un array válido en 'data'");
    }

    return result.data.map((product) => ({
      ...product,
      slug: product.nombre.toLowerCase().replace(/\s+/g, "-"),
    }));
  } catch (error) {
    console.error("❌ Error en fetchProducts:", error);
    return [];
  }
};

export const fetchProductDetails = async (): Promise<ProductoDetalle[]> => {
  try {
    const response = await fetch(`http://localhost:3000/api/productos-detalle`);

    if (!response.ok) {
      throw new Error(`Error al consultar productos: ${response.status}`);
    }

    const result = (await response.json()) as {
      status: string;
      data: ProductoDetalle[];
    };

    if (result.status !== "ok" || !Array.isArray(result.data)) {
      throw new Error("Respuesta inesperada del servidor");
    }

    return result.data.map((product) => ({
      ...product,
      slug: product.producto_nombre.toLowerCase().replace(/\s+/g, "-"),
    }));
  } catch (error) {
    console.error("Error en fetchProductDetails:", error);
    return [];
  }
};

export const products = {
  layout: {
    title: "Productos - TTN Company",
    description:
      "Conoce como potencializar tu proyecto con nuestros servicios y soluciones",
  },
  heroSection: {
    img: "/banner-products.jpg",
    title: "Nuestro trabajo",
    description:
      "Conoce como potencializar tu proyecto con nuestros servicios y soluciones",
  },
  data: [] as TProducto[],
  // data: [
  //   {
  //     slug: "telemedicina",
  //     name: "Telemedicina",
  //     category: "Tecnología en salud",
  //     description:
  //       "Transformamos la atención médica con una plataforma integral de consultas virtuales. Mejora el acceso, la eficiencia y la experiencia del paciente. Incluye:",
  //     subservices: [
  //       "Consultas médicas por videollamada",
  //       "Emisión de fórmulas electrónicas",
  //       "Gestión de historias clínicas en la nube",
  //       // "Atención médica 24/7",
  //     ],
  //     highlight: "Redujo tiempos de atención médica en un 60%",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoTelemed.2aa69d38b4c0bcd6894406443d4129d2.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/TelemedPro.4f229a7292fe7be513c0.png",
  //     alt: "Consulta médica en línea",
  //   },
  //   {
  //     slug: "phase",
  //     name: "Phase",
  //     category: "Software como servicio (SaaS)",
  //     description:
  //       "Optimiza la gestión de calidad de tu organización con herramientas alineadas a normativas internacionales. Control total sobre tus procesos. Incluye:",
  //     subservices: [
  //       "Control de documentación ISO",
  //       "Gestión de no conformidades",
  //       "Seguimiento de auditorías internas",
  //       "Indicadores de desempeño",
  //     ],
  //     highlight: "Certificación ISO lograda en tiempo récord",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoPhase.43d3dbdbfc60a74a2af360156d72fedc.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/PhasePro.a3e68de3db9e67eb9481.png",
  //     alt: "Software de gestión de calidad",
  //   },
  //   {
  //     slug: "sourset",
  //     name: "Sourset",
  //     category: "Gestión empresarial",
  //     description:
  //       "Gestiona de forma centralizada los activos fijos de tu empresa. Automatiza procesos contables y técnicos para mayor control operativo. Incluye:",
  //     subservices: [
  //       "Inventario automatizado de activos",
  //       "Depreciación y revalorización",
  //       "Geolocalización de recursos",
  //       "Control de traslados internos",
  //     ],
  //     highlight: "Redujo pérdidas de activos en un 35%",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoActiv.1675cf515b5baa43f80a0554e7cabc06.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/actiFijoPro.08a950b63e5cb4f14a2a.png",
  //     alt: "Administración de activos fijos",
  //   },
  //   {
  //     slug: "vpocket",
  //     name: "Vpocket",
  //     category: "Finanzas corporativas",
  //     description:
  //       "Moderniza el manejo de gastos corporativos con una solución digital para controlar y monitorear tarjetas empresariales en tiempo real. Incluye:",
  //     subservices: [
  //       "Control de topes y límites por usuario",
  //       "Reportes automáticos de gastos",
  //       "Validación de compras en línea",
  //       "Integración con ERP contable",
  //     ],
  //     highlight: "Ahorro del 25% en gastos operativos",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoVp.1cecef4780f10ba03fd67a5c1ddb56d0.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/vpocketPro.1cd5da3d4132fdbb70fc.png",
  //     alt: "Control de tarjetas de crédito",
  //   },
  //   {
  //     slug: "vacu+",
  //     name: "Vacu+",
  //     category: "Atención al cliente",
  //     description:
  //       "Automatiza la atención al cliente con inteligencia artificial. Mejora la experiencia y reduce los tiempos de respuesta. Escalable y personalizable. Incluye:",
  //     subservices: [
  //       "Chatbots conversacionales",
  //       "Asistentes virtuales entrenables",
  //       "Soporte multicanal (WhatsApp, Web, Email)",
  //       "Análisis de satisfacción del cliente",
  //     ],
  //     highlight: "Incrementó la satisfacción del cliente en 40%",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoVac.3a3d5201c35a631db642e65a45f0688a.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/vacPro.6b5e1cca16ed9e5a4cc7.png",
  //     alt: "Automatización de atención al cliente",
  //   },
  //   {
  //     slug: "biowel-asistencial",
  //     name: "Biowel Asistencial",
  //     category: "Salud asistencial",
  //     description:
  //       "Solución digital para la gestión integral de servicios asistenciales. Organiza procesos clínicos y administrativos de forma ágil. Incluye:",
  //     subservices: [
  //       "Agendamiento de citas médicas",
  //       "Ordenamiento de procedimientos",
  //       "Seguimiento de pacientes",
  //       "Reportes y trazabilidad médica",
  //     ],
  //     highlight: "Duplicó la capacidad operativa asistencial",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoBioAsis.06834f542bd6d3cffa0a2cc8f170c388.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/biowelAsisPro.0a9fad2f6ab89a3d794e.png",
  //     alt: "Software de asistencia y ordenamientos",
  //   },
  //   {
  //     slug: "biowel",
  //     name: "Biowel",
  //     category: "Gestión financiera",
  //     description:
  //       "Plataforma para el control administrativo y financiero de tu empresa. Visibilidad total sobre la operación en tiempo real. Modular y escalable. Incluye:",
  //     subservices: [
  //       "Gestión contable integrada",
  //       "Control presupuestal y tesorería",
  //       "Administración de proveedores",
  //       "Reportes financieros dinámicos",
  //     ],
  //     highlight: "Redujo errores contables en un 70%",
  //     imageTitle:
  //       "https://www.ttncompany.com/static/media/logoBioAdmi.bc753d5742dcce769a86b68de03f714d.svg",
  //     image:
  //       "https://www.ttncompany.com/static/media/biowelLogo.f65902073cb99c71b676.png",
  //     alt: "Administración y finanzas corporativas",
  //   },
  // ],
};
