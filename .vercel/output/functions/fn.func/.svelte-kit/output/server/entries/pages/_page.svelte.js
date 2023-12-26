import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-19s1z67{display:flex;flex-direction:column;align-items:center;justify-content:center}img.svelte-19s1z67{width:auto;height:70%}h1.svelte-19s1z67{font-weight:600;font-size:3.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-19s1z67"><h1 class="svelte-19s1z67">${escape("Northridge Devs".toUpperCase())}</h1> <img src="/northridge-dev.png" alt="Northridge Devs Banner" class="svelte-19s1z67"> </main>`;
});
export {
  Page as default
};
