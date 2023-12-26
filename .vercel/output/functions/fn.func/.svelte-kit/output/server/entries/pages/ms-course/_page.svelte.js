import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "h1.svelte-d0y8ps{padding-top:1rem;padding-bottom:1rem;font-weight:600;font-size:2.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-d0y8ps" data-svelte-h="svelte-wsdtnm">Middle School Python Game Dev</h1>`;
});
export {
  Page as default
};
