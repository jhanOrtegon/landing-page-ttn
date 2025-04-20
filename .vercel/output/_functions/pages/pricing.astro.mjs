/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_F_V9oUFR.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Dk_HChlO.mjs';
import 'clsx';
import { $ as $$Newsletter } from '../chunks/Newsletter_PDf1rTz3.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_DdUA0mpH.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing$1 = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "24/7 email support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "primary"
    },
    {
      name: "Professional",
      price: 79,
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Team collaboration tools"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "secondary"
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "500GB storage",
        "Enterprise analytics",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced security features",
        "Custom branding"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "accent"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="section bg-gray-50 dark:bg-gray-800/50"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="inline-block px-4 py-1 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300 font-medium text-sm mb-4">
Pricing Plans
</span> <h2 class="mb-6 text-accent-500 dark:text-white">
Simple, Transparent Pricing
</h2> <p class="text-accent-500 dark:text-gray-300">
Choose the plan that works best for your business. All plans include a
        14-day free trial.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${plans.map((plan, index) => renderTemplate`<div${addAttribute(`card p-6 border ${plan.popular ? `border-${plan.color}-500 dark:border-${plan.color}-400` : "border-gray-200 dark:border-gray-700"} slide-up relative`, "class")}${addAttribute(`animation-delay: ${index * 150}ms`, "style")}> ${plan.popular && renderTemplate`<div${addAttribute(`absolute top-0 right-0 bg-${plan.color}-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg`, "class")}>
Most Popular
</div>`} <h3 class="text-xl font-semibold mb-2 text-accent-500 dark:text-white"> ${plan.name} </h3> <div class="mb-4"> <span class="text-4xl font-bold text-accent-500 dark:text-white">
$${plan.price} </span> <span class="text-gray-500 dark:text-gray-400">/month</span> </div> <p class="text-accent-500 dark:text-gray-300 mb-6"> ${plan.description} </p> <ul class="space-y-3 mb-8"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start"> <svg${addAttribute(`w-5 h-5 text-${plan.color}-500 mr-2 flex-shrink-0 mt-0.5`, "class")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-accent-500 dark:text-gray-300"> ${feature} </span> </li>`)} </ul> <a href="#signup"${addAttribute(`w-full btn ${plan.popular ? `bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white focus:ring-${plan.color}-500` : "btn-outline"}`, "class")}> ${plan.cta} </a> </div>`)} </div> <div class="mt-12 text-center"> <p class="text-accent-500 dark:text-gray-300 mb-2">
Need a custom plan for your specific needs?
</p> <a href="/contact" class="text-primary-600 dark:text-primary-400 font-medium hover:underline">Contact our sales team</a> </div> </div> </section>`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/components/Pricing.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing - Ttn Company" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Simple, Transparent Pricing", "highlightText": "Pricing", "description": "Choose the plan that works best for your business. All plans include a 14-day free trial with no credit card required." })} ${renderComponent($$result2, "PricingCmp", $$Pricing$1, {})} ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/pricing.astro", void 0);

const $$file = "C:/Users/Jhankee/OneDrive/Desktop/Nueva carpeta/Nueva carpeta/landing-page-ttn/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
