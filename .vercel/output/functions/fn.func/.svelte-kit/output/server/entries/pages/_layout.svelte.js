import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".logo.svelte-1n5lg13.svelte-1n5lg13{font-family:monospace;font-size:1.5rem;font-weight:600;margin:1rem 1rem}.nav-bar.svelte-1n5lg13.svelte-1n5lg13{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.nav-bar.svelte-1n5lg13 a.svelte-1n5lg13{margin:1rem 1rem;text-decoration:none;font-size:1.5rem;color:#000}.bordered.svelte-1n5lg13.svelte-1n5lg13{padding:0.5rem 1rem;border:1px solid #000;border-radius:5px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="nav-bar svelte-1n5lg13" data-svelte-h="svelte-unkfmh"><p class="logo svelte-1n5lg13"><a href="/" class="svelte-1n5lg13"><img src="/logo.png" alt="logo" width="50" height="50"></a></p> <a href="/game-dev" class="svelte-1n5lg13">game dev course</a> <a href="/dev-log" class="svelte-1n5lg13">dev log</a> <a href="/dev-log/new" class="bordered svelte-1n5lg13">+ dev log</a></div> <hr> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
