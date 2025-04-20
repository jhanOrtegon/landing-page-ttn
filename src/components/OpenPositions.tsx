import { use, useEffect, useState } from "react";
import ApplyModal from "./ApplyModal";
import toast, { Toaster } from "react-hot-toast";
import type { Vacante } from "../../seed/career";

export default function OpenPositions({ data }: { data: Vacante[] }) {
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState("");

  useEffect(() => {
    if (success) {
      toast.success("¡Solicitud enviada con éxito!");
    }
  }, [success]);

  return (
    <>
      <div className="space-y-6 mb-16">
        {data.map((item) => (
          <div
            key={item.id}
            className="card p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 animate-fade-in"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-accent-500 dark:text-white mb-2 md:mb-0">
                {item.titulo}
              </h3>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {item?.estado || "Presencial"}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.descripcion}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tecnologias.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setSuccess(false);
                setJob(item.titulo);
              }}
              className="btn-secondary"
            >
              Aplicar Ahora
            </button>
          </div>
        ))}
      </div>

      <ApplyModal
        job={job}
        isOpen={isOpen}
        setSuccess={setSuccess}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
