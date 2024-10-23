import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DEMiqCI6.mjs';
import { manifest } from './manifest_3qHVJfh3.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/jobs.astro.mjs');
const _page2 = () => import('./pages/jobs/_---slug_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/jobs/index.astro", _page1],
    ["src/pages/jobs/[...slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2eab7756-3616-4e1c-be63-d14a6b4fba2a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
