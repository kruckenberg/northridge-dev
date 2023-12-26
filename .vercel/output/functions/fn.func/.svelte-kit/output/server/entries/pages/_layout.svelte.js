import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".logo.svelte-19yy874.svelte-19yy874{font-family:monospace;font-size:1.5rem;font-weight:600;margin:1rem 1rem}.nav-bar.svelte-19yy874.svelte-19yy874{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.nav-bar.svelte-19yy874 a.svelte-19yy874{margin:1rem 1rem;text-decoration:none;font-size:1.5rem;color:#000}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="nav-bar svelte-19yy874" data-svelte-h="svelte-6gfq26"><p class="logo svelte-19yy874"><a href="/" class="svelte-19yy874">$nrp-dev</a></p> <a href="/ms-course" class="svelte-19yy874">ms course</a> <a href="/hs-course" class="svelte-19yy874">hs course</a> <a href="/dev-log" class="svelte-19yy874">dev log</a> <a href="/dev-log/new" class="svelte-19yy874">add dev log</a></div> <hr> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
