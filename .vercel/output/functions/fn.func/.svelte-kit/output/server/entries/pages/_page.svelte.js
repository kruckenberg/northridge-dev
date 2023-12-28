import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-5da0hb{display:flex;flex-direction:column;align-items:center;justify-content:center}img.svelte-5da0hb{width:auto}h1.svelte-5da0hb{font-weight:600;font-size:3.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-5da0hb"><h1 class="svelte-5da0hb">${escape("Northridge Devs".toUpperCase())}</h1> <img src="/northridge-dev.webp" alt="Northridge Devs Banner" class="svelte-5da0hb"> </main>`;
});
export {
  Page as default
};
