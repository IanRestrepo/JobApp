import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CgSmvVQU.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_yLXyv676.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ian%20Restrepo/Desktop/dev/project-static-site-generation/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CQLn7jVn.css"}],"routeData":{"route":"/jobs","isIndex":true,"type":"page","pattern":"^\\/jobs\\/?$","segments":[[{"content":"jobs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/jobs/index.astro","pathname":"/jobs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CQLn7jVn.css"},{"type":"inline","content":"h1{padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.875rem;line-height:2.25rem;font-weight:700;--tw-text-opacity: 1;color:rgb(249 115 22 / var(--tw-text-opacity))}h2{padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.5rem;line-height:2rem;font-weight:600;--tw-text-opacity: 1;color:rgb(249 115 22 / var(--tw-text-opacity))}h3{padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(249 115 22 / var(--tw-text-opacity))}p{padding-top:1.25rem;padding-bottom:1.25rem}pre{margin-top:1.25rem;margin-bottom:1.25rem;border-radius:.5rem;padding:1rem}\n"}],"routeData":{"route":"/jobs/[...slug]","isIndex":false,"type":"page","pattern":"^\\/jobs(?:\\/(.*?))?\\/?$","segments":[[{"content":"jobs","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/jobs/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CQLn7jVn.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/jobs/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/components/JobsList.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/jobs/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/pages/jobs/[...slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/jobs/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/jobs/index@_@astro":"pages/jobs.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/jobs/[...slug]@_@astro":"pages/jobs/_---slug_.astro.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/content/jobs/DiseñadorUi.mdx?astroContentCollectionEntry=true":"chunks/DiseñadorUi_SZ3YJULG.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/content/jobs/PrimerTrabajo.md?astroContentCollectionEntry=true":"chunks/PrimerTrabajo_CSqZE7aX.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/content/jobs/DiseñadorUi.mdx?astroPropagatedAssets":"chunks/DiseñadorUi_PRdG-cK9.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/content/jobs/PrimerTrabajo.md?astroPropagatedAssets":"chunks/PrimerTrabajo_BfOfi171.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/content/jobs/DiseñadorUi.mdx":"chunks/DiseñadorUi_VIcy7fDK.mjs","C:/Users/Ian Restrepo/Desktop/dev/project-static-site-generation/src/content/jobs/PrimerTrabajo.md":"chunks/PrimerTrabajo_BtwtHcxx.mjs","\u0000@astrojs-manifest":"manifest_3qHVJfh3.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CQLn7jVn.css","/favicon.svg","/logo.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"XWSJsYlg4rNqq/qbFHyDiIkMRs2coCa0VmmPBBi0FKw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
