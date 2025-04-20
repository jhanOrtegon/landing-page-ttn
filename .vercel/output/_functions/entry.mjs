import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_cRoyrx5O.mjs';
import { manifest } from './manifest_DssOrISu.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/career.astro.mjs');
const _page6 = () => import('./pages/changelog.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/faqs.astro.mjs');
const _page9 = () => import('./pages/integrations.astro.mjs');
const _page10 = () => import('./pages/pricing.astro.mjs');
const _page11 = () => import('./pages/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/products/_slug_.astro.mjs');
const _page13 = () => import('./pages/products.astro.mjs');
const _page14 = () => import('./pages/reviews.astro.mjs');
const _page15 = () => import('./pages/services.astro.mjs');
const _page16 = () => import('./pages/terms-conditions.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/career.astro", _page5],
    ["src/pages/changelog.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/faqs.astro", _page8],
    ["src/pages/integrations.astro", _page9],
    ["src/pages/pricing.astro", _page10],
    ["src/pages/privacy-policy.astro", _page11],
    ["src/pages/products/[slug].astro", _page12],
    ["src/pages/products/index.astro", _page13],
    ["src/pages/reviews.astro", _page14],
    ["src/pages/services.astro", _page15],
    ["src/pages/terms-conditions.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "90fcaad7-568d-4d0f-824d-a305d0de6385",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
