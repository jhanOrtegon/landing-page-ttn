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
