

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5koGbl3S.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.exryL9J8.js"];
export const stylesheets = ["_app/immutable/assets/2.d-Bw0tzG.css"];
export const fonts = [];
