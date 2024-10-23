import { a as createComponent, r as renderTemplate, f as addAttribute, g as renderHead, b as renderComponent, h as renderSlot, d as createAstro, m as maybeRenderHead } from './astro/server_yLXyv676.mjs';
import 'kleur/colors';
import { S as SITE, a as $$Navbar, g as getCollection } from './_astro_content_4AvdQFY2.mjs';
import { $ as $$Image } from './_astro_assets_BQNE7wTa.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html${addAttribute(SITE.SITE_LANGUAGE, "lang")}> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <nav class="px-4 py-4"> ${renderComponent($$result, "Navbar", $$Navbar, {})} </nav> <main class="px-4 py-4"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$JobPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JobPostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/jobs/${post.slug}`, "href")}> <section class="border py-4 px-4 flex flex-row gap-4 w-10/12 m-auto rounded-xl justify-between hover:border-orange-500 cursor-pointer my-4 hover:scale-105 transition-all"> <div class="flex flex-row"> ${renderComponent($$result, "Image", $$Image, { "src": "https://images.unsplash.com/photo-1688998366942-522bf43ebfef?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "Job Post Image", "width": 55, "height": 100, "class": "border rounded-full" })} <div class="px-4"> <span> <h1 class="text-lg font-semibold">${post.data.title}</h1> <span class="flex gap-2"> <p class="text-accent">${post.data.company}</p> <span> - </span> ${post.data.tags.map((tag) => renderTemplate`<span class="border px-2 rounded-full bg-orange-50 border-orange-500 text-orange-500">${tag}</span>`)} </span> </span> </div> </div> <span class="content-center hover:scale-105 transition-all"> <a${addAttribute(`/jobs/${post.slug}`, "href")} class="px-4 py-3 rounded-md bg-accent text-white ">
Aplicar ahora
</a> </span> </section> </a>`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/components/JobPostCard.astro", void 0);

const $$JobsList = createComponent(async ($$result, $$props, $$slots) => {
  const jobPosts = await getCollection("jobs");
  return renderTemplate`${maybeRenderHead()}<section> ${jobPosts.map((post) => renderTemplate`${renderComponent($$result, "JobPostCard", $$JobPostCard, { "post": post })}`)} </section>`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/components/JobsList.astro", void 0);

export { $$JobsList as $, $$Layout as a };
