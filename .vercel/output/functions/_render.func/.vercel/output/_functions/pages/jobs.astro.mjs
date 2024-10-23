/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent, d as createAstro } from '../chunks/astro/server_yLXyv676.mjs';
import 'kleur/colors';
import { $ as $$JobsList, a as $$Layout } from '../chunks/JobsList_DwKhcKLE.mjs';
import { $ as $$Footer } from '../chunks/_astro_content_4AvdQFY2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JobsList", $$JobsList, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/jobs/index.astro", void 0);

const $$file = "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/jobs/index.astro";
const $$url = "/jobs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
