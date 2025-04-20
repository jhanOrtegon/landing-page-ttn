import { c as createComponent, a as createAstro, b as addAttribute, h as renderScript, r as renderTemplate, i as renderSlot, j as renderHead, d as renderComponent, m as maybeRenderHead } from './astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
/* empty css                            */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Modern SaaS landing page template with responsive design and modular sections."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="es" x-data="{ darkMode: localStorage.getItem('darkMode') === 'true' }" x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val))" :class="{ 'dark': darkMode }"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/ico" href="/favicon.ico"><meta name="generator"`, '><meta name="description"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet">', "", '</head> <body class="antialiased bg-white dark:bg-secondary-950 text-secondary-900 dark:text-secondary-100 transition-colors duration-300"> <div id="page-wrapper" class="page-transition-wrapper"> ', ' </div> <div id="modal-root"></div> <div id="toast-root"></div> ', ' <script>\n      function setupFaqToggles() {\n        const buttons = document.querySelectorAll(".faq-toggle");\n\n        buttons.forEach((btn) => {\n          btn.addEventListener("click", () => {\n            const index = btn.dataset.index;\n            const content = document.getElementById(`faq-${index}`);\n            const icon = document.getElementById(`icon-${index}`);\n            const isOpen =\n              content.style.maxHeight !== "0px" &&\n              content.style.maxHeight !== "";\n\n            const allContainers = Array.from(\n              document.querySelectorAll(".faq-content-height")\n            );\n            const clickedIndex = parseInt(index);\n\n            const leftIndex = clickedIndex > 0 ? clickedIndex - 1 : null;\n            if (leftIndex !== null && allContainers[leftIndex]) {\n              allContainers[leftIndex].style.height = "fit-content";\n            }\n\n            const rightIndex =\n              clickedIndex < allContainers.length - 1 ? clickedIndex + 1 : null;\n            if (rightIndex !== null && allContainers[rightIndex]) {\n              allContainers[rightIndex].style.height = "fit-content";\n            }\n\n            document.querySelectorAll(".faq-content").forEach((el) => {\n              el.style.maxHeight = "0px";\n            });\n\n            document.querySelectorAll(".faq-toggle").forEach((toggleBtn) => {\n              toggleBtn.setAttribute("aria-expanded", "false");\n            });\n\n            document.querySelectorAll("svg[id^=\'icon-\']").forEach((svg) => {\n              svg.classList.remove("rotate-180");\n            });\n\n            if (!isOpen) {\n              content.style.maxHeight = content.scrollHeight + "px";\n              const container = btn.closest(".faq-content-height");\n              if (container) container.style.height = "fit-content";\n              icon.classList.add("rotate-180");\n              btn.setAttribute("aria-expanded", "true");\n            }\n\n            setTimeout(() => {\n              const anyOpen = Array.from(\n                document.querySelectorAll(".faq-content")\n              ).some(\n                (el) =>\n                  el.style.maxHeight !== "0px" && el.style.maxHeight !== ""\n              );\n\n              if (!anyOpen) {\n                document\n                  .querySelectorAll(".faq-content-height")\n                  .forEach((el) => {\n                    el.style.removeProperty("height");\n                  });\n              }\n            }, 100);\n          });\n        });\n      }\n\n      // Ejecutar al cargar\n      document.addEventListener("DOMContentLoaded", setupFaqToggles);\n\n      // Ejecutar en navegaci\xF3n SPA\n      document.addEventListener("astro:after-swap", setupFaqToggles);\n    <\/script> ', " </body> </html>"], [`<html lang="es" x-data="{ darkMode: localStorage.getItem('darkMode') === 'true' }" x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val))" :class="{ 'dark': darkMode }"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/ico" href="/favicon.ico"><meta name="generator"`, '><meta name="description"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet">', "", '</head> <body class="antialiased bg-white dark:bg-secondary-950 text-secondary-900 dark:text-secondary-100 transition-colors duration-300"> <div id="page-wrapper" class="page-transition-wrapper"> ', ' </div> <div id="modal-root"></div> <div id="toast-root"></div> ', ' <script>\n      function setupFaqToggles() {\n        const buttons = document.querySelectorAll(".faq-toggle");\n\n        buttons.forEach((btn) => {\n          btn.addEventListener("click", () => {\n            const index = btn.dataset.index;\n            const content = document.getElementById(\\`faq-\\${index}\\`);\n            const icon = document.getElementById(\\`icon-\\${index}\\`);\n            const isOpen =\n              content.style.maxHeight !== "0px" &&\n              content.style.maxHeight !== "";\n\n            const allContainers = Array.from(\n              document.querySelectorAll(".faq-content-height")\n            );\n            const clickedIndex = parseInt(index);\n\n            const leftIndex = clickedIndex > 0 ? clickedIndex - 1 : null;\n            if (leftIndex !== null && allContainers[leftIndex]) {\n              allContainers[leftIndex].style.height = "fit-content";\n            }\n\n            const rightIndex =\n              clickedIndex < allContainers.length - 1 ? clickedIndex + 1 : null;\n            if (rightIndex !== null && allContainers[rightIndex]) {\n              allContainers[rightIndex].style.height = "fit-content";\n            }\n\n            document.querySelectorAll(".faq-content").forEach((el) => {\n              el.style.maxHeight = "0px";\n            });\n\n            document.querySelectorAll(".faq-toggle").forEach((toggleBtn) => {\n              toggleBtn.setAttribute("aria-expanded", "false");\n            });\n\n            document.querySelectorAll("svg[id^=\'icon-\']").forEach((svg) => {\n              svg.classList.remove("rotate-180");\n            });\n\n            if (!isOpen) {\n              content.style.maxHeight = content.scrollHeight + "px";\n              const container = btn.closest(".faq-content-height");\n              if (container) container.style.height = "fit-content";\n              icon.classList.add("rotate-180");\n              btn.setAttribute("aria-expanded", "true");\n            }\n\n            setTimeout(() => {\n              const anyOpen = Array.from(\n                document.querySelectorAll(".faq-content")\n              ).some(\n                (el) =>\n                  el.style.maxHeight !== "0px" && el.style.maxHeight !== ""\n              );\n\n              if (!anyOpen) {\n                document\n                  .querySelectorAll(".faq-content-height")\n                  .forEach((el) => {\n                    el.style.removeProperty("height");\n                  });\n              }\n            }, 100);\n          });\n        });\n      }\n\n      // Ejecutar al cargar\n      document.addEventListener("DOMContentLoaded", setupFaqToggles);\n\n      // Ejecutar en navegaci\xF3n SPA\n      document.addEventListener("astro:after-swap", setupFaqToggles);\n    <\/script> ', " </body> </html>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/layouts/Layout.astro", void 0);

