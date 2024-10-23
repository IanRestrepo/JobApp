/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_yLXyv676.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$JobsList, a as $$Layout } from '../chunks/JobsList_DwKhcKLE.mjs';
import { $ as $$Footer } from '../chunks/_astro_content_4AvdQFY2.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSearch = createComponent(($$result, $$props, $$slots) => {
  const SHORTCUTS = [
    {
      label: "\u{1F331}  Sin experiencia",
      href: "/"
    },
    {
      label: "\u{1F5D3}\uFE0F  Findes",
      href: "/"
    },
    {
      label: "\u{1F552}  Media jornada",
      href: "/"
    },
    {
      label: "\u{1F4BC}  Pr\xE1cticas",
      href: "/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-accent/20 my-10 rounded-3xl px-4 py-6"> <h1 class="text-black/80 font-semibold tracking-[0.35px] text-2xl text-center pb-4 sm:text-4xl lg:hidden">
Tu carrera empieza aquí
</h1> <h1 class="hidden text-accent/80 font-semibold tracking-[0.35px] text-2xl text-center pb-4 sm:text-4xl lg:pb-8 lg:block">
Conecta tus estudios con el empleo ideal
</h1> <search class="bg-white rounded-3xl py-4 px-1 lg:mx-10 border hover:border-orange-500  transition-all"> <form id="hero-form" class="mx-5 lg:flex lg:justify-between"> <div class="content-center w-1/2"> <input type="text" name="que-buscas" id="que-buscas" placeholder="¿Que trabajo buscas?" class="w-full px-4 py-2 rounded-md outline-none transition-all text-orange-500 placeholder:text-orange-300 hover:placeholder:text-orange-500 focus:placeholder:text-orange-300"> </div> <button class="rounded-md text-lg font-medium bg-accent hover:saturate-150 transition text-white px-4 py-2  justify-center items-center ">
Buscar ofertas
</button> </form> </search> <footer> <h5 class="text-center pt-8 pb-4">Explora trabajos que se <span class="text-accent font-semibold">adaptan a ti</span></h5> <div class="flex flex-wrap gap-4 justify-around lg:justify-center"> ${SHORTCUTS.map(({ label, href }) => renderTemplate`<a class="bg-white rounded-full p-4 lg:px-6 shadow-sm text-primary transition hover:scale-105  hover:bg-primary"${addAttribute(href, "href")}> ${label} </a>`)} </div> </footer> </section>`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/components/HeroSearch.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSearch", $$HeroSearch, {})} ${renderComponent($$result2, "JobsList", $$JobsList, {})} ` })} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
