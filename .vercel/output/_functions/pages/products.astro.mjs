/* empty css                                    */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
import { c as fetchProducts, s as seed, $ as $$Layout, b as $$Footer, a as $$Header } from '../chunks/Footer_Dk_HChlO.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_DdUA0mpH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const products = await fetchProducts();
  seed.products.data = products;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seed.products.layout.title, "description": seed.products.layout.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "img": seed.products.heroSection.img, "title": seed.products.heroSection.title, "description": seed.products.heroSection.description })} <section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="mb-24"> <div class="grid gap-12 mb-12"> ${seed.products.data.map((product, index) => renderTemplate`<div class="grid md:grid-cols-2 gap-12 items-center mb-12"> ${index % 2 === 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<div> <span class="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 font-medium text-sm mb-4"> ${product.categor\u00EDa} </span> <h2 class="text-3xl font-bold text-accent-500 dark:text-white mb-4"> ${product.titulo} </h2> <p class="text-accent-500 dark:text-gray-300 mb-6"> ${product.descripci\u00F3n} </p> <div class="flex flex-wrap gap-4 mb-6"> ${product.carasteristicas.map((subservice) => renderTemplate`<div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-width="2" stroke-linejoin="round" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300"> ${subservice} </span> </div>`)} </div> <a${addAttribute(`/products/${product.slug}`, "href")} class="btn-primary">
Conoce más
</a> </div> <div${addAttribute(`rounded-lg overflow-hidden flex flex-col gap-8`, "class")}> <img${addAttribute("logotipo", "alt")}${addAttribute(product.imagen_nombre_principal, "src")} class="w-1/2 h-8 m-auto"> <img${addAttribute(product.imagen_principal, "src")}${addAttribute("imagen de fondo del producto", "alt")} class="w-full h-full"> </div> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<div${addAttribute(`rounded-lg overflow-hidden flex flex-col gap-8`, "class")}> <img${addAttribute("logotipo", "alt")}${addAttribute(product.imagen_nombre_principal, "src")} class="w-1/2 h-8 m-auto"> <img${addAttribute(product.imagen_principal, "src")}${addAttribute("imagen de fondo del producto", "alt")} class="w-full h-full"> </div> <div> <span class="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 font-medium text-sm mb-4"> ${product.categor\u00EDa} </span> <h2 class="text-3xl font-bold text-accent-500 dark:text-white mb-4"> ${product.nombre} </h2> <p class="text-accent-500 dark:text-gray-300 mb-6"> ${product.descripci\u00F3n} </p> <div class="flex flex-wrap gap-4 mb-6"> ${product.carasteristicas.map((subservice, i) => renderTemplate`<div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300"> ${subservice} </span> </div>`)} </div> <a class="btn-primary"${addAttribute(`/products/${product.slug}`, "href")}>
Conoce más
</a> </div> ` })}`} </div>`)} </div> </div> </div> </section> </main> ` })} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/products/index.astro", void 0);

const $$file = "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
