import { useEffect, useState } from "react";
import ApplyModal from "./ApplyModal";
import toast, { Toaster } from "react-hot-toast";
import type { Vacante } from "../../seed/career";

interface Props {
  data: Vacante[];
  apply: {
    modalTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    profilePlaceholder: string;
    sending: string;
    submit: string;
    errorIncomplete: string;
    errorEmail: string;
    errorProfile: string;
    success: string;
    failure: string;
  };
  t: {
    successToast: string;
    applyNow: string;
    defaultMode: string;
  };
}

export default function OpenPositions({ data, t, apply }: Props) {
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState("");

  useEffect(() => {
    if (success) {
      toast.success(t.successToast);
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
            <div className="flex flex-row items-center justify-between mb-4 flex-wrap">
              <h3 className="text-xl font-semibold text-accent-500 dark:text-white mb-2 md:mb-0">
                {item.titulo}
              </h3>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {item?.estado || t.defaultMode}
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
              {t.applyNow}
            </button>
          </div>
        ))}
      </div>

      <ApplyModal
        job={job}
        t={apply}
        isOpen={isOpen}
        setSuccess={setSuccess}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
