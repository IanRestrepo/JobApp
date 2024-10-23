/* empty css                                    */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, b as renderComponent, d as createAstro, u as unescapeHTML, F as Fragment, h as renderSlot } from '../../chunks/astro/server_yLXyv676.mjs';
import 'kleur/colors';
import { S as SITE, g as getCollection, a as $$Navbar, $ as $$Footer } from '../../chunks/_astro_content_4AvdQFY2.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const icons = {"local":{"prefix":"local","lastModified":1729666765,"icons":{"company-icon":{"body":"<path fill=\"none\" d=\"M21 18h-2v-8h-6v8h-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm-4-2h-2v2h2Zm0-4h-2v2h2Z\"/><path fill=\"#F15757\" d=\"M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13 11.013 11.013 0 0 0 16 2m1 16h-2v-2h2Zm0-4h-2v-2h2Zm4 4h-2v-8h-6v8h-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z\"/>","width":32,"height":32},"location-icon":{"body":"<path fill=\"#F15757\" d=\"M12 11.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7\"/>"},"money-icon":{"body":"<path fill=\"#F15757\" fill-rule=\"evenodd\" d=\"M22 12c0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M12 7.25a.75.75 0 0 1 .75.75v.01c1.089.275 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417 0 1.19-.911 2.049-2 2.323V16a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417 0-1.19.911-2.048 2-2.323V8a.75.75 0 0 1 .75-.75\" clip-rule=\"evenodd\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html${addAttribute(SITE.SITE_LANGUAGE, "lang")}> <meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title> ${maybeRenderHead()}<body class=""> <main class="w-1/2 text-justify m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const jobPosts = await getCollection("jobs");
  return jobPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${maybeRenderHead()}<nav class="px-4 py-4"> ${renderComponent($$result, "Navbar", $$Navbar, {})} </nav> <section class="px-5 content-center"> <h1 class="text-center">${post.data.title} - ${post.data.company}</h1> <div class="flex gap-10 justify-center border w-1/2 m-auto px-4 py-4 my-20 bg-orange-50/20 border-orange-500 rounded-md"> <span class="border flex-col px-4 py-2 rounded-lg"> <span class="flex justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "company-icon", "width": 40, "height": 40 })} </span> <span> <p class="text-center m-0 font-medium">Company: <br> <span class="text-orange-500 font-normal">${post.data.company}</span></p> </span> </span> <span class="border flex-col px-4 py-2 rounded-lg"> <span class="flex justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "money-icon", "width": 40, "height": 40 })} </span> <span> <p class="text-center m-0 font-medium">Salary: <br> $<span class="text-orange-500 font-normal">${post.data.salary}</span> /year</p> </span> </span> <span class="border flex-col px-4 py-2 rounded-lg"> <span class="flex justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "location-icon", "width": 40, "height": 40 })} </span> <span> <p class="text-center m-0 font-medium">Based in: <br> <span class="text-orange-500 font-normal">${post.data.isRemote && !post.data.basedIn ? "Remote" : post.data.basedIn}</span></p> </span> </span> </div> ${renderComponent($$result, "PostLayout", $$PostLayout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} <section class="flex flex-col items-center"> <h1>Esta podria ser tu oportunidad...</h1> <button class="py-1 px-4 rounded-md  m-auto bg-accent text-white w-1/2 font-bold text-2xl hover:scale-105 transition-all">
Aplicar Ahora
</button> </section> ` })}</section> ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/jobs/[...slug].astro", void 0);

const $$file = "C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/jobs/[...slug].astro";
const $$url = "/jobs/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
