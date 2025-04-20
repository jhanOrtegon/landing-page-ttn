/* empty css                                    */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import toast from 'react-hot-toast';
import { A as API_URL_SEND_EMAIL, J as JOB_EMAIL, e as fetchVacantes, s as seed, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Dk_HChlO.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_DdUA0mpH.mjs';
export { renderers } from '../renderers.mjs';

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const isValidProfileUrl = (url) => {
  const pattern = /^https:\/\/(www\.)?(linkedin\.com|github\.com|behance\.net|dribbble\.com|notion\.site)\/.+$/i;
  return pattern.test(url);
};
function ApplyModal({
  isOpen,
  onClose,
  setSuccess,
  job
}) {
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
  const handleSubmit = async (e) => {
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
            body: `Hola equipo de selección,

${name} ha enviado su postulación para la vacante ${job}.

Correo de contacto: ${email}
Enlace a su perfil profesional: ${profileUrl}

Queda atento(a) a cualquier información adicional que requieran.`,
            footer: "Este mensaje fue generado automáticamente desde la web de TTN Company"
          }
        })
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
  const modalContent = isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-auto",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { duration: 0.2 },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500",
                children: "×"
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent-500 mb-4", children: "Aplica a la posición" }),
            /* @__PURE__ */ jsxs(
              "form",
              {
                noValidate: true,
                className: "space-y-4",
                onSubmit: handleSubmit,
                autoComplete: "off",
                children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Nombre completo",
                      className: "w-full p-3 rounded-md border dark:bg-gray-800",
                      value: name,
                      onChange: (e) => setName(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      placeholder: "Correo electrónico",
                      className: "w-full p-3 rounded-md border dark:bg-gray-800",
                      value: email,
                      onChange: (e) => setEmail(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "url",
                      placeholder: "https://www.linkedin.com/in/usuario",
                      className: "w-full p-3 rounded-md border dark:bg-gray-800",
                      value: profileUrl,
                      onChange: (e) => setProfileUrl(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn-primary w-full mt-4",
                      disabled: loading,
                      children: loading ? "Enviando..." : "Enviar solicitud"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
  if (typeof window === "undefined") return null;
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;
  return createPortal(
    /* @__PURE__ */ jsx(AnimatePresence, { children: modalContent }),
    modalRoot
  );
}

function OpenPositions({ data }) {
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState("");
  useEffect(() => {
    if (success) {
      toast.success("¡Solicitud enviada con éxito!");
    }
  }, [success]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-16", children: data.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "card p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 animate-fade-in",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-accent-500 dark:text-white mb-2 md:mb-0", children: item.titulo }),
            /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300", children: item.estado })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: item.descripcion }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: item.tecnologias.map((tech, idx) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
              children: tech
            },
            idx
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsOpen(true);
                setSuccess(false);
                setJob(item.titulo);
              },
              className: "btn-secondary",
              children: "Aplicar Ahora"
            }
          )
        ]
      },
      item.id
    )) }),
    /* @__PURE__ */ jsx(
      ApplyModal,
      {
        job,
        isOpen,
        setSuccess,
        onClose: () => setIsOpen(false)
      }
    )
  ] });
}

const $$Career = createComponent(async ($$result, $$props, $$slots) => {
  const vacantes = await fetchVacantes();
  seed.career.openPositions.data = vacantes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seed.career.layout.title, "description": seed.career.layout.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "img": seed.career.heroSection.img, "title": seed.career.heroSection.title, "description": seed.career.heroSection.description })} <section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <!-- otras secciones omitidas --> <h2 class="text-3xl font-bold text-accent-500 dark:text-white mb-8"> ${seed.career.openPositions.title} </h2> ${renderComponent($$result2, "OpenPositions", OpenPositions, { "client:load": true, "data": seed.career.openPositions.data, "client:component-hydration": "load", "client:component-path": "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/OpenPositions.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "ToastProvider", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/ToastProvider", "client:component-export": "default" })} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/career.astro", void 0);

const $$file = "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/career.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Career,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
