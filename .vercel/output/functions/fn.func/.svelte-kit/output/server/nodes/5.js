

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hs-course/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.33Dp8mdI.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.exryL9J8.js"];
export const stylesheets = ["_app/immutable/assets/3.xEA4IIv1.css"];
export const fonts = [];
