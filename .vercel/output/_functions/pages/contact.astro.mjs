/* empty css                                    */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
import { A as API_URL_SEND_EMAIL, d as ADMIN_EMAIL, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Dk_HChlO.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_DdUA0mpH.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import toast from 'react-hot-toast';
export { renderers } from '../renderers.mjs';

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const validateEmail = (email2) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor ingresa tu nombre.");
      return;
    }
    if (!email.trim()) {
      toast.error("Por favor ingresa tu correo.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Correo electrónico no válido.");
      return;
    }
    if (!message.trim()) {
      toast.error("Por favor escribe tu mensaje.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(API_URL_SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email: [ADMIN_EMAIL],
            subject: `Consulta de cliente - ${name}`,
            title: "Un cliente desea comunicarse con la empresa",
            body: `Hola equipo de TTN Company,

Un cliente ha enviado un mensaje a través del formulario de contacto del sitio web.

Nombre: ${name}
Correo electrónico: ${email}

Mensaje del cliente:
${message}`,
            footer: "Este mensaje fue generado automáticamente desde la página web de TTN Company."
          }
        })
      });
      if (!res.ok) throw new Error();
      toast.success("¡Mensaje enviado con éxito!");
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Hubo un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "section bg-gray-50 dark:bg-gray-800/50", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "slide-up", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-accent-500 dark:text-white", children: "Nos encantaría saber más sobre ti" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-8", children: "¿Tienes preguntas sobre nuestra plataforma o necesitas ayuda para empezar? Nuestro equipo está aquí para ayudarte en cada paso del proceso." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6 text-secondary-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-accent-500 dark:text-white", children: "Envíenos un correo electrónico" }),
            /* @__PURE__ */ jsx("p", { className: "text-accent-500 dark:text-gray-300", children: "administracion@ttncompany.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6 text-secondary-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-accent-500 dark:text-white", children: "Llámanos" }),
            /* @__PURE__ */ jsx("p", { className: "text-accent-500 dark:text-gray-300", children: "+57 304 3783126" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "w-6 h-6 text-secondary-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-accent-500 dark:text-white", children: "Visítanos" }),
            /* @__PURE__ */ jsx("p", { className: "text-accent-500 dark:text-gray-300", children: "Cra 51B #87-50, piso 3 local 337 VIVA Barranquilla" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-accent-500 dark:text-white mb-4", children: "Síguenos" }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/company/ttn-company/",
              className: "text-gray-400 hover:text-primary-400 transition-colors w-6 h-6 flex items-center justify-center",
              "aria-label": "LinkedIn",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6 text-accent-500",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/ttncompany_col/",
              className: "text-gray-400 hover:text-primary-400 transition-colors w-6 h-6 flex items-center justify-center",
              "aria-label": "Instagram",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6 scale-125 text-accent-500",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", { d: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" })
                }
              )
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "slide-up", style: { animationDelay: "150ms" }, children: /* @__PURE__ */ jsxs("div", { className: "card p-6 border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-6 text-accent-500 dark:text-white", children: "Envíanos un mensaje" }),
      submitted ? /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-primary-50 dark:bg-primary-900/30 rounded-lg", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-12 h-12 text-primary-500 mx-auto mb-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-accent-500 dark:text-white mb-2", children: "¡Mensaje enviado!" }),
        /* @__PURE__ */ jsx("p", { className: "text-accent-500 dark:text-gray-300", children: "Gracias por contactarnos. Te responderemos lo antes posible." })
      ] }) : /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, noValidate: true, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "name",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Nombre"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "name",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-accent-500 bg-white dark:bg-gray-800 text-accent-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
              placeholder: "Escribir..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Correo electrónico"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-accent-500 bg-white dark:bg-gray-800 text-accent-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
              placeholder: "Escribir..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "message",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Mensaje"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              value: message,
              onChange: (e) => setMessage(e.target.value),
              rows: 5,
              className: "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-accent-500 bg-white dark:bg-gray-800 text-accent-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
              placeholder: "Escribir..."
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "w-full btn-primary",
            disabled: loading,
            children: loading ? "Enviando..." : "Enviar mensaje"
          }
        )
      ] })
    ] }) })
  ] }) }) });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacta con nosotros - TTN Company", "description": "Nuestro equipo est\xE1 aqu\xED para ayudarte en cada paso del proceso." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "tags": ["contact"], "title": "Contacta con nosotros", "description": "Estamos aqu\xED para ayudarle con cualquier pregunta que puedas tener sobre nuestros servicios." })} ${renderComponent($$result2, "ContactForm", ContactSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/ContactForm", "client:component-export": "default" })} ${renderComponent($$result2, "ToastProvider", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/ToastProvider", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
