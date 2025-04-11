import { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function ToastProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Espera a que el DOM esté disponible
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toastRoot = document.getElementById("toast-root");
  if (!toastRoot) return null;

  return createPortal(
    <Toaster
      position="bottom-right"
      toastOptions={{
        className:
          "bg-white dark:bg-gray-800 text-sm rounded-xl shadow-lg px-6 py-4 text-secondary-900 dark:text-secondary-100 border border-gray-200 dark:border-gray-700",
        duration: 3000,
        style: {
          fontFamily: "'Inter', sans-serif",
        },
      }}
    />,
    toastRoot
  );
}
