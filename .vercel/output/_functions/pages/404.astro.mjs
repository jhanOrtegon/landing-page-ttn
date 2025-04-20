/* empty css                                    */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Dk_HChlO.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found - Sassify" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <section class="py-20 md:py-32"> <div class="container-custom text-center"> <h1 class="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-8">
404
</h1> <h2 class="text-3xl md:text-4xl font-bold text-accent-500 dark:text-white mb-4">
Pagina no encontrada
</h2> <p class="text-xl text-accent-500 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
Es posible que la página que buscas haya sido eliminada, haya cambiado
          de nombre o no esté disponible temporalmente.
</p> <div class="flex justify-center gap-4 flex-wrap"> <a href="/" class="btn-primary"> Ir a inicio </a> <a href="/contact" class="btn-secondary"> Contactar con soporte </a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/404.astro", void 0);

const $$file = "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