const defaultImage = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png";
const aboutUs = {
  heroSection: {
    title: "Somos TTN Company",
    img: "/bannerAbout.png",
    description: "Nuestra misión es empoderar a las empresas con soluciones SaaS innovadoras."
  },
  history: {
    badge: "Nuestra historia",
    title: "Referente en innovación clínica",
    image: "/innovacion.jpg",
    imageAlt: "Team",
    initialDescription: "Fundada en 2020 con el respaldo de la Clínica Oftalmológica del Caribe, TTN Company nació con una visión clara: desarrollar soluciones tecnológicas innovadoras para responder a las necesidades reales del sector salud. Lo que comenzó como una startup impulsada por una idea ambiciosa, hoy se proyecta como un actor clave en la transformación digital de los servicios clínicos.",
    endDescription: "Nuestro camino ha estado lleno de aprendizajes, pero nuestro compromiso con la innovación, la calidad y el impacto en la atención médica se ha mantenido firme. Nos enorgullece ver cómo nuestras soluciones han contribuido a optimizar procesos, facilitar el trabajo de los profesionales de la salud y mejorar la experiencia de los pacientes."
  },
  values: {
    badge: "Nuestros valores",
    title: "Lo que representamos",
    description: "Nuestros valores guían todo lo que hacemos, desde cómo construimos nuestros productos hasta cómo interactuamos con nuestros clientes y entre nosotros.",
    data: [
      {
        title: "Innovación y Excelencia",
        description: "Nuestro compromiso con la innovación, la calidad y el impacto en la atención médica se ha mantenido firme. Nos enorgullece ver cómo nuestras soluciones han contribuido a optimizar procesos, facilitar el trabajo de los profesionales de la salud y mejorar la experiencia de los pacientes."
      },
      {
        title: "Confianza y transparencia",
        description: "Creemos en generar confianza a través de la transparencia. Somos abiertos con nuestros procesos y políticas, y siempre nos esforzamos por hacer lo mejor para nuestros clientes."
      },
      {
        title: "Juventud y Emprendedores",
        description: "Nuestro equipo de líderes aporta una amplia experiencia y una pasión compartida por la innovación. Somos un equipo de personas activas y comprometidos con el desarrollo de soluciones tecnológicas que ayuden a mejorar la experiencia de los pacientes."
      }
    ]
  },
  liderTeam: {
    badge: "Equipo de Líderazgo",
    title: "Conozca a nuestros líderes",
    description: "Nuestro diverso equipo de líderes aporta una amplia experiencia y una pasión compartida por la innovación.",
    data: [
      {
        name: "Luis Escaf",
        title: "CEO & Co-Founder",
        img: "https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/293381145_577367407168860_4623408629680690647_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEmPAKhAAHD4tj_Wyhxo1LkZaWjFsPNpLBlpaMWw82ksDeIdeX4SDilFqx0KpMAfTnDoWNQFyiv0dZABv4qi3uO&_nc_ohc=QbLdb1UudKIQ7kNvwEy9XhM&_nc_oc=Adkg0DRN0vTxqfkJzp4HV3vwytyV-Dq15jq4JkD_RLcqsdvoaDmuXcCiKK9MIAQC2gWSpu4ibe_C3QH-UhpFiMlx&_nc_zt=23&_nc_ht=scontent.fctg1-4.fna&_nc_gid=N7eXH1csqLyELrNty3nNGA&oh=00_AfFE6gknAEGNNym8Iu9scKUhnzy4QROEtwpc4keVcgvdSg&oe=67F9C66F",
        description: "Visionario líder en salud digital con enfoque estratégico y pasión por la innovación tecnológica."
      },
      {
        name: "Jorge Martínez",
        title: "Gerente general",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5AJ5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0.lFXYXM0croODjF-QGERucpZq29XGLcsHA6X9zjHNsGG9V0mqU4yegNuMkSzInoFjhBUJs5-e4Dbc_bzUuFsN3aZGpSUpA8OZBSwdpb4Ad-c1igMEI2eETTefIeoYRcz-qT2sEFyTPU8u4W6CIwjoMu3SOXcsSwtNJ6Cc-D5XaVf_Ja8g23cwceFn1i3n8E79g2dMey5f4l73c777L6_NuH7b4Ej7LMGn5K4ciQBngWnJ56LpXBzuDH1vL9ct1CEckOm8RfxKDDjJhLlq8OOvaC_jIBWsmF0SAqV4aSgCKlsweSiYfe3Bw065vpiuRPIIvOMu3QKOqRdqgPlWrORuwYFXmVMB-0ggTTyp9q1S4557MLzNOKsHOCb14iQfqWwlkXySFmZ9e1n6loicaHwxmJ3nlYuyg_araIfXV8GVTPmyPZRjIVVdmuI0IeZkdj7UYQVNIQ5RmAYHfpp1E6goS_uelQrbp1MEUc8fPR-wEho5t3qe-Y2F91AU07tuDQv1.IRnLoMW56w884K9ROxvTxC4QpUDesLobR4Z_R7C7cJQ%26version%3DPublished&cb=63839151947&encodeFailures=1&width=564&height=847&action=Access",
        description: "Estratega empresarial con experiencia en dirección organizacional y gestión de equipos de alto impacto."
      },
      {
        name: "Carlos Mora",
        title: "Director de proyectos",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5AH5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.ImrJt1KNZTv7ZswJG1z16gUjFjN3qiVygcEgYZjCSF9UyoWPTA8qTRRXvwbiUYf-EHUarA0ysdp_ziBmVLdg2pC6T1LFf65uY9gbVvzUPUhDYai__-PeYUA03Ao6HJjNMZS7pE5WqkAxsrb42yRUelLHsIymbdnFOoYJ7EKajrUsRjqDkoezfzIyO2DwfuoRGOfbtXeq_7k6xQMVIy9PGICKU6UvhIk8uT-O09tWQh3iBkPZAbcAuCPXi-C1PIqKqOIOj6x7_E6eoM_VkggoLVBNxBf7Zpm46MAttPgDHoT9UqE3zor6gu9nJkExiQjZE_fPX0wpKoEP3pTTpOF4L0kEz0pqZ3JW_PCmaetpsNTpenXgm5_Fkns3uc4Fe-dMegHCQOL7FuQ-i-uPmqsQ2azDILRX8YSH5gFM6v-rIRiW03yamVPbMXG3oLFbJirP85X_pW641oX4siftNPS7KhiKBhoh4qCoYFS01dkt-Ll6piHrkxwEya9jLI2NfITh.MC7TzIrMzQeGg1NmnuHv6z5kf8FALjn459ECLrWE1z4%26version%3DPublished&cb=63839151947&encodeFailures=1&width=141&height=211",
        description: "Experto en gestión de proyectos tecnológicos, orientado a resultados y cumplimiento de metas clave."
      },
      {
        name: "José De La Vega",
        title: "Director técnico",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5DY5MAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.ItK2IFm70pmC_O_IkG0bC3gFGFh3stpk7rrmeRkTnVZnyEF4iJYjdQfJWOsrMWUAdx0wRpBgS9e_is1SMq13elUuseH91pzFKgXE1KQoGcL9rhfaazXqa-u4BaUhcQfzcYpdrZVPnj-eME3ro2dCp7BHAYuIDmKb_MAdMUX-aq9fZrra1IHfoTmgUVIbV9Uv1Q7BrGq3yktSGU57ueM1LqJfPaaQpQBJMTESQwV8QvXucp0yQ-IGPWH8BRUCkzLJCPwdnBKIGEovXIYgBRolZjFm7h6iJQT3RcKjSZ3vmttwYARkWfeuAs5WSBoxb1R1qJmEN4gzs9BFCZYbZnUVoHulXgp5y7Fj5oSkMuJg-AUwWl9kXOnRUdhQWjN0g52TlE3aCl6WhT0EQ7lUghqndYp6K8W28lF97f2gzvFDxZSi1OaBdOHoeg0-IyQ06h1mCqkPvEs5whCkugjydB65VSSfQTNkgvHrl-VCx43I-pOi6Q2xzJCqynq8np3T9LvH.PJTyKJR94hkwtsTr8ddqqO13513rfTHV2jxbD4ZHi_g%26version%3DPublished&cb=63839151901&encodeFailures=1&width=141&height=211",
        description: "Experto en gestión de proyectos tecnológicos, orientado a resultados y cumplimiento de metas clave."
      },
      {
        name: "Angel Mendoza",
        title: "Líder de desarrollo",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5C25QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.xwIsE4qQ4eX-WcsOUfLRNpWqykQGAzCwt3OjFCp46o3cbxGK8jEv296zEbswDuRjFZ0Cp-K9rZtUDBsvWjUxNlLzqH3ChOnX4_IMJRdWxN6lhVZAN3oD53HOFAhYwg3tZAZHwikJmp2JB2taw404dgj2H4xUvEqjG9S3F5QfMYop6wEFr2H7Kv4__AG8imZlpK8Jwuq6EJL-tTZ9nZmdkzxGTIIgiYh-gsWM37G56cRr0Xeo4u5OtbWHQjeMd8oGDwGmqd1TD_I8lv0rgKoEvdBfb_1z4LOQGBmnx2RP-zKv9kE6-g7JRvbPUB5lV2bo5a2OHl2yLIayzF_EoT4ZwRI0-hfsH05TzEw76Pn3E5ySZdK_lG26RisMYH8jwz0eZmuEFkp9x4asmFDWrWIKkhLbMmwi6tiHg3iEMv-qEQ8lpZuu9KWU-b--I-6Sie6-awW1JkFjY6vTp6xnos-W9cuPKU6B3a_ywTov9s_NqkBAzEfqUOOdxn-PYWo69A3L.9iS_-UOiDODDAP26WVxQHL1etmknxD32kBLiJTm1Dic%26version%3DPublished&cb=63839655797&encodeFailures=1&width=564&height=847",
        description: "Apasionado por el desarrollo de soluciones eficientes, guía técnica con enfoque colaborativo."
      },
      {
        name: "Duiristt Coba",
        title: "Líder de desarrollo",
        img: defaultImage,
        description: "Especialista en arquitectura de software, comprometido con la calidad y la escalabilidad."
      },
      {
        name: "Valentina Manotas",
        title: "Líder de desarrollo",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5CS5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0.HP_0evTpbgqVVeQ-3wXU5l6_kK9rPbSL7zBikGRlktYgFB812s6ZWDopfoyIYGkMaEr9zkur9Kyu0lMp5Xm-F1gvtOyJZTTUbjF_rW_9wRyB43_eAWYNV5gxEju5K9FRIXE0rkLAH2FKKYI-QTgXFINbR1PK2SB_xpMQ7RnPRZBFYNCWF2e7YCmPzjEn-mKQzZmcgwCk3ZYWPbjECCD2XgqoaMDAeyd0gjds-2cIgKYLo8T45sSz-H_L1vTVwMuNdXYf5XRsB77eS5hI2Z0x7JcyrUaPqkz5toFtr6LQ5T5XzkqSKXaNBSWL6dxm-iI4J-XGf66OOtmsx5yVN87k1CIvQ_HjzOo83sR89o3RmD2XOFWlOAHABU66V_5hrqtVEvawg4WRd5kNgFUvVcI5peRQEUB4M80Kp8cARVxb8wMY2znzDMI2txhWIkD56AbrdOQ66uT4ojahlRCwYEoC2p8TDIgDIGgolOKRxvdp3LR-lMe-dqCAhYEaAv1T6ErE.QWpxe_-upaMvuAfULSjHBQa9tbggm0b6DlM7biUCmxM%26version%3DPublished&cb=63839655783&encodeFailures=1&width=564&height=847&action=Access",
        description: "Líder técnico con una visión clara en innovación, enfocada en la mejora continua y mentoría de equipos."
      },
      {
        name: "Jhan Ortegón",
        title: "Desarrollador frontend",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5DB5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0.QBU2y7gRcnI1mcaXQ5PDhH3Dp46l0eexQD-268cArUTS2PkcOVrDK2hFTEQUe7jb6TBQfnp2Lv8Qjd0UpUxKCaOn1Z8w8lOkBFc5_m4VR0KjeYSTNJ0bqS9nnLFLr6tApx-24oIqd3rGVmgfIHSfStQ91Z3uxZm0ZrL0PmaOoBxTq1HscnWbkzOfb2ebTvxEpWjqZvppfxDlVdOKgtQgYVrh9qhJDr4zeuaQR7GeTjaIOnFijQUsqdzARyzb4nPqQZseIfu9e-WkdjplWpob11Xa5tPFlSjVkzGxGfZfOi9Ov8k6nPuT4z7BCQo32M0pQ2R0DyAv2ngi7DbOdPLovji53RFk946-prdryEZZduJTpQ7yjyJtExZNM9zvgfbpv0KmbYzVPrs3erAQtmgkqQZjTo-B4HvuxoxzUzkhoScDAeui2OTPCgtfynv3kdgvoyeuC3dTfElvG_xbwrxMJmEovuRbp5zbC8HD6nB6XijTqw5hNN4wXQzcbI93kzom.WpcAiptaDMameUu9CD-cRPgJrfsjhF-crJi1KXgRA2o%26version%3DPublished&cb=63839655824&encodeFailures=1&width=564&height=847&action=Access",
        description: "Creativo y detallista en la experiencia de usuario, con fuerte dominio en tecnologías frontend modernas."
      },
      {
        name: "Yesit Manjarres",
        title: "Desarrollador frontend",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5BB5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0.bSez0kWcVFbp44iTfqX_xYQUAiHdwQwxof1WhtELiFdDXeeUyiLFP_bgX4LSrgBhT_7CW6NRI2oSG4UD4_niV8TBTXieQQ5CwAMw67d-_MlD1vCb_T2hf7ifpYAhQeMUedWJbK7dwos5a2vk9nMLuj5J03i7eLyQlQfYkQHW5z3jSzb7jN2pv97zjW5DGz7cv8U-2Z7_iUSDnUds8qWfBb7W98yLfEpkE6UvP-f3yuj4KrGVGl4K_v2L1IsWyWecIKNFIvuLioaAXeno3irNoNQqQNpafl4DbK07S7a8srMpEVzqXJp6eyNrfCpPNsBJXEtp8GkBk3Wi2MKUEUUgBxqUTNDSBHE8ZwtllnQSMhwQW5Dbd6eqfX2FLiJSnCnhTa_29QZ8wG9jmWgdZsLBZZxGD0dJMrd6p3cLKCeB9ns7YIblErpPj4VITQW0nRWFeSH9w0vcUVHHStV9dAK27vQgKlFj9-z3saoohdAP4E_txnYLwMG5M75chhnjGl16.mR3uGBJcfCclXNZtL--UquuuIEbJpeLljV0JzqJ4Nv8%26version%3DPublished&cb=63839655648&encodeFailures=1&width=564&height=847&action=Access",
        description: "Desarrollador dinámico con atención al detalle y enfoque en la usabilidad y el rendimiento."
      },
      {
        name: "Diego ortega",
        title: "Desarrollador frontend",
        img: defaultImage,
        description: "Innovador y especializado en interfaces intuitivas y componentes reutilizables."
      },
      {
        name: "Daniel leiva",
        title: "Desarrollador frontend",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5DC5MAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.Oqbpnxc28cjGRyruPY7i-GZQQ5kDPGQFxJr3yz3jjXTrWqGmrB8y7MyF6AxbbEiAdSnhqmKPbEgW3wS49tHIPxYICilinFW636pKFOHqYXXPXNR36yG9P1SSDx1jwIPBsO77JYFvGqrLHMqYEgIzOQ_3kkKY_Mj_uuPhRubRt0a_Humy1Sb75Upu7VWnRIfKHvO0yvAIPu3iExSjIz4MjLg-FBN4N6bfBDlX-3sZjOW9eE8TbDaWg5zGVtEtk32cWMWDG8gpde52We2HEIB_s7Ln41LSJllJo6iH8C8U8qXxLIbf1jNk5sszLpoZweMLqkW8GxaR2Q-qDDTiLXATeEWOdrlJyRH3adNDj1V_i7D5mZQtXrjKDqvBH5jEFK2Tb--Dk0a20h9jmbWuxWqAyMudgIbjVg_VtbTCwkM-Iw6xStI0GFZsymxWK-3dYnUfYtrLW5FsIXVXaiwUeXhJqz-hC07Tjy8Vr97wXw1FrkFNKz7qk6P_HHPOIRDSx6gx.0yjRsZswar5FIJi3CcJFSDhz7ZBYpDMMY18ex3bbO1Q%26version%3DPublished&cb=63839655873&encodeFailures=1&width=564&height=847",
        description: "Diseña interfaces que conectan, combinando elegancia visual con funcionalidad precisa y componentes modulares."
      },
      {
        name: "Laura Navas",
        title: "Analista de calidad",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5CD5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0.Qpp3j7XWLcX2aEywzx44pphd04Fc71_cetYpSxacBL_JjxJ0X915xqu04HRnSxf2ecppg8N8jKI7eFH72Cj15E2rNSglnkgIOeHLJTDM_D8_ks1CzwmBpKIzjQo0O0TnKCfRY0w2-RXB7NtTMxylhBhX5DfTA06-RE8Di8YnzIz502jIwj8vLkhcDSyHAmXkVGIHkBwQ10PQpfeIU95OXTFqZvOTUqv6JwvPkNn0Gu9nNTj3uMSE0lj3oqa9U9W-nDMEZasYOeRKVnZgaH3tzRjWGuJWIX55FCd7BHsvao2N8lX8fIGoT5beOLNMW-MhRalRLp3Er9YLyVLX2F8KzMd0jMKZeEkPwvSeh6wvIiSMRwTvoGIz5hg4Li_TQ0ZKCNz6tMzOXxbCJ4IiEbuwLh7AT6RIODxfIBly7YmeZJO_h5GGqVRcKlQAhRbPe3g1wha4v_ME4k8nIrLvJQpyKNwF52llpwCIP7P_EF5cElrzW9jKtVKYHkHLVG29Iv3G.JdCsSpCofetElHCcA5Vtxcq6Lh6ttwX2QMJkwYfp2MU%26version%3DPublished&cb=63839655753&encodeFailures=1&width=564&height=847",
        description: "Minuciosa en asegurar la calidad del producto, con enfoque en pruebas funcionales y experiencia del usuario."
      },
      {
        name: "Michel Vázquez",
        title: "Analista de calidad",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5BV5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0.BSLOphFgXi0r2UQaxMnoEtx7CoFG0GWGX9BX1Xvpin9sen9S-lL--HessxBkR-UEX4SK_6ZIXR4S8rZyoovXZQmhjtSM6BKP2lKkzDBK5CwQeW7wNeN7rzRFWKcQCSl0gEqU8vgAtS5UCcA-XFH2NDdGOKMgLkl2g49jwYbxjR55U0t7sNgVWVJN2PG1jAgUYh0EBmVt8GcqWFmFrdb9xB5qHH8iSzX13T-glgEwi4lCPzifoqg76GOq9xuxRGe8Dxo3CcYbF23cQgjhu4JRk-7115JtObxRvTtXTkRTiGvyfyjE3wAud9Y9zO8gRS3-OHEbMOsDggcSp5uLPRC2ACyzoPVDwGJCI191Xq-a6yi7E0xthLc0tL8JBvVfSUTRuMrxdY7Tz22oi3F_G3aKek_RtT718NFXsH2ng_0_8MeB8JBxo-dO5c7lFMTxfkirpXHtTJDufCJYl2U4cCfwFMsAD6vlq3AweY3MzE5ugsM_L3KCcw23QgLdEp12gqXU.6VTAQEpO4vPOv2TMh3E--y-wKonnTjoxmNDyZI7bPgk%26version%3DPublished&cb=63839655710&encodeFailures=1&width=564&height=847",
        description: "Comprometido con la excelencia del software, experto en pruebas automatizadas y procesos QA."
      },
      {
        name: "Mateo melendez",
        title: "Analista de calidad",
        img: defaultImage,
        description: "Analista de calidad enfocado en pruebas funcionales y mejora continua."
      },
      {
        name: "Juan ricardo",
        title: "Analista de calidad",
        img: defaultImage,
        description: "Especialista en pruebas automatizadas y validación de entregables."
      },
      {
        name: "Mario morales",
        title: "Desarrollador backend",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5A25QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.nM_9Fxr86Vam2VRwevvQtzKOeIFNXDANg0z5zZbKYgraqYR0Yvs5iXQudpnq_aTXU0NvjN3AdFjh91vZTKUrWwSVV_0yhGoOK-Cz5ThBX9hKChCbicAXpg36bL2n-tICDDyQTQTdgZqkIGjsO0437BTOi8xcQhuq-L5t6OMVXwuyHDFjUQ7riqJTp-cd59r1cyXV6hYQFyOdblPcV0o-P0S-LJMlGovkOFO-qe6GpWxx76oL_WNe92-LhUTAWWInpZZuorN5a8NQfe0F_3e_-6sJ6l8c5runljlLQuR3etiuvzv_9UPhtGl0TMJ3T8fO-Nvn-IME8CcmQp46WKChduuc996DIcglXnlvSZElrExcQufDk4o1igmacvZQkslUh09aS6L38RXXJTWnCgIslu0BXaWrfuvL-mn3Z0Kckw2fOxSPWQAv5WJ-dtVVmDYpDrbF27eBXu3ndtFC2mz6Aj6LKA8DbgnmGP57uoRp0S7iiCyKVXq2hQPFJQaOC6Ee.xWrED6brxUOaE_8KruQ8i6vFtRI1utmpojX1dAnXDx4%26version%3DPublished&cb=63839151953&encodeFailures=1&width=141&height=211",
        description: "Desarrollador backend especializado en APIs robustas y seguras."
      },
      {
        name: "Carlos villamizar",
        title: "Desarrollador backend",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5C75MAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.mrUGeWXF-zpu4JAeWoI_SSi0Q6Rs9xP7HgfXY_UJ7DUl6h5lviJ3z2mi4pkh7UVdJHK5voe6wFsvv0DVczLu5aO7w9b65dkCyyE3LBBNluaIy95Ld1UJzY9WiaBi0NtLaZqdAUl6kP-wUNyuKBhcUzbknFylotwLphWOfKyuyIT1E49L5xT_xQKaeDpckZJU-pfsq8xuCPjTozIJqBb2ac6BPcsgrc7tGdMbO8TV7Ka9mDY29OqLE3HUj8n-p9Gtgf57rR8_-5UEjCgiCnJTQeEwcfQBGR0AvtbF0v4Dk2myh6iIE8moHKyVfhFMobV43EyF4QA3IGfih02mbuZL90-XLDUh2WGXFs7FuuQvmLQYjnqM1lClLDKuxT_TO4H4SI3hgG0le9_K23akvIfIfMVapLS9IF5beQrU1dBvAUfePKoo7Cd89pFKaV_kYCuX9t4YQBKZtkDXmIGaKlrbQbOKVmbMFwvzTq0EIi7EP0Z9MUoLQqqXHJO9WsI2f9qT.iTiozBNwT60iZaFhONdOGBWd9_59Rzsr9rxGln7KOwQ%26version%3DPublished&cb=63839151892&encodeFailures=1&width=564&height=847",
        description: "Optimiza la lógica del servidor con código limpio y mantenible."
      },
      {
        name: "Sebastian guttierrez",
        title: "Desarrollador backend",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5DK5MAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.IgwX0_wpWVaQYB_nDMMnYPT700sl4XfJ1oC6Oh-GuMv4JJfd281ELCSpB5FD4jQvufIOYJvCrpbVD7vUgfFxorntc0umlEs_a8S-AmyMrOygPP6Nc-GrPPXWCKw2H0kFvwQDdPpwQAPwWtIJ_G5NuSsJTP_6kmeXj4-R49DiV7cs78MCWIJPbAGVKJxfNbSxsKYJwJUQ6gSFVNooApJycCQdMcozvNYLXy9O6aWU0DWOpSp6ol8CfrKPbz0UmbyEFv7FKUgYowye65SB_CDwy671AH29MSLDDlADebxX-npW7TdzozvkaIhANKHLGf0de2x5eD-ZSK37XU4H4XreiLrRg0d9q02S5X4jTQH_oROQ1a-0UHyUi5Ssqnrds0cxdbWlHGSUR6-XqtRYjrZrbYZbcD81Zz7TjoQKcVWItEEhLu29JKGo1TxtbGbh4UCdMJXmLlgHVInPXyuA2B98NYVxijbpEBM-VPXr5_9Q2J4wFcFVxgQeENIBn_Nvq3CM.BCVS1jfVF7i2XMfRX9Cx-UtKGZ6wCBZ99ezNJYmW-gA%26version%3DPublished&cb=63839151896&encodeFailures=1&width=564&height=847",
        description: "Backend developer experto en automatización, integración y arquitectura limpia."
      },
      {
        name: "Luis potte",
        title: "Desarrollador backend",
        img: defaultImage,
        description: "Crea y mantiene servicios backend eficientes con enfoque modular."
      },
      {
        name: "Jhon santander",
        title: "Desarrollador backend",
        img: defaultImage,
        description: "Ingeniero backend enfocado en rendimiento, escalabilidad y bases de datos."
      },
      {
        name: "Andres triana",
        title: "Implementador",
        img: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5DF5QAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDE2MDAwIn0.WGmFQVHXL7p0QDO6_30MwYf23ajk9yShtBzEFfqDViYTdBM6lhAojkl-6cNoa1ERr5cAYlKzwab5hJ7FDAW8N7nmOvr7kOV3LLJNpM5p74qbz49sUhr-ULgfG8iDHAj-WSIm-W3Tq6XVvHXZcub8fhK_-BLzdbHS9499ALvmwiHH27pcidM8eICz0PHBul2pJY18g3aKZC9sBNrsNoe2FDEITuYPZWG11sXOOj19NGlQn1rdm_WvU0Xkthk9-ez2o5qHLCGr4wblA5I4ISKgfV3YRn1dYsAEnTKpBX_I1r9JOLcbv_MRTTNrVTvkwXQRp_dH0GFS6P6hYVd1rNCKQ4b1bzkCFP0Hau9VeroxwO53Gx7xp5fKOuRWfn-_ds9X77p0DkqlCkGQR_D51CAUfSw1T_2YGjzH7VxLxeY_XmZrDjkcFGPO4aOb4yeFheIgIfaQxehLudO18uIEO4FH9L5ZWhAFnD89etNduxeXKLAUz2JqxQI_lMPPSvbFsT7_.ysZdPiuPtd4O6_EVPsRsxRpwsfXIPzwYhH9_ESkCwLw%26version%3DPublished&cb=63839655837&encodeFailures=1&width=564&height=847",
        description: "Implementador de soluciones tecnológicas, enfocado en puesta en marcha eficiente."
      },
      {
        name: "Javier ramos",
        title: "Implementador",
        img: defaultImage,
        description: "Asegura el despliegue exitoso de sistemas con orientación al usuario final."
      }
    ]
  }
};

