

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ms-course/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.YdV3DV5E.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.exryL9J8.js"];
export const stylesheets = ["_app/immutable/assets/3.xEA4IIv1.css"];
export const fonts = [];
