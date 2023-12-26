import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: ".new-log-container.svelte-3ktj70{width:70%;padding:2rem;display:flex;flex-direction:column;justify-content:center;font-weight:500;font-size:1.5rem}label.svelte-3ktj70{display:block;margin-bottom:1rem}textarea.svelte-3ktj70{width:50%;font-family:'Quicksand';font-size:1.25rem;color:rgb(255, 255, 255);background-color:rgb(10, 10, 10, 0.8);padding:0.75rem;border-radius:0.4rem;border:1px solid #000}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="new-log-container svelte-3ktj70"><p>${escape((/* @__PURE__ */ new Date()).toDateString())}</p> <form method="POST" data-svelte-h="svelte-fhkeof"><label for="accomplished" class="svelte-3ktj70">What did you accomplish today?</label> <textarea name="accomplished" id="accomplished" rows="5" class="svelte-3ktj70"></textarea></form> </div>`;
});
export {
  Page as default
};