const JOB_EMAIL = "gestionadmin@ttncompany.com";
const ADMIN_EMAIL = "gerentedeproyectos@ttncompany.com";
const API_URL = "https://admin-landing-dashboard.vercel.app/api";
const API_URL_SEND_EMAIL = "https://ttnstaging.biowel.com.co/comunicationms/api/v1/notifications/simpleEmail";

const fetchVacantes = async () => {
  try {
    const response = await fetch(`${API_URL}/vacantes`);
    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const result = await response.json();
    if (!Array.isArray(result.data)) {
      throw new Error("La respuesta no contiene un array válido en 'data'");
    }
    return result.data;
  } catch (error) {
    console.error("❌ Error en fetchVacancies:", error);
    return [];
  }
};
const career = {
  layout: {
    title: "Trabaja con nosotros - TTN Company",
    description: "Queremos que hagas parte de nuestro equipo"
  },
  heroSection: {
    img: "/banner-careers.jpg",
    title: "Trabaja con nosotros",
    description: "Queremos que hagas parte de nuestro equipo"
  },
  openPositions: {
    title: "¿Quieres trabajar con nosotros?",
    data: []
    //  [
    //   {
    //     title: "Desarrollador frontend",
    //     description:
    //       "Estamos buscando un desarrollador frontend experimentado que nos ayude a crear interfaces de usuario hermosas, receptivas y accesibles para nuestra plataforma SaaS.",
    //     techs: [
    //       "React",
    //       "TypeScript",
    //       "Tailwind CSS",
    //       "5+ años de experiencia",
    //     ],
    //     status: "Remoto",
    //   },
    //   {
    //     title: "Ingeniero backend",
    //     description:
    //       "Únase a nuestro equipo de backend para crear API y servicios escalables, confiables y seguros que impulsen nuestra plataforma SaaS.",
    //     techs: ["Node.js", "PostgreSQL", "AWS", "3+ Years Experience"],
    //     status: "Remoto",
    //   },
    //   {
    //     title: "Diseñador de productos",
    //     description:
    //       "Buscamos un diseñador de productos talentoso para crear experiencias de usuario intuitivas y agradables para nuestros clientes.",
    //     techs: ["UI/UX", "Figma", "User Research", "4+ Years Experience"],
    //     status: "Remoto",
    //   },
    // ],
  }
};

