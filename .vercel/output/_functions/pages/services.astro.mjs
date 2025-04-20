/* empty css                                    */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
import { $ as $$Layout, s as seed, a as $$Header, b as $$Footer } from '../chunks/Footer_Dk_HChlO.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_DdUA0mpH.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seed.services.layout.title, "description": seed.services.layout.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "img": seed.services.heroSection.img, "title": seed.services.heroSection.title, "description": seed.services.heroSection.description })} <section class="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"> <div class="mx-auto px-6"> <h2 class="text-4xl md:text-5xl font-extrabold text-accent-500 dark:text-white text-center mb-20">
Servicios y soluciones
</h2> <div class="space-y-14"> <!-- Bloque 1 --> <div class="flex flex-col lg:flex-row items-center gap-16 justify-center"> <img src="/development-amico.svg" alt="Desarrollo de software" class="max-w-sm w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"> <div class="lg:w-1/2 text-left"> <h3 class="text-3xl font-semibold text-accent-500 dark:text-white mb-4">
Desarrollo de software
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
Llevamos el desarrollo a otro nivel con aplicaciones web 100%
                funcionales, seguras y personalizadas para cada cliente. Nuestro
                enfoque combina diseño centrado en el usuario, arquitectura
                escalable y las mejores prácticas en desarrollo ágil.
<br> <br>
Creamos soluciones tecnológicas que resuelven retos reales del sector
                salud, automatizando procesos complejos, reduciendo tiempos operativos
                y mejorando la trazabilidad de la información. <br> <br>Desde plataformas para atención clínica hasta sistemas
                administrativos, cada producto que desarrollamos está pensado
                para escalar, integrarse fácilmente con otros sistemas y ofrecer
                una experiencia de uso fluida e intuitiva.
</p> </div> </div> <!-- Bloque 2 --> <div class="flex flex-col-reverse lg:flex-row items-center gap-12 justify-center"> <div class="lg:w-1/2 text-left lg:text-right"> <h3 class="text-3xl font-semibold text-accent-500 dark:text-white mb-4">
Socios en ejecución
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
No solo creamos productos, nos convertimos en aliados
                estratégicos. Acompañamos a nuestros clientes en todo el ciclo
                del proyecto: desde la conceptualización y validación de la
                idea, hasta el desarrollo, la implementación y la evolución
                post-lanzamiento. <br><br>
Nuestra metodología está basada en la colaboración continua, la
                escucha activa y la adaptabilidad. No solo entregamos
                soluciones: construimos relaciones a largo plazo que generan
                valor tangible.
<br><br>
Porque el verdadero éxito no es solo lanzar un producto, sino hacerlo
                crecer con propósito.
</p> </div> <img src="/development-bro.svg" alt="Socios en ejecución" class="max-w-sm w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"> </div> <!-- Bloque 3 --> <div class="flex flex-col lg:flex-row items-center gap-12 justify-center"> <img src="/team work-bro.svg" alt="Diseñamos productos" class="max-w-sm w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"> <div class="lg:w-1/2 text-justify"> <h3 class="text-3xl font-semibold text-accent-500 dark:text-white mb-4">
Diseñamos productos
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
Nuestro equipo de UX/UI convierte ideas en productos
                funcionales, intuitivos y visualmente atractivos. <br><br>
Diseñamos con propósito, entendiendo a fondo las necesidades del
                usuario final y alineando cada decisión visual y de experiencia
                con los objetivos del negocio. <br><br>
Desde wireframes hasta sistemas de diseño completos, construimos
                experiencias digitales coherentes, accesibles y memorables que
                elevan la percepción de tu producto en cada interacción.
</p> </div> </div> </div> </div> </section> <section class="py-20 bg-gray-100 dark:bg-gray-900"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center text-accent-500 dark:text-white mb-12">
Conoce un poco más de nuestros productos
</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16"> ${seed.services.data.map((servicio) => renderTemplate`<a class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-500 cursor-pointer"${addAttribute(`/products/${servicio.slug}`, "href")}> <img${addAttribute(servicio.imagen, "src")}${addAttribute(servicio.alt, "alt")} class="w-full h-48 object-cover"> <div class="p-6 text-left"> <h3 class="text-xl font-semibold text-accent-500 dark:text-white mb-2"> ${servicio.name} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"> ${servicio.descripcion} </p> </div> </a>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/services.astro", void 0);

const $$file = "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
