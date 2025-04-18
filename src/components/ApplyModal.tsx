import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import toast, { Toaster } from "react-hot-toast";
import { API_URL_SEND_EMAIL, JOB_EMAIL } from "../../lib/constant";

interface ApplyModalProps {
  job: string;
  isOpen: boolean;
  onClose: () => void;
  setSuccess: (success: boolean) => void;
}

const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isValidProfileUrl = (url: string) => {
  const pattern =
    /^https:\/\/(www\.)?(linkedin\.com|github\.com|behance\.net|dribbble\.com|notion\.site)\/.+$/i;
  return pattern.test(url);
};

export default function ApplyModal({
  isOpen,
  onClose,
  setSuccess,
  job,
}: ApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      resetFields();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resetFields = () => {
    setName("");
    setEmail("");
    setProfileUrl("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !profileUrl.trim()) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Ingresa un correo electrónico válido.");
      return;
    }

    if (!isValidProfileUrl(profileUrl)) {
      toast.error(
        "Ingresa un enlace válido de perfil profesional (LinkedIn, GitHub, etc)."
      );
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(API_URL_SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email: [JOB_EMAIL],
            subject: `Postulación a la convocatoria - ${job}`,
            title: "Nueva aplicación desde la página web",
            body: `Hola equipo de selección,\n\n${name} ha enviado su postulación para la vacante ${job}.\n\nCorreo de contacto: ${email}\nEnlace a su perfil profesional: ${profileUrl}\n\nQueda atento(a) a cualquier información adicional que requieran.`,
            footer:
              "Este mensaje fue generado automáticamente desde la web de TTN Company",
          },
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      resetFields();

      setSuccess(true);

      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Hubo un error al enviar tu solicitud.");
    } finally {
      setLoading(false);
    }
  };

  const modalContent = isOpen && (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-accent-500 mb-4">
          Aplica a la posición
        </h2>

        <form
          noValidate
          className="space-y-4"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 rounded-md border dark:bg-gray-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded-md border dark:bg-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/usuario"
            className="w-full p-3 rounded-md border dark:bg-gray-800"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
          />

          <button
            type="submit"
            className="btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );

  if (typeof window === "undefined") return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>{modalContent}</AnimatePresence>,
    modalRoot
  );
}