const $$LogoSvg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="195" height="90" viewBox="0 0 316 114" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.9868 102.948H16.0895V111.034H14.1439V102.948H11.2324V101.241H18.9868V102.948Z" fill="#003264"></path> <path d="M25.5969 110.433C25.3128 110.656 24.9246 110.848 24.4323 111.006C23.9494 111.155 23.4334 111.23 22.8843 111.23C21.7386 111.23 20.9007 110.904 20.3705 110.251C19.8403 109.589 19.5752 108.684 19.5752 107.537C19.5752 106.306 19.8734 105.382 20.4699 104.767C21.0664 104.151 21.9043 103.843 22.9837 103.843C23.3435 103.843 23.6938 103.89 24.0346 103.983C24.3755 104.077 24.6785 104.23 24.9436 104.445C25.2087 104.659 25.4217 104.949 25.5827 105.312C25.7436 105.676 25.8241 106.128 25.8241 106.669C25.8241 106.865 25.8099 107.075 25.7815 107.299C25.7626 107.523 25.7294 107.756 25.6821 107.998H21.4214C21.4498 108.586 21.6013 109.029 21.8759 109.327C22.16 109.626 22.6144 109.775 23.2393 109.775C23.6275 109.775 23.9731 109.719 24.2761 109.607C24.5885 109.486 24.8252 109.365 24.9862 109.243L25.5969 110.433ZM22.9553 105.298C22.4724 105.298 22.1126 105.443 21.8759 105.732C21.6487 106.012 21.5114 106.39 21.464 106.865H24.1056C24.1435 106.362 24.063 105.975 23.8642 105.704C23.6748 105.434 23.3719 105.298 22.9553 105.298Z" fill="#003264"></path> <path d="M33.8615 110.6C33.5775 110.806 33.2319 110.96 32.8247 111.062C32.4271 111.174 32.0152 111.23 31.5892 111.23C31.0211 111.23 30.5382 111.141 30.1405 110.964C29.7523 110.787 29.4352 110.54 29.189 110.223C28.9428 109.896 28.7629 109.505 28.6493 109.048C28.5452 108.591 28.4931 108.087 28.4931 107.537C28.4931 106.352 28.7629 105.443 29.3026 104.809C29.8423 104.165 30.6281 103.843 31.6602 103.843C32.1809 103.843 32.5975 103.885 32.91 103.969C33.2319 104.053 33.5206 104.161 33.7763 104.291L33.336 105.774C33.1182 105.671 32.9005 105.592 32.6827 105.536C32.4744 105.48 32.233 105.452 31.9584 105.452C31.4471 105.452 31.0589 105.62 30.7938 105.956C30.5287 106.282 30.3962 106.809 30.3962 107.537C30.3962 107.835 30.4293 108.11 30.4956 108.362C30.5619 108.614 30.6613 108.833 30.7938 109.02C30.9264 109.206 31.0968 109.355 31.3051 109.467C31.5229 109.57 31.7738 109.621 32.0578 109.621C32.3703 109.621 32.6354 109.584 32.8531 109.509C33.0709 109.425 33.265 109.327 33.4354 109.215L33.8615 110.6Z" fill="#003264"></path> <path d="M41.0991 111.034V107.061C41.0991 106.492 41.0187 106.082 40.8577 105.83C40.6967 105.578 40.4032 105.452 39.9772 105.452C39.6647 105.452 39.3759 105.559 39.1108 105.774C38.8552 105.979 38.6848 106.245 38.5996 106.571V111.034H36.7533V101.241H38.5996V104.823H38.6564C38.8836 104.524 39.1629 104.286 39.4943 104.109C39.8257 103.932 40.247 103.843 40.7583 103.843C41.1181 103.843 41.4353 103.89 41.7098 103.983C41.9844 104.077 42.2116 104.23 42.3915 104.445C42.5809 104.659 42.7182 104.953 42.8034 105.326C42.8981 105.69 42.9454 106.142 42.9454 106.683V111.034H41.0991Z" fill="#003264"></path> <path d="M50.6134 111.034V107.061C50.6134 106.492 50.5282 106.082 50.3578 105.83C50.1968 105.578 49.9175 105.452 49.5199 105.452C49.1696 105.452 48.8713 105.555 48.6251 105.76C48.3884 105.956 48.218 106.203 48.1139 106.501V111.034H46.2676V104.039H47.7304L47.9434 104.963H48.0003C48.218 104.664 48.5068 104.403 48.8666 104.179C49.2264 103.955 49.6903 103.843 50.2584 103.843C50.6087 103.843 50.9212 103.89 51.1957 103.983C51.4703 104.077 51.7023 104.23 51.8916 104.445C52.081 104.659 52.223 104.953 52.3177 105.326C52.4124 105.69 52.4597 106.142 52.4597 106.683V111.034H50.6134Z" fill="#003264"></path> <path d="M55.4411 107.537C55.4411 106.352 55.7346 105.443 56.3216 104.809C56.9086 104.165 57.7323 103.843 58.7928 103.843C59.3608 103.843 59.8532 103.932 60.2698 104.109C60.6864 104.286 61.032 104.538 61.3065 104.865C61.5811 105.182 61.7847 105.569 61.9172 106.026C62.0592 106.483 62.1302 106.986 62.1302 107.537C62.1302 108.721 61.8367 109.635 61.2497 110.279C60.6722 110.913 59.8532 111.23 58.7928 111.23C58.2247 111.23 57.7323 111.141 57.3157 110.964C56.8991 110.787 56.5488 110.54 56.2648 110.223C55.9902 109.896 55.7819 109.505 55.6399 109.048C55.5073 108.591 55.4411 108.087 55.4411 107.537ZM57.3441 107.537C57.3441 107.844 57.3725 108.129 57.4293 108.39C57.4862 108.651 57.5714 108.88 57.685 109.076C57.7986 109.271 57.9454 109.425 58.1253 109.537C58.3146 109.64 58.5371 109.691 58.7928 109.691C59.2756 109.691 59.6354 109.519 59.8721 109.174C60.1088 108.828 60.2272 108.283 60.2272 107.537C60.2272 106.893 60.1183 106.376 59.9005 105.984C59.6828 105.583 59.3135 105.382 58.7928 105.382C58.3383 105.382 57.9832 105.55 57.7276 105.886C57.472 106.222 57.3441 106.772 57.3441 107.537Z" fill="#003264"></path> <path d="M67.0883 108.684C67.0883 109.01 67.1309 109.248 67.2162 109.397C67.3014 109.547 67.4387 109.621 67.628 109.621C67.7416 109.621 67.8505 109.612 67.9547 109.593C68.0683 109.575 68.2056 109.533 68.3665 109.467L68.5654 110.894C68.4139 110.969 68.1819 111.044 67.8695 111.118C67.557 111.193 67.2351 111.23 66.9037 111.23C66.364 111.23 65.9522 111.109 65.6681 110.866C65.3841 110.614 65.2421 110.204 65.2421 109.635V101.241H67.0883V108.684Z" fill="#003264"></path> <path d="M70.7943 107.537C70.7943 106.352 71.0878 105.443 71.6748 104.809C72.2619 104.165 73.0856 103.843 74.146 103.843C74.7141 103.843 75.2064 103.932 75.623 104.109C76.0396 104.286 76.3852 104.538 76.6598 104.865C76.9344 105.182 77.1379 105.569 77.2705 106.026C77.4125 106.483 77.4835 106.986 77.4835 107.537C77.4835 108.721 77.19 109.635 76.603 110.279C76.0254 110.913 75.2064 111.23 74.146 111.23C73.5779 111.23 73.0856 111.141 72.669 110.964C72.2524 110.787 71.9021 110.54 71.618 110.223C71.3435 109.896 71.1352 109.505 70.9931 109.048C70.8606 108.591 70.7943 108.087 70.7943 107.537ZM72.6974 107.537C72.6974 107.844 72.7258 108.129 72.7826 108.39C72.8394 108.651 72.9246 108.88 73.0382 109.076C73.1519 109.271 73.2986 109.425 73.4785 109.537C73.6679 109.64 73.8904 109.691 74.146 109.691C74.6289 109.691 74.9887 109.519 75.2254 109.174C75.4621 108.828 75.5804 108.283 75.5804 107.537C75.5804 106.893 75.4715 106.376 75.2538 105.984C75.036 105.583 74.6668 105.382 74.146 105.382C73.6915 105.382 73.3365 105.55 73.0809 105.886C72.8252 106.222 72.6974 106.772 72.6974 107.537Z" fill="#003264"></path> <path d="M86.546 111.034C86.546 112.051 86.2667 112.797 85.7081 113.273C85.1495 113.758 84.3684 114 83.3647 114C82.683 114 82.1434 113.953 81.7457 113.86C81.3575 113.767 81.064 113.669 80.8652 113.566L81.2486 112.125C81.4664 112.209 81.7173 112.293 82.0013 112.377C82.2948 112.461 82.6546 112.503 83.0807 112.503C83.7245 112.503 84.1601 112.363 84.3873 112.083C84.624 111.813 84.7423 111.431 84.7423 110.936V110.489H84.6855C84.3542 110.927 83.7671 111.146 82.9245 111.146C82.0061 111.146 81.3196 110.866 80.8652 110.307C80.4202 109.747 80.1977 108.87 80.1977 107.677C80.1977 106.427 80.5006 105.48 81.1066 104.837C81.7126 104.193 82.5931 103.871 83.7482 103.871C84.3541 103.871 84.8938 103.913 85.3672 103.997C85.8501 104.081 86.243 104.179 86.546 104.291V111.034ZM83.4215 109.691C83.7813 109.691 84.0559 109.612 84.2453 109.453C84.4441 109.295 84.5956 109.057 84.6997 108.74V105.592C84.4062 105.471 84.0417 105.41 83.6062 105.41C83.1328 105.41 82.7635 105.587 82.4984 105.942C82.2333 106.287 82.1007 106.842 82.1007 107.607C82.1007 108.288 82.2144 108.805 82.4416 109.16C82.6688 109.514 82.9955 109.691 83.4215 109.691Z" fill="#003264"></path> <path d="M92.5128 107.97L92.7684 109.062H92.8536L93.0383 107.956L94.1176 104.039H96.0207L93.862 110.349C93.6821 110.871 93.5069 111.347 93.3365 111.776C93.1755 112.214 92.9957 112.592 92.7968 112.909C92.598 113.226 92.3755 113.468 92.1293 113.636C91.8926 113.813 91.6086 113.902 91.2772 113.902C90.7849 113.902 90.3919 113.823 90.0984 113.664L90.4393 112.209C90.5813 112.265 90.7233 112.293 90.8653 112.293C91.0831 112.293 91.2914 112.2 91.4902 112.013C91.6985 111.836 91.8548 111.51 91.9589 111.034L88.9907 104.039H91.2062L92.5128 107.97Z" fill="#003264"></path> <path d="M109.927 102.948H107.03V111.034H105.085V102.948H102.173V101.241H109.927V102.948Z" fill="#003264"></path> <path d="M115.095 105.746C114.802 105.643 114.537 105.592 114.3 105.592C113.969 105.592 113.689 105.681 113.462 105.858C113.244 106.026 113.098 106.245 113.022 106.515V111.034H111.176V104.039H112.61L112.823 104.963H112.88C113.041 104.618 113.259 104.352 113.533 104.165C113.808 103.979 114.13 103.885 114.499 103.885C114.745 103.885 115.024 103.937 115.337 104.039L115.095 105.746Z" fill="#003264"></path> <path d="M117.887 104.445C118.266 104.277 118.716 104.147 119.237 104.053C119.757 103.951 120.302 103.899 120.87 103.899C121.362 103.899 121.774 103.96 122.105 104.081C122.437 104.193 122.697 104.356 122.887 104.571C123.085 104.785 123.223 105.042 123.298 105.34C123.384 105.639 123.426 105.975 123.426 106.348C123.426 106.758 123.412 107.173 123.384 107.593C123.355 108.003 123.336 108.409 123.327 108.81C123.327 109.211 123.341 109.603 123.369 109.985C123.398 110.358 123.469 110.712 123.582 111.048H122.077L121.779 110.083H121.708C121.518 110.372 121.253 110.624 120.912 110.838C120.581 111.044 120.15 111.146 119.62 111.146C119.289 111.146 118.99 111.099 118.725 111.006C118.46 110.904 118.233 110.764 118.044 110.587C117.854 110.4 117.708 110.185 117.603 109.943C117.499 109.691 117.447 109.411 117.447 109.104C117.447 108.675 117.542 108.315 117.731 108.026C117.93 107.728 118.209 107.49 118.569 107.313C118.938 107.126 119.374 107 119.876 106.935C120.387 106.861 120.955 106.837 121.58 106.865C121.646 106.343 121.608 105.97 121.466 105.746C121.324 105.513 121.007 105.396 120.515 105.396C120.146 105.396 119.753 105.434 119.336 105.508C118.929 105.583 118.593 105.681 118.328 105.802L117.887 104.445ZM120.231 109.649C120.6 109.649 120.894 109.57 121.111 109.411C121.329 109.243 121.49 109.066 121.594 108.88V107.97C121.301 107.942 121.017 107.938 120.742 107.956C120.477 107.975 120.24 108.017 120.032 108.082C119.824 108.148 119.658 108.241 119.535 108.362C119.412 108.483 119.35 108.637 119.35 108.824C119.35 109.085 119.426 109.29 119.577 109.439C119.738 109.579 119.956 109.649 120.231 109.649Z" fill="#003264"></path> <path d="M131.097 111.034V107.061C131.097 106.492 131.011 106.082 130.841 105.83C130.68 105.578 130.401 105.452 130.003 105.452C129.653 105.452 129.355 105.555 129.108 105.76C128.872 105.956 128.701 106.203 128.597 106.501V111.034H126.751V104.039H128.214L128.427 104.963H128.484C128.701 104.664 128.99 104.403 129.35 104.179C129.71 103.955 130.174 103.843 130.742 103.843C131.092 103.843 131.404 103.89 131.679 103.983C131.954 104.077 132.186 104.23 132.375 104.445C132.564 104.659 132.706 104.953 132.801 105.326C132.896 105.69 132.943 106.142 132.943 106.683V111.034H131.097Z" fill="#003264"></path> <path d="M139.205 109.104C139.205 108.917 139.125 108.768 138.964 108.656C138.803 108.544 138.604 108.441 138.367 108.348C138.13 108.255 137.87 108.162 137.586 108.068C137.302 107.966 137.042 107.831 136.805 107.663C136.568 107.485 136.369 107.266 136.208 107.005C136.047 106.735 135.967 106.39 135.967 105.97C135.967 105.28 136.175 104.753 136.592 104.389C137.008 104.025 137.61 103.843 138.395 103.843C138.935 103.843 139.423 103.899 139.858 104.011C140.294 104.123 140.635 104.249 140.881 104.389L140.469 105.704C140.251 105.62 139.977 105.532 139.645 105.438C139.314 105.345 138.978 105.298 138.637 105.298C138.088 105.298 137.813 105.508 137.813 105.928C137.813 106.096 137.894 106.231 138.055 106.334C138.216 106.436 138.414 106.534 138.651 106.627C138.888 106.711 139.148 106.805 139.432 106.907C139.716 107.01 139.977 107.145 140.213 107.313C140.45 107.471 140.649 107.681 140.81 107.942C140.971 108.204 141.051 108.539 141.051 108.95C141.051 109.659 140.819 110.218 140.355 110.628C139.901 111.03 139.214 111.23 138.296 111.23C137.794 111.23 137.321 111.165 136.876 111.034C136.44 110.913 136.085 110.768 135.811 110.6L136.322 109.243C136.54 109.365 136.829 109.486 137.188 109.607C137.548 109.719 137.917 109.775 138.296 109.775C138.571 109.775 138.788 109.724 138.949 109.621C139.12 109.519 139.205 109.346 139.205 109.104Z" fill="#003264"></path> <path d="M143.379 104.039H144.359V103.648C144.359 102.762 144.548 102.123 144.927 101.731C145.305 101.33 145.855 101.129 146.574 101.129C147.332 101.129 147.961 101.218 148.463 101.395L148.108 102.85C147.89 102.776 147.696 102.729 147.526 102.71C147.365 102.682 147.194 102.668 147.014 102.668C146.825 102.668 146.674 102.696 146.56 102.752C146.456 102.808 146.375 102.897 146.318 103.018C146.271 103.13 146.238 103.274 146.219 103.452C146.21 103.62 146.205 103.815 146.205 104.039H147.767V105.578H146.205V111.034H144.359V105.578H143.379V104.039Z" fill="#003264"></path> <path d="M149.96 107.537C149.96 106.352 150.254 105.443 150.841 104.809C151.428 104.165 152.251 103.843 153.312 103.843C153.88 103.843 154.372 103.932 154.789 104.109C155.205 104.286 155.551 104.538 155.825 104.865C156.1 105.182 156.304 105.569 156.436 106.026C156.578 106.483 156.649 106.986 156.649 107.537C156.649 108.721 156.356 109.635 155.769 110.279C155.191 110.913 154.372 111.23 153.312 111.23C152.744 111.23 152.251 111.141 151.835 110.964C151.418 110.787 151.068 110.54 150.784 110.223C150.509 109.896 150.301 109.505 150.159 109.048C150.026 108.591 149.96 108.087 149.96 107.537ZM151.863 107.537C151.863 107.844 151.891 108.129 151.948 108.39C152.005 108.651 152.09 108.88 152.204 109.076C152.318 109.271 152.464 109.425 152.644 109.537C152.834 109.64 153.056 109.691 153.312 109.691C153.795 109.691 154.154 109.519 154.391 109.174C154.628 108.828 154.746 108.283 154.746 107.537C154.746 106.893 154.637 106.376 154.419 105.984C154.202 105.583 153.832 105.382 153.312 105.382C152.857 105.382 152.502 105.55 152.247 105.886C151.991 106.222 151.863 106.772 151.863 107.537Z" fill="#003264"></path> <path d="M163.624 105.746C163.33 105.643 163.065 105.592 162.829 105.592C162.497 105.592 162.218 105.681 161.991 105.858C161.773 106.026 161.626 106.245 161.55 106.515V111.034H159.704V104.039H161.139L161.352 104.963H161.408C161.569 104.618 161.787 104.352 162.062 104.165C162.336 103.979 162.658 103.885 163.027 103.885C163.274 103.885 163.553 103.937 163.865 104.039L163.624 105.746Z" fill="#003264"></path> <path d="M170.492 111.034V107.229C170.492 106.585 170.43 106.128 170.307 105.858C170.184 105.587 169.929 105.452 169.54 105.452C169.218 105.452 168.958 105.541 168.759 105.718C168.56 105.886 168.409 106.105 168.305 106.376V111.034H166.459V104.039H167.893L168.106 104.963H168.163C168.381 104.664 168.655 104.403 168.986 104.179C169.327 103.955 169.763 103.843 170.293 103.843C170.748 103.843 171.117 103.937 171.401 104.123C171.694 104.3 171.922 104.604 172.083 105.033C172.3 104.669 172.58 104.38 172.92 104.165C173.261 103.951 173.673 103.843 174.156 103.843C174.554 103.843 174.89 103.89 175.164 103.983C175.448 104.077 175.676 104.24 175.846 104.473C176.026 104.697 176.159 105 176.244 105.382C176.329 105.765 176.372 106.25 176.372 106.837V111.034H174.525V107.103C174.525 106.553 174.464 106.142 174.341 105.872C174.227 105.592 173.967 105.452 173.56 105.452C173.228 105.452 172.963 105.541 172.764 105.718C172.575 105.895 172.433 106.138 172.338 106.446V111.034H170.492Z" fill="#003264"></path> <path d="M179.818 104.039H181.665V111.034H179.818V104.039ZM179.548 102.067C179.548 101.796 179.648 101.568 179.847 101.381C180.055 101.185 180.339 101.087 180.699 101.087C181.059 101.087 181.347 101.185 181.565 101.381C181.792 101.568 181.906 101.796 181.906 102.067C181.906 102.337 181.792 102.566 181.565 102.752C181.347 102.929 181.059 103.018 180.699 103.018C180.339 103.018 180.055 102.929 179.847 102.752C179.648 102.566 179.548 102.337 179.548 102.067Z" fill="#003264"></path> <path d="M189.597 111.034V107.061C189.597 106.492 189.512 106.082 189.342 105.83C189.181 105.578 188.901 105.452 188.504 105.452C188.153 105.452 187.855 105.555 187.609 105.76C187.372 105.956 187.202 106.203 187.098 106.501V111.034H185.251V104.039H186.714L186.927 104.963H186.984C187.202 104.664 187.491 104.403 187.85 104.179C188.21 103.955 188.674 103.843 189.242 103.843C189.592 103.843 189.905 103.89 190.18 103.983C190.454 104.077 190.686 104.23 190.875 104.445C191.065 104.659 191.207 104.953 191.301 105.326C191.396 105.69 191.443 106.142 191.443 106.683V111.034H189.597Z" fill="#003264"></path> <path d="M200.773 111.034C200.773 112.051 200.494 112.797 199.935 113.273C199.377 113.758 198.596 114 197.592 114C196.91 114 196.371 113.953 195.973 113.86C195.585 113.767 195.291 113.669 195.092 113.566L195.476 112.125C195.694 112.209 195.944 112.293 196.229 112.377C196.522 112.461 196.882 112.503 197.308 112.503C197.952 112.503 198.387 112.363 198.614 112.083C198.851 111.813 198.969 111.431 198.969 110.936V110.489H198.913C198.581 110.927 197.994 111.146 197.152 111.146C196.233 111.146 195.547 110.866 195.092 110.307C194.647 109.747 194.425 108.87 194.425 107.677C194.425 106.427 194.728 105.48 195.334 104.837C195.94 104.193 196.82 103.871 197.975 103.871C198.581 103.871 199.121 103.913 199.594 103.997C200.077 104.081 200.47 104.179 200.773 104.291V111.034ZM197.649 109.691C198.008 109.691 198.283 109.612 198.472 109.453C198.671 109.295 198.823 109.057 198.927 108.74V105.592C198.633 105.471 198.269 105.41 197.833 105.41C197.36 105.41 196.991 105.587 196.726 105.942C196.46 106.287 196.328 106.842 196.328 107.607C196.328 108.288 196.442 108.805 196.669 109.16C196.896 109.514 197.223 109.691 197.649 109.691Z" fill="#003264"></path> <path d="M212.036 105.928L211.255 104.389H211.184L211.411 105.928V111.034H209.565V101.171H210.985L214.749 106.39L215.502 107.886H215.573L215.345 106.39V101.241H217.192V111.104H215.771L212.036 105.928Z" fill="#003264"></path> <path d="M226.313 110.433C226.029 110.656 225.64 110.848 225.148 111.006C224.665 111.155 224.149 111.23 223.6 111.23C222.454 111.23 221.617 110.904 221.086 110.251C220.556 109.589 220.291 108.684 220.291 107.537C220.291 106.306 220.589 105.382 221.186 104.767C221.782 104.151 222.62 103.843 223.699 103.843C224.059 103.843 224.41 103.89 224.75 103.983C225.091 104.077 225.394 104.23 225.659 104.445C225.924 104.659 226.138 104.949 226.298 105.312C226.459 105.676 226.54 106.128 226.54 106.669C226.54 106.865 226.526 107.075 226.497 107.299C226.478 107.523 226.445 107.756 226.398 107.998H222.137C222.166 108.586 222.317 109.029 222.592 109.327C222.876 109.626 223.33 109.775 223.955 109.775C224.343 109.775 224.689 109.719 224.992 109.607C225.304 109.486 225.541 109.365 225.702 109.243L226.313 110.433ZM223.671 105.298C223.188 105.298 222.828 105.443 222.592 105.732C222.364 106.012 222.227 106.39 222.18 106.865H224.821C224.859 106.362 224.779 105.975 224.58 105.704C224.391 105.434 224.088 105.298 223.671 105.298Z" fill="#003264"></path> <path d="M234.691 104.039L235.983 107.621L236.239 108.782H236.296L236.495 107.607L237.404 104.039H239.094L236.906 111.104H235.543L234.109 107.187L233.924 106.306H233.853L233.683 107.201L232.319 111.104H230.913L228.627 104.039H230.629L231.666 107.551L231.836 108.796H231.907L232.149 107.537L233.328 104.039H234.691Z" fill="#003264"></path> <path d="M241.561 101.241H243.407V104.599H243.464C243.662 104.375 243.918 104.198 244.231 104.067C244.543 103.937 244.889 103.871 245.267 103.871C246.119 103.871 246.768 104.161 247.213 104.739C247.667 105.308 247.895 106.18 247.895 107.355C247.895 108.614 247.577 109.57 246.943 110.223C246.318 110.876 245.457 111.202 244.358 111.202C243.752 111.202 243.199 111.151 242.697 111.048C242.195 110.955 241.816 110.848 241.561 110.726V101.241ZM244.728 105.41C244.387 105.41 244.107 105.499 243.89 105.676C243.681 105.844 243.52 106.091 243.407 106.418V109.467C243.558 109.542 243.719 109.593 243.89 109.621C244.07 109.649 244.259 109.663 244.458 109.663C244.96 109.663 245.338 109.486 245.594 109.132C245.859 108.768 245.992 108.194 245.992 107.411C245.992 106.077 245.57 105.41 244.728 105.41Z" fill="#003264"></path> <path d="M252.725 104.039V108.012C252.725 108.581 252.792 108.992 252.924 109.243C253.066 109.495 253.336 109.621 253.734 109.621C254.084 109.621 254.373 109.519 254.6 109.313C254.837 109.108 255.012 108.856 255.125 108.558V104.039H256.972V108.908C256.972 109.29 256.991 109.668 257.029 110.041C257.066 110.405 257.123 110.736 257.199 111.034H255.807L255.48 109.999H255.424C255.206 110.353 254.903 110.647 254.515 110.88C254.127 111.113 253.667 111.23 253.137 111.23C252.777 111.23 252.455 111.183 252.171 111.09C251.887 110.997 251.651 110.843 251.461 110.628C251.272 110.414 251.125 110.125 251.021 109.761C250.926 109.397 250.879 108.94 250.879 108.39V104.039H252.725Z" fill="#003264"></path> <path d="M263.307 109.104C263.307 108.917 263.227 108.768 263.066 108.656C262.905 108.544 262.706 108.441 262.469 108.348C262.232 108.255 261.972 108.162 261.688 108.068C261.404 107.966 261.144 107.831 260.907 107.663C260.67 107.485 260.471 107.266 260.31 107.005C260.149 106.735 260.069 106.39 260.069 105.97C260.069 105.28 260.277 104.753 260.694 104.389C261.11 104.025 261.712 103.843 262.498 103.843C263.037 103.843 263.525 103.899 263.96 104.011C264.396 104.123 264.737 104.249 264.983 104.389L264.571 105.704C264.353 105.62 264.079 105.532 263.747 105.438C263.416 105.345 263.08 105.298 262.739 105.298C262.19 105.298 261.915 105.508 261.915 105.928C261.915 106.096 261.996 106.231 262.157 106.334C262.318 106.436 262.516 106.534 262.753 106.627C262.99 106.711 263.25 106.805 263.534 106.907C263.818 107.01 264.079 107.145 264.315 107.313C264.552 107.471 264.751 107.681 264.912 107.942C265.073 108.204 265.153 108.539 265.153 108.95C265.153 109.659 264.921 110.218 264.457 110.628C264.003 111.03 263.317 111.23 262.398 111.23C261.896 111.23 261.423 111.165 260.978 111.034C260.542 110.913 260.187 110.768 259.913 110.6L260.424 109.243C260.642 109.365 260.931 109.486 261.29 109.607C261.65 109.719 262.019 109.775 262.398 109.775C262.673 109.775 262.89 109.724 263.051 109.621C263.222 109.519 263.307 109.346 263.307 109.104Z" fill="#003264"></path> <path d="M268.29 104.039H270.137V111.034H268.29V104.039ZM268.02 102.067C268.02 101.796 268.12 101.568 268.319 101.381C268.527 101.185 268.811 101.087 269.171 101.087C269.531 101.087 269.819 101.185 270.037 101.381C270.264 101.568 270.378 101.796 270.378 102.067C270.378 102.337 270.264 102.566 270.037 102.752C269.819 102.929 269.531 103.018 269.171 103.018C268.811 103.018 268.527 102.929 268.319 102.752C268.12 102.566 268.02 102.337 268.02 102.067Z" fill="#003264"></path> <path d="M278.069 111.034V107.061C278.069 106.492 277.984 106.082 277.814 105.83C277.653 105.578 277.373 105.452 276.976 105.452C276.625 105.452 276.327 105.555 276.081 105.76C275.844 105.956 275.674 106.203 275.57 106.501V111.034H273.723V104.039H275.186L275.399 104.963H275.456C275.674 104.664 275.963 104.403 276.322 104.179C276.682 103.955 277.146 103.843 277.714 103.843C278.064 103.843 278.377 103.89 278.651 103.983C278.926 104.077 279.158 104.23 279.347 104.445C279.537 104.659 279.679 104.953 279.773 105.326C279.868 105.69 279.915 106.142 279.915 106.683V111.034H278.069Z" fill="#003264"></path> <path d="M288.918 110.433C288.634 110.656 288.246 110.848 287.754 111.006C287.271 111.155 286.755 111.23 286.206 111.23C285.06 111.23 284.222 110.904 283.692 110.251C283.162 109.589 282.897 108.684 282.897 107.537C282.897 106.306 283.195 105.382 283.792 104.767C284.388 104.151 285.226 103.843 286.305 103.843C286.665 103.843 287.015 103.89 287.356 103.983C287.697 104.077 288 104.23 288.265 104.445C288.53 104.659 288.743 104.949 288.904 105.312C289.065 105.676 289.146 106.128 289.146 106.669C289.146 106.865 289.132 107.075 289.103 107.299C289.084 107.523 289.051 107.756 289.004 107.998H284.743C284.771 108.586 284.923 109.029 285.198 109.327C285.482 109.626 285.936 109.775 286.561 109.775C286.949 109.775 287.295 109.719 287.598 109.607C287.91 109.486 288.147 109.365 288.308 109.243L288.918 110.433ZM286.277 105.298C285.794 105.298 285.434 105.443 285.198 105.732C284.97 106.012 284.833 106.39 284.786 106.865H287.427C287.465 106.362 287.385 105.975 287.186 105.704C286.996 105.434 286.694 105.298 286.277 105.298Z" fill="#003264"></path> <path d="M295.165 109.104C295.165 108.917 295.084 108.768 294.923 108.656C294.762 108.544 294.564 108.441 294.327 108.348C294.09 108.255 293.83 108.162 293.546 108.068C293.262 107.966 293.001 107.831 292.765 107.663C292.528 107.485 292.329 107.266 292.168 107.005C292.007 106.735 291.927 106.39 291.927 105.97C291.927 105.28 292.135 104.753 292.552 104.389C292.968 104.025 293.569 103.843 294.355 103.843C294.895 103.843 295.383 103.899 295.818 104.011C296.254 104.123 296.594 104.249 296.841 104.389L296.429 105.704C296.211 105.62 295.936 105.532 295.605 105.438C295.274 105.345 294.938 105.298 294.597 105.298C294.048 105.298 293.773 105.508 293.773 105.928C293.773 106.096 293.853 106.231 294.014 106.334C294.175 106.436 294.374 106.534 294.611 106.627C294.848 106.711 295.108 106.805 295.392 106.907C295.676 107.01 295.936 107.145 296.173 107.313C296.41 107.471 296.609 107.681 296.77 107.942C296.931 108.204 297.011 108.539 297.011 108.95C297.011 109.659 296.779 110.218 296.315 110.628C295.861 111.03 295.174 111.23 294.256 111.23C293.754 111.23 293.281 111.165 292.836 111.034C292.4 110.913 292.045 110.768 291.77 110.6L292.282 109.243C292.5 109.365 292.788 109.486 293.148 109.607C293.508 109.719 293.877 109.775 294.256 109.775C294.53 109.775 294.748 109.724 294.909 109.621C295.08 109.519 295.165 109.346 295.165 109.104Z" fill="#003264"></path> <path d="M302.932 109.104C302.932 108.917 302.851 108.768 302.69 108.656C302.529 108.544 302.33 108.441 302.094 108.348C301.857 108.255 301.597 108.162 301.312 108.068C301.028 107.966 300.768 107.831 300.531 107.663C300.295 107.485 300.096 107.266 299.935 107.005C299.774 106.735 299.693 106.39 299.693 105.97C299.693 105.28 299.902 104.753 300.318 104.389C300.735 104.025 301.336 103.843 302.122 103.843C302.662 103.843 303.149 103.899 303.585 104.011C304.02 104.123 304.361 104.249 304.607 104.389L304.196 105.704C303.978 105.62 303.703 105.532 303.372 105.438C303.04 105.345 302.704 105.298 302.363 105.298C301.814 105.298 301.54 105.508 301.54 105.928C301.54 106.096 301.62 106.231 301.781 106.334C301.942 106.436 302.141 106.534 302.378 106.627C302.614 106.711 302.875 106.805 303.159 106.907C303.443 107.01 303.703 107.145 303.94 107.313C304.177 107.471 304.375 107.681 304.536 107.942C304.697 108.204 304.778 108.539 304.778 108.95C304.778 109.659 304.546 110.218 304.082 110.628C303.627 111.03 302.941 111.23 302.023 111.23C301.521 111.23 301.047 111.165 300.602 111.034C300.167 110.913 299.812 110.768 299.537 110.6L300.049 109.243C300.266 109.365 300.555 109.486 300.915 109.607C301.275 109.719 301.644 109.775 302.023 109.775C302.297 109.775 302.515 109.724 302.676 109.621C302.846 109.519 302.932 109.346 302.932 109.104Z" fill="#003264"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3818 62.1698V77.5947C10.393 81.3512 11.9112 84.9506 14.6047 87.6068C17.2983 90.2631 20.9483 91.7602 24.7575 91.7712H44.6049L66.4968 0H24.7575C20.9487 0.012394 17.2995 1.50997 14.6063 4.1659C11.913 6.82183 10.3944 10.4205 10.3818 14.1765V30.4372L39.6258 15.6339V26.8016L0 46.2904L39.6258 66.0247V77.2186L10.3818 62.1698Z" fill="#01A0F6"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M305.257 62.3526V77.5947C305.246 81.3512 303.728 84.9506 301.034 87.6068C298.341 90.2631 294.691 91.7602 290.882 91.7712H249.195L271.087 0H290.892C294.7 0.0137776 298.347 1.51212 301.038 4.16805C303.729 6.82398 305.246 10.4219 305.257 14.1765V30.2544L276.374 15.6286V26.7964L315.999 46.2852L276.374 66.0195V77.2186L305.257 62.3526Z" fill="#01A0F6"></path> <path d="M220.387 22.3095C223.291 22.2962 226.165 22.8908 228.819 24.0542C231.423 25.1767 233.777 26.7936 235.748 28.8128C239.844 33.0572 242.121 38.697 242.104 44.5563V91.787H220.509V52.9975C220.509 50.3178 219.942 48.2389 219.073 46.7659C218.205 45.2928 216.372 44.5563 213.58 44.5563H199.215V91.787H177.646V22.3148L220.387 22.3095Z" fill="#003264"></path> <path d="M108.438 38.565H95.2967V61.8512C95.2967 64.463 96.0965 66.4949 97.4154 67.9366C98.7343 69.3783 100.827 70.0991 103.655 70.0991H114.81V91.8287H95.4238C92.4593 91.8535 89.5217 91.2738 86.7952 90.1259C84.1948 89.0271 81.8308 87.4493 79.8298 85.477C77.8185 83.487 76.2175 81.1313 75.1156 78.5402C73.964 75.8716 73.3765 72.9993 73.3889 70.0991V0.167236H95.2914V22.3043H108.433L108.438 38.565Z" fill="#003264"></path> <path d="M160.5 38.565H147.353V61.8512C147.353 64.463 148.153 66.4949 149.472 67.9366C150.791 69.3783 152.883 70.0991 155.712 70.0991H166.867V91.8287H147.48C144.518 91.854 141.582 91.2742 138.857 90.1259C133.581 87.9117 129.389 83.7552 127.172 78.5402C126.021 75.8716 125.433 72.9993 125.446 70.0991V0.167236H147.348V22.3043H160.495L160.5 38.565Z" fill="#003264"></path> </svg>`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/LogoSvg.astro", void 0);

