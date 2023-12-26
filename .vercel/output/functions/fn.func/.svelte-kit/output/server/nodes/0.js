

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.sZt7Mf3y.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.exryL9J8.js"];
export const stylesheets = ["_app/immutable/assets/0.oQ1G1PYZ.css"];
export const fonts = [];
