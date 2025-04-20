import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent, F as Fragment } from './astro/server_F_V9oUFR.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    highlightText,
    description,
    img,
    tags = [],
    illustration,
    logo = ""
  } = Astro2.props;
  let titleStart = title;
  let titleEnd = "";
  if (highlightText) {
    const titleParts = title.split(highlightText);
    if (titleParts.length > 1) {
      titleStart = titleParts[0];
      titleEnd = titleParts[1];
    }
  }
  const backgroundStyle = img ? `url('${img}')` : `linear-gradient(to bottom, #dbeafe 0%, 45%, #ffffff 100%)`;
  const isContactTag = tags.includes("contact");
  return renderTemplate`${isContactTag ? renderTemplate`<!-- ✅ Vista especial de contacto -->
  ${maybeRenderHead()}<section class="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center px-4 text-center bg-[#f5f9ff]"><div class="max-w-2xl"><h1 class="text-4xl md:text-5xl font-bold text-primary-600 mb-6">${title}</h1><p class="text-lg text-gray-600 mb-10">${description}</p><div class="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7832.8113160570365!2d-74.820956!3d11.00816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42dae88a770f7%3A0x49e99a8cc8891029!2sViva%20Centro%20Comercial!5e0!3m2!1ses!2sco!4v1744320638865!5m2!1ses!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación Viva Barranquilla"></iframe></div></div></section>` : img ? renderTemplate`<!-- ✅ Hero con imagen de fondo -->
    <section class="relative w-full bg-cover bg-center min-h-[calc(100vh-90px)]"${addAttribute({ backgroundImage: backgroundStyle }, "style")}><div class="absolute inset-0 bg-black/60 backdrop-blur-[3px] z-0"></div><div class="relative z-10 flex items-center justify-center h-full px-4 text-center min-h-[calc(100vh-150px)]"><div class="max-w-4xl text-white fade-in-on-scroll translate-y-10"><h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">${highlightText ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${titleStart}<span class="text-accent-500">${highlightText}</span>${titleEnd}` })}` : title}</h1><p class="text-lg md:text-xl text-gray-200 mt-2">${description}</p></div></div></section>` : renderTemplate`<!-- ✅ Hero sin imagen de fondo -->
    <section class="min-h-[calc(100vh-90px)] flex items-center px-6 md:px-12" style="background: linear-gradient(
        to bottom left,
        #E1F5FF 0%,
        #E1F5FF 40%,
        #f7fafe 60%,
        #ffffff 100%
      );"><div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center"><div>${logo && renderTemplate`<img${addAttribute(logo, "src")} alt="Biowel logo" class="w-[22rem] mb-8">`}<h1 class="text-4xl md:text-5xl font-bold text-primary-500 mb-8 leading-tight">${highlightText ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${titleStart}<span class="text-accent-500">${highlightText}</span>${titleEnd}` })}` : title}</h1><p class="text-lg text-gray-700 mb-6">${description}</p><div class="flex flex-wrap gap-3">${tags.map((tag) => renderTemplate`<span class="bg-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full">${tag}</span>`)}</div></div>${illustration && renderTemplate`<div class="hidden md:block w-full rounded-xl overflow-hidden"><img${addAttribute(illustration, "src")} alt="Illustration" class="w-full"></div>`}</div></section>`}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/HeroSection.astro", void 0);

export { $$HeroSection as $ };