const home = {
  layout: {
    title: "TTN Company",
    description: "Nuestra misión es empoderar a las empresas con soluciones SaaS innovadoras."
  },
  header: {
    btn: {
      text: "Contáctanos",
      url: "/contact"
    },
    logo: $$LogoSvg,
    nav: [
      { text: "Inicio", url: "/" },
      { text: "Nosotros", url: "/about-us" },
      { text: "Servicios", url: "/services" },
      { text: "Productos", url: "/products" },
      { text: "Trabaja con nosotros", url: "/career" }
    ]
  },
  features: {
    articles: [
      {
        badge: "Software a la medida",
        title: "Impulsa tus proyectos al futuro",
        description: "Transformamos ideas en productos digitales con impacto real. Diseñamos el software que lleva tus proyectos al siguiente nivel."
      }
    ],
    extraArticle: [
      {
        imageAlt: "referente",
        title: "Referente mundial",
        image: "https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=201429&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!wx6DM_DEdU-xCCM9RWIcqD_SKoTJitxNlGROgkRHBrBxfp_Pad4ASr7V1gId22OO%2Fitems%2F01TZZF7DMYKOZ7UCFLBMQIA5CE4IAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIzMzgzMWVjMy1jNGYwLTRmNzUtYjEwOC0yMzNkNDU2MjFjYTgiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ0NDI2ODAwIn0._9Zr-mDrM9-PmGIuAnHcHTcDPKfADREoaRTJ-sJEs_u2sW-zxXBwpdA0nDu6-2ELZjRIGOqpkhpu0KaNXKmR6eQ3omKcFCLL_OBU2bpVK9IX9ynIpC_UrQuPPSCuDDTHSX_ZdwQ44BoVI1FXOJFcjWeABLFN8mvJeWTgizSa3CFDdC-MFTE3JlFnJ2MweHHtPL5fZnZ9fnmXe0wo3eOz8HXdVbg3fhyr3x80KN-Ep1MBuL6X100eLlKePUSwHfNOl1v8BJNTGlo91MHDEY_KyqXgy4NsPoSShAvrHCl31gwQjtObsMN-LF90uSZyFpOdhu5m0Ix7nkBIr05_tLLCK68UCfRWTWkUkpu9tZSE1CR4jYiB9oYpEUd3g1Vhxg_vBtPc7uL4O_ZU2oo5-Lmmei1T8O4Vf7iFuXxBsfw_rzVW-l9Ei1jSF_yyZ7S-XiWedTHMw1hzpkWyJ9X6iSvVefbEmgQux1n2INRsMrl58rHzma16_t3Fhh3bh49lYu3J.6QHGNQ_IwBWRcs_C84vMBNBqZp_3p96ogbW5RNpcjmY%26version%3DPublished&cb=63838783772&encodeFailures=1&width=1270&height=847",
        badge: "Te entendemos mejor que nadie",
        initialDescription: "TTN Company fue creada por la",
        strongDescription: "Clínica Oftalmológica del Caribe",
        finalDescription: ", un referente en toda Latinoamérica que nos brinda un entendimiento profundo de las necesidades de las empresas de salud, y también ofrece su apoyo conjunto, funcionando como un avanzado laboratorio de pruebas para nuestra tecnología."
      }
    ],
    data: [
      {
        title: "Software que construye futuro",
        description: "Creamos soluciones digitales a medida, con arquitectura sólida, moderna y enfocada en resultados sostenibles.",
        icon: "M3 21h18M9 8h6v13H9V8zM4 21V3h4v18M16 21V10h4v11",
        color: "primary"
      },
      {
        title: "Ejecutamos tu visión",
        description: "Desde la ideación hasta el despliegue, somos tus aliados estratégicos en innovación, producto y escalabilidad.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "primary"
      },
      {
        title: "Productos que conectan",
        description: "Desarrollamos plataformas modulares y adaptables, listas para transformar la experiencia de usuarios y equipos.",
        icon: "M3 3h18v18H3z M9 9h6v6H9z",
        color: "primary"
      },
      {
        title: "Procesos que evolucionan",
        description: "Automatizamos tareas críticas y optimizamos flujos para liberar el verdadero potencial de tu operación.",
        icon: "M17 1l4 4-4 4M7 23l-4-4 4-4M14 4H3v7M10 20h11v-7",
        color: "primary"
      },
      {
        title: "Tecnología que se integra",
        description: "Unificamos tus herramientas y sistemas con integraciones limpias, estables y pensadas para escalar.",
        icon: "M8 6v12M16 6v12M12 18v-6M12 6V3",
        color: "primary"
      },
      {
        title: "Enfoque en salud digital",
        description: "Diseñamos soluciones con sensibilidad clínica y precisión técnica, centradas en pacientes y equipos médicos.",
        icon: "M12 6v6l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        color: "primary"
      }
    ]
  },
  proccess: {
    data: [
      {
        title: "Contabilidad",
        description: "Creamos una estructura de contabilidad integral para gestionar los gastos y los ingresos de tu empresa.",
        icon: "💰"
      },
      {
        title: "Asistencia",
        description: "Ofrecemos un servicio de asistencia para mejorar la eficiencia y la productividad de tu equipo.",
        icon: "💊"
      },
      {
        title: "Calidad",
        description: "Desarrollamos un sistema de calidad para garantizar la calidad de tus productos y servicios.",
        icon: "🛡️"
      },
      {
        title: "Registro",
        description: "Creamos un sistema de registro eficiente para gestionar todos los datos relevantes de tu empresa.",
        icon: "📄"
      }
    ]
  },
  testimonials: {
    badge: "Historias de clientes",
    title: "Lo que dicen nuestros clientes",
    description: "No somos nosotros quienes lo decimos. Son nuestros clientes quienes comparten cómo la tecnología de TTN transformó sus procesos.",
    data: [
      {
        content: "Esta plataforma ha transformado por completo la forma en que gestionamos nuestros proyectos. Su interfaz intuitiva y potentes funciones aumentaron nuestra productividad en más de un 40%.",
        author: "Sarah Johnson",
        position: "Gerente de Producto",
        company: "TechCorp",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      {
        content: "He probado muchas soluciones SaaS, pero esta destaca por su facilidad de uso y su conjunto de funciones tan completo. Además, el soporte al cliente es excepcional.",
        author: "Michael Chen",
        position: "CTO",
        company: "Innovate Inc.",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
      },
      {
        content: "Solo las capacidades de análisis ya valen la inversión. Hemos obtenido información valiosa que nos ha permitido optimizar operaciones y reducir costos.",
        author: "Emily Rodriguez",
        position: "Directora de Operaciones",
        company: "Global Solutions",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ]
  }
};

const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const result = await response.json();
    if (!Array.isArray(result.data)) {
      throw new Error("La respuesta no contiene un array válido en 'data'");
    }
    return result.data.map((product) => ({
      ...product,
      slug: product.nombre.toLowerCase().replace(/\s+/g, "-")
    }));
  } catch (error) {
    console.error("❌ Error en fetchProducts:", error);
    return [];
  }
};
const fetchProductDetails = async () => {
  try {
    const response = await fetch(`${API_URL}/productos-detalle`);
    if (!response.ok) {
      throw new Error(`Error al consultar productos: ${response.status}`);
    }
    const result = await response.json();
    if (result.status !== "ok" || !Array.isArray(result.data)) {
      throw new Error("Respuesta inesperada del servidor");
    }
    return result.data.map((product) => ({
      ...product,
      slug: product.producto_nombre.toLowerCase().replace(/\s+/g, "-")
    }));
  } catch (error) {
    console.error("Error en fetchProductDetails:", error);
    return [];
  }
};
const products = {
  layout: {
    title: "Productos - TTN Company",
    description: "Conoce como potencializar tu proyecto con nuestros servicios y soluciones"
  },
  heroSection: {
    img: "/banner-products.jpg",
    title: "Nuestro trabajo",
    description: "Conoce como potencializar tu proyecto con nuestros servicios y soluciones"
  },
  data: []
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

const services = {
  layout: {
    title: "Servicios - TTN Company",
    description: "Conoce como potencializarlos con nuestros servicios y soluciones"
  },
  heroSection: {
    img: "/banner-services.jpg",
    title: "Creamos software que transforma el sector salud",
    description: "Conoce como potencializarlos con nuestros servicios y soluciones"
  },
  data: [
    {
      slug: "telemedicina",
      name: "Telemedicina",
      descripcion: "Plataforma que facilita la conexión entre pacientes y profesionales de la salud para consultas médicas en tiempo real desde cualquier ubicación.",
      imagen: "https://www.ttncompany.com/static/media/TelemedicineProduct.a0f25363f864031260371afb8f357e0b.svg",
      alt: "Consulta médica en línea"
    },
    {
      slug: "phase",
      name: "Phase",
      descripcion: "Software integral diseñado para gestionar y mejorar los procesos de calidad dentro de una organización, asegurando el cumplimiento de normativas como ISO 9001.",
      imagen: "https://www.ttncompany.com/static/media/phaseProducts.159bfddc24a205ea0212124db7c9a48c.svg",
      alt: "Software de gestión de calidad"
    },
    {
      slug: "sourset",
      name: "Sourset",
      descripcion: "Solución completa para el seguimiento y gestión de los activos fijos de la empresa, optimizando la administración financiera y operativa de los recursos físicos.",
      imagen: "https://www.ttncompany.com/static/media/soursetProduct.f98b9b5f028d303ac9e1faac141fd8fe.svg",
      alt: "Administración de activos fijos"
    },
    {
      slug: "vpocket",
      name: "Vpocket",
      descripcion: "Aplicación diseñada para gestionar y monitorear el uso de tarjetas de crédito corporativas, facilitando el control financiero y la transparencia en los gastos empresariales.",
      imagen: "https://www.ttncompany.com/static/media/vPocketProduct.27a4544906379506a9814872c68f03d4.svg",
      alt: "Control de tarjetas de crédito"
    },
    {
      slug: "vacu+",
      name: "Vacu+",
      descripcion: "Sistema avanzado que automatiza las interacciones con los clientes mediante chatbots y asistentes virtuales, mejorando la eficiencia del servicio al cliente.",
      imagen: "https://www.ttncompany.com/static/media/vacuProduct.5983feca67eeeadd7c025726a13e9ea3.svg",
      alt: "Automatización de atención al cliente"
    },
    {
      slug: "biowel-asistencial",
      name: "Biowel Asistencial",
      descripcion: "Plataforma especializada en la gestión de servicios asistenciales, facilitando la coordinación de citas, órdenes médicas y seguimiento de pacientes.",
      imagen: "https://www.ttncompany.com/static/media/biowelHealthProduct.3b925cacd9b9d2a58216daee0d8ec925.svg",
      alt: "Software de asistencia y ordenamientos"
    },
    {
      slug: "biowel",
      name: "Biowel",
      descripcion: "Solución integral para la gestión administrativa y financiera de las organizaciones, proporcionando una visión completa y en tiempo real de la salud financiera de la empresa.",
      imagen: "https://www.ttncompany.com/static/media/biowelProduct.e92aa93b3fcae8aa81807c86997b4de2.svg",
      alt: "Administración y finanzas corporativas"
    }
  ]
};

const seed = {
  home,
  aboutUs,
  career,
  products,
  services
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="sticky top-0 w-full bg-white/90 dark:bg-secondary-950/90 backdrop-blur-sm z-50 py-0 transition-colors duration-300 rounded-b-3xl" data-astro-cid-3ef6ksr2> <div class="container-custom flex items-center justify-between" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" aria-label="Go to homepage" data-astro-cid-3ef6ksr2> ${renderTemplate`${renderComponent($$result, "seed.home.header.logo", seed.home.header.logo, { "data-astro-cid-3ef6ksr2": true })}`} <nav class="hidden md:flex items-center space-x-8" data-astro-cid-3ef6ksr2> ${seed.home.header.nav.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors" data-astro-cid-3ef6ksr2> ${item.text} </a>`)} </nav> <div class="flex items-center space-x-4" data-astro-cid-3ef6ksr2> ${renderTemplate`<a${addAttribute(seed.home.header.btn.url, "href")} class="md:hidden lg:inline-flex btn-primary" data-astro-cid-3ef6ksr2> ${seed.home.header.btn.text} </a>`} <!-- Mobile Menu Button and Dropdown --> <div x-data="{ open: false, showAllPages: false }" data-astro-cid-3ef6ksr2> <button @click="open = !open" class="md:hidden p-2 rounded-md text-secondary-600 hover:text-secondary-900 dark:text-secondary-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg x-show="open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute top-16 right-4 w-48 py-2 bg-white dark:bg-secondary-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" x-cloak data-astro-cid-3ef6ksr2> ${seed.home.header.nav.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800" data-astro-cid-3ef6ksr2> ${item.text} </a>`)} </div> </div> </div> </a>  </div> </header>`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = [
    {
      title: "Inicio",
      link: "/",
      links: [
        { text: "Software a la medida", url: "#features" },
        { text: "Centraliza los procesos", url: "#process-center" },
        { text: "Historias de clientes", url: "#testimonials" }
      ]
    },
    {
      title: "Product",
      links: [
        { text: "Servicios", url: "/services" },
        { text: "Pricing", url: "/pricing" },
        { text: "FAQ", url: "/faqs" },
        { text: "Changelog", url: "/changelog" },
        { text: "Integrations", url: "/integrations" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "/blog" },
        { text: "Case Studies", url: "/case-study" },
        { text: "404 Page", url: "/404" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-16 pb-8"> <div class="container-custom"> <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> <div class="md:col-span-2 lg:col-span-2"> <a href="/" class="flex items-center mb-6" aria-label="Go to homepage"> <span class="ml-2 text-xl font-display font-semibold text-white">Ttn Company</span> </a> <p class="text-gray-400 mb-6 max-w-md">
Modernizamos los procesos de clínicas y hospitales en todo el mundo a
          través del desarrollo de software y tecnología
</p> <div class="flex space-x-4 items-center"> <!-- LinkedIn --> <a href="https://www.linkedin.com/company/ttn-company/" class="text-gray-400 hover:text-primary-400 transition-colors w-6 h-6 flex items-center justify-center" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <!-- Instagram --> <a href="https://www.instagram.com/ttncompany_col/" class="text-gray-400 hover:text-primary-400 transition-colors w-6 h-6 flex items-center justify-center" aria-label="Instagram" target="_blank" rel="noopener noreferrer"> <svg class="w-6 h-6 scale-125" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path> </svg> </a> </div> </div> ${footerLinks.map((column) => renderTemplate`<div> <a${addAttribute(column.link, "href")}> <h3 class="text-lg font-semibold mb-4">${column.title}</h3> </a> <ul class="space-y-2"> ${column.links.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-gray-400 hover:text-primary-400 transition-colors"> ${link.text} </a> </li>`)} </ul> </div>`)} </div> <div class="border-t border-gray-800 pt-8 mt-8"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-400 text-sm mb-4 md:mb-0">
&copy; ${currentYear} Ttn Company. Todos los derechos reservados.
</p> <div class="flex space-x-6"> <a target="_blank"${addAttribute("/politica_de_privacidad.pdf", "href")} class="text-gray-400 hover:text-primary-400 text-sm transition-colors">Politica de privacidad</a> <a target="_blank"${addAttribute("#", "href")} class="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terminos de servicio</a> <a target="_blank"${addAttribute("", "href")} class="text-gray-400 hover:text-primary-400 text-sm transition-colors">Politica de cookies</a> </div> </div> </div> </div> </footer>`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/Footer.astro", void 0);

export { $$Layout as $, API_URL_SEND_EMAIL as A, JOB_EMAIL as J, $$Header as a, $$Footer as b, fetchProducts as c, ADMIN_EMAIL as d, fetchVacantes as e, fetchProductDetails as f, seed as s };
